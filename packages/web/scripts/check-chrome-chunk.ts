import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

// Every @app/m3e-svelte wrapper lazy-loads its @m3e/* package via dynamic import,
// and the chrome tier is itself loaded through a dynamic import of presets/chrome.
// So no @m3e/* package should ever appear in the STATIC import graph of the app.
// A stray `import "@m3e/x"` (or a wrapper authored without the browser-gated
// dynamic import) would pull a package into the initial bundle — this catches it.

const manifestPath = resolve(import.meta.dir, "../.svelte-kit/output/client/.vite/manifest.json");

if (!existsSync(manifestPath)) {
  console.error(`[check-chrome-chunk] no build manifest at ${manifestPath}`);
  console.error("Run `bun run --filter @app/web build` first.");
  process.exit(1);
}

type Chunk = { imports?: string[]; isEntry?: boolean };
const manifest = JSON.parse(readFileSync(manifestPath, "utf8")) as Record<string, Chunk>;

const m3ePackage = (key: string) => key.match(/@m3e\/([a-z-]+)\//)?.[1] ?? null;

const seen = new Set<string>();
const stack = Object.keys(manifest).filter((k) => manifest[k]?.isEntry);
const eager = new Set<string>();
while (stack.length > 0) {
  const key = stack.pop()!;
  if (seen.has(key)) continue;
  seen.add(key);
  const pkg = m3ePackage(key);
  if (pkg) eager.add(pkg);
  for (const imp of manifest[key]?.imports ?? []) stack.push(imp);
}

if (eager.size > 0) {
  console.error(
    `[check-chrome-chunk] @m3e packages are statically (eagerly) imported: ${[...eager].sort().join(", ")}`,
  );
  console.error("Every wrapper must lazy-load its package via `if (browser) void import(...)`.");
  process.exit(1);
}

console.log("[check-chrome-chunk] OK — no @m3e package in the static graph; all lazy.");
