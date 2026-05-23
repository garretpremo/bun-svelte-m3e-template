export function renderAttrType(text: string | null | undefined): string {
  if (text == null || text === "") return "string";
  return text.replace(/\s+/g, " ").trim();
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
