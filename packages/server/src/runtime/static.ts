import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";
import { existsSync, statSync } from "node:fs";
import { env } from "../env";

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(here, "../../../..");
const distRoot = resolve(repoRoot, "packages/web/dist");

function contentType(path: string): string {
  if (path.endsWith(".html")) return "text/html; charset=utf-8";
  if (path.endsWith(".js"))   return "application/javascript; charset=utf-8";
  if (path.endsWith(".css"))  return "text/css; charset=utf-8";
  if (path.endsWith(".json")) return "application/json; charset=utf-8";
  if (path.endsWith(".svg"))  return "image/svg+xml";
  if (path.endsWith(".png"))  return "image/png";
  if (path.endsWith(".webmanifest")) return "application/manifest+json";
  if (path.endsWith(".woff2")) return "font/woff2";
  return "application/octet-stream";
}

export async function serveStatic(req: Request): Promise<Response> {
  const url = new URL(req.url);
  let p = url.pathname === "/" ? "/index.html" : url.pathname;
  let abs = join(distRoot, p);
  if (!existsSync(abs) || !statSync(abs).isFile()) {
    // SPA fallback
    abs = join(distRoot, "index.html");
    p = "/index.html";
  }
  if (!existsSync(abs)) {
    return new Response("Not Found", { status: 404 });
  }
  const file = Bun.file(abs);
  const ct = contentType(p);
  // Hashed asset paths from Vite live under /_app/immutable; cache aggressively.
  const cache = p.includes("/_app/immutable/")
    ? "public, max-age=31536000, immutable"
    : env.NODE_ENV === "production"
      ? "public, max-age=300"
      : "no-cache";
  return new Response(file.stream(), { headers: { "content-type": ct, "cache-control": cache } });
}
