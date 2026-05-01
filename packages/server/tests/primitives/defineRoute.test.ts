// packages/server/tests/primitives/defineRoute.test.ts
import { describe, expect, test } from "bun:test";
import { z } from "zod";
import { defineRoute } from "../../src/contract/primitives/defineRoute";

describe("defineRoute", () => {
  test("preserves config and identifies as a route", () => {
    const route = defineRoute({
      method: "POST",
      path: "/api/things",
      operationId: "createThing",
      body: z.object({ name: z.string() }),
      response: z.object({ id: z.string() }),
    });
    expect(route.method).toBe("POST");
    expect(route.path).toBe("/api/things");
    expect(route.operationId).toBe("createThing");
    expect(route.body).toBeDefined();
    expect(route.response).toBeDefined();
    expect(route.__brand).toBe("apijack.route");
  });

  test("optional fields default sensibly", () => {
    const route = defineRoute({
      method: "GET",
      path: "/api/health",
      operationId: "getHealth",
      response: z.object({ ok: z.literal(true) }),
    });
    expect(route.params).toBeUndefined();
    expect(route.query).toBeUndefined();
    expect(route.body).toBeUndefined();
    expect(route.errors).toBeUndefined();
  });
});
