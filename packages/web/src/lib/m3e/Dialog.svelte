<script lang="ts">
import { browser } from "$app/environment";
import type { Snippet } from "svelte";
if (browser) void import("@m3e/dialog");
interface Props {
  open?: boolean;
  headline?: string;
  children?: Snippet;
  actions?: Snippet;
  onclose?: () => void;
}
let { open = $bindable(false), headline, children, actions, onclose }: Props = $props();
</script>

<m3e-dialog {open} {headline} onclose={() => { open = false; onclose?.(); }}>
  {@render children?.()}
  {#if actions}<div slot="actions">{@render actions()}</div>{/if}
</m3e-dialog>
