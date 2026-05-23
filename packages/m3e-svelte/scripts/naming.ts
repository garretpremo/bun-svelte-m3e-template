export function kebabToCamel(input: string): string {
  return input.replace(/-([a-z])/g, (_m, ch: string) => ch.toUpperCase());
}

export function componentName(tag: string): string {
  return tag
    .replace(/^m3e-/, "")
    .split("-")
    .map((seg) => (seg ? seg[0]!.toUpperCase() + seg.slice(1) : ""))
    .join("");
}

export function slotPropName(
  slotName: string,
  reservedAttrNames: Set<string>,
): string {
  if (slotName === "") return "children";
  const camel = kebabToCamel(slotName);
  if (reservedAttrNames.has(camel)) return `${camel}Snippet`;
  return camel;
}
