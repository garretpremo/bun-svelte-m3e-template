import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { cli } from "./cli";

const here = dirname(fileURLToPath(import.meta.url));
const generatedCommands = resolve(here, "generated/commands.ts");
const cliEntry = resolve(here, "cli.ts");

export default async function globalSetup() {
  // Ensure the apijack CLI commands exist before running routines. apijack's
  // `generate` step pulls /openapi.json from the running server and writes
  // typed commands to tests/e2e/generated/. The generated dir is gitignored,
  // so a fresh clone (or CI) needs to regenerate. Playwright's webServer is
  // already up by the time globalSetup runs.
  if (!existsSync(generatedCommands)) {
    const result = spawnSync("bun", ["run", cliEntry, "generate"], {
      stdio: "inherit",
      env: process.env,
    });
    if (result.status !== 0) {
      throw new Error(`appcli generate failed with exit code ${result.status}`);
    }
  }

  const r = await cli.runRoutine("setup-baseline");
  if (r.status !== "ok") {
    console.warn("setup-baseline did not fully succeed; continuing", r.steps);
  }
}
