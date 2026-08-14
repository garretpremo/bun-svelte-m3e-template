import type { CemAttribute } from "./cem-types";
import { discoverManagedChildTags } from "./selection-managed";

export type Classification = "passive" | "property-driven" | "selection-managed";

/**
 * Containers that own a SelectionManager. These are matched by name because a
 * container is identified by what it *is*, and the set is small and stable.
 * The managed **children** are discovered instead — see `selection-managed.ts`
 * for why name-matching them was wrong.
 */
const SELECTION_MANAGED_PATTERNS = [
  /nav-menu(?:$|-)/,
  /^m3e-select$/,
  /^m3e-radio-group$/,
  /-set$/,
  /-list$/,
  /^m3e-selection-/,
];

const PROPERTY_STATE_ATTRS = new Set(["open", "expanded", "checked"]);

export function classify(tag: string, attributes: CemAttribute[]): Classification {
  // Discovered children first: a tag claimed by some manager's `setItems` is
  // selection-managed no matter what its name looks like.
  if (discoverManagedChildTags().tags.has(tag)) return "selection-managed";
  for (const re of SELECTION_MANAGED_PATTERNS) {
    if (re.test(tag)) return "selection-managed";
  }
  for (const a of attributes) {
    if (PROPERTY_STATE_ATTRS.has(a.name)) return "property-driven";
  }
  return "passive";
}
