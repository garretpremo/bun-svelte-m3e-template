<script lang="ts">
import { browser } from "$app/environment";
if (browser) void import("@m3e/checkbox");
interface Props {
  checked?: boolean;
  disabled?: boolean;
  onchange?: (e: Event) => void;
  label?: string;
}
let { checked = $bindable(false), disabled, onchange, label }: Props = $props();
</script>

<label style="display:inline-flex; align-items:center; gap:0.5rem;">
  <m3e-checkbox {checked} {disabled} onchange={(e: Event) => { checked = (e.target as any).checked; onchange?.(e); }}></m3e-checkbox>
  {#if label}<span>{label}</span>{/if}
</label>
