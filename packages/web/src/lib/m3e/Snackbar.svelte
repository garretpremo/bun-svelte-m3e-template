<script lang="ts">
import { browser } from "$app/environment";
if (browser) void import("@m3e/snackbar");

interface Props {
  open?: boolean;
  message?: string;
  duration?: number;
}
let { open = $bindable(false), message = "", duration = 4000 }: Props = $props();

type PopoverEl = HTMLElement & { showPopover?: () => void; hidePopover?: () => void };
let el = $state<PopoverEl>();

// This wrapper previously passed `open`, `message` and `timeout` — three
// attributes m3e-snackbar does not have. Checked against the element's own
// custom-elements manifest (see src/generated/Snackbar.svelte, which is derived
// from it): the real surface is `action`, `close-label`, `dismissible`,
// `duration`, plus `onbeforetoggle`/`ontoggle`. The consequences, all silent:
//
//  - No `open` property at all. The element is `popover="manual"`, shown and
//    hidden only by the native showPopover()/hidePopover() methods — which is
//    exactly what the library's own `M3eSnackbar.open()` helper calls. Nothing
//    connected this wrapper's `open` state to visibility, so every snackbar
//    stayed permanently hidden regardless of the other props.
//  - No `message` attribute. The supporting text is the default slot.
//  - No `timeout`; the real property is `duration`. The element always used its
//    own default no matter what was passed.
//  - No `close` event. Only the native Popover API's `toggle` fires, with
//    `e.newState` distinguishing open from closed, so `bind:open` never learned
//    when the element closed itself — `open` stuck `true` after the first show
//    and every later snackbar in the session silently failed to reappear
//    (assigning `true` to an already-`true` $state is a no-op).
//
// Gated on the element actually being upgraded: showPopover()/hidePopover() are
// native HTMLElement methods present immediately, but they throw
// NotSupportedError until the element's constructor has set a valid `popover`
// attribute. Without the gate, a message shown before the dynamic import
// resolves would fail and never retry, since this effect only reruns when
// `open` changes again.
let ready = $state(false);
$effect(() => {
  if (!browser) return;
  let cancelled = false;
  customElements.whenDefined("m3e-snackbar").then(() => {
    if (!cancelled) ready = true;
  });
  return () => {
    cancelled = true;
  };
});

$effect(() => {
  if (!ready || !el) return;
  try {
    if (open) el.showPopover?.();
    else el.hidePopover?.();
  } catch {
    // The Popover API throws if asked to show/hide a popover already in that
    // state — e.g. a duplicate mount effect firing while already open. Safe to
    // ignore: the DOM is already where this effect was trying to put it.
  }
});
</script>

<m3e-snackbar
  bind:this={el}
  {duration}
  ontoggle={(e: ToggleEvent) => {
    if (e.newState === "closed") open = false;
  }}
>
  {message}
</m3e-snackbar>
