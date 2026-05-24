import { render } from "@testing-library/svelte";
import { describe, expect, test } from "vitest";
import Page from "../../../src/routes/showcase/suite/+page.svelte";

describe("/showcase/suite", () => {
  test("renders a tile for at least 50 wrappers", () => {
    const { container } = render(Page);
    expect(container.querySelectorAll(".tile").length).toBeGreaterThanOrEqual(50);
  });
});
