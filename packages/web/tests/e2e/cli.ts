import { cli } from "./apijack.config";

export { cli };

// Allow `bun run tests/e2e/cli.ts <args>` to invoke the apijack CLI directly.
if (import.meta.main) {
  await cli.run();
}
