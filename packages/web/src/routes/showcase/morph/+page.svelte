<script lang="ts">
import Button from "$lib/m3e/Button.svelte";
import Shape from "$lib/m3e/Shape.svelte";

const NAMES = [
  "circle",
  "sunny",
  "very-sunny",
  "puffy",
  "soft-burst",
  "8-leaf-clover",
  "heart",
  "gem",
  "diamond",
  "square",
];
let i = $state(0);
const size = $state(160);
const next = () => {
  i = (i + 1) % NAMES.length;
};
</script>

<section>
  <h2>Morph</h2>
  <p class="body-large">Animations driven by <code>--m3e-shape-transition</code>.</p>

  <div style="display:flex; flex-direction:column; align-items:center; gap: var(--space-xl); padding: var(--space-2xl) 0;">
    <Shape name={NAMES[i]} size="{size}px" color="var(--md-sys-color-primary)" />
    <div style="display:flex; gap: var(--space-md);">
      <Button variant="filled" onclick={next}>Next shape ({NAMES[i]})</Button>
    </div>
    <label style="display:flex; gap: var(--space-md); align-items:center;">
      Size: <input type="range" min="64" max="320" bind:value={size} /> {size}px
    </label>
  </div>
</section>
