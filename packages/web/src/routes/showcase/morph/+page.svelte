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

const COLOR_ROLES = ["primary", "secondary", "tertiary", "error"] as const;
type ColorRole = (typeof COLOR_ROLES)[number];

let i = $state(0);
let size = $state(160);
let duration = $state(450);
let overshoot = $state(0.55);
let springiness = $state(0.6);
let color = $state<ColorRole>("primary");
let autoCycle = $state(true);
let interval = $state(800);

const next = () => {
  i = (i + 1) % NAMES.length;
};

// y1 = 1 + overshoot lifts the curve's peak above the target value;
// x2 stretches the back half of the bezier so the snap-back lasts longer.
const transition = $derived.by(() => {
  const y1 = (1 + overshoot).toFixed(3);
  const x2 = (0.3 + springiness * 0.65).toFixed(3);
  return `${duration}ms cubic-bezier(0.34, ${y1}, ${x2}, 1)`;
});

$effect(() => {
  if (!autoCycle) return;
  const id = setInterval(next, interval);
  return () => clearInterval(id);
});
</script>

<section>
  <h2>Morph</h2>
  <p class="body-large">Animations driven by <code>--m3e-shape-transition</code>.</p>

  <div class="stage" style:--m3e-shape-transition={transition}>
    <div class="shape-frame">
      <Shape name={NAMES[i]} size="{size}px" color="var(--md-sys-color-{color})" unclip />
    </div>

    <div class="row">
      <Button variant="filled" onclick={next}>Next shape ({NAMES[i]})</Button>
    </div>
    <label class="toggle">
      <input type="checkbox" bind:checked={autoCycle} />
      Auto-cycle
    </label>

    <div class="controls">
      <label>
        <span class="label">Size</span>
        <input type="range" min="64" max="320" bind:value={size} />
        <span class="value">{size}px</span>
      </label>
      <label>
        <span class="label">Duration</span>
        <input type="range" min="50" max="2000" step="10" bind:value={duration} />
        <span class="value">{duration}ms</span>
      </label>
      <label>
        <span class="label">Overshoot</span>
        <input type="range" min="0" max="1" step="0.05" bind:value={overshoot} />
        <span class="value">{overshoot.toFixed(2)}</span>
      </label>
      <label>
        <span class="label">Springiness</span>
        <input type="range" min="0" max="1" step="0.05" bind:value={springiness} />
        <span class="value">{springiness.toFixed(2)}</span>
      </label>
      <label class:disabled={!autoCycle}>
        <span class="label">Cycle interval</span>
        <input
          type="range"
          min="250"
          max="4000"
          step="50"
          bind:value={interval}
          disabled={!autoCycle}
        />
        <span class="value">{interval}ms</span>
      </label>

      <fieldset class="colors">
        <legend>Color</legend>
        {#each COLOR_ROLES as role}
          <label class="color-option">
            <input type="radio" name="color" value={role} bind:group={color} />
            <span class="swatch" style:background="var(--md-sys-color-{role})"></span>
            {role}
          </label>
        {/each}
      </fieldset>

      <code class="curve">transition: {transition}</code>
    </div>
  </div>
</section>

<style>
.stage {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-xl);
  padding: var(--space-2xl) 0;
  overflow: visible;
}
.shape-frame {
  padding: var(--space-3xl);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
}
.row {
  display: flex;
  gap: var(--space-md);
  align-items: center;
}
.toggle {
  display: inline-flex;
  gap: var(--space-xs);
  align-items: center;
}
.controls {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-md) var(--space-xl);
  width: min(760px, 100%);
}
.controls label {
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  align-items: center;
  gap: var(--space-md);
}
.controls label.disabled {
  opacity: 0.5;
}
.controls input[type="range"] {
  width: 100%;
}
.controls .label {
  white-space: nowrap;
}
.controls .value {
  font-variant-numeric: tabular-nums;
  min-width: 5ch;
  text-align: right;
}
.colors {
  grid-column: 1 / -1;
  display: flex;
  gap: var(--space-md);
  flex-wrap: wrap;
  align-items: center;
  border: 1px solid color-mix(in srgb, currentColor 14%, transparent);
  border-radius: 8px;
  padding: var(--space-xs) var(--space-md) var(--space-sm);
}
.colors legend {
  padding: 0 var(--space-xs);
}
.color-option {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  grid-template-columns: none;
}
.swatch {
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 1px solid color-mix(in srgb, currentColor 24%, transparent);
}
.curve {
  grid-column: 1 / -1;
  font-size: 0.85em;
  opacity: 0.75;
  word-break: break-all;
}
</style>
