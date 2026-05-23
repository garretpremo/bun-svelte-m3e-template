import { describe, expect, test } from "vitest";
import {
  attrPropName,
  componentName,
  kebabToCamel,
  safeIdentifier,
  slotPropName,
} from "../../scripts/naming";

describe("naming", () => {
  test("kebabToCamel", () => {
    expect(kebabToCamel("disabled-interactive")).toBe("disabledInteractive");
    expect(kebabToCamel("disabled")).toBe("disabled");
    expect(kebabToCamel("aria-label")).toBe("ariaLabel");
  });
  test("safeIdentifier escapes reserved words", () => {
    expect(safeIdentifier("for")).toBe("for_");
    expect(safeIdentifier("class")).toBe("class_");
    expect(safeIdentifier("default")).toBe("default_");
  });
  test("safeIdentifier strips invalid chars and fixes leading digits", () => {
    expect(safeIdentifier("actions-")).toBe("actions");
    expect(safeIdentifier("2x")).toBe("_2x");
    expect(safeIdentifier("")).toBe("_");
  });
  test("attrPropName camelCases then sanitizes", () => {
    expect(attrPropName("disabled-interactive")).toBe("disabledInteractive");
    expect(attrPropName("for")).toBe("for_");
  });
  test("slotPropName sanitizes trailing-dash slot names", () => {
    expect(slotPropName("actions-", new Set())).toBe("actions");
  });
  test("componentName from tag", () => {
    expect(componentName("m3e-button")).toBe("Button");
    expect(componentName("m3e-nav-menu-item")).toBe("NavMenuItem");
    expect(componentName("m3e-filter-chip-set")).toBe("FilterChipSet");
  });
  test("slotPropName collides → append Snippet", () => {
    expect(slotPropName("", new Set())).toBe("children");
    expect(slotPropName("icon", new Set())).toBe("icon");
    expect(slotPropName("selected", new Set(["selected"]))).toBe("selectedSnippet");
    expect(slotPropName("trailing-icon", new Set())).toBe("trailingIcon");
  });
});
