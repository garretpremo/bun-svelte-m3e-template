<script lang="ts">
import { base } from "$app/paths";
import Button from "$lib/m3e/Button.svelte";
import Shape from "$lib/m3e/Shape.svelte";
import { STATIC_BUILD } from "$lib/static-build";

const shapes = ["circle", "soft-burst", "puffy", "8-leaf-clover", "sunny", "heart"];
let i = $state(0);
const cycle = () => {
  i = (i + 1) % shapes.length;
};
</script>

<section class="hero">
  <h1>bun-svelte-m3e-template</h1>
  <p class="body-large lede">
    Bun.serve backend + SvelteKit PWA + Material 3 Expressive UI. Click the shape below.
  </p>
  <div class="shape-row">
    <Shape name={shapes[i]} size="160px" color="var(--md-sys-color-primary)" onclick={cycle} />
  </div>
  <div class="cta-row">
    <a href="{base}/showcase" class="bare-link"><Button variant="filled">Open showcase</Button></a>
    {#if !STATIC_BUILD}
      <a href="{base}/docs" class="bare-link"><Button variant="outlined">API reference</Button></a>
    {/if}
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
.cta-row {
  display: flex;
  gap: var(--space-md);
  justify-content: center;
  margin-top: var(--space-2xl);
}
.bare-link {
  text-decoration: none;
}
</style>
