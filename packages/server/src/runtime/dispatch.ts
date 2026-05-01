import type { z } from "zod";
import type { RouteDefinition } from "../contract/primitives/defineRoute";

export interface HandlerContext<R extends RouteDefinition<any, any, any, any>> {
  params: R["params"] extends z.ZodType ? z.infer<R["params"]> : Record<string, never>;
  query: R["query"] extends z.ZodType ? z.infer<R["query"]> : Record<string, never>;
  body: R["body"] extends z.ZodType ? z.infer<R["body"]> : never;
  request: Request;
  headers: Headers;
}

export type Handler<R extends RouteDefinition<any, any, any, any>> = (
  ctx: HandlerContext<R>,
) => Promise<R["response"] extends z.ZodType ? z.infer<R["response"]> : never>;

export interface RouteBinding<
  R extends RouteDefinition<any, any, any, any> = RouteDefinition<any, any, any, any>,
> {
  route: R;
  handler: Handler<R>;
}

export function matchRoute(pattern: string, actual: string): Record<string, string> | null {
  const pp = pattern.split("/");
  const aa = actual.split("/");
  if (pp.length !== aa.length) return null;
  const params: Record<string, string> = {};
  for (let i = 0; i < pp.length; i++) {
    const p = pp[i]!;
    const a = aa[i]!;
    if (p.startsWith(":")) params[p.slice(1)] = decodeURIComponent(a);
    else if (p !== a) return null;
  }
  return params;
}

function jsonResponse(status: number, body: unknown): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}

function zodErrorBody(err: any) {
  return {
    code: "validation/failed",
    message: "request did not match schema",
    details: (err.issues ?? []).map((i: any) => ({ path: i.path, message: i.message })),
  };
}

export async function dispatchHttp(req: Request, bindings: RouteBinding[]): Promise<Response> {
  const url = new URL(req.url);
  for (const b of bindings) {
    if (b.route.method !== req.method) continue;
    const params = matchRoute(b.route.path, url.pathname);
    if (!params) continue;
    try {
      const parsedParams = b.route.params ? b.route.params.parse(params) : {};
      const queryObj: Record<string, string> = {};
      url.searchParams.forEach((v, k) => {
        queryObj[k] = v;
      });
      const parsedQuery = b.route.query ? b.route.query.parse(queryObj) : {};
      let parsedBody: unknown = undefined;
      if (b.route.body) {
        const text = await req.text();
        const data = text ? JSON.parse(text) : {};
        parsedBody = b.route.body.parse(data);
      }
      const result = await b.handler({
        params: parsedParams as any,
        query: parsedQuery as any,
        body: parsedBody as any,
        request: req,
        headers: req.headers,
      });
      const out = b.route.response.parse(result);
      return jsonResponse(200, out);
    } catch (err: any) {
      if (err?.issues) return jsonResponse(400, zodErrorBody(err));
      if (err?.status && err?.body) return jsonResponse(err.status, err.body);
      console.error("handler error", err);
      return jsonResponse(500, { code: "internal", message: "internal server error" });
    }
  }
  return jsonResponse(404, {
    code: "not_found",
    message: `no route for ${req.method} ${url.pathname}`,
  });
}
