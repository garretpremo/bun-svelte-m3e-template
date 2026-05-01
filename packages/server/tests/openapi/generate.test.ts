import { describe, expect, test } from "bun:test";
import { z } from "zod";
import { defineRoute } from "../../src/contract/primitives/defineRoute";
import { generateOpenApi } from "../../src/runtime/openapi/generate";

describe("generateOpenApi", () => {
  test("emits paths and tags from a route registry", () => {
    const routes = {
      things: {
        list: defineRoute({
          method: "GET",
          path: "/api/things",
          operationId: "listThings",
          query: z.object({ limit: z.coerce.number() }),
          response: z.array(z.object({ id: z.string() })),
          summary: "List things",
          tags: ["things"],
        }),
      },
    };
    const spec = generateOpenApi(routes, { title: "Test", version: "0.1.0" });
    expect(spec.openapi).toBe("3.1.0");
    expect(spec.info.title).toBe("Test");
    expect(spec.paths["/api/things"]?.get?.summary).toBe("List things");
    expect(spec.paths["/api/things"]?.get?.tags).toEqual(["things"]);
    expect(spec.paths["/api/things"]?.get?.operationId).toBe("listThings");
  });
});
