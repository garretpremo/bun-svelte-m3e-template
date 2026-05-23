export function renderAttrType(text: string | null | undefined): string {
  if (text == null || text === "") return "string";
  return text.replace(/\s+/g, " ").trim();
}

/**
 * Best-effort TS type for a CEM attribute. Some attributes omit `type` but carry
 * a boolean `default` ("true"/"false") — infer boolean rather than fall back to
 * string, so e.g. `m3e-dialog`'s `open` is typed correctly.
 */
export function inferType(a: {
  type?: { text?: string | null };
  default?: string | null;
}): string {
  if (a.type?.text) return renderAttrType(a.type.text);
  if (a.default === "true" || a.default === "false") return "boolean";
  return "string";
}

/**
 * Normalize a CEM description for safe single-line JSDoc: collapse newlines and
 * escape any `*​/` so a description can't terminate the comment early.
 */
export function cleanDescription(desc: string): string {
  return desc
    .replace(/\s*\r?\n\s*/g, " ")
    .replace(/\*\//g, "*\\/")
    .trim();
}

/** Identifiers referenced inside the rendered type that need importing. */
export function extractIdentifiers(text: string | null | undefined): string[] {
  if (!text) return [];
  const ids = new Set<string>();
  for (const m of text.matchAll(/\b([A-Z][A-Za-z0-9]+)\b/g)) {
    const ident = m[1]!;
    if (ident === "Event" || ident === "CustomEvent") continue;
    ids.add(ident);
  }
  return [...ids];
}
