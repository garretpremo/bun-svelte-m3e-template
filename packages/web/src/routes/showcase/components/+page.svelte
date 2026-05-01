<script lang="ts">
import Button from "$lib/m3e/Button.svelte";
import Card from "$lib/m3e/Card.svelte";
import Checkbox from "$lib/m3e/Checkbox.svelte";
import Chip from "$lib/m3e/Chip.svelte";
import ChipSet from "$lib/m3e/ChipSet.svelte";
import Dialog from "$lib/m3e/Dialog.svelte";
import Fab from "$lib/m3e/Fab.svelte";
import Snackbar from "$lib/m3e/Snackbar.svelte";
import Switch from "$lib/m3e/Switch.svelte";

const dialogOpen = $state(false);
const snackbarOpen = $state(false);
const switchOn = $state(true);
const checked = $state(false);
const filters = ["alpha", "beta", "gamma", "delta"];
const active = $state("alpha");
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
    <p>Filter:</p>
    <ChipSet>
      {#each filters as f}
        <Chip selected={active === f} onclick={() => (active = f)}>{f}</Chip>
      {/each}
    </ChipSet>
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
    <Checkbox bind:checked={checked} label="I agree" />
  </div>

  <h3>FAB</h3>
  <Fab variant="primary" aria-label="Add">+</Fab>
</section>
