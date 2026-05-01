import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { allRoutes } from "../src/contract/routes";
import { generateOpenApi } from "../src/runtime/openapi/generate";

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(here, "../../..");
const out = resolve(repoRoot, "docs/openapi.json");

const spec = generateOpenApi(allRoutes, {
  title: "bun-svelte-m3e-template API",
  version: "0.1.0",
});

mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, JSON.stringify(spec, null, 2) + "\n");
console.log(`wrote ${out}`);
