<script lang="ts">
import { browser } from "$app/environment";
import { goto } from "$app/navigation";
import { base } from "$app/paths";
import { page } from "$app/stores";
import { navItems } from "$lib/nav-items";
import { tick } from "svelte";
if (browser) void import("@m3e/nav-menu");

const rootPath = base || "/";
const resolve = (href: string) => (href === "/" ? rootPath : `${base}${href}`);

let menu = $state<HTMLElement | undefined>();
const currentPath = $derived($page.url.pathname);
const isSelected = (href: string) => currentPath === resolve(href);

// Reactive `selected={...}` doesn't stick on initial render — m3e-nav-menu's
// SelectionManager initializes during element upgrade and clears any
// pre-upgrade attribute set by Svelte. After upgrade we sync imperatively
// via the `selected` property, which routes through the manager.
$effect(() => {
  if (!browser || !menu) return;
  void currentPath;
  void customElements.whenDefined("m3e-nav-menu-item").then(async () => {
    await tick();
    const target = navItems.find((i) => isSelected(i.href));
    for (const item of navItems) {
      if (item === target) continue;
      const el = menu?.querySelector<HTMLElement>(`[data-href="${item.href}"]`);
      if (el) (el as unknown as { selected: boolean }).selected = false;
    }
    if (target) {
      const el = menu?.querySelector<HTMLElement>(`[data-href="${target.href}"]`);
      if (el) (el as unknown as { selected: boolean }).selected = true;
    }
  });
});

const navigate = (href: string) => (e: Event) => {
  e.preventDefault();
  void goto(resolve(href));
};
</script>

<m3e-nav-menu bind:this={menu}>
  {#each navItems as item (item.href)}
    <m3e-nav-menu-item
      data-href={item.href}
      onclick={navigate(item.href)}
    >
      <m3e-icon slot="icon" name={item.icon}></m3e-icon>
      <span slot="label">{item.label}</span>
    </m3e-nav-menu-item>
  {/each}
</m3e-nav-menu>
