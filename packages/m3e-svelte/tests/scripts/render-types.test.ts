import { describe, expect, test } from "vitest";
import { renderAttrType } from "../../scripts/render-types";

describe("renderAttrType", () => {
  test("boolean → boolean", () => {
    expect(renderAttrType("boolean")).toBe("boolean");
  });
  test("string → string", () => {
    expect(renderAttrType("string")).toBe("string");
  });
  test("string|null → string | null", () => {
    expect(renderAttrType("string | null")).toBe("string | null");
  });
  test("enum string union preserved", () => {
    expect(
      renderAttrType('"filled" | "tonal" | "elevated" | "outlined" | "text"'),
    ).toBe('"filled" | "tonal" | "elevated" | "outlined" | "text"');
  });
  test("known enum identifier passed through", () => {
    expect(renderAttrType("ButtonVariant")).toBe("ButtonVariant");
  });
  test("missing type defaults to string", () => {
    expect(renderAttrType(null)).toBe("string");
    expect(renderAttrType(undefined)).toBe("string");
  });
});
