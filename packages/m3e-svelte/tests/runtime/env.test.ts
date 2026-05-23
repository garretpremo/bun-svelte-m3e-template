import { describe, expect, test } from "vitest";
import { browser } from "../../src/runtime/env";

describe("runtime/env", () => {
  test("browser is true under jsdom (window + document present)", () => {
    expect(browser).toBe(true);
  });
});
