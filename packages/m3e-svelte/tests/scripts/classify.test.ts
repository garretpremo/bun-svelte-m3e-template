import { describe, expect, test } from "vitest";
import { classify } from "../../scripts/classify";

const mkAttrs = (names: string[]) => names.map((n) => ({ name: n, type: { text: "boolean" } }));

describe("classify", () => {
  test("passive default", () => {
    expect(classify("m3e-card", [])).toBe("passive");
    expect(classify("m3e-icon", [])).toBe("passive");
  });
  test("selection-managed by tag substring", () => {
    expect(classify("m3e-nav-menu", [])).toBe("selection-managed");
    expect(classify("m3e-select", [])).toBe("selection-managed");
    expect(classify("m3e-radio-group", [])).toBe("selection-managed");
    expect(classify("m3e-filter-chip-set", [])).toBe("selection-managed");
    expect(classify("m3e-selection-list", [])).toBe("selection-managed");
  });
  test("property-driven via state attribute", () => {
    expect(classify("m3e-dialog", mkAttrs(["open"]))).toBe("property-driven");
    expect(classify("m3e-snackbar", mkAttrs(["open"]))).toBe("property-driven");
    expect(classify("m3e-collapsible", mkAttrs(["expanded"]))).toBe("property-driven");
  });
  test("selection-managed wins over property-driven when both apply", () => {
    expect(classify("m3e-select", mkAttrs(["open"]))).toBe("selection-managed");
  });
});
