import { describe, expect, test } from "vitest";
import { cleanDescription, renderAttrType } from "../../scripts/render-types";

describe("cleanDescription", () => {
  test("collapses newlines into single spaces", () => {
    expect(cleanDescription("line one\n  line two")).toBe("line one line two");
    expect(cleanDescription("a\r\nb")).toBe("a b");
  });
  test("escapes a comment terminator so it can't end the JSDoc early", () => {
    expect(cleanDescription("ends with */ here")).toBe("ends with *\\/ here");
  });
});

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
    expect(renderAttrType('"filled" | "tonal" | "elevated" | "outlined" | "text"')).toBe(
      '"filled" | "tonal" | "elevated" | "outlined" | "text"',
    );
  });
  test("known enum identifier passed through", () => {
    expect(renderAttrType("ButtonVariant")).toBe("ButtonVariant");
  });
  test("missing type defaults to string", () => {
    expect(renderAttrType(null)).toBe("string");
    expect(renderAttrType(undefined)).toBe("string");
  });
});
