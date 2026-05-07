<script lang="ts">
import { base } from "$app/paths";
import Button from "$lib/m3e/Button.svelte";
import Shape from "$lib/m3e/Shape.svelte";
import { navItems } from "$lib/nav-items";

const shapes = ["circle", "soft-burst", "puffy", "8-leaf-clover", "sunny", "heart"];
let i = $state(0);
const cycle = () => {
  i = (i + 1) % shapes.length;
};

const destinations = navItems.filter((n) => n.href !== "/");
</script>

<section class="hero">
  <h1>bun-svelte-m3e-template</h1>
  <p class="body-large lede">
    Bun.serve backend + SvelteKit PWA + Material 3 Expressive UI. Click the shape below.
  </p>
  <div class="shape-row">
    <Shape name={shapes[i]} size="160px" color="var(--md-sys-color-primary)" onclick={cycle} />
  </div>
  <div class="cta-grid">
    {#each destinations as d (d.href)}
      <Button variant="tonal" size="large" href={`${base}${d.href}`}>
        {#snippet icon()}
          <m3e-icon slot="icon" name={d.icon}></m3e-icon>
        {/snippet}
        {d.label}
      </Button>
    {/each}
  </div>
</section>

<style>
.hero {
  padding: var(--space-4xl) 0;
  text-align: center;
}
.lede {
  margin: var(--space-md) auto var(--space-2xl);
}
.shape-row {
  display: flex;
  justify-content: center;
  padding: var(--space-2xl) 0;
}
.cta-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: var(--space-md);
  max-width: 720px;
  margin: var(--space-2xl) auto 0;
}
</style>
