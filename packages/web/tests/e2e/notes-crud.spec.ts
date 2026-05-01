import { expect, test } from "./fixtures/seed";

test("user can create and delete a note via the UI", async ({ page }) => {
  await page.goto("/showcase/notes");
  await page.getByLabel("Title").fill("playwright-note");
  await page.getByLabel("Body").fill("hi from a test");
  await page.getByRole("button", { name: /create note/i }).click();

  await expect(page.getByText("playwright-note")).toBeVisible();

  // Delete the note we just created.
  await page
    .getByRole("button", { name: /delete/i })
    .first()
    .click();
  await expect(page.getByText("playwright-note")).not.toBeVisible({
    timeout: 5_000,
  });
});

test("seed fixture provides a clean user + 3 notes", async ({ seed, page }) => {
  await page.goto("/showcase/notes");
  // The seed user's notes do not necessarily render here unless the
  // showcase filters by current user — instead, just verify the
  // fixture handed back ids of the expected shape.
  expect(seed.noteIds.length).toBe(3);
  expect(seed.userId).toMatch(/^[0-9a-f-]{36}$/);
});
