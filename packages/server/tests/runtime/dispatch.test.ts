import { describe, expect, test } from "bun:test";
import { z } from "zod";
import { defineRoute } from "../../src/contract/primitives/defineRoute";
import { type RouteBinding, dispatchHttp, matchRoute } from "../../src/runtime/dispatch";

describe("matchRoute", () => {
  test("static path", () => {
    expect(matchRoute("/api/notes", "/api/notes")).toEqual({});
  });
  test("captures :params", () => {
    expect(matchRoute("/api/notes/:id", "/api/notes/abc")).toEqual({ id: "abc" });
  });
  test("returns null on miss", () => {
    expect(matchRoute("/api/notes/:id", "/api/users/abc")).toBeNull();
  });
});

describe("dispatchHttp", () => {
  const echo = defineRoute({
    method: "POST",
    path: "/api/echo",
    operationId: "echo",
    body: z.object({ msg: z.string() }),
    response: z.object({ msg: z.string() }),
  });
  const bindings: RouteBinding[] = [
    { route: echo, handler: async ({ body }) => ({ msg: body.msg.toUpperCase() }) },
  ];
  test("runs body parse + handler + response parse", async () => {
    const req = new Request("http://x/api/echo", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ msg: "hi" }),
    });
    const res = await dispatchHttp(req, bindings);
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ msg: "HI" });
  });
  test("returns 400 on body parse failure", async () => {
    const req = new Request("http://x/api/echo", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ wrong: "shape" }),
    });
    const res = await dispatchHttp(req, bindings);
    expect(res.status).toBe(400);
    const j = await res.json();
    expect(j.code).toBe("validation/failed");
  });
  test("returns 404 when no route matches", async () => {
    const req = new Request("http://x/api/no-such");
    const res = await dispatchHttp(req, bindings);
    expect(res.status).toBe(404);
  });
});
