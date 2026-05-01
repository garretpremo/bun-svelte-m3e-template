<script lang="ts">
  import Shape from "$lib/m3e/Shape.svelte";

  const NAMES = [
    "4-leaf-clover","4-sided-cookie","6-sided-cookie","7-sided-cookie","8-leaf-clover",
    "9-sided-cookie","12-sided-cookie","arch","arrow","boom","bun","burst","circle","diamond",
    "fan","flower","gem","ghost-ish","heart","hexagon","oval","pentagon","pill",
    "pixel-circle","pixel-triangle","puffy","puffy-diamond","semicircle","slanted",
    "soft-boom","soft-burst","square","sunny","triangle","very-sunny",
  ] as const;

  // Click a shape to morph it to the next name in the list.
  let indices = $state(NAMES.map((_, i) => i));
  function cycle(i: number) {
    indices[i] = (indices[i] + 1) % NAMES.length;
  }
</script>

<section>
  <h2>Shapes</h2>
  <p class="body-large">Click any shape to morph it to the next one.</p>
  <div style="
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: var(--space-lg);
    padding: var(--space-2xl) 0;
  ">
    {#each NAMES as _, i}
      <div style="display:flex; flex-direction:column; align-items:center; gap: var(--space-xs);">
        <Shape
          name={NAMES[indices[i]]}
          size="96px"
          color="var(--md-sys-color-primary-container)"
          onclick={() => cycle(i)}
        />
        <small style="color: var(--md-sys-color-on-surface-variant);">{NAMES[indices[i]]}</small>
      </div>
    {/each}
  </div>
</section>
