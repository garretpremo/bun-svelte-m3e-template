import type { LoadedElement } from "./cem-types";
import { classify } from "./classify";
import { type RenderedFile, renderWrapper } from "./templates/wrapper";

export type { RenderedFile };

export function generateOne(el: LoadedElement): RenderedFile {
  const c = classify(el.tag, el.declaration.attributes ?? []);
  switch (c) {
    case "passive":
      return renderWrapper(el);
    case "property-driven":
    case "selection-managed":
      // Managed-attribute behavior is wired in Tasks 10/11; until then these
      // render passively but keep their true classification label.
      return renderWrapper(el, { classification: c });
  }
}
