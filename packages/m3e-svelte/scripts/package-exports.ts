import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const pkgRoot = resolve(here, "..");

function resolveDts(fromFile: string, rel: string): string {
  const base = resolve(dirname(fromFile), rel);
  if (base.endsWith(".d.ts")) return base;
  if (existsSync(`${base}.d.ts`)) return `${base}.d.ts`;
  return resolve(base, "index.d.ts");
}

/**
 * Collect the type/value names a package exports from its types entry, following
 * `export *` / `export { … } from` re-exports. Used so the generator only
 * imports a named type when it actually exists on the package surface.
 */
export function collectPackageExports(pkg: string): Set<string> {
  const names = new Set<string>();
  const pkgDir = resolve(pkgRoot, "node_modules", pkg);
  let entry = "dist/src/index.d.ts";
  try {
    const pj = JSON.parse(readFileSync(resolve(pkgDir, "package.json"), "utf8")) as {
      types?: string;
      typings?: string;
    };
    entry = pj.types ?? pj.typings ?? entry;
  } catch {
    return names;
  }

  const visited = new Set<string>();
  const queue: string[] = [resolve(pkgDir, entry)];
  while (queue.length > 0) {
    const file = queue.pop()!;
    if (visited.has(file) || !existsSync(file)) continue;
    visited.add(file);
    const src = readFileSync(file, "utf8");

    for (const m of src.matchAll(/export\s+\*\s+from\s+["']([^"']+)["']/g)) {
      const rel = m[1]!;
      if (rel.startsWith(".")) queue.push(resolveDts(file, rel));
    }
    for (const m of src.matchAll(
      /export\s+(?:type\s+)?\{([^}]*)\}(?:\s+from\s+["']([^"']+)["'])?/g,
    )) {
      for (const part of m[1]!.split(",")) {
        const seg = part.trim();
        if (!seg) continue;
        const asMatch = seg.match(/\bas\s+([A-Za-z0-9_$]+)$/);
        const name = asMatch ? asMatch[1]! : seg.replace(/^type\s+/, "").trim();
        if (/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(name)) names.add(name);
      }
    }
    for (const m of src.matchAll(
      /export\s+declare\s+(?:abstract\s+)?(?:class|function|const|let|var|enum)\s+([A-Za-z0-9_$]+)/g,
    )) {
      names.add(m[1]!);
    }
    for (const m of src.matchAll(/export\s+(?:type|interface|enum)\s+([A-Za-z0-9_$]+)/g)) {
      names.add(m[1]!);
    }
  }
  return names;
}
