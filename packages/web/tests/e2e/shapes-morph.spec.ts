import { test, expect } from "@playwright/test";

test("clicking a shape morphs it (label updates)", async ({ page }) => {
  await page.goto("/showcase/shapes");
  const firstLabel = page.locator("section small").first();
  const initial = await firstLabel.textContent();
  await page.locator("m3e-shape").first().click();
  await expect(firstLabel).not.toHaveText(initial ?? "");
});
