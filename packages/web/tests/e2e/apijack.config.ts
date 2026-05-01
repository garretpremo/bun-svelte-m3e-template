import { existsSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { ApiKeyStrategy, createCli } from "@apijack/core";

const here = dirname(fileURLToPath(import.meta.url));
// configPath's parent directory is where apijack looks for routines/ and
// session.json. Pointing it inside tests/e2e/ makes routines/*.yaml the
// project-local routines dir.
const configPath = resolve(here, "config.json");
// The generated CLI lives next to the routines so it persists across test
// runs and isn't accidentally treated as src by Vite.
const generatedDir = resolve(here, "generated");

// Self-bootstrap apijack's env config so e2e runs work in CI / clean clones
// without an interactive `appcli setup` step. Honors SERVER_PORT (matches the
// vite proxy / dev orchestration) and falls back to port 3000.
if (!existsSync(configPath)) {
  const port = process.env.SERVER_PORT ?? "3000";
  writeFileSync(
    configPath,
    `${JSON.stringify(
      {
        active: "local",
        environments: {
          local: { url: `http://localhost:${port}`, user: "noop", password: "noop" },
        },
      },
      null,
      2,
    )}\n`,
  );
}

export const cli = createCli({
  name: "appcli",
  description: "e2e CLI for the bun-svelte-m3e-template API",
  version: "0.1.0",
  // apijack's `generate` does `fetch(${baseUrl}${specPath})` against the
  // active env config — keep the path server-relative so it resolves to
  // the live /openapi.json endpoint when the server is running.
  specPath: "/openapi.json",
  configPath,
  generatedDir,
  // The template API is unauthenticated for tests; supply a no-op header
  // strategy so apijack's auth pipeline is satisfied.
  auth: new ApiKeyStrategy("x-e2e", "noop"),
});

if (import.meta.main) {
  await cli.run();
}
