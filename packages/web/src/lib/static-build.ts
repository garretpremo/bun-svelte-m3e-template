// Set PUBLIC_STATIC_BUILD=1 at build time to produce a server-less artifact
// (e.g. for GitHub Pages). Code that depends on the API/WS server should
// guard behind this flag.
//
// SvelteKit exposes PUBLIC_* env vars via $env — *not* on import.meta.env.
// Using $env/dynamic/public so the var can be absent at build time without
// erroring (unlike $env/static/public, which fails to import undeclared
// vars). Vite still inlines the lookup for production builds.
import { env } from "$env/dynamic/public";

export const STATIC_BUILD = env.PUBLIC_STATIC_BUILD === "1";
