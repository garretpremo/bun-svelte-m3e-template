// packages/server/tests/primitives/apiClient.test.ts
import { afterEach, beforeEach, describe, expect, mock, test } from "bun:test";
import { createApiClient } from "../../src/contract/primitives/apiClient";
import { notesRoutes } from "../../src/contract/routes/notes";

describe("createApiClient", () => {
  let originalFetch: typeof globalThis.fetch;
  beforeEach(() => {
    originalFetch = globalThis.fetch;
  });
  afterEach(() => {
    globalThis.fetch = originalFetch;
  });

  test("dispatches GET /api/notes with query params", async () => {
    const captured: { url: string | null; init: RequestInit | undefined } = {
      url: null,
      init: undefined,
    };
    globalThis.fetch = mock(async (input: RequestInfo | URL, init?: RequestInit) => {
      captured.url = String(input);
      captured.init = init;
      return new Response(JSON.stringify([]), {
        status: 200,
        headers: { "content-type": "application/json" },
      });
    }) as unknown as typeof fetch;
    const api = createApiClient({ notes: notesRoutes }, { baseUrl: "http://x" });
    const result = await api.notes.list({ query: { limit: 5 } });
    expect(result).toEqual([]);
    expect(captured.url).toBe("http://x/api/notes?limit=5");
    expect(captured.init?.method).toBe("GET");
  });

  test("dispatches POST /api/notes with body and parses response", async () => {
    const fakeNote = {
      id: "11111111-1111-4111-8111-111111111111",
      userId: "22222222-2222-4222-8222-222222222222",
      title: "hello",
      body: "world",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    globalThis.fetch = mock(
      async () =>
        new Response(JSON.stringify(fakeNote), {
          status: 201,
          headers: { "content-type": "application/json" },
        }),
    ) as unknown as typeof fetch;
    const api = createApiClient({ notes: notesRoutes }, { baseUrl: "" });
    const result = await api.notes.create({ body: { title: "hello", body: "world" } });
    expect(result).toEqual(fakeNote);
  });

  test("substitutes :params in path", async () => {
    const captured: { url: string | null } = { url: null };
    globalThis.fetch = mock(async (input: RequestInfo | URL) => {
      captured.url = String(input);
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { "content-type": "application/json" },
      });
    }) as unknown as typeof fetch;
    const api = createApiClient({ notes: notesRoutes }, { baseUrl: "" });
    await api.notes.delete({ params: { id: "33333333-3333-4333-8333-333333333333" } });
    expect(captured.url).toBe("/api/notes/33333333-3333-4333-8333-333333333333");
  });

  test("includes Authorization header when getAuthToken returns a value", async () => {
    const captured: { init: RequestInit | undefined } = { init: undefined };
    globalThis.fetch = mock(async (_input: RequestInfo | URL, i?: RequestInit) => {
      captured.init = i;
      return new Response(JSON.stringify([]), {
        status: 200,
        headers: { "content-type": "application/json" },
      });
    }) as unknown as typeof fetch;
    const api = createApiClient({ notes: notesRoutes }, { baseUrl: "", getAuthToken: () => "abc" });
    await api.notes.list({ query: { limit: 1 } });
    expect((captured.init?.headers as Record<string, string>).Authorization).toBe("Bearer abc");
  });
});
