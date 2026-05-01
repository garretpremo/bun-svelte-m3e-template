import { render, screen } from "@testing-library/svelte";
import { describe, expect, test } from "vitest";
import Button from "../../../src/lib/m3e/Button.svelte";

describe("Button wrapper", () => {
  test("renders the m3e-button custom element with given variant", () => {
    render(Button, { props: { variant: "outlined" } });
    const el = document.querySelector("m3e-button");
    expect(el).toBeTruthy();
    expect(el?.getAttribute("variant")).toBe("outlined");
  });
});
