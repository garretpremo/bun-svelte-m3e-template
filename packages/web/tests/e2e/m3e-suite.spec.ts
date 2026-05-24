import { expect, test } from "@playwright/test";

test.describe("@app/m3e-svelte suite", () => {
  test("/showcase/suite renders a tile per generated wrapper", async ({ page }) => {
    await page.goto("/showcase/suite");
    await expect(page.locator(".tile").first()).toBeVisible();
    expect(await page.locator(".tile").count()).toBeGreaterThanOrEqual(50);
  });

  test("suite Switch two-way binding updates bound state on toggle", async ({ page }) => {
    await page.goto("/showcase/components");
    const status = page.getByText(/Switch is (on|off)/);
    const before = await status.textContent();
    await page.locator("m3e-switch").first().click();
    await expect(status).not.toHaveText(before ?? "");
  });

  test("dialog opens from a suite Button click", async ({ page }) => {
    await page.goto("/showcase/components");
    await page.getByRole("button", { name: /open dialog/i }).click();
    await expect(page.locator("m3e-dialog[open]")).toBeVisible();
  });
});
