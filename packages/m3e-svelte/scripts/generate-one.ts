import type { CemClassDeclaration, LoadedElement } from "./cem-types";
import { classify } from "./classify";
import { extractIdentifiers, inferType, renderAttrType } from "./render-types";
import { type ManagedProp, type RenderedFile, renderWrapper } from "./templates/wrapper";

export type { RenderedFile };

// State booleans that must be driven as DOM properties rather than attributes.
const STATE_NAMES = new Set(["open", "expanded", "checked", "indeterminate"]);
// Selection state for components with an internal SelectionManager.
const SELECTION_NAMES = new Set([
  "value",
  "selected",
  "open",
  "checked",
  "expanded",
  "indeterminate",
]);

// Bindable only when writable and primitively typed; element-class-typed or
// readonly fields (e.g. a select's computed `value`) are read via events instead.
function isBindableType(type: string): boolean {
  return extractIdentifiers(type).length === 0;
}

function collectManaged(decl: CemClassDeclaration, allowed: Set<string>): ManagedProp[] {
  const out = new Map<string, ManagedProp>();
  const add = (name: string, type: string, description?: string) => {
    const mp: ManagedProp = { name, type };
    if (description) mp.description = description;
    out.set(name, mp);
  };
  for (const a of decl.attributes ?? []) {
    if (!allowed.has(a.name)) continue;
    const type = inferType(a);
    if (!isBindableType(type)) continue;
    add(a.name, type, a.description);
  }
  for (const f of decl.members ?? []) {
    if (f.kind !== "field" || f.privacy === "private" || f.static || f.readonly) {
      continue;
    }
    if (!allowed.has(f.name) || out.has(f.name)) continue;
    const type = renderAttrType(f.type?.text);
    if (!isBindableType(type)) continue;
    add(f.name, type, f.description);
  }
  return [...out.values()];
}

export function generateOne(el: LoadedElement): RenderedFile {
  const decl = el.declaration;
  const c = classify(el.tag, decl.attributes ?? []);
  switch (c) {
    case "passive":
      return renderWrapper(el);
    case "property-driven":
      return renderWrapper(el, {
        classification: c,
        managed: collectManaged(decl, STATE_NAMES),
        syncFn: "syncProperty",
      });
    case "selection-managed":
      return renderWrapper(el, {
        classification: c,
        managed: collectManaged(decl, SELECTION_NAMES),
        syncFn: "syncManagedProperty",
        dropNullChange: true,
      });
  }
}
