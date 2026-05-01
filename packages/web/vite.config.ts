import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

const SERVER_PORT = process.env.SERVER_PORT ?? "3000";

export default defineConfig({
  // SvelteKit auto-registers `src/service-worker.ts`; no PWA plugin needed.
  // We ship a hand-rolled SW + a static manifest.webmanifest in static/.
  plugins: [sveltekit()],
  server: {
    port: 5173,
    strictPort: false,
    proxy: {
      "/api": `http://localhost:${SERVER_PORT}`,
      "/ws": { target: `ws://localhost:${SERVER_PORT}`, ws: true },
      "/openapi.json": `http://localhost:${SERVER_PORT}`,
      "/docs": `http://localhost:${SERVER_PORT}`,
    },
  },
});
