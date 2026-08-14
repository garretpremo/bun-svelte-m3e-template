import { expect, test } from "@playwright/test";

// A browser-level tier for the class of defect no other tier in this repo can
// see. `bun test` and vitest run in jsdom, which computes no cascade and no
// layout: a rule can be silently outranked, a custom element can invert a
// boolean attribute, and every unit test still passes. Each assertion below
// corresponds to a bug that shipped in this template and was found only by
// measuring the rendered page.
//
// These are deliberately about *computed values and geometry*, not markup.
// Asserting the mechanism (an attribute is present, a class is in the DOM) is
// what let these through in the first place.

test.describe("cascade: utilities outrank prose defaults", () => {
  // theme.css styles bare prose inside .page-content. Those rules used to be
  // plain element selectors at (0,1,1), which outranked any single-class
  // utility at (0,1,0) — so a class declaring 16px rendered at 32px, with
  // nothing in the source looking wrong. They are wrapped in :where() now.
  test("a single class beats the .page-content element default", async ({ page }) => {
    await page.goto("/showcase/components");
    await expect(page.locator("main.page-content")).toBeVisible();

    const probe = await page.evaluate(() => {
      // No `?? document.body` fallback. The probe is only meaningful inside
      // `.page-content`; anywhere else the prose rule cannot match and the
      // class "wins" unconditionally, which would make this test pass whether
      // or not the bug is present. Returning null fails the test loudly instead.
      const main = document.querySelector("main.page-content");
      if (!main) return null;
      const host = document.createElement("div");
      host.innerHTML = `<h2 class="probe-heading">x</h2><h2>y</h2>`;
      const style = document.createElement("style");
      // One class, the weakest thing that must still win.
      style.textContent = ".probe-heading { font-size: 11px; }";
      document.head.appendChild(style);
      main.appendChild(host);
      const classed = getComputedStyle(host.querySelector(".probe-heading")!).fontSize;
      const bare = getComputedStyle(host.querySelectorAll("h2")[1]!).fontSize;
      host.remove();
      style.remove();
      return { classed, bare };
    });

    expect(probe, "probe must run inside main.page-content to mean anything").not.toBeNull();
    // The class wins...
    expect(probe!.classed).toBe("11px");
    // ...and the bare element still gets the template's prose default, i.e.
    // zeroing the specificity did not simply delete the styling.
    expect(probe!.bare).not.toBe("11px");
    expect(Number.parseFloat(probe!.bare)).toBeGreaterThan(16);
  });
});

test.describe("upgrade: boolean attributes are not inverted", () => {
  // Svelte writes an attribute on an element that has not upgraded yet, and
  // `centered={false}` stringifies to centered="false" — presence is truthy, so
  // false read as true and the app bar centred its title on every page.
  test("app bar is not centered when centered is false", async ({ page }) => {
    await page.goto("/showcase/components");
    const bar = page.locator("m3e-app-bar").first();
    await expect(bar).toBeVisible();

    expect(await bar.evaluate((el) => el.hasAttribute("centered"))).toBe(false);
    expect(await bar.evaluate((el) => (el as unknown as { centered: boolean }).centered)).toBe(
      false,
    );
  });
});

test.describe("layout: slotted card content is inset from the card border", () => {
  // m3e-card draws its border on an inner shadow element rather than :host, so
  // `padding` on the element pushes the bordered box inward and strands the
  // padding outside the visible card, leaving content flush against the border.
  // The supported route is the `content` slot plus --m3e-card-padding. This
  // measures the gap that actually matters: first content edge to border edge.
  test("card content clears the card's own border", async ({ page }) => {
    await page.goto("/showcase/components");
    const card = page.locator("m3e-card").first();
    await expect(card).toBeVisible();

    const inset = await card.evaluate((el) => {
      const base = el.shadowRoot?.querySelector<HTMLElement>(".base");
      // Step past the slot wrapper rather than measuring it: the generated
      // wrappers render slots as `display: contents`, and such an element
      // generates no box, so its getBoundingClientRect() is degenerate and
      // would make this assertion meaningless in either direction.
      const slot = el.querySelector<HTMLElement>("[slot='content']");
      const child = slot?.firstElementChild ?? el.firstElementChild;
      if (!base || !child) return null;
      const b = base.getBoundingClientRect();
      const c = child.getBoundingClientRect();
      return { left: Math.round(c.left - b.left), top: Math.round(c.top - b.top) };
    });

    expect(inset).not.toBeNull();
    // Anything at or below ~2px means the content is sitting on the border.
    expect(inset!.left).toBeGreaterThan(4);
    expect(inset!.top).toBeGreaterThan(4);
  });
});

test.describe("tokens: the M3 type scale is defined, not just referenced", () => {
  // @m3e components read --md-sys-typescale-* with fallbacks. If nothing defines
  // them, each component quietly uses its own default and app text can never be
  // made to agree with component text.
  test("typescale custom properties resolve at :root", async ({ page }) => {
    await page.goto("/showcase/components");
    // Wait for real content before reading computed values: on a cold dev
    // server the document can be interactive before its stylesheets have been
    // compiled and applied, and an unset custom property reads as "" — the
    // same result this test uses to signal failure.
    await expect(page.locator("m3e-card").first()).toBeVisible();

    const resolved = await page.evaluate(() => {
      const cs = getComputedStyle(document.documentElement);
      return {
        bodyLarge: cs.getPropertyValue("--md-sys-typescale-body-large-font-size").trim(),
        labelMedium: cs.getPropertyValue("--md-sys-typescale-label-medium-font-size").trim(),
      };
    });
    expect(resolved.bodyLarge).not.toBe("");
    expect(resolved.labelMedium).not.toBe("");
  });
});
