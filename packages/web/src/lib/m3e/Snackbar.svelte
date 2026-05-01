<script lang="ts">
import { browser } from "$app/environment";
import type { Snippet } from "svelte";
if (browser) void import("@m3e/snackbar");
interface Props {
  open?: boolean;
  message?: string;
  timeout?: number;
  actions?: Snippet;
}
const { open = $bindable(false), message = "", timeout = 4000, actions }: Props = $props();
</script>

<m3e-snackbar {open} {message} {timeout} onclose={() => (open = false)}>
  {#if actions}<div slot="actions">{@render actions()}</div>{/if}
</m3e-snackbar>
