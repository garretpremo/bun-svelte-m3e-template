import { Button } from "@app/m3e-svelte";
import { render } from "@testing-library/svelte";
import { describe, expect, test } from "vitest";

describe("Button (from @app/m3e-svelte)", () => {
  test("renders the m3e-button custom element with given variant", () => {
    render(Button, { props: { variant: "outlined" } });
    const el = document.querySelector("m3e-button");
    expect(el).toBeTruthy();
    expect(el?.getAttribute("variant")).toBe("outlined");
  });
});
