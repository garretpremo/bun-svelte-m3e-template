const RESERVED = new Set([
  "break",
  "case",
  "catch",
  "class",
  "const",
  "continue",
  "debugger",
  "default",
  "delete",
  "do",
  "else",
  "enum",
  "export",
  "extends",
  "false",
  "finally",
  "for",
  "function",
  "if",
  "import",
  "in",
  "instanceof",
  "new",
  "null",
  "return",
  "super",
  "switch",
  "this",
  "throw",
  "true",
  "try",
  "typeof",
  "var",
  "void",
  "while",
  "with",
  "yield",
  "let",
  "static",
  "await",
  "implements",
  "interface",
  "package",
  "private",
  "protected",
  "public",
]);

export function kebabToCamel(input: string): string {
  return input.replace(/-([a-z])/g, (_m, ch: string) => ch.toUpperCase());
}

/** Coerce an arbitrary string into a valid, non-reserved JS identifier. */
export function safeIdentifier(input: string): string {
  let id = input.replace(/[^A-Za-z0-9_$]/g, "");
  if (id === "") id = "_";
  if (/^[0-9]/.test(id)) id = `_${id}`;
  if (RESERVED.has(id)) id = `${id}_`;
  return id;
}

/** Prop identifier for a CEM attribute (camelCased, sanitized). */
export function attrPropName(attrName: string): string {
  return safeIdentifier(kebabToCamel(attrName));
}

export function componentName(tag: string): string {
  return tag
    .replace(/^m3e-/, "")
    .split("-")
    .map((seg) => (seg ? seg[0]!.toUpperCase() + seg.slice(1) : ""))
    .join("");
}

export function slotPropName(slotName: string, reservedAttrNames: Set<string>): string {
  if (slotName === "") return "children";
  const camel = safeIdentifier(kebabToCamel(slotName));
  if (reservedAttrNames.has(camel)) return `${camel}Snippet`;
  return camel;
}
