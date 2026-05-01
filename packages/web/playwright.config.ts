import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",
  testMatch: "**/*.spec.ts",
  globalSetup: "./tests/e2e/global-setup.ts",
  fullyParallel: false, // shared global setup; tighten per project later
  retries: 0,
  reporter: "list",
  use: {
    baseURL: "http://localhost:5173",
    trace: "retain-on-failure",
  },
  webServer: [
    {
      command: "bun run dev",
      cwd: "../../",
      url: "http://localhost:5173",
      reuseExistingServer: !process.env.CI,
      // First-run cold boot needs svelte-kit sync + bun:sqlite migrate +
      // vite dep prebundle. Allow generous slack.
      timeout: 120_000,
      stdout: "pipe",
      stderr: "pipe",
    },
  ],
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
});
