import { defineConfig } from "vitest/config";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { fileURLToPath } from "node:url";

export default defineConfig({
  plugins: [svelte({ hot: false })],
  test: {
    environment: "jsdom",
    setupFiles: ["./tests/setup.ts"],
    include: ["tests/unit/**/*.test.ts"],
    globals: true,
  },
  resolve: {
    conditions: ["browser"],
    alias: {
      "$app/environment": fileURLToPath(
        new URL("./tests/stubs/app-environment.ts", import.meta.url),
      ),
    },
  },
});
