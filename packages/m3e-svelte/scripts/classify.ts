import type { CemAttribute } from "./cem-types";

export type Classification =
  | "passive"
  | "property-driven"
  | "selection-managed";

const SELECTION_MANAGED_PATTERNS = [
  /nav-menu(?:$|-)/,
  /^m3e-select$/,
  /^m3e-radio-group$/,
  /-set$/,
  /-list$/,
  /^m3e-selection-/,
];

const PROPERTY_STATE_ATTRS = new Set(["open", "expanded", "checked"]);

export function classify(
  tag: string,
  attributes: CemAttribute[],
): Classification {
  for (const re of SELECTION_MANAGED_PATTERNS) {
    if (re.test(tag)) return "selection-managed";
  }
  for (const a of attributes) {
    if (PROPERTY_STATE_ATTRS.has(a.name)) return "property-driven";
  }
  return "passive";
}
