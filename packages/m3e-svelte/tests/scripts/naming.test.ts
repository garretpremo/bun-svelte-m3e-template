import { describe, expect, test } from "vitest";
import {
  componentName,
  kebabToCamel,
  slotPropName,
} from "../../scripts/naming";

describe("naming", () => {
  test("kebabToCamel", () => {
    expect(kebabToCamel("disabled-interactive")).toBe("disabledInteractive");
    expect(kebabToCamel("disabled")).toBe("disabled");
    expect(kebabToCamel("aria-label")).toBe("ariaLabel");
  });
  test("componentName from tag", () => {
    expect(componentName("m3e-button")).toBe("Button");
    expect(componentName("m3e-nav-menu-item")).toBe("NavMenuItem");
    expect(componentName("m3e-filter-chip-set")).toBe("FilterChipSet");
  });
  test("slotPropName collides → append Snippet", () => {
    expect(slotPropName("", new Set())).toBe("children");
    expect(slotPropName("icon", new Set())).toBe("icon");
    expect(slotPropName("selected", new Set(["selected"]))).toBe(
      "selectedSnippet",
    );
    expect(slotPropName("trailing-icon", new Set())).toBe("trailingIcon");
  });
});
