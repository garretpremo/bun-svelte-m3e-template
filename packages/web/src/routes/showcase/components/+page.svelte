<script lang="ts">
import Dialog from "$lib/m3e/Dialog.svelte";
import Snackbar from "$lib/m3e/Snackbar.svelte";
import { Button, Card, Checkbox, Chip, ChipSet, Fab, Switch } from "@app/m3e-svelte";

// `$state` runes need `let` — Svelte rebinds via template event handlers.
// Biome's useConst auto-fix is wrong for runes; never run --unsafe here.
let dialogOpen = $state(false);
let snackbarOpen = $state(false);
let switchOn = $state(true);
let checked = $state(false);
const filters = ["alpha", "beta", "gamma", "delta"];
let active = $state("alpha");
</script>

<section>
  <h2>Components</h2>

  <h3>Buttons</h3>
  <div style="display:flex; gap: var(--space-md); flex-wrap:wrap;">
    <Button variant="filled">Filled</Button>
    <Button variant="tonal">Tonal</Button>
    <Button variant="outlined">Outlined</Button>
    <Button variant="text">Text</Button>
    <Button variant="elevated">Elevated</Button>
  </div>

  <h3>Card + Chips</h3>
  <Card variant="outlined">
    {#snippet content()}
      <p>Filter:</p>
      <ChipSet>
        {#each filters as f}
          <Chip selected={active === f} onclick={() => (active = f)}>{f}</Chip>
        {/each}
      </ChipSet>
    {/snippet}
  </Card>

  <h3>Dialog & Snackbar</h3>
  <div style="display:flex; gap: var(--space-md);">
    <Button onclick={() => (dialogOpen = true)}>Open dialog</Button>
    <Button onclick={() => (snackbarOpen = true)} variant="tonal">Show snackbar</Button>
  </div>
  <Dialog bind:open={dialogOpen} headline="Are you sure?">
    <p>This is a Material 3 Expressive dialog.</p>
    {#snippet actions()}
      <Button variant="text" onclick={() => (dialogOpen = false)}>Cancel</Button>
      <Button variant="filled" onclick={() => (dialogOpen = false)}>Confirm</Button>
    {/snippet}
  </Dialog>
  <Snackbar bind:open={snackbarOpen} message="Saved." />

  <h3>Toggles</h3>
  <div style="display:flex; gap: var(--space-lg); align-items:center;">
    <Switch bind:checked={switchOn} />
    <span>Switch is {switchOn ? "on" : "off"}</span>
    <label style="display:inline-flex; align-items:center; gap:0.5rem;">
      <Checkbox bind:checked={checked} />
      I agree
    </label>
  </div>

  <h3>FAB</h3>
  <Fab variant="primary" aria-label="Add">+</Fab>
</section>
