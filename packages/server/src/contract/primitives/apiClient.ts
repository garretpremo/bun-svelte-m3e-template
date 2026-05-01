import type { z } from "zod";
import type { RouteDefinition } from "./defineRoute";

type RouteRegistry = Record<string, Record<string, RouteDefinition<any, any, any, any>>>;

/**
 * Loose input shape. Output is strictly typed via `z.infer<response>`, but
 * inputs use plain records so callers don't have to satisfy complex generics
 * over optional zod params. The server still validates with zod at runtime.
 */
export interface ApiInput {
  params?: Record<string, string | number>;
  query?: Record<string, unknown>;
  body?: unknown;
}

type Output<R extends RouteDefinition<any, any, any, any>> = R extends RouteDefinition<any, any, any, infer TR>
  ? z.infer<TR>
  : never;

export type ApiClient<TRoutes extends RouteRegistry> = {
  [G in keyof TRoutes]: {
    [N in keyof TRoutes[G]]: (input?: ApiInput) => Promise<Output<TRoutes[G][N]>>;
  };
};

export interface ApiClientOptions {
  baseUrl: string;
  getAuthToken?: () => string | undefined;
  fetchImpl?: typeof fetch;
}

export function createApiClient<TRoutes extends RouteRegistry>(
  routes: TRoutes,
  options: ApiClientOptions,
): ApiClient<TRoutes> {
  const fetchImpl = options.fetchImpl ?? globalThis.fetch.bind(globalThis);
  const client = {} as ApiClient<TRoutes>;

  for (const groupName of Object.keys(routes) as Array<keyof TRoutes>) {
    const group = routes[groupName] as Record<string, RouteDefinition<any, any, any, any>>;
    const handlers: Record<string, (input?: any) => Promise<any>> = {};
    for (const routeName of Object.keys(group)) {
      const route = group[routeName]!;
      handlers[routeName] = async (input?: { params?: Record<string, string>; query?: Record<string, unknown>; body?: unknown }) => {
        let path = route.path;
        if (input?.params) {
          for (const [k, v] of Object.entries(input.params)) {
            path = path.replace(`:${k}`, encodeURIComponent(String(v)));
          }
        }
        if (input?.query) {
          const usp = new URLSearchParams();
          for (const [k, v] of Object.entries(input.query)) {
            if (v !== undefined && v !== null) usp.set(k, String(v));
          }
          const qs = usp.toString();
          if (qs) path += `?${qs}`;
        }
        const url = options.baseUrl ? `${options.baseUrl.replace(/\/$/, "")}${path}` : path;
        const headers: Record<string, string> = {};
        if (input?.body !== undefined) headers["content-type"] = "application/json";
        const token = options.getAuthToken?.();
        if (token) headers["Authorization"] = `Bearer ${token}`;
        const init: RequestInit = { method: route.method, headers };
        if (input?.body !== undefined) {
          init.body = JSON.stringify(input.body);
        }
        const res = await fetchImpl(url, init);
        const text = await res.text();
        const data = text ? JSON.parse(text) : undefined;
        if (!res.ok) {
          const err = new Error(`HTTP ${res.status}: ${url}`);
          (err as any).status = res.status;
          (err as any).body = data;
          throw err;
        }
        return route.response.parse(data);
      };
    }
    (client as any)[groupName] = handlers;
  }

  return client;
}
