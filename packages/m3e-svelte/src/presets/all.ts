import manifest from "../generated/manifest.json";
import "../generated/styles.css";

// Escape hatch: eager-load every @m3e/* package. Defeats chunking — only for
// the showcase and smoke tests. App code should use named imports instead.
const packages = [
  ...new Set(Object.values(manifest as Record<string, { package: string }>).map((m) => m.package)),
];

export const all = Promise.all(packages.map((p) => import(/* @vite-ignore */ p)));
