// Set PUBLIC_STATIC_BUILD=1 at build time to produce a server-less artifact
// (e.g. for GitHub Pages). Code that depends on the API/WS server should
// guard behind this flag.
export const STATIC_BUILD = import.meta.env.PUBLIC_STATIC_BUILD === "1";
