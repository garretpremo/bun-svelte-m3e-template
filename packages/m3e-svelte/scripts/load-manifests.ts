// packages/m3e-svelte/scripts/load-manifests.ts
import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import type { Cem, CemClassDeclaration, LoadedElement } from "./cem-types";
import { collectPackageExports } from "./package-exports";

const here = dirname(fileURLToPath(import.meta.url));
// packages/m3e-svelte/scripts/../ = packages/m3e-svelte/
// @m3e/* packages are installed in packages/m3e-svelte/node_modules/@m3e/
const pkgRoot = resolve(here, "..");

export function loadManifests(packages: string[]): LoadedElement[] {
  const out: LoadedElement[] = [];
  const seen = new Set<string>();
  for (const pkg of packages) {
    const cemPath = resolve(pkgRoot, "node_modules", pkg, "dist/custom-elements.json");
    if (!existsSync(cemPath)) {
      console.warn(`[m3e-svelte] skipping ${pkg}: no custom-elements.json`);
      continue;
    }
    const cem = JSON.parse(readFileSync(cemPath, "utf8")) as Cem;
    const exportedNames = collectPackageExports(pkg);
    for (const mod of cem.modules ?? []) {
      for (const decl of mod.declarations ?? []) {
        if (decl.kind !== "class") continue;
        const klass = decl as CemClassDeclaration;
        if (!klass.tagName || seen.has(klass.tagName)) continue;
        seen.add(klass.tagName);
        out.push({
          pkg,
          tag: klass.tagName,
          className: klass.name,
          declaration: klass,
          exportedNames,
        });
      }
    }
  }
  return out;
}

export function listPeerPackages(pkgJsonPath: string): string[] {
  const json = JSON.parse(readFileSync(pkgJsonPath, "utf8")) as {
    peerDependencies?: Record<string, string>;
  };
  return Object.keys(json.peerDependencies ?? {}).filter((k) => k.startsWith("@m3e/"));
}
