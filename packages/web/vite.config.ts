import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

const SERVER_PORT = process.env.SERVER_PORT ?? "3000";

export default defineConfig({
  // SvelteKit auto-registers `src/service-worker.ts`; no PWA plugin needed.
  // We ship a hand-rolled SW + a static manifest.webmanifest in static/.
  plugins: [sveltekit()],
  // Every @m3e/* package depends on the same lit/lit-html. Without dedup,
  // vite's optimizeDeps can materialize multiple chunks each holding their
  // own copy of Lit's Directive class, which breaks `directive(class extends
  // Directive)` cross-package (`_$initialize is not a function`).
  resolve: {
    dedupe: ["lit", "lit-html", "lit-element", "@lit/reactive-element"],
  },
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
