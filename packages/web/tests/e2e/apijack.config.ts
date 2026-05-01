import { ApiKeyStrategy, createCli } from "@apijack/core";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
// configPath's parent directory is where apijack looks for routines/ and
// session.json. Pointing it inside tests/e2e/ makes routines/*.yaml the
// project-local routines dir.
const configPath = resolve(here, "config.json");
// The generated CLI lives next to the routines so it persists across test
// runs and isn't accidentally treated as src by Vite.
const generatedDir = resolve(here, "generated");

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
