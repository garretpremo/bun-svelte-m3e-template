/// <reference types="@sveltejs/kit" />
//
// SvelteKit auto-registers this file at build time. No workbox / vite-plugin-pwa
// required — the `$service-worker` virtual module enumerates the precache set.
//
// Strategy:
// - On install: precache every build artifact and static file at the active version.
// - On activate: delete caches from prior versions.
// - On fetch (GET only):
//     - precached asset → return from cache
//     - other request   → network-first with cache fallback for offline
import { build, files, version } from "$service-worker";

declare const self: ServiceWorkerGlobalScope;

const CACHE = `app-cache-${version}`;
const ASSETS = [...build, ...files];

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE);
      await cache.addAll(ASSETS);
    })(),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      for (const key of await caches.keys()) {
        if (key !== CACHE) await caches.delete(key);
      }
    })(),
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);

  // Don't intercept API or WS requests; they shouldn't be cached.
  if (url.pathname.startsWith("/api/") || url.pathname === "/ws") return;

  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE);

      // Precached asset hit.
      if (ASSETS.includes(url.pathname)) {
        const cached = await cache.match(url.pathname);
        if (cached) return cached;
      }

      // Network-first for everything else; fall back to cache when offline.
      try {
        const response = await fetch(event.request);
        if (response.status === 200) cache.put(event.request, response.clone());
        return response;
      } catch (err) {
        const cached = await cache.match(event.request);
        if (cached) return cached;
        throw err;
      }
    })(),
  );
});

self.addEventListener("message", (event: ExtendableMessageEvent) => {
  if ((event.data as { type?: string } | null)?.type === "SKIP_WAITING") {
    void self.skipWaiting();
  }
});
