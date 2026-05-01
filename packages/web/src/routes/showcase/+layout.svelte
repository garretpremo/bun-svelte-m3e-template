<script lang="ts">
import { page } from "$app/stores";
const { children } = $props();
const items = [
  { href: "/showcase/shapes", label: "Shapes" },
  { href: "/showcase/morph", label: "Morph" },
  { href: "/showcase/components", label: "Components" },
  { href: "/showcase/notes", label: "Notes (CRUD)" },
];
</script>

<nav style="display:flex; gap: var(--space-md); padding: var(--space-md) 0; flex-wrap:wrap;">
  {#each items as item}
    <a
      href={item.href}
      style="
        text-decoration: none;
        padding: var(--space-xs) var(--space-md);
        border-radius: 999px;
        border: 1px solid var(--md-sys-color-outline-variant);
        color: var(--md-sys-color-on-surface);
        background: { $page.url.pathname === item.href ? 'var(--md-sys-color-secondary-container)' : 'transparent' };
      "
    >{item.label}</a>
  {/each}
</nav>
{@render children?.()}
