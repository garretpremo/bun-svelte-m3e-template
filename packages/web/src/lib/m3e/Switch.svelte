<script lang="ts">
import { browser } from "$app/environment";
if (browser) void import("@m3e/switch");
interface Props {
  checked?: boolean;
  disabled?: boolean;
  onchange?: (e: Event) => void;
}
const { checked = $bindable(false), disabled, onchange }: Props = $props();
</script>

<m3e-switch {checked} {disabled} onchange={(e: Event) => { checked = (e.target as any).checked; onchange?.(e); }}></m3e-switch>
