<script lang="ts">
import Button from "$lib/m3e/Button.svelte";
import Shape from "$lib/m3e/Shape.svelte";

const shapes = ["circle", "soft-burst", "puffy", "8-leaf-clover", "sunny", "heart"];
let i = $state(0);
const cycle = () => {
  i = (i + 1) % shapes.length;
};
</script>

<section style="padding: var(--space-4xl) 0; text-align: center;">
  <h1>bun-svelte-m3e-template</h1>
  <p class="body-large" style="margin: var(--space-md) auto var(--space-2xl);">
    Bun.serve backend + SvelteKit PWA + Material 3 Expressive UI. Click the shape below.
  </p>
  <div style="display: flex; justify-content: center; padding: var(--space-2xl) 0;">
    <Shape name={shapes[i]} size="160px" color="var(--md-sys-color-primary)" onclick={cycle} />
  </div>
  <div style="display: flex; gap: var(--space-md); justify-content: center; margin-top: var(--space-2xl);">
    <a href="/showcase" style="text-decoration:none;"><Button variant="filled">Open showcase</Button></a>
    <a href="/docs" style="text-decoration:none;"><Button variant="outlined">API reference</Button></a>
  </div>
</section>
