// packages/server/tests/openapi-snapshot.test.ts
//
// Compares the freshly-generated OpenAPI spec against the committed
// docs/openapi.json. CI fails on drift — regenerate via `bun run gen:openapi`.

import { describe, expect, test } from "bun:test";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { readFileSync } from "node:fs";
import { allRoutes } from "../src/contract/routes";
import { generateOpenApi } from "../src/runtime/openapi/generate";

const here = dirname(fileURLToPath(import.meta.url));
const committedPath = resolve(here, "../../../docs/openapi.json");

describe("openapi snapshot", () => {
  test("generated matches docs/openapi.json (run `bun run gen:openapi` to refresh)", () => {
    const fresh = generateOpenApi(allRoutes, {
      title: "bun-svelte-m3e-template API",
      version: "0.1.0",
    });
    const committed = JSON.parse(readFileSync(committedPath, "utf8"));
    expect(fresh).toEqual(committed);
  });
});
