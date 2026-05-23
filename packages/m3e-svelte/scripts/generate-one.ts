import type { LoadedElement } from "./cem-types";
import { classify } from "./classify";
import { renderPassive, type RenderedFile } from "./templates/passive";

export function generateOne(el: LoadedElement): RenderedFile {
  const c = classify(el.tag, el.declaration.attributes ?? []);
  switch (c) {
    case "passive":
      return renderPassive(el);
    case "property-driven":
    case "selection-managed":
      // Implemented in later tasks; fall back to passive for now.
      return { ...renderPassive(el), classification: c };
  }
}
