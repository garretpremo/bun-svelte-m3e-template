/// <reference types="@sveltejs/kit" />
import { build, files, version } from "$service-worker";
import { precacheAndRoute, cleanupOutdatedCaches } from "workbox-precaching";

declare const self: ServiceWorkerGlobalScope & {
  __WB_MANIFEST: Array<{ url: string; revision: string | null }>;
};

cleanupOutdatedCaches();

// Workbox injectManifest requires this placeholder; merged with SvelteKit precache below.
const wbManifest = self.__WB_MANIFEST;
const precache = [
  ...[...build, ...files].map((url) => ({ url, revision: version })),
  ...wbManifest,
];
precacheAndRoute(precache);

self.addEventListener("message", (event: ExtendableMessageEvent) => {
  if ((event.data as { type?: string } | null)?.type === "SKIP_WAITING") void self.skipWaiting();
});
