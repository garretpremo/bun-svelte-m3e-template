import { fileURLToPath } from "node:url";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vitest/config";

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
