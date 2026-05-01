<script lang="ts">
import { browser } from "$app/environment";
import type { Snippet } from "svelte";
if (browser) void import("@m3e/select");
interface Props {
  value?: string;
  label?: string;
  children?: Snippet;
  onchange?: (v: string) => void;
}
const { value = $bindable(""), label, children, onchange }: Props = $props();
</script>

<m3e-select {value} {label} onchange={(e: Event) => { value = (e.target as any).value; onchange?.(value); }}>
  {@render children?.()}
</m3e-select>
