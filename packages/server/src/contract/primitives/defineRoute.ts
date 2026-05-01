import type { z } from "zod";

export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface RouteDefinition<
  TParams extends z.ZodType = z.ZodNever,
  TQuery extends z.ZodType = z.ZodNever,
  TBody extends z.ZodType = z.ZodNever,
  TResponse extends z.ZodType = z.ZodNever,
> {
  __brand: "apijack.route";
  method: HttpMethod;
  path: string;
  /** OpenAPI operationId. Drives apijack's CLI command generation. Required. */
  operationId: string;
  params?: TParams;
  query?: TQuery;
  body?: TBody;
  response: TResponse;
  errors?: Record<number, z.ZodType>;
  summary?: string;
  description?: string;
  tags?: readonly string[];
}

export interface RouteConfig<
  TParams extends z.ZodType,
  TQuery extends z.ZodType,
  TBody extends z.ZodType,
  TResponse extends z.ZodType,
> {
  method: HttpMethod;
  path: string;
  operationId: string;
  params?: TParams;
  query?: TQuery;
  body?: TBody;
  response: TResponse;
  errors?: Record<number, z.ZodType>;
  summary?: string;
  description?: string;
  tags?: readonly string[];
}

/** Define a typed HTTP route. The returned handle drives server dispatch,
 *  OpenAPI generation, and the typed apiClient. */
export function defineRoute<
  TParams extends z.ZodType,
  TQuery extends z.ZodType,
  TBody extends z.ZodType,
  TResponse extends z.ZodType,
>(
  config: RouteConfig<TParams, TQuery, TBody, TResponse>,
): RouteDefinition<TParams, TQuery, TBody, TResponse> {
  return { __brand: "apijack.route", ...config };
}
