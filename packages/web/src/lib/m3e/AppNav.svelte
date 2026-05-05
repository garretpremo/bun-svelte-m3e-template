<script lang="ts">
import { browser } from "$app/environment";
import { goto } from "$app/navigation";
import { page } from "$app/stores";
import { tick } from "svelte";
if (browser) void import("@m3e/nav-menu");

type NavItem = { href: string; label: string; icon: string };
type NavGroup = { label: string; icon: string; open?: boolean; children: NavItem[] };
type NavEntry = NavItem | NavGroup;

const isGroup = (e: NavEntry): e is NavGroup => "children" in e;

const items: NavEntry[] = [
  { href: "/", label: "Home", icon: "home" },
  {
    label: "Showcase",
    icon: "palette",
    open: true,
    children: [
      { href: "/showcase", label: "Overview", icon: "dashboard" },
      { href: "/showcase/theme", label: "Theme", icon: "format_paint" },
      { href: "/showcase/shapes", label: "Shapes", icon: "category" },
      { href: "/showcase/morph", label: "Morph", icon: "animation" },
      { href: "/showcase/components", label: "Components", icon: "widgets" },
      { href: "/showcase/notes", label: "Notes", icon: "edit_note" },
    ],
  },
];

const leafItems = items.flatMap<NavItem>((e) => (isGroup(e) ? e.children : [e]));
let menu = $state<HTMLElement | undefined>();
const currentPath = $derived($page.url.pathname);

const isSelected = (href: string) => (href === "/" ? currentPath === "/" : currentPath === href);

// Reactive `selected={...}` doesn't stick on initial render — m3e-nav-menu's
// SelectionManager initializes during element upgrade and clears any
// pre-upgrade attribute set by Svelte. After upgrade we sync imperatively
// via the `selected` property, which routes through the manager.
$effect(() => {
  if (!browser || !menu) return;
  void currentPath;
  void customElements.whenDefined("m3e-nav-menu-item").then(async () => {
    await tick();
    // Apply unselects first, then the active selection. m3e propagates
    // a leaf's `selected` up to its ancestor group items, so the *last*
    // assignment wins for the ancestor's state — putting `true` last
    // ensures the parent group reflects the active leaf.
    const target = leafItems.find((i) => isSelected(i.href));
    for (const item of leafItems) {
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
  void goto(href);
};
</script>

<m3e-nav-menu bind:this={menu}>
  {#each items as item (isGroup(item) ? item.label : item.href)}
    {#if isGroup(item)}
      <m3e-nav-menu-item open={item.open || undefined}>
        <m3e-icon slot="icon" name={item.icon}></m3e-icon>
        <span slot="label">{item.label}</span>
        {#each item.children as child (child.href)}
          <m3e-nav-menu-item
            data-href={child.href}
            onclick={navigate(child.href)}
          >
            <m3e-icon slot="icon" name={child.icon}></m3e-icon>
            <span slot="label">{child.label}</span>
          </m3e-nav-menu-item>
        {/each}
      </m3e-nav-menu-item>
    {:else}
      <m3e-nav-menu-item
        data-href={item.href}
        onclick={navigate(item.href)}
      >
        <m3e-icon slot="icon" name={item.icon}></m3e-icon>
        <span slot="label">{item.label}</span>
      </m3e-nav-menu-item>
    {/if}
  {/each}
</m3e-nav-menu>
