// STUB — replace with real auth (OAuth, sessions, JWT). Documented in CLAUDE.md.
//
// Returns 401 when called. Guard a route with:
//   { route: ..., handler: requireAuth(realHandler) }
// once you've implemented the real check below.

import type { Handler } from "../dispatch";

export function requireAuth<R>(impl: Handler<R extends never ? any : any>): Handler<any> {
  return async (ctx) => {
    const token = ctx.headers.get("authorization");
    if (!token?.startsWith("Bearer ")) {
      throw Object.assign(new Error("auth required"), {
        status: 401,
        body: { code: "auth/required", message: "Bearer token required" },
      });
    }
    // TODO: validate token. For template, accept any non-empty bearer.
    return impl(ctx);
  };
}
