// packages/server/tests/contract-purity.test.ts
//
// Builds the contract entry for a browser target and asserts no Node/Bun
// built-ins appear in the bundle graph. If you import bun:sqlite or
// node:fs from src/contract/**, this test fails — fix the contract export.

import { describe, expect, test } from "bun:test";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(here, "../../..");
const contractEntry = resolve(repoRoot, "packages/server/src/contract/index.ts");

const FORBIDDEN = [
  "bun:sqlite",
  "bun:ffi",
  "bun:test",
  "node:fs",
  "node:path",
  "node:child_process",
  "node:dns",
  "node:os",
  "node:crypto",
];

describe("contract purity", () => {
  test("contract bundle contains no Node/Bun built-in imports", async () => {
    const result = await Bun.build({
      entrypoints: [contractEntry],
      target: "browser",
      format: "esm",
      external: ["zod"],
    });
    expect(result.success).toBe(true);
    const out = result.outputs[0]!;
    const text = await out.text();
    for (const m of FORBIDDEN) {
      expect(text, `forbidden module "${m}" leaked into contract bundle`).not.toInclude(m);
    }
  });

  test("a deliberate forbidden import would fail the build", async () => {
    const tmp = resolve(repoRoot, "packages/server/tests/__purity-canary.ts");
    await Bun.write(tmp, `import * as fs from "node:fs"; export const x = fs;`);
    const result = await Bun.build({
      entrypoints: [tmp],
      target: "browser",
      format: "esm",
      packages: "external",
    });
    // Bun's browser target doesn't reject node:fs at build time, so we look
    // for the literal in the bundle output.
    const text = result.outputs[0] ? await result.outputs[0].text() : "";
    expect(text).toContain("node:fs");
    await Bun.write(tmp, ""); // wipe
  });
});
