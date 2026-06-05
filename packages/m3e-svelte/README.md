# `@app/m3e-svelte`

Generated Svelte 5 wrappers for the `@m3e/*` Material 3 web components.

Run `bun run --filter @app/m3e-svelte generate` after upgrading any `@m3e/*` peer.

```svelte
import { Button, Dialog } from "@app/m3e-svelte";
```

## Components

### `Accordion` — `<m3e-accordion>` (`@m3e/expansion-panel`)

Combines multiple expansion panels in to an accordion.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `multi` | `boolean` | `false` | Whether multiple expansion panels can be open at the same time. |

**Slots:** `(default)`

### `ActionList` — `<m3e-action-list>` (`@m3e/list`)

A list of actions.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `variant` | `ListVariant` | `"standard"` | The appearance variant of the list. |

**Slots:** `(default)`

<details><summary>CSS custom properties (10)</summary>

- `--m3e-list-divider-inset-start-size` — Start inset for dividers within the list.
- `--m3e-list-divider-inset-end-size` — End inset for dividers within the list.
- `--m3e-segmented-list-segment-gap` — Gap between list items in segmented variant.
- `--m3e-segmented-list-container-shape` — Border radius of the segmented list container.
- `--m3e-segmented-list-item-container-color` — Background color of items in segmented variant.
- `--m3e-segmented-list-item-disabled-container-color` — Background color of disabled items in segmented variant.
- `--m3e-segmented-list-item-container-shape` — Border radius of items in segmented variant.
- `--m3e-segmented-list-item-hover-container-shape` — Border radius of items in segmented variant on hover.
- `--m3e-segmented-list-item-focus-container-shape` — Border radius of items in segmented variant on focus.
- `--m3e-segmented-list-item-selected-container-shape` — Border radius of items in segmented variant when selected.

</details>

### `AppBar` — `<m3e-app-bar>` (`@m3e/app-bar`)

A bar, placed a the top of a screen, used to help users navigate through an application.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `centered` | `boolean` | `false` | Whether the title and subtitle are centered. |
| `for` | `string | null` | `null` | The identifier of the interactive control to which this element is attached. |
| `size` | `AppBarSize` | `"small"` | The size of the bar. |

**Slots:** `leading-icon`, `subtitle`, `title`, `trailing-icon`

<details><summary>CSS custom properties (51)</summary>

- `--m3e-app-bar-container-color` — Background color of the app bar container.
- `--m3e-app-bar-container-color-on-scroll` — Background color of the app bar container when scrolled.
- `--m3e-app-bar-container-elevation` — Elevation (shadow) of the app bar container.
- `--m3e-app-bar-container-elevation-on-scroll` — Elevation (shadow) of the app bar container when scrolled.
- `--m3e-app-bar-title-text-color` — Color of the app bar title text.
- `--m3e-app-bar-subtitle-text-color` — Color of the app bar subtitle text.
- `--m3e-app-bar-padding-left` — Left padding for the app bar container.
- `--m3e-app-bar-padding-right` — Right padding for the app bar container.
- `--m3e-app-bar-small-container-height` — Height of the small app bar container.
- `--m3e-app-bar-small-title-text-font-size` — Font size for the small app bar title text.
- `--m3e-app-bar-small-title-text-font-weight` — Font weight for the small app bar title text.
- `--m3e-app-bar-small-title-text-line-height` — Line height for the small app bar title text.
- `--m3e-app-bar-small-subtitle-text-tracking` — Letter spacing (tracking) for the small app bar title text.
- `--m3e-app-bar-small-subtitle-text-font-size` — Font size for the small app bar subtitle text.
- `--m3e-app-bar-small-subtitle-text-font-weight` — Font weight for the small app bar subtitle text.
- `--m3e-app-bar-small-subtitle-text-line-height` — Line height for the small app bar subtitle text.
- `--m3e-app-bar-small-subtitle-text-tracking` — Letter spacing (tracking) for the small app bar subtitle text.
- `--m3e-app-bar-small-heading-padding-left` — Left padding for the small app bar heading.
- `--m3e-app-bar-small-heading-padding-right` — Right padding for the small app bar heading.
- `--m3e-app-bar-medium-container-height` — Height of the medium app bar container.
- `--m3e-app-bar-medium-container-height-with-subtitle` — Height of the medium app bar container with subtitle.
- `--m3e-app-bar-medium-title-text-font-size` — Font size for the medium app bar title text.
- `--m3e-app-bar-medium-title-text-font-weight` — Font weight for the medium app bar title text.
- `--m3e-app-bar-medium-title-text-line-height` — Line height for the medium app bar title text.
- `--m3e-app-bar-medium-subtitle-text-tracking` — Letter spacing (tracking) for the medium app bar title text.
- `--m3e-app-bar-medium-subtitle-text-font-size` — Font size for the medium app bar subtitle text.
- `--m3e-app-bar-medium-subtitle-text-font-weight` — Font weight for the medium app bar subtitle text.
- `--m3e-app-bar-medium-subtitle-text-line-height` — Line height for the medium app bar subtitle text.
- `--m3e-app-bar-medium-subtitle-text-tracking` — Letter spacing (tracking) for the medium app bar subtitle text.
- `--m3e-app-bar-medium-heading-padding-left` — Left padding for the medium app bar heading.
- `--m3e-app-bar-medium-heading-padding-right` — Right padding for the medium app bar heading.
- `--m3e-app-bar-medium-padding-top` — Top padding for the medium app bar.
- `--m3e-app-bar-medium-padding-bottom` — Bottom padding for the medium app bar.
- `--m3e-app-bar-medium-title-max-lines` — Maximum number of lines for the medium app bar title.
- `--m3e-app-bar-medium-subtitle-max-lines` — Maximum number of lines for the medium app bar subtitle.
- `--m3e-app-bar-large-container-height` — Height of the large app bar container.
- `--m3e-app-bar-large-container-height-with-subtitle` — Height of the large app bar container with subtitle.
- `--m3e-app-bar-large-title-text-font-size` — Font size for the large app bar title text.
- `--m3e-app-bar-large-title-text-font-weight` — Font weight for the large app bar title text.
- `--m3e-app-bar-large-title-text-line-height` — Line height for the large app bar title text.
- `--m3e-app-bar-large-subtitle-text-tracking` — Letter spacing (tracking) for the large app bar title text.
- `--m3e-app-bar-large-subtitle-text-font-size` — Font size for the large app bar subtitle text.
- `--m3e-app-bar-large-subtitle-text-font-weight` — Font weight for the large app bar subtitle text.
- `--m3e-app-bar-large-subtitle-text-line-height` — Line height for the large app bar subtitle text.
- `--m3e-app-bar-large-subtitle-text-tracking` — Letter spacing (tracking) for the large app bar subtitle text.
- `--m3e-app-bar-large-heading-padding-left` — Left padding for the large app bar heading.
- `--m3e-app-bar-large-heading-padding-right` — Right padding for the large app bar heading.
- `--m3e-app-bar-large-padding-top` — Top padding for the large app bar.
- `--m3e-app-bar-large-padding-bottom` — Bottom padding for the large app bar.
- `--m3e-app-bar-large-title-max-lines` — Maximum number of lines for the large app bar title.
- `--m3e-app-bar-large-subtitle-max-lines` — Maximum number of lines for the large app bar subtitle.

</details>

### `AssistChip` — `<m3e-assist-chip>` (`@m3e/chips`)

A chip users interact with to perform a smart or automated action that can span multiple applications.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `disabled` | `boolean` | `false` | A value indicating whether the element is disabled. |
| `disabled-interactive` | `boolean` | `false` | A value indicating whether the element is disabled and interactive. |
| `download` | `string | null` | `null` | A value indicating whether the `target` of the link button will be downloaded, optionally specifying the new name of the file. |
| `href` | `string` | `""` | The URL to which the link button points. |
| `name` | `string` | `` | The name of the element, submitted as a pair with the element's `value` as part of form data, when the element is used to submit a form. |
| `rel` | `string` | `""` | The relationship between the `target` of the link button and the document. |
| `target` | `LinkTarget` | `""` | The target of the link button. |
| `type` | `FormSubmitterType` | `"button"` | The type of the element. |
| `value` | `string` | `` | A string representing the value of the chip. |
| `variant` | `ChipVariant` | `"outlined"` | The appearance variant of the chip. |

**Slots:** `(default)`, `icon`, `trailing-icon`

**Events:** `click`

<details><summary>CSS custom properties (28)</summary>

- `--m3e-chip-container-shape` — Border radius of the chip container.
- `--m3e-chip-container-height` — Base height of the chip container before density adjustment.
- `--m3e-chip-label-text-font-size` — Font size of the chip label text.
- `--m3e-chip-label-text-font-weight` — Font weight of the chip label text.
- `--m3e-chip-label-text-line-height` — Line height of the chip label text.
- `--m3e-chip-label-text-tracking` — Letter spacing of the chip label text.
- `--m3e-chip-label-text-color` — Label text color in default state.
- `--m3e-chip-icon-color` — Icon color in default state.
- `--m3e-chip-icon-size` — Font size of leading/trailing icons.
- `--m3e-chip-spacing` — Horizontal gap between chip content elements.
- `--m3e-chip-padding-start` — Default start padding when no icon is present.
- `--m3e-chip-padding-end` — Default end padding when no trailing icon is present.
- `--m3e-chip-with-icon-padding-start` — Start padding when leading icon is present.
- `--m3e-chip-with-icon-padding-end` — End padding when trailing icon is present.
- `--m3e-chip-disabled-label-text-color` — Base color for disabled label text.
- `--m3e-chip-disabled-label-text-opacity` — Opacity applied to disabled label text.
- `--m3e-chip-disabled-icon-color` — Base color for disabled icons.
- `--m3e-chip-disabled-icon-opacity` — Opacity applied to disabled icons.
- `--m3e-elevated-chip-container-color` — Background color for elevated variant.
- `--m3e-elevated-chip-elevation` — Elevation level for elevated variant.
- `--m3e-elevated-chip-hover-elevation` — Elevation level on hover.
- `--m3e-elevated-chip-disabled-container-color` — Background color for disabled elevated variant.
- `--m3e-elevated-chip-disabled-container-opacity` — Opacity applied to disabled elevated background.
- `--m3e-elevated-chip-disabled-elevation` — Elevation level for disabled elevated variant.
- `--m3e-outlined-chip-outline-thickness` — Outline thickness for outlined variant.
- `--m3e-outlined-chip-outline-color` — Outline color for outlined variant.
- `--m3e-outlined-chip-disabled-outline-color` — Outline color for disabled outlined variant.
- `--m3e-outlined-chip-disabled-outline-opacity` — Opacity applied to disabled outline.

</details>

### `Autocomplete` — `<m3e-autocomplete>` (`@m3e/autocomplete`)

Enhances a text input with suggested options.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `auto-activate` | `boolean` | `false` | Whether the first option should be automatically activated. |
| `hide-selection-indicator` | `boolean` | `false` | Whether to hide the selection indicator. |
| `required` | `boolean` | `false` | Whether the user is required to make a selection when interacting with the autocomplete. |
| `for` | `string | null` | `null` | The identifier of the interactive control to which this element is attached. |

**Slots:** `(default)`

**Events:** `toggle`

### `Avatar` — `<m3e-avatar>` (`@m3e/avatar`)

An image, icon or textual initials representing a user or other identity.

**Slots:** `(default)`

<details><summary>CSS custom properties (8)</summary>

- `--m3e-avatar-size` — Size of the avatar.
- `--m3e-avatar-shape` — Border radius of the avatar.
- `--m3e-avatar-font-size` — Font size for the avatar.
- `--m3e-avatar-font-weight` — Font weight for the avatar.
- `--m3e-avatar-line-height` — Line height for the avatar.
- `--m3e-avatar-tracking` — Letter spacing for the avatar.
- `--m3e-avatar-color` — Background color of the avatar.
- `--m3e-avatar-label-color` — Text color of the avatar.

</details>

### `Badge` — `<m3e-badge>` (`@m3e/badge`)

A visual indicator used to label content.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `size` | `BadgeSize` | `"medium"` | The size of the badge. |
| `position` | `BadgePosition` | `"above-after"` | The position of the badge, when attached to another element. |
| `for` | `string | null` | `null` | The identifier of the interactive control to which this element is attached. |

**Slots:** `(default)`

<details><summary>CSS custom properties (14)</summary>

- `--m3e-badge-shape` — Corner radius of the badge.
- `--m3e-badge-color` — Foreground color of badge content.
- `--m3e-badge-container-color` — Background color of the badge.
- `--m3e-badge-small-size` — Fixed dimensions for small badge. Used for minimal indicators (e.g. dot).
- `--m3e-badge-medium-size` — Height and min-width for medium badge.
- `--m3e-badge-medium-font-size` — Font size for medium badge label.
- `--m3e-badge-medium-font-weight` — Font weight for medium badge label.
- `--m3e-badge-medium-line-height` — Line height for medium badge label.
- `--m3e-badge-medium-tracking` — Letter spacing for medium badge label.
- `--m3e-badge-large-size` — Height and min-width for large badge.
- `--m3e-badge-large-font-size` — Font size for large badge label.
- `--m3e-badge-large-font-weight` — Font weight for large badge label.
- `--m3e-badge-large-line-height` — Line height for large badge label.
- `--m3e-badge-large-tracking` — Letter spacing for large badge label.

</details>

### `BottomSheet` — `<m3e-bottom-sheet>` (`@m3e/bottom-sheet`)

A sheet used to show secondary content anchored to the bottom of the screen.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `detent` | `number` | `0` | The zero‑based index of the detent the sheet should open to. |
| `detents` | `string[]` | `[]` | Detents (discrete height states) the sheet can snap to. |
| `handle` | `boolean` | `false` | Whether to display a drag handle and enable the top region of the sheet as a gesture surface for dragging between detents. |
| `handle-label` | `string` | `"Drag handle"` | The accessible label given to the drag handle. |
| `hideable` | `boolean` | `false` | Whether the bottom sheet can hide when its swiped down. |
| `hide-friction` | `number` | `0.5` | The friction coefficient to hide the sheet, or set it to the next closest expanded detent. |
| `modal` | `boolean` | `false` | Whether the bottom sheet behaves as modal. |
| `open` | `boolean` | `false` | Whether the bottom sheet is open. |

**Slots:** `(default)`, `header`

**Events:** `opening`, `closing`, `cancel`, `opened`, `closed`

<details><summary>CSS custom properties (32)</summary>

- `--m3e-bottom-sheet-width` — The width of the sheet.
- `--m3e-bottom-sheet-max-width` — The maximum width of the sheet.
- `--m3e-bottom-sheet-container-color` — The background color of the sheet container.
- `--m3e-bottom-sheet-elevation` — The elevation level when not modal.
- `--m3e-bottom-sheet-modal-elevation` — The elevation level when modal.
- `--m3e-bottom-sheet-full-elevation` — The elevation level when full height.
- `--m3e-bottom-sheet-z-index` — The z-index of the non-modal sheet.
- `--m3e-bottom-sheet-minimized-container-shape` — The border radius when minimized.
- `--m3e-bottom-sheet-container-shape` — The border radius of the sheet container.
- `--m3e-bottom-sheet-full-container-shape` — The border radius when full height.
- `--m3e-bottom-sheet-scrim-color` — The color of the scrim overlay.
- `--m3e-bottom-sheet-scrim-opacity` — The opacity of the scrim overlay.
- `--m3e-bottom-sheet-peek-height` — The visible height when minimized.
- `--m3e-bottom-sheet-compact-top-space` — The top space in compact mode.
- `--m3e-bottom-sheet-top-space` — The top space in standard mode.
- `--m3e-bottom-sheet-padding-block` — The vertical padding.
- `--m3e-bottom-sheet-padding-inline` — The horizontal padding.
- `--m3e-bottom-sheet-handle-container-height` — The height of the drag handle container.
- `--m3e-bottom-sheet-handle-width` — The width of the drag handle.
- `--m3e-bottom-sheet-handle-height` — The height of the drag handle.
- `--m3e-bottom-sheet-handle-shape` — The border radius of the handle.
- `--m3e-bottom-sheet-handle-color` — The color of the drag handle.
- `--m3e-bottom-sheet-handle-focus-ring-offset` — The offset of the focus ring around the handle.
- `--m3e-bottom-sheet-color` — The foreground (text) color of the sheet.
- `--m3e-bottom-sheet-content-font-size` — Font size for the sheet content.
- `--m3e-bottom-sheet-content-font-weight` — Font weight for the sheet content.
- `--m3e-bottom-sheet-content-line-height` — Line height for the sheet content.
- `--m3e-bottom-sheet-content-tracking` — Letter spacing (tracking) for the sheet content.
- `--m3e-bottom-sheet-header-font-size` — Font size for the sheet header.
- `--m3e-bottom-sheet-header-font-weight` — Font weight for the sheet header.
- `--m3e-bottom-sheet-header-line-height` — Line height for the sheet header.
- `--m3e-bottom-sheet-header-tracking` — Letter spacing (tracking) for the sheet header.

</details>

### `BottomSheetAction` — `<m3e-bottom-sheet-action>` (`@m3e/bottom-sheet`)

An element, nested within a clickable element, used to close a parenting bottom sheet.

**Slots:** `(default)`

### `BottomSheetTrigger` — `<m3e-bottom-sheet-trigger>` (`@m3e/bottom-sheet`)

An element, nested within a clickable element, used to trigger a bottom sheet.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `detent` | `number | undefined` | `undefined` | The zero‑based index of the detent the sheet should open to. |
| `secondary` | `boolean` | `false` | Marks this trigger as a secondary trigger for accessibility. Secondary triggers do not receive ARIA ownership. |
| `for` | `string | null` | `null` | The identifier of the interactive control to which this element is attached. |

**Slots:** `(default)`

### `Button` — `<m3e-button>` (`@m3e/button`)

A button users interact with to perform an action.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `disabled` | `boolean` | `false` | Whether the element is disabled. |
| `disabled-interactive` | `boolean` | `false` | Whether the element is disabled and interactive. |
| `download` | `string | null` | `null` | A value indicating whether the `target` of the link button will be downloaded, optionally specifying the new name of the file. |
| `href` | `string` | `""` | The URL to which the link button points. |
| `name` | `string` | `` | The name of the element, submitted as a pair with the element's `value` as part of form data, when the element is used to submit a form. |
| `rel` | `string` | `""` | The relationship between the `target` of the link button and the document. |
| `selected` | `boolean` | `false` | Whether the toggle button is selected. |
| `shape` | `ButtonShape` | `"rounded"` | The shape of the button. |
| `size` | `ButtonSize` | `"small"` | The size of the button. |
| `target` | `LinkTarget` | `""` | The target of the link button. |
| `toggle` | `boolean` | `false` | Whether the button will toggle between selected and unselected states. |
| `type` | `FormSubmitterType` | `"button"` | The type of the element. |
| `value` | `string` | `` | The value associated with the element's name when it's submitted with form data. |
| `variant` | `ButtonVariant` | `"text"` | The appearance variant of the button. |

**Slots:** `(default)`, `icon`, `selected`, `selected-icon`, `trailing-icon`

**Events:** `input`, `change`, `click`

<details><summary>CSS custom properties (315)</summary>

- `--m3e-button-extra-small-container-height` — Height of the button container, for the extra-small size variant.
- `--m3e-button-extra-small-outline-thickness` — Thickness of the button outline, for the extra-small size variant.
- `--m3e-button-extra-small-label-text-font-size` — Font size for the label text, for the extra-small size variant.
- `--m3e-button-extra-small-label-text-font-weight` — Font weight for the label text, for the extra-small size variant.
- `--m3e-button-extra-small-label-text-line-height` — Line height for the label text, for the extra-small size variant.
- `--m3e-button-extra-small-label-text-tracking` — Letter tracking for the label text, for the extra-small size variant.
- `--m3e-button-extra-small-icon-size` — Size of the icon, for the extra-small size variant.
- `--m3e-button-extra-small-shape-round` — Corner radius for round shape, for the extra-small size variant.
- `--m3e-button-extra-small-shape-square` — Corner radius for square shape, for the extra-small size variant.
- `--m3e-button-extra-small-selected-shape-round` — Corner radius when selected (round), for the extra-small size variant.
- `--m3e-button-extra-small-selected-shape-square` — Corner radius when selected (square), for the extra-small size variant.
- `--m3e-button-extra-small-shape-pressed-morph` — Corner radius when pressed, for the extra-small size variant.
- `--m3e-button-extra-small-leading-space` — Space before icon or label, for the extra-small size variant.
- `--m3e-button-extra-small-trailing-space` — Space after icon or label, for the extra-small size variant.
- `--m3e-button-extra-small-icon-label-space` — Space between icon and label, for the extra-small size variant.
- `--m3e-button-small-container-height` — Height of the button container, for the small size variant.
- `--m3e-button-small-outline-thickness` — Thickness of the button outline, for the small size variant.
- `--m3e-button-small-label-text-font-size` — Font size for the label text, for the small size variant.
- `--m3e-button-small-label-text-font-weight` — Font weight for the label text, for the small size variant.
- `--m3e-button-small-label-text-line-height` — Line height for the label text, for the small size variant.
- `--m3e-button-small-label-text-tracking` — Letter tracking for the label text, for the small size variant.
- `--m3e-button-small-icon-size` — Size of the icon, for the small size variant.
- `--m3e-button-small-shape-round` — Corner radius for round shape, for the small size variant.
- `--m3e-button-small-shape-square` — Corner radius for square shape, for the small size variant.
- `--m3e-button-small-selected-shape-round` — Corner radius when selected (round), for the small size variant.
- `--m3e-button-small-selected-shape-square` — Corner radius when selected (square), for the small size variant.
- `--m3e-button-small-shape-pressed-morph` — Corner radius when pressed, for the small size variant.
- `--m3e-button-small-leading-space` — Space before icon or label, for the small size variant.
- `--m3e-button-small-trailing-space` — Space after icon or label, for the small size variant.
- `--m3e-button-small-icon-label-space` — Space between icon and label, for the small size variant.
- `--m3e-button-medium-container-height` — Height of the button container, for the medium size variant.
- `--m3e-button-medium-outline-thickness` — Thickness of the button outline, for the medium size variant.
- `--m3e-button-medium-label-text-font-size` — Font size for the label text, for the medium size variant.
- `--m3e-button-medium-label-text-font-weight` — Font weight for the label text, for the medium size variant.
- `--m3e-button-medium-label-text-line-height` — Line height for the label text, for the medium size variant.
- `--m3e-button-medium-label-text-tracking` — Letter tracking for the label text, for the medium size variant.
- `--m3e-button-medium-icon-size` — Size of the icon, for the medium size variant.
- `--m3e-button-medium-shape-round` — Corner radius for round shape, for the medium size variant.
- `--m3e-button-medium-shape-square` — Corner radius for square shape, for the medium size variant.
- `--m3e-button-medium-selected-shape-round` — Corner radius when selected (round), for the medium size variant.
- `--m3e-button-medium-selected-shape-square` — Corner radius when selected (square), for the medium size variant.
- `--m3e-button-medium-shape-pressed-morph` — Corner radius when pressed, for the medium size variant.
- `--m3e-button-medium-leading-space` — Space before icon or label, for the medium size variant.
- `--m3e-button-medium-trailing-space` — Space after icon or label, for the medium size variant.
- `--m3e-button-medium-icon-label-space` — Space between icon and label, for the medium size variant.
- `--m3e-button-large-container-height` — Height of the button container, for the large size variant.
- `--m3e-button-large-outline-thickness` — Thickness of the button outline, for the large size variant.
- `--m3e-button-large-label-text-font-size` — Font size for the label text, for the large size variant.
- `--m3e-button-large-label-text-font-weight` — Font weight for the label text, for the large size variant.
- `--m3e-button-large-label-text-line-height` — Line height for the label text, for the large size variant.
- `--m3e-button-large-label-text-tracking` — Letter tracking for the label text, for the large size variant.
- `--m3e-button-large-icon-size` — Size of the icon, for the large size variant.
- `--m3e-button-large-shape-round` — Corner radius for round shape, for the large size variant.
- `--m3e-button-large-shape-square` — Corner radius for square shape, for the large size variant.
- `--m3e-button-large-selected-shape-round` — Corner radius when selected (round), for the large size variant.
- `--m3e-button-large-selected-shape-square` — Corner radius when selected (square), for the large size variant.
- `--m3e-button-large-shape-pressed-morph` — Corner radius when pressed, for the large size variant.
- `--m3e-button-large-leading-space` — Space before icon or label, for the large size variant.
- `--m3e-button-large-trailing-space` — Space after icon or label, for the large size variant.
- `--m3e-button-large-icon-label-space` — Space between icon and label, for the large size variant.
- `--m3e-button-extra-large-container-height` — Height of the button container, for the extra-large size variant.
- `--m3e-button-extra-large-outline-thickness` — Thickness of the button outline, for the extra-large size variant.
- `--m3e-button-extra-large-label-text-font-size` — Font size for the label text, for the extra-large size variant.
- `--m3e-button-extra-large-label-text-font-weight` — Font weight for the label text, for the extra-large size variant.
- `--m3e-button-extra-large-label-text-line-height` — Line height for the label text, for the extra-large size variant.
- `--m3e-button-extra-large-label-text-tracking` — Letter tracking for the label text, for the extra-large size variant.
- `--m3e-button-extra-large-icon-size` — Size of the icon, for the extra-large size variant.
- `--m3e-button-extra-large-shape-round` — Corner radius for round shape, for the extra-large size variant.
- `--m3e-button-extra-large-shape-square` — Corner radius for square shape, for the extra-large size variant.
- `--m3e-button-extra-large-selected-shape-round` — Corner radius when selected (round), for the extra-large size variant.
- `--m3e-button-extra-large-selected-shape-square` — Corner radius when selected (square), for the extra-large size variant.
- `--m3e-button-extra-large-shape-pressed-morph` — Corner radius when pressed, for the extra-large size variant.
- `--m3e-button-extra-large-leading-space` — Space before icon or label, for the extra-large size variant.
- `--m3e-button-extra-large-trailing-space` — Space after icon or label, for the extra-large size variant.
- `--m3e-button-extra-large-icon-label-space` — Space between icon and label, for the extra-large size variant.
- `--m3e-elevated-button-label-text-color` — Label color, for the elevated variant.
- `--m3e-elevated-button-icon-color` — Icon color, for the elevated variant.
- `--m3e-elevated-button-container-color` — Container background color, for the elevated variant.
- `--m3e-elevated-button-container-elevation` — Elevation, for the elevated variant.
- `--m3e-elevated-button-unselected-label-text-color` — Unselected label color, for the elevated variant.
- `--m3e-elevated-button-unselected-icon-color` — Unselected icon color, for the elevated variant.
- `--m3e-elevated-button-unselected-container-color` — Unselected container color, for the elevated variant.
- `--m3e-elevated-button-selected-label-text-color` — Selected label color, for the elevated variant.
- `--m3e-elevated-button-selected-icon-color` — Selected icon color, for the elevated variant.
- `--m3e-elevated-button-selected-container-color` — Selected container color, for the elevated variant.
- `--m3e-elevated-button-disabled-container-color` — Disabled container color, for the elevated variant.
- `--m3e-elevated-button-disabled-container-opacity` — Disabled container opacity, for the elevated variant.
- `--m3e-elevated-button-disabled-icon-color` — Disabled icon color, for the elevated variant.
- `--m3e-elevated-button-disabled-icon-opacity` — Disabled icon opacity, for the elevated variant.
- `--m3e-elevated-button-disabled-label-text-color` — Disabled label color, for the elevated variant.
- `--m3e-elevated-button-disabled-label-text-opacity` — Disabled label opacity, for the elevated variant.
- `--m3e-elevated-button-disabled-container-elevation` — Disabled elevation, for the elevated variant.
- `--m3e-elevated-button-hover-icon-color` — Hover icon color, for the elevated variant.
- `--m3e-elevated-button-hover-label-text-color` — Hover label color, for the elevated variant.
- `--m3e-elevated-button-hover-state-layer-color` — Hover state layer color, for the elevated variant.
- `--m3e-elevated-button-hover-state-layer-opacity` — Hover state layer opacity, for the elevated variant.
- `--m3e-elevated-button-hover-container-elevation` — Hover elevation, for the elevated variant.
- `--m3e-elevated-button-hover-unselected-icon-color` — Hover unselected icon color, for the elevated variant.
- `--m3e-elevated-button-hover-unselected-label-text-color` — Hover unselected label color, for the elevated variant.
- `--m3e-elevated-button-hover-unselected-state-layer-color` — Hover unselected state layer color, for the elevated variant.
- `--m3e-elevated-button-hover-selected-icon-color` — Hover selected icon color, for the elevated variant.
- `--m3e-elevated-button-hover-selected-label-text-color` — Hover selected label color, for the elevated variant.
- `--m3e-elevated-button-hover-selected-state-layer-color` — Hover selected state layer color, for the elevated variant.
- `--m3e-elevated-button-focus-icon-color` — Focus icon color, for the elevated variant.
- `--m3e-elevated-button-focus-label-text-color` — Focus label color, for the elevated variant.
- `--m3e-elevated-button-focus-state-layer-color` — Focus state layer color, for the elevated variant.
- `--m3e-elevated-button-focus-state-layer-opacity` — Focus state layer opacity, for the elevated variant.
- `--m3e-elevated-button-focus-container-elevation` — Focus elevation, for the elevated variant.
- `--m3e-elevated-button-focus-unselected-label-text-color` — Focus unselected label color, for the elevated variant.
- `--m3e-elevated-button-focus-unselected-icon-color` — Focus unselected icon color, for the elevated variant.
- `--m3e-elevated-button-focus-unselected-state-layer-color` — Focus unselected state layer color, for the elevated variant.
- `--m3e-elevated-button-focus-selected-icon-color` — Focus selected icon color, for the elevated variant.
- `--m3e-elevated-button-focus-selected-label-text-color` — Focus selected label color, for the elevated variant.
- `--m3e-elevated-button-focus-selected-state-layer-color` — Focus selected state layer color, for the elevated variant.
- `--m3e-elevated-button-pressed-icon-color` — Pressed icon color, for the elevated variant.
- `--m3e-elevated-button-pressed-label-text-color` — Pressed label color, for the elevated variant.
- `--m3e-elevated-button-pressed-state-layer-color` — Pressed state layer color, for the elevated variant.
- `--m3e-elevated-button-pressed-state-layer-opacity` — Pressed state layer opacity, for the elevated variant.
- `--m3e-elevated-button-pressed-container-elevation` — Pressed elevation, for the elevated variant.
- `--m3e-elevated-button-pressed-unselected-label-text-color` — Pressed unselected label color, for the elevated variant.
- `--m3e-elevated-button-pressed-unselected-icon-color` — Pressed unselected icon color, for the elevated variant.
- `--m3e-elevated-button-pressed-unselected-state-layer-color` — Pressed unselected state layer color, for the elevated variant.
- `--m3e-elevated-button-pressed-selected-icon-color` — Pressed selected icon color, for the elevated variant.
- `--m3e-elevated-button-pressed-selected-label-text-color` — Pressed selected label color, for the elevated variant.
- `--m3e-elevated-button-pressed-selected-state-layer-color` — Pressed selected state layer color, for the elevated variant.
- `--m3e-outlined-button-label-text-color` — Label color, for the outlined variant.
- `--m3e-outlined-button-icon-color` — Icon color, for the outlined variant.
- `--m3e-outlined-button-outline-color` — Outline color, for the outlined variant.
- `--m3e-outlined-button-unselected-label-text-color` — Unselected label color, for the outlined variant.
- `--m3e-outlined-button-unselected-icon-color` — Unselected icon color, for the outlined variant.
- `--m3e-outlined-button-selected-label-text-color` — Selected label color, for the outlined variant.
- `--m3e-outlined-button-selected-icon-color` — Selected icon color, for the outlined variant.
- `--m3e-outlined-button-selected-container-color` — Selected container color, for the outlined variant.
- `--m3e-outlined-button-disabled-container-color` — Disabled container color, for the outlined variant.
- `--m3e-outlined-button-disabled-container-opacity` — Disabled container opacity, for the outlined variant.
- `--m3e-outlined-button-disabled-icon-color` — Disabled icon color, for the outlined variant.
- `--m3e-outlined-button-disabled-icon-opacity` — Disabled icon opacity, for the outlined variant.
- `--m3e-outlined-button-disabled-label-text-color` — Disabled label color, for the outlined variant.
- `--m3e-outlined-button-disabled-label-text-opacity` — Disabled label opacity, for the outlined variant.
- `--m3e-outlined-button-disabled-outline-color` — Disabled outline color, for the outlined variant.
- `--m3e-outlined-button-hover-icon-color` — Hover icon color, for the outlined variant.
- `--m3e-outlined-button-hover-label-text-color` — Hover label color, for the outlined variant.
- `--m3e-outlined-button-hover-outline-color` — Hover outline color, for the outlined variant.
- `--m3e-outlined-button-hover-state-layer-color` — Hover state layer color, for the outlined variant.
- `--m3e-outlined-button-hover-state-layer-opacity` — Hover state layer opacity, for the outlined variant.
- `--m3e-outlined-button-hover-unselected-icon-color` — Hover unselected icon color, for the outlined variant.
- `--m3e-outlined-button-hover-unselected-label-text-color` — Hover unselected label color, for the outlined variant.
- `--m3e-outlined-button-hover-unselected-state-layer-color` — Hover unselected state layer color, for the outlined variant.
- `--m3e-outlined-button-hover-selected-icon-color` — Hover selected icon color, for the outlined variant.
- `--m3e-outlined-button-hover-selected-label-text-color` — Hover selected label color, for the outlined variant.
- `--m3e-outlined-button-hover-selected-state-layer-color` — Hover selected state layer color, for the outlined variant.
- `--m3e-outlined-button-focus-icon-color` — Focus icon color, for the outlined variant.
- `--m3e-outlined-button-focus-label-text-color` — Focus label color, for the outlined variant.
- `--m3e-outlined-button-focus-outline-color` — Focus outline color, for the outlined variant.
- `--m3e-outlined-button-focus-state-layer-color` — Focus state layer color, for the outlined variant.
- `--m3e-outlined-button-focus-state-layer-opacity` — Focus state layer opacity, for the outlined variant.
- `--m3e-outlined-button-focus-unselected-icon-color` — Focus unselected icon color, for the outlined variant.
- `--m3e-outlined-button-focus-unselected-label-text-color` — Focus unselected label color, for the outlined variant.
- `--m3e-outlined-button-focus-unselected-state-layer-color` — Focus unselected state layer color, for the outlined variant.
- `--m3e-outlined-button-focus-selected-icon-color` — Focus selected icon color, for the outlined variant.
- `--m3e-outlined-button-focus-selected-label-text-color` — Focus selected label color, for the outlined variant.
- `--m3e-outlined-button-focus-selected-state-layer-color` — Focus selected state layer color, for the outlined variant.
- `--m3e-outlined-button-pressed-icon-color` — Pressed icon color, for the outlined variant.
- `--m3e-outlined-button-pressed-label-text-color` — Pressed label color, for the outlined variant.
- `--m3e-outlined-button-pressed-outline-color` — Pressed outline color, for the outlined variant.
- `--m3e-outlined-button-pressed-state-layer-color` — Pressed state layer color, for the outlined variant.
- `--m3e-outlined-button-pressed-state-layer-opacity` — Pressed state layer opacity, for the outlined variant.
- `--m3e-outlined-button-pressed-unselected-icon-color` — Pressed unselected icon color, for the outlined variant.
- `--m3e-outlined-button-pressed-unselected-label-text-color` — Pressed unselected label color, for the outlined variant.
- `--m3e-outlined-button-pressed-unselected-state-layer-color` — Pressed unselected state layer color, for the outlined variant.
- `--m3e-outlined-button-pressed-selected-icon-color` — Pressed selected icon color, for the outlined variant.
- `--m3e-outlined-button-pressed-selected-label-text-color` — Pressed selected label color, for the outlined variant.
- `--m3e-outlined-button-pressed-selected-state-layer-color` — Pressed selected state layer color, for the outlined variant.
- `--m3e-filled-button-label-text-color` — Label color, for the filled variant.
- `--m3e-filled-button-icon-color` — Icon color, for the filled variant.
- `--m3e-filled-button-container-color` — Container background color, for the filled variant.
- `--m3e-filled-button-container-elevation` — Elevation, for the filled variant.
- `--m3e-filled-button-unselected-label-text-color` — Unselected label color, for the filled variant.
- `--m3e-filled-button-unselected-icon-color` — Unselected icon color, for the filled variant.
- `--m3e-filled-button-unselected-container-color` — Unselected container color, for the filled variant.
- `--m3e-filled-button-selected-label-text-color` — Selected label color, for the filled variant.
- `--m3e-filled-button-selected-icon-color` — Selected icon color, for the filled variant.
- `--m3e-filled-button-selected-container-color` — Selected container color, for the filled variant.
- `--m3e-filled-button-disabled-container-color` — Disabled container color, for the filled variant.
- `--m3e-filled-button-disabled-container-opacity` — Disabled container opacity, for the filled variant.
- `--m3e-filled-button-disabled-icon-color` — Disabled icon color, for the filled variant.
- `--m3e-filled-button-disabled-icon-opacity` — Disabled icon opacity, for the filled variant.
- `--m3e-filled-button-disabled-label-text-color` — Disabled label color, for the filled variant.
- `--m3e-filled-button-disabled-label-text-opacity` — Disabled label opacity, for the filled variant.
- `--m3e-filled-button-disabled-container-elevation` — Disabled elevation, for the filled variant.
- `--m3e-filled-button-hover-icon-color` — Hover icon color, for the filled variant.
- `--m3e-filled-button-hover-label-text-color` — Hover label color, for the filled variant.
- `--m3e-filled-button-hover-state-layer-color` — Hover state layer color, for the filled variant.
- `--m3e-filled-button-hover-state-layer-opacity` — Hover state layer opacity, for the filled variant.
- `--m3e-filled-button-hover-container-elevation` — Hover elevation, for the filled variant.
- `--m3e-filled-button-hover-unselected-icon-color` — Hover unselected icon color, for the filled variant.
- `--m3e-filled-button-hover-unselected-label-text-color` — Hover unselected label color, for the filled variant.
- `--m3e-filled-button-hover-unselected-state-layer-color` — Hover unselected state layer color, for the filled variant.
- `--m3e-filled-button-hover-selected-icon-color` — Hover selected icon color, for the filled variant.
- `--m3e-filled-button-hover-selected-label-text-color` — Hover selected label color, for the filled variant.
- `--m3e-filled-button-hover-selected-state-layer-color` — Hover selected state layer color, for the filled variant.
- `--m3e-filled-button-focus-icon-color` — Focus icon color, for the filled variant.
- `--m3e-filled-button-focus-label-text-color` — Focus label color, for the filled variant.
- `--m3e-filled-button-focus-state-layer-color` — Focus state layer color, for the filled variant.
- `--m3e-filled-button-focus-state-layer-opacity` — Focus state layer opacity, for the filled variant.
- `--m3e-filled-button-focus-container-elevation` — Focus elevation, for the filled variant.
- `--m3e-filled-button-focus-unselected-icon-color` — Focus unselected icon color, for the filled variant.
- `--m3e-filled-button-focus-unselected-label-text-color` — Focus unselected label color, for the filled variant.
- `--m3e-filled-button-focus-unselected-state-layer-color` — Focus unselected state layer color, for the filled variant.
- `--m3e-filled-button-focus-selected-icon-color` — Focus selected icon color, for the filled variant.
- `--m3e-filled-button-focus-selected-label-text-color` — Focus selected label color, for the filled variant.
- `--m3e-filled-button-focus-selected-state-layer-color` — Focus selected state layer color, for the filled variant.
- `--m3e-filled-button-pressed-icon-color` — Pressed icon color, for the filled variant.
- `--m3e-filled-button-pressed-label-text-color` — Pressed label color, for the filled variant.
- `--m3e-filled-button-pressed-state-layer-color` — Pressed state layer color, for the filled variant.
- `--m3e-filled-button-pressed-state-layer-opacity` — Pressed state layer opacity, for the filled variant.
- `--m3e-filled-button-pressed-container-elevation` — Pressed elevation, for the filled variant.
- `--m3e-filled-button-pressed-unselected-icon-color` — Pressed unselected icon color, for the filled variant.
- `--m3e-filled-button-pressed-unselected-label-text-color` — Pressed unselected label color, for the filled variant.
- `--m3e-filled-button-pressed-unselected-state-layer-color` — Pressed unselected state layer color, for the filled variant.
- `--m3e-filled-button-pressed-selected-icon-color` — Pressed selected icon color, for the filled variant.
- `--m3e-filled-button-pressed-selected-label-text-color` — Pressed selected label color, for the filled variant.
- `--m3e-filled-button-pressed-selected-state-layer-color` — Pressed selected state layer color, for the filled variant.
- `--m3e-tonal-button-label-text-color` — Label color, for the tonal variant.
- `--m3e-tonal-button-icon-color` — Icon color, for the tonal variant.
- `--m3e-tonal-button-container-color` — Container background color, for the tonal variant.
- `--m3e-tonal-button-container-elevation` — Elevation, for the tonal variant.
- `--m3e-tonal-button-unselected-label-text-color` — Unselected label color, for the tonal variant.
- `--m3e-tonal-button-unselected-icon-color` — Unselected icon color, for the tonal variant.
- `--m3e-tonal-button-unselected-container-color` — Unselected container color, for the tonal variant.
- `--m3e-tonal-button-selected-label-text-color` — Selected label color, for the tonal variant.
- `--m3e-tonal-button-selected-icon-color` — Selected icon color, for the tonal variant.
- `--m3e-tonal-button-selected-container-color` — Selected container color, for the tonal variant.
- `--m3e-tonal-button-disabled-container-color` — Disabled container color, for the tonal variant.
- `--m3e-tonal-button-disabled-container-opacity` — Disabled container opacity, for the tonal variant.
- `--m3e-tonal-button-disabled-icon-color` — Disabled icon color, for the tonal variant.
- `--m3e-tonal-button-disabled-icon-opacity` — Disabled icon opacity, for the tonal variant.
- `--m3e-tonal-button-disabled-label-text-color` — Disabled label color, for the tonal variant.
- `--m3e-tonal-button-disabled-label-text-opacity` — Disabled label opacity, for the tonal variant.
- `--m3e-tonal-button-disabled-container-elevation` — Disabled elevation, for the tonal variant.
- `--m3e-tonal-button-hover-icon-color` — Hover icon color, for the tonal variant.
- `--m3e-tonal-button-hover-label-text-color` — Hover label color, for the tonal variant.
- `--m3e-tonal-button-hover-state-layer-color` — Hover state layer color, for the tonal variant.
- `--m3e-tonal-button-hover-state-layer-opacity` — Hover state layer opacity, for the tonal variant.
- `--m3e-tonal-button-hover-container-elevation` — Hover elevation, for the tonal variant.
- `--m3e-tonal-button-hover-unselected-icon-color` — Hover unselected icon color, for the tonal variant.
- `--m3e-tonal-button-hover-unselected-label-text-color` — Hover unselected label color, for the tonal variant.
- `--m3e-tonal-button-hover-unselected-state-layer-color` — Hover unselected state layer color, for the tonal variant.
- `--m3e-tonal-button-hover-selected-icon-color` — Hover selected icon color, for the tonal variant.
- `--m3e-tonal-button-hover-selected-label-text-color` — Hover selected label color, for the tonal variant.
- `--m3e-tonal-button-hover-selected-state-layer-color` — Hover selected state layer color, for the tonal variant.
- `--m3e-tonal-button-focus-icon-color` — Focus icon color, for the tonal variant.
- `--m3e-tonal-button-focus-label-text-color` — Focus label color, for the tonal variant.
- `--m3e-tonal-button-focus-state-layer-color` — Focus state layer color, for the tonal variant.
- `--m3e-tonal-button-focus-state-layer-opacity` — Focus state layer opacity, for the tonal variant.
- `--m3e-tonal-button-focus-container-elevation` — Focus elevation, for the tonal variant.
- `--m3e-tonal-button-focus-unselected-icon-color` — Focus unselected icon color, for the tonal variant.
- `--m3e-tonal-button-focus-unselected-label-text-color` — Focus unselected label color, for the tonal variant.
- `--m3e-tonal-button-focus-unselected-state-layer-color` — Focus unselected state layer color, for the tonal variant.
- `--m3e-tonal-button-focus-selected-icon-color` — Focus selected icon color, for the tonal variant.
- `--m3e-tonal-button-focus-selected-label-text-color` — Focus selected label color, for the tonal variant.
- `--m3e-tonal-button-focus-selected-state-layer-color` — Focus selected state layer color, for the tonal variant.
- `--m3e-tonal-button-pressed-icon-color` — Pressed icon color, for the tonal variant.
- `--m3e-tonal-button-pressed-label-text-color` — Pressed label color, for the tonal variant.
- `--m3e-tonal-button-pressed-state-layer-color` — Pressed state layer color, for the tonal variant.
- `--m3e-tonal-button-pressed-state-layer-opacity` — Pressed state layer opacity, for the tonal variant.
- `--m3e-tonal-button-pressed-container-elevation` — Pressed elevation, for the tonal variant.
- `--m3e-tonal-button-pressed-unselected-icon-color` — Pressed unselected icon color, for the tonal variant.
- `--m3e-tonal-button-pressed-unselected-label-text-color` — Pressed unselected label color, for the tonal variant.
- `--m3e-tonal-button-pressed-unselected-state-layer-color` — Pressed unselected state layer color, for the tonal variant.
- `--m3e-tonal-button-pressed-selected-icon-color` — Pressed selected icon color, for the tonal variant.
- `--m3e-tonal-button-pressed-selected-label-text-color` — Pressed selected label color, for the tonal variant.
- `--m3e-tonal-button-pressed-selected-state-layer-color` — Pressed selected state layer color, for the tonal variant.
- `--m3e-text-button-label-text-color` — Label color, for the text variant.
- `--m3e-text-button-icon-color` — Icon color, for the text variant.
- `--m3e-text-button-unselected-label-text-color` — Unselected label color, for the text variant.
- `--m3e-text-button-unselected-icon-color` — Unselected icon color, for the text variant.
- `--m3e-text-button-selected-label-text-color` — Selected label color, for the text variant.
- `--m3e-text-button-selected-icon-color` — Selected icon color, for the text variant.
- `--m3e-text-button-disabled-container-color` — Disabled container color, for the text variant.
- `--m3e-text-button-disabled-container-opacity` — Disabled container opacity, for the text variant.
- `--m3e-text-button-disabled-icon-color` — Disabled icon color, for the text variant.
- `--m3e-text-button-disabled-icon-opacity` — Disabled icon opacity, for the text variant.
- `--m3e-text-button-disabled-label-text-color` — Disabled label color, for the text variant.
- `--m3e-text-button-disabled-label-text-opacity` — Disabled label opacity, for the text variant.
- `--m3e-text-button-hover-icon-color` — Hover icon color, for the text variant.
- `--m3e-text-button-hover-label-text-color` — Hover label color, for the text variant.
- `--m3e-text-button-hover-state-layer-color` — Hover state layer color, for the text variant.
- `--m3e-text-button-hover-state-layer-opacity` — Hover state layer opacity, for the text variant.
- `--m3e-text-button-hover-unselected-icon-color` — Hover unselected icon color, for the text variant.
- `--m3e-text-button-hover-unselected-label-text-color` — Hover unselected label color, for the text variant.
- `--m3e-text-button-hover-unselected-state-layer-color` — Hover unselected state layer color, for the text variant.
- `--m3e-text-button-hover-selected-icon-color` — Hover selected icon color, for the text variant.
- `--m3e-text-button-hover-selected-label-text-color` — Hover selected label color, for the text variant.
- `--m3e-text-button-hover-selected-state-layer-color` — Hover selected state layer color, for the text variant.
- `--m3e-text-button-focus-icon-color` — Focus icon color, for the text variant.
- `--m3e-text-button-focus-label-text-color` — Focus label color, for the text variant.
- `--m3e-text-button-focus-state-layer-color` — Focus state layer color, for the text variant.
- `--m3e-text-button-focus-state-layer-opacity` — Focus state layer opacity, for the text variant.
- `--m3e-text-button-focus-unselected-icon-color` — Focus unselected icon color, for the text variant.
- `--m3e-text-button-focus-unselected-label-text-color` — Focus unselected label color, for the text variant.
- `--m3e-text-button-focus-unselected-state-layer-color` — Focus unselected state layer color, for the text variant.
- `--m3e-text-button-focus-selected-icon-color` — Focus selected icon color, for the text variant.
- `--m3e-text-button-focus-selected-label-text-color` — Focus selected label color, for the text variant.
- `--m3e-text-button-focus-selected-state-layer-color` — Focus selected state layer color, for the text variant.
- `--m3e-text-button-pressed-icon-color` — Pressed icon color, for the text variant.
- `--m3e-text-button-pressed-label-text-color` — Pressed label color, for the text variant.
- `--m3e-text-button-pressed-state-layer-color` — Pressed state layer color, for the text variant.
- `--m3e-text-button-pressed-state-layer-opacity` — Pressed state layer opacity, for the text variant.
- `--m3e-text-button-pressed-unselected-icon-color` — Pressed unselected icon color, for the text variant.
- `--m3e-text-button-pressed-unselected-label-text-color` — Pressed unselected label color, for the text variant.
- `--m3e-text-button-pressed-unselected-state-layer-color` — Pressed unselected state layer color, for the text variant.
- `--m3e-text-button-pressed-selected-icon-color` — Pressed selected icon color, for the text variant.
- `--m3e-text-button-pressed-selected-label-text-color` — Pressed selected label color, for the text variant.
- `--m3e-text-button-pressed-selected-state-layer-color` — Pressed selected state layer color, for the text variant.

</details>

### `ButtonGroup` — `<m3e-button-group>` (`@m3e/button-group`)

Organizes buttons and adds interactions between them.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `multi` | `boolean` | `false` | Whether multiple toggle buttons can be selected. |
| `size` | `ButtonGroupSize` | `"small"` | The size of the group. |
| `variant` | `ButtonGroupVariant` | `"standard"` | The appearance variant of the group. |

**Slots:** `(default)`

<details><summary>CSS custom properties (16)</summary>

- `--m3e-standard-button-group-extra-small-spacing` — Spacing between buttons in standard variant, extra-small size.
- `--m3e-standard-button-group-small-spacing` — Spacing between buttons in standard variant, small size.
- `--m3e-standard-button-group-medium-spacing` — Spacing between buttons in standard variant, medium size.
- `--m3e-standard-button-group-large-spacing` — Spacing between buttons in standard variant, large size.
- `--m3e-standard-button-group-extra-large-spacing` — Spacing between buttons in standard variant, extra-large size.
- `--m3e-connected-button-group-spacing` — Spacing between buttons in connected variant.
- `--m3e-connected-button-group-extra-small-inner-shape` — Corner shape for connected variant, extra-small size.
- `--m3e-connected-button-group-extra-small-inner-pressed-shape` — Pressed corner shape for connected variant, extra-small size.
- `--m3e-connected-button-group-small-inner-shape` — Corner shape for connected variant, small size.
- `--m3e-connected-button-group-small-inner-pressed-shape` — Pressed corner shape for connected variant, small size.
- `--m3e-connected-button-group-medium-inner-shape` — Corner shape for connected variant, medium size.
- `--m3e-connected-button-group-medium-inner-pressed-shape` — Pressed corner shape for connected variant, medium size.
- `--m3e-connected-button-group-large-inner-shape` — Corner shape for connected variant, large size.
- `--m3e-connected-button-group-large-inner-pressed-shape` — Pressed corner shape for connected variant, large size.
- `--m3e-connected-button-group-extra-large-inner-shape` — Corner shape for connected variant, extra-large size.
- `--m3e-connected-button-group-extra-large-inner-pressed-shape` — Pressed corner shape for connected variant, extra-large size.

</details>

### `ButtonSegment` — `<m3e-button-segment>` (`@m3e/segmented-button`)

A option that can be selected within a segmented button.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `checked` | `boolean` | `false` | Whether the element is checked. |
| `disabled` | `boolean` | `false` | Whether the element is disabled. |
| `value` | `string` | `"on"` | A string representing the value of the segment. |

**Slots:** `(default)`, `icon`

**Events:** `input`, `change`, `click`

<details><summary>CSS custom properties (29)</summary>

- `--m3e-segmented-button-height` — Total height of the segmented button.
- `--m3e-segmented-button-outline-thickness` — Thickness of the button’s border.
- `--m3e-segmented-button-outline-color` — Color of the button’s border.
- `--m3e-segmented-button-padding-start` — Padding on the leading edge of the button content.
- `--m3e-segmented-button-padding-end` — Padding on the trailing edge of the button content.
- `--m3e-segmented-button-spacing` — Horizontal gap between icon and label.
- `--m3e-segmented-button-font-size` — Font size of the label text.
- `--m3e-segmented-button-font-weight` — Font weight of the label text.
- `--m3e-segmented-button-line-height` — Line height of the label text.
- `--m3e-segmented-button-tracking` — Letter spacing of the label text.
- `--m3e-segmented-button-with-icon-padding-start` — Leading padding when an icon is present.
- `--m3e-segmented-button-selected-container-color` — Background color of a selected segment.
- `--m3e-segmented-button-selected-container-hover-color` — Hover state-layer color for selected segments.
- `--m3e-segmented-button-selected-container-focus-color` — Focus state-layer color for selected segments.
- `--m3e-segmented-button-selected-ripple-color` — Ripple color for selected segments.
- `--m3e-segmented-button-selected-label-text-color` — Label text color for selected segments.
- `--m3e-segmented-button-selected-icon-color` — Icon color for selected segments.
- `--m3e-segmented-button-unselected-container-hover-color` — Hover state-layer color for unselected segments.
- `--m3e-segmented-button-unselected-container-focus-color` — Focus state-layer color for unselected segments.
- `--m3e-segmented-button-unselected-ripple-color` — Ripple color for unselected segments.
- `--m3e-segmented-button-unselected-label-text-color` — Label text color for unselected segments.
- `--m3e-segmented-button-unselected-icon-color` — Icon color for unselected segments.
- `--m3e-segmented-button-icon-size` — Font size of the icon.
- `--m3e-segmented-button-disabled-outline-color` — Base color for disabled segment borders.
- `--m3e-segmented-button-disabled-outline-opacity` — Opacity applied to disabled segment borders.
- `--m3e-segmented-button-disabled-label-text-color` — Base color for disabled label text.
- `--m3e-segmented-button-disabled-label-text-opacity` — Opacity applied to disabled label text.
- `--m3e-segmented-button-disabled-icon-color` — Base color for disabled icons.
- `--m3e-segmented-button-disabled-icon-opacity` — Opacity applied to disabled icons.

</details>

### `Card` — `<m3e-card>` (`@m3e/card`)

A content container for text, images (or other media), and actions in the context of a single subject.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `actionable` | `boolean` | `false` | Whether the card is "actionable" and will respond to use interaction. |
| `inline` | `boolean` | `false` | Whether to present the card inline with surrounding content. |
| `orientation` | `CardOrientation` | `"vertical"` | The orientation of the card. |
| `variant` | `CardVariant` | `"filled"` | The appearance variant of the card. |
| `href` | `string` | `""` | The URL to which the link button points. |
| `target` | `LinkTarget` | `""` | The target of the link button. |
| `rel` | `string` | `""` | The relationship between the `target` of the link button and the document. |
| `download` | `string | null` | `null` | A value indicating whether the `target` of the link button will be downloaded, optionally specifying the new name of the file. |
| `name` | `string` | `` | The name of the element, submitted as a pair with the element's `value` as part of form data, when the element is used to submit a form. |
| `value` | `string` | `` | The value associated with the element's name when it's submitted with form data. |
| `type` | `FormSubmitterType` | `"button"` | The type of the element. |
| `disabled-interactive` | `boolean` | `false` | Whether the element is disabled and interactive. |
| `disabled` | `boolean` | `false` | Whether the element is disabled. |

**Slots:** `(default)`, `header`, `content`, `actions`, `footer`

**Events:** `click`

<details><summary>CSS custom properties (72)</summary>

- `--m3e-card-padding` — Internal spacing for all slotted regions
- `--m3e-card-shape` — Corner radius of the card container.
- `--m3e-filled-card-text-color` — Foreground color for text content in filled cards.
- `--m3e-filled-card-container-color` — Background color of the filled card container.
- `--m3e-filled-card-container-elevation` — Elevation level for filled card container.
- `--m3e-filled-card-disabled-text-color` — Text color when filled card is disabled.
- `--m3e-filled-card-disabled-text-opacity` — Opacity applied to text when disabled.
- `--m3e-filled-card-disabled-container-color` — Background color when disabled.
- `--m3e-filled-card-disabled-container-elevation` — Elevation level when disabled.
- `--m3e-filled-card-disabled-container-elevation-color` — Shadow color when disabled.
- `--m3e-filled-card-disabled-container-elevation-opacity` — Shadow opacity when disabled.
- `--m3e-filled-card-disabled-container-opacity` — Overall container opacity when disabled.
- `--m3e-filled-card-hover-text-color` — Text color on hover.
- `--m3e-filled-card-hover-state-layer-color` — State layer color on hover.
- `--m3e-filled-card-hover-state-layer-opacity` — State layer opacity on hover.
- `--m3e-filled-card-hover-container-elevation` — Elevation level on hover.
- `--m3e-filled-card-focus-text-color` — Text color on focus.
- `--m3e-filled-card-focus-state-layer-color` — State layer color on focus.
- `--m3e-filled-card-focus-state-layer-opacity` — State layer opacity on focus.
- `--m3e-filled-card-focus-container-elevation` — Elevation level on focus.
- `--m3e-filled-card-pressed-text-color` — Text color on press.
- `--m3e-filled-card-pressed-state-layer-color` — State layer color on press.
- `--m3e-filled-card-pressed-state-layer-opacity` — State layer opacity on press.
- `--m3e-filled-card-pressed-container-elevation` — Elevation level on press.
- `--m3e-elevated-card-text-color` — Foreground color for text content in elevated cards.
- `--m3e-elevated-card-container-color` — Background color of the elevated card container.
- `--m3e-elevated-card-container-elevation` — Elevation level for elevated card container.
- `--m3e-elevated-card-disabled-text-color` — Text color when elevated card is disabled.
- `--m3e-elevated-card-disabled-text-opacity` — Opacity applied to text when disabled.
- `--m3e-elevated-card-disabled-container-color` — Background color when disabled.
- `--m3e-elevated-card-disabled-container-elevation` — Elevation level when disabled.
- `--m3e-elevated-card-disabled-container-elevation-color` — Shadow color when disabled.
- `--m3e-elevated-card-disabled-container-elevation-opacity` — Shadow opacity when disabled.
- `--m3e-elevated-card-disabled-container-opacity` — Overall container opacity when disabled.
- `--m3e-elevated-card-hover-text-color` — Text color on hover.
- `--m3e-elevated-card-hover-state-layer-color` — State layer color on hover.
- `--m3e-elevated-card-hover-state-layer-opacity` — State layer opacity on hover.
- `--m3e-elevated-card-hover-container-elevation` — Elevation level on hover.
- `--m3e-elevated-card-focus-text-color` — Text color on focus.
- `--m3e-elevated-card-focus-state-layer-color` — State layer color on focus.
- `--m3e-elevated-card-focus-state-layer-opacity` — State layer opacity on focus.
- `--m3e-elevated-card-focus-container-elevation` — Elevation level on focus.
- `--m3e-elevated-card-pressed-text-color` — Text color on press.
- `--m3e-elevated-card-pressed-state-layer-color` — State layer color on press.
- `--m3e-elevated-card-pressed-state-layer-opacity` — State layer opacity on press.
- `--m3e-elevated-card-pressed-container-elevation` — Elevation level on press.
- `--m3e-outlined-card-text-color` — Foreground color for text content in outlined cards.
- `--m3e-outlined-card-container-elevation` — Elevation level for outlined card container.
- `--m3e-outlined-card-outline-color` — Border color for outlined cards.
- `--m3e-outlined-card-outline-thickness` — Border thickness for outlined cards.
- `--m3e-outlined-card-disabled-text-color` — Text color when outlined card is disabled.
- `--m3e-outlined-card-disabled-text-opacity` — Opacity applied to text when disabled.
- `--m3e-outlined-card-disabled-container-elevation` — Elevation level when disabled.
- `--m3e-outlined-card-disabled-container-elevation-color` — Shadow color when disabled.
- `--m3e-outlined-card-disabled-container-elevation-opacity` — Shadow opacity when disabled.
- `--m3e-outlined-card-disabled-outline-color` — Border color when disabled.
- `--m3e-outlined-card-disabled-outline-opacity` — Border opacity when disabled.
- `--m3e-outlined-card-hover-text-color` — Text color on hover.
- `--m3e-outlined-card-hover-state-layer-color` — State layer color on hover.
- `--m3e-outlined-card-hover-state-layer-opacity` — State layer opacity on hover.
- `--m3e-outlined-card-hover-container-elevation` — Elevation level on hover.
- `--m3e-outlined-card-hover-outline-color` — Border color on hover.
- `--m3e-outlined-card-focus-text-color` — Text color on focus.
- `--m3e-outlined-card-focus-state-layer-color` — State layer color on focus.
- `--m3e-outlined-card-focus-state-layer-opacity` — State layer opacity on focus.
- `--m3e-outlined-card-focus-container-elevation` — Elevation level on focus.
- `--m3e-outlined-card-focus-outline-color` — Border color on focus.
- `--m3e-outlined-card-pressed-text-color` — Text color on press.
- `--m3e-outlined-card-pressed-state-layer-color` — State layer color on press.
- `--m3e-outlined-card-pressed-state-layer-opacity` — State layer opacity on press.
- `--m3e-outlined-card-pressed-container-elevation` — Elevation level on press.
- `--m3e-outlined-card-pressed-outline-color` — Border color on press.

</details>

### `Checkbox` — `<m3e-checkbox>` (`@m3e/checkbox`)

A checkbox that allows a user to select one or more options from a limited number of choices.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `checked` | `boolean` | `false` | Whether the element is checked. |
| `disabled` | `boolean` | `false` | Whether the element is disabled. |
| `indeterminate` | `boolean` | `false` | Whether the element's checked state is indeterminate. |
| `name` | `string` | `` | The name that identifies the element when submitting the associated form. |
| `required` | `boolean` | `false` | Whether the element is required. |
| `value` | `string` | `"on"` | A string representing the value of the checkbox. |

**Events:** `input`, `change`, `invalid`, `click`

<details><summary>CSS custom properties (27)</summary>

- `--m3e-checkbox-icon-size` — Size of the checkbox icon inside the container.
- `--m3e-checkbox-container-size` — Base size of the checkbox container.
- `--m3e-checkbox-container-shape` — Border radius of the icon container.
- `--m3e-checkbox-unselected-outline-thickness` — Border thickness for unselected state.
- `--m3e-checkbox-unselected-outline-color` — Border color for unselected state.
- `--m3e-checkbox-unselected-hover-outline-color` — Border color on hover when unselected.
- `--m3e-checkbox-unselected-disabled-outline-color` — Base color for disabled unselected outline.
- `--m3e-checkbox-unselected-disabled-outline-opacity` — Opacity for disabled unselected outline.
- `--m3e-checkbox-unselected-error-outline-color` — Border color for invalid unselected state.
- `--m3e-checkbox-selected-container-color` — Background color for selected container.
- `--m3e-checkbox-selected-icon-color` — Icon color for selected state.
- `--m3e-checkbox-selected-disabled-container-color` — Base color for disabled selected container.
- `--m3e-checkbox-selected-disabled-container-opacity` — Opacity for disabled selected container.
- `--m3e-checkbox-selected-disabled-icon-color` — Base color for disabled selected icon.
- `--m3e-checkbox-selected-disabled-icon-opacity` — Opacity for disabled selected icon.
- `--m3e-checkbox-unselected-hover-color` — Ripple hover color for unselected state.
- `--m3e-checkbox-unselected-focus-color` — Ripple focus color for unselected state.
- `--m3e-checkbox-unselected-ripple-color` — Ripple base color for unselected state.
- `--m3e-checkbox-selected-hover-color` — Ripple hover color for selected state.
- `--m3e-checkbox-selected-focus-color` — Ripple focus color for selected state.
- `--m3e-checkbox-selected-ripple-color` — Ripple base color for selected state.
- `--m3e-checkbox-unselected-error-hover-color` — Ripple hover color for invalid unselected state.
- `--m3e-checkbox-unselected-error-focus-color` — Ripple focus color for invalid unselected state.
- `--m3e-checkbox-unselected-error-ripple-color` — Ripple base color for invalid unselected state.
- `--m3e-checkbox-selected-error-hover-color` — Ripple hover color for invalid selected state.
- `--m3e-checkbox-selected-error-focus-color` — Ripple focus color for invalid selected state.
- `--m3e-checkbox-selected-error-ripple-color` — Ripple base color for invalid selected state.

</details>

### `Chip` — `<m3e-chip>` (`@m3e/chips`)

A non-interactive chip used to convey small pieces of information.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `value` | `string` | `` | A string representing the value of the chip. |
| `variant` | `ChipVariant` | `"outlined"` | The appearance variant of the chip. |

**Slots:** `(default)`, `icon`, `trailing-icon`

<details><summary>CSS custom properties (19)</summary>

- `--m3e-chip-container-shape` — Border radius of the chip container.
- `--m3e-chip-container-height` — Base height of the chip container before density adjustment.
- `--m3e-chip-label-text-font-size` — Font size of the chip label text.
- `--m3e-chip-label-text-font-weight` — Font weight of the chip label text.
- `--m3e-chip-label-text-line-height` — Line height of the chip label text.
- `--m3e-chip-label-text-tracking` — Letter spacing of the chip label text.
- `--m3e-chip-label-text-color` — Label text color in default state.
- `--m3e-chip-icon-color` — Icon color in default state.
- `--m3e-chip-icon-size` — Font size of leading/trailing icons.
- `--m3e-chip-spacing` — Horizontal gap between chip content elements.
- `--m3e-chip-padding-start` — Default start padding when no icon is present.
- `--m3e-chip-padding-end` — Default end padding when no trailing icon is present.
- `--m3e-chip-with-icon-padding-start` — Start padding when leading icon is present.
- `--m3e-chip-with-icon-padding-end` — End padding when trailing icon is present.
- `--m3e-elevated-chip-container-color` — Background color for elevated variant.
- `--m3e-elevated-chip-elevation` — Elevation level for elevated variant.
- `--m3e-elevated-chip-hover-elevation` — Elevation level on hover.
- `--m3e-outlined-chip-outline-thickness` — Outline thickness for outlined variant.
- `--m3e-outlined-chip-outline-color` — Outline color for outlined variant.

</details>

### `ChipSet` — `<m3e-chip-set>` (`@m3e/chips`)

A container used to organize chips into a cohesive unit.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `vertical` | `boolean` | `false` | Whether the element is oriented vertically. |

**Slots:** `(default)`

<details><summary>CSS custom properties (1)</summary>

- `--m3e-chip-set-spacing` — The spacing (gap) between chips in the set.

</details>

### `CircularProgressIndicator` — `<m3e-circular-progress-indicator>` (`@m3e/progress-indicator`)

A circular indicator of progress and activity.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `indeterminate` | `boolean` | `false` | Whether to show something is happening without conveying progress. |
| `max` | `number` | `100` | The maximum progress value. |
| `value` | `number` | `0` | A fractional value, between 0 and `max`, indicating progress. |
| `variant` | `ProgressIndicatorVariant` | `"flat"` | The appearance of the indicator. |

**Slots:** `(default)`

<details><summary>CSS custom properties (7)</summary>

- `--m3e-circular-flat-progress-indicator-diameter` — Diameter of the `flat` variant.
- `--m3e-circular-wavy-progress-indicator-diameter` — Diameter of the `wavy` variant.
- `--m3e-circular-wavy-progress-indicator-amplitude` — Amplitude of the `wavy` variant.
- `--m3e-circular-wavy-progress-indicator-wavelength` — Wavelength of the `wavy` variant.
- `--m3e-circular-progress-indicator-thickness` — Thickness of the progress indicator.
- `--m3e-progress-indicator-track-color` — Track color of the progress indicator (background).
- `--m3e-progress-indicator-color` — Color of the progress indicator (foreground).

</details>

### `Collapsible` — `<m3e-collapsible>` (`@m3e/core`)

A container used to expand and collapse content.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `open` | `boolean` | `false` | Whether content is visible. |

**Slots:** `(default)`

**Events:** `opening`, `opened`, `closing`, `closed`

<details><summary>CSS custom properties (1)</summary>

- `--m3e-collapsible-animation-duration` — The duration of the expand / collapse animation.

</details>

### `Dialog` — `<m3e-dialog>` (`@m3e/dialog`)

A dialog that provides important prompts in a user flow.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `alert` | `boolean` | `false` | Whether the dialog is an alert. |
| `close-label` | `string` | `"Close"` | The accessible label given to the button used to dismiss the dialog. |
| `disable-close` | `boolean` | `false` | Whether users cannot click the backdrop or press ESC to dismiss the dialog. |
| `dismissible` | `boolean` | `false` | Whether a button is presented that can be used to close the dialog. |
| `no-focus-trap` | `boolean` | `false` | Whether to disable focus trapping, which keeps keyboard `Tab` navigation within the dialog. |
| `open` | `string` | `false` | Whether the dialog is open. |

**Slots:** `(default)`, `header`, `actions`, `close-icon`

**Events:** `opening`, `opened`, `closing`, `closed`, `cancel`

<details><summary>CSS custom properties (18)</summary>

- `--m3e-dialog-shape` — Border radius of the dialog container.
- `--m3e-dialog-min-width` — Minimum width of the dialog.
- `--m3e-dialog-max-width` — Maximum width of the dialog.
- `--m3e-dialog-color` — Foreground color of the dialog.
- `--m3e-dialog-container-color` — Background color of the dialog container.
- `--m3e-dialog-scrim-color` — Color of the scrim (backdrop overlay).
- `--m3e-dialog-scrim-opacity` — Opacity of the scrim when open.
- `--m3e-dialog-header-container-color` — Background color of the dialog header.
- `--m3e-dialog-header-color` — Foreground color of the dialog header.
- `--m3e-dialog-header-font-size` — Font size for the dialog header.
- `--m3e-dialog-header-font-weight` — Font weight for the dialog header.
- `--m3e-dialog-header-line-height` — Line height for the dialog header.
- `--m3e-dialog-header-tracking` — Letter spacing for the dialog header.
- `--m3e-dialog-content-color` — Foreground color of the dialog content.
- `--m3e-dialog-content-font-size` — Font size for the dialog content.
- `--m3e-dialog-content-font-weight` — Font weight for the dialog content.
- `--m3e-dialog-content-line-height` — Line height for the dialog content.
- `--m3e-dialog-content-tracking` — Letter spacing for the dialog content.

</details>

### `DialogAction` — `<m3e-dialog-action>` (`@m3e/dialog`)

An element, nested within a clickable element, used to close a parenting dialog.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `return-value` | `string` | `""` | The value to return from the dialog. |

**Slots:** `(default)`

### `DialogTrigger` — `<m3e-dialog-trigger>` (`@m3e/dialog`)

An element, nested within a clickable element, used to open a dialog.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `for` | `string | null` | `null` | The identifier of the interactive control to which this element is attached. |

### `Divider` — `<m3e-divider>` (`@m3e/divider`)

A thin line that separates content in lists or other containers.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `inset` | `boolean` | `false` | Whether the divider is indented with equal padding on both sides. |
| `inset-start` | `boolean` | `false` | Whether the divider is indented with padding on the leading side. |
| `inset-end` | `boolean` | `false` | Whether the divider is indented with padding on the trailing side. |
| `vertical` | `boolean` | `false` | Whether the divider is vertically aligned with adjacent content. |

<details><summary>CSS custom properties (5)</summary>

- `--m3e-divider-thickness` — Thickness of the divider line.
- `--m3e-divider-color` — Color of the divider line.
- `--m3e-divider-inset-size` — When inset, fallback inset size used when no specific start or end inset is provided.
- `--m3e-divider-inset-start-size` — When inset, leading inset size.
- `--m3e-divider-inset-end-size` — When inset, trailing inset size.

</details>

### `DrawerContainer` — `<m3e-drawer-container>` (`@m3e/drawer-container`)

A container for one or two sliding drawers.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `end` | `boolean` | `false` | Whether the end drawer is open. |
| `end-mode` | `DrawerMode` | `"side"` | The behavior mode of the end drawer. |
| `end-divider` | `boolean` | `false` | Whether to show a divider between the end drawer and content for `side` mode. |
| `start` | `boolean` | `false` | Whether the start drawer is open. |
| `start-mode` | `DrawerMode` | `"side"` | The behavior mode of the start drawer. |
| `start-divider` | `boolean` | `false` | Whether to show a divider between the start drawer and content for `side` mode. |

**Slots:** `(default)`, `start`, `end`

**Events:** `change`

<details><summary>CSS custom properties (10)</summary>

- `--m3e-drawer-container-color` — The background color of the drawer container.
- `--m3e-drawer-container-elevation` — The elevation level of the drawer container.
- `--m3e-drawer-container-width` — The width of the drawer container.
- `--m3e-drawer-container-scrim-opacity` — The opacity of the scrim behind the drawer.
- `--m3e-modal-drawer-start-shape` — The shape of the drawer’s start edge (typically left in LTR).
- `--m3e-modal-drawer-end-shape` — The shape of the drawer’s end edge (typically right in LTR).
- `--m3e-modal-drawer-container-color` — The background color of the modal drawer container.
- `--m3e-modal-drawer-elevation` — The elevation level of the modal drawer container.
- `--m3e-drawer-divider-color` — The color of the divider between drawer sections.
- `--m3e-drawer-divider-thickness` — The thickness of the divider line.

</details>

### `DrawerToggle` — `<m3e-drawer-toggle>` (`@m3e/drawer-container`)

An element, nested within a clickable element, used to toggle the opened state of a drawer.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `for` | `string | null` | `null` | The identifier of the interactive control to which this element is attached. |

### `Elevation` — `<m3e-elevation>` (`@m3e/core`)

Visually depicts elevation using a shadow.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `disabled` | `boolean` | `false` | Whether hover and press events will not trigger changes in elevation, when attached to an interactive element. |
| `for` | `string | null` | `null` | The identifier of the interactive control to which this element is attached. |
| `level` | `ElevationLevel | null` | `null` | The level at which to visually depict elevation. |

<details><summary>CSS custom properties (9)</summary>

- `--m3e-elevation-color` — Color used to depict elevation.
- `--m3e-elevation-lift-duration` — Duration when lifting.
- `--m3e-elevation-lift-easing` — Easing curve when lifting.
- `--m3e-elevation-settle-duration` — Duration when settling.
- `--m3e-elevation-settle-easing` — Easing curve when settling.
- `--m3e-elevation-level` — Elevation when resting (box-shadow).
- `--m3e-elevation-hover-level` — Elevation on hover (box-shadow).
- `--m3e-elevation-focus-level` — Elevation on focus (box-shadow).
- `--m3e-elevation-pressed-level` — Elevation on pressed (box-shadow).

</details>

### `ExpandableListItem` — `<m3e-expandable-list-item>` (`@m3e/list`)

An item in a list that can be expanded to show more items.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `disabled` | `boolean` | `false` | Whether the element is disabled. |
| `open` | `boolean` | `false` | Whether the item is expanded. |

**Slots:** `(default)`, `leading`, `overline`, `supporting-text`, `toggle-icon`, `items`, `trailing`

**Events:** `opening`, `opened`, `closing`, `closed`

<details><summary>CSS custom properties (74)</summary>

- `--m3e-expandable-list-item-toggle-icon-container-width` — Width of the toggle icon container.
- `--m3e-expandable-list-item-toggle-icon-container-shape` — Border radius of the toggle icon container.
- `--m3e-expandable-list-item-toggle-icon-size` — Size of the toggle icon.
- `--m3e-expandable-list-item-expanded-toggle-icon-container-color` — Background color of the toggle icon container when expanded.
- `--m3e-expandable-list-item-bounce-duration` — Duration of the bounce animation when expanding.
- `--m3e-expandable-list-item-bounce-factor` — Multiplication factor for the bounce effect.
- `--m3e-expandable-list-item-expand-duration` — Duration of the expand/collapse animation.
- `--m3e-list-item-between-space` — Horizontal gap between elements.
- `--m3e-list-item-padding-inline` — Horizontal padding for the list item.
- `--m3e-list-item-padding-block` — Vertical padding for the list item.
- `--m3e-list-item-height` — Minimum height of the list item.
- `--m3e-list-item-font-size` — Font size for main content.
- `--m3e-list-item-font-weight` — Font weight for main content.
- `--m3e-list-item-line-height` — Line height for main content.
- `--m3e-list-item-tracking` — Letter spacing for main content.
- `--m3e-list-item-overline-font-size` — Font size for overline slot.
- `--m3e-list-item-overline-font-weight` — Font weight for overline slot.
- `--m3e-list-item-overline-line-height` — Line height for overline slot.
- `--m3e-list-item-overline-tracking` — Letter spacing for overline slot.
- `--m3e-list-item-supporting-text-font-size` — Font size for supporting text slot.
- `--m3e-list-item-supporting-text-font-weight` — Font weight for supporting text slot.
- `--m3e-list-item-supporting-text-line-height` — Line height for supporting text slot.
- `--m3e-list-item-supporting-text-tracking` — Letter spacing for supporting text slot.
- `--m3e-list-item-trailing-text-font-size` — Font size for trailing supporting text slot.
- `--m3e-list-item-trailing-text-font-weight` — Font weight for trailing supporting text slot.
- `--m3e-list-item-trailing-text-line-height` — Line height for trailing supporting text slot.
- `--m3e-list-item-trailing-text-tracking` — Letter spacing for trailing supporting text slot.
- `--m3e-list-item-icon-size` — Size for leading/trailing icons.
- `--m3e-list-item-label-text-color` — Color for the main content.
- `--m3e-list-item-overline-color` — Color for the overline slot.
- `--m3e-list-item-supporting-text-color` — Color for the supporting text slot.
- `--m3e-list-item-leading-color` — Color for the leading content.
- `--m3e-list-item-trailing-color` — Color for the trailing content.
- `--m3e-list-item-container-color` — Background color of the list item.
- `--m3e-list-item-container-shape` — Border radius of the list item.
- `--m3e-list-item-hover-container-shape` — Border radius of the list item on hover.
- `--m3e-list-item-focus-container-shape` — Border radius of the list item on focus.
- `--m3e-list-item-video-width` — Width of the video slot.
- `--m3e-list-item-video-height` — Height of the video slot.
- `--m3e-list-item-video-shape` — Border radius of the video slot.
- `--m3e-list-item-image-width` — Width of the image slot.
- `--m3e-list-item-image-height` — Height of the image slot.
- `--m3e-list-item-image-shape` — Border radius of the image slot.
- `--m3e-list-item-disabled-label-text-color` — Color for the main content when disabled.
- `--m3e-list-item-disabled-label-text-opacity` — Opacity for the main content when disabled.
- `--m3e-list-item-disabled-overline-color` — Color for the overline slot when disabled.
- `--m3e-list-item-disabled-overline-opacity` — Opacity for the overline slot when disabled.
- `--m3e-list-item-disabled-supporting-text-color` — Color for the supporting text slot when disabled.
- `--m3e-list-item-disabled-supporting-text-opacity` — Opacity for the supporting text slot when disabled.
- `--m3e-list-item-disabled-leading-color` — Color for the leading icon when disabled.
- `--m3e-list-item-disabled-leading-opacity` — Opacity for the leading icon when disabled.
- `--m3e-list-item-disabled-trailing-color` — Color for the trailing icon when disabled.
- `--m3e-list-item-disabled-trailing-opacity` — Opacity for the trailing icon when disabled.
- `--m3e-list-item-hover-state-layer-color` — Color for the hover state layer.
- `--m3e-list-item-hover-state-layer-opacity` — Opacity for the hover state layer.
- `--m3e-list-item-focus-state-layer-color` — Color for the focus state layer.
- `--m3e-list-item-focus-state-layer-opacity` — Opacity for the focus state layer.
- `--m3e-list-item-pressed-state-layer-color` — Color for the pressed state layer.
- `--m3e-list-item-pressed-state-layer-opacity` — Opacity for the pressed state layer.
- `--m3e-segmented-list-container-shape` — Border radius of the segmented list container shape.
- `--m3e-segmented-list-segment-gap` — Gap between list item segments.
- `--m3e-list-item-three-line-top-offset` — Top offset for media in three line items.
- `--m3e-list-item-disabled-media-opacity` — Opacity for media when disabled.
- `--m3e-list-item-leading-space` — Horizontal padding for the leading side.
- `--m3e-list-item-trailing-space` — Horizontal padding for the trailing side.
- `--m3e-list-item-one-line-top-space` — Top padding for one-line items.
- `--m3e-list-item-one-line-bottom-space` — Bottom padding for one-line items.
- `--m3e-list-item-two-line-top-space` — Top padding for two-line items.
- `--m3e-list-item-two-line-bottom-space` — Bottom padding for two-line items.
- `--m3e-list-item-three-line-top-space` — Top padding for three-line items.
- `--m3e-list-item-three-line-bottom-space` — Bottom padding for three-line items.
- `--m3e-list-item-one-line-height` — Minimum height of a one line list item.
- `--m3e-list-item-two-line-height` — Minimum height of a two line list item.
- `--m3e-list-item-three-line-height` — Minimum height of a three line list item.

</details>

### `ExpansionHeader` — `<m3e-expansion-header>` (`@m3e/expansion-panel`)

A button used to toggle the expanded state of an expansion panel.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `hide-toggle` | `boolean` | `false` | Whether to hide the expansion toggle. |
| `toggle-direction` | `ExpansionToggleDirection` | `"vertical"` | The direction of the expansion toggle. |
| `toggle-position` | `ExpansionTogglePosition` | `"after"` | The position of the expansion toggle. |
| `disabled` | `boolean` | `false` | Whether the element is disabled. |

**Slots:** `(default)`, `toggle-icon`

**Events:** `click`

<details><summary>CSS custom properties (10)</summary>

- `--m3e-expansion-header-collapsed-height` — Height of the header when the panel is collapsed.
- `--m3e-expansion-header-expanded-height` — Height of the header when the panel is expanded.
- `--m3e-expansion-header-padding-left` — Left padding inside the header.
- `--m3e-expansion-header-padding-right` — Right padding inside the header.
- `--m3e-expansion-header-spacing` — Spacing between header elements.
- `--m3e-expansion-header-toggle-icon-size` — Size of the toggle icon (e.g. chevron).
- `--m3e-expansion-header-font-size` — The font size of the header text.
- `--m3e-expansion-header-font-weight` — The font weight of the header text.
- `--m3e-expansion-header-line-height` — The line height of the header text.
- `--m3e-expansion-header-tracking` — Letter spacing (tracking) of the header text.

</details>

### `ExpansionPanel` — `<m3e-expansion-panel>` (`@m3e/expansion-panel`)

An expandable details-summary view.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `disabled` | `boolean` | `false` | Whether the element is disabled. |
| `hide-toggle` | `boolean` | `false` | Whether to hide the expansion toggle. |
| `open` | `boolean` | `false` | Whether the panel is expanded. |
| `toggle-direction` | `ExpansionToggleDirection` | `"vertical"` | The direction of the expansion toggle. |
| `toggle-position` | `ExpansionTogglePosition` | `"after"` | The position of the expansion toggle. |

**Slots:** `(default)`, `actions`, `header`, `toggle-icon`

**Events:** `opening`, `opened`, `closing`, `closed`

<details><summary>CSS custom properties (23)</summary>

- `--m3e-expansion-header-collapsed-height` — Height of the header when the panel is collapsed.
- `--m3e-expansion-header-expanded-height` — Height of the header when the panel is expanded.
- `--m3e-expansion-header-padding-left` — Left padding inside the header.
- `--m3e-expansion-header-padding-right` — Right padding inside the header.
- `--m3e-expansion-header-spacing` — Spacing between header elements.
- `--m3e-expansion-header-toggle-icon-size` — Size of the toggle icon (e.g. chevron).
- `--m3e-expansion-header-font-size` — The font size of the header text.
- `--m3e-expansion-header-font-weight` — The font weight of the header text.
- `--m3e-expansion-header-line-height` — The line height of the header text.
- `--m3e-expansion-header-tracking` — Letter spacing (tracking) of the header text.
- `--m3e-expansion-panel-text-color` — Color of the panel's text content.
- `--m3e-expansion-panel-disabled-text-color` — Color of the panel's text content, when disabled.
- `--m3e-expansion-panel-disabled-text-opacity` — Opacity of the panel's text content, when disabled.
- `--m3e-expansion-panel-container-color` — Background color of the panel container.
- `--m3e-expansion-panel-elevation` — Elevation level when the panel is collapsed.
- `--m3e-expansion-panel-shape` — Shape (e.g. border radius) of the panel when collapsed.
- `--m3e-expansion-panel-open-elevation` — Elevation level when the panel is expanded.
- `--m3e-expansion-panel-open-shape` — Shape (e.g. border radius) of the panel when expanded.
- `--m3e-expansion-panel-content-padding` — Padding around the panel's content area.
- `--m3e-expansion-panel-actions-spacing` — Spacing between action buttons or elements.
- `--m3e-expansion-panel-actions-padding` — Padding around the actions section.
- `--m3e-expansion-panel-actions-divider-thickness` — Thickness of the divider above actions.
- `--m3e-expansion-panel-actions-divider-color` — Color of the divider above actions.

</details>

### `Fab` — `<m3e-fab>` (`@m3e/fab`)

A floating action button (FAB) used to present important actions.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `disabled` | `boolean` | `false` | Whether the element is disabled. |
| `disabled-interactive` | `boolean` | `false` | Whether the element is disabled and interactive. |
| `download` | `string | null` | `null` | A value indicating whether the `target` of the link button will be downloaded, optionally specifying the new name of the file. |
| `extended` | `boolean` | `false` | Whether the button is extended to show the label. |
| `href` | `string` | `""` | The URL to which the link button points. |
| `lowered` | `boolean` | `false` | Whether to present a lowered elevation. |
| `name` | `string` | `` | The name of the element, submitted as a pair with the element's `value` as part of form data, when the element is used to submit a form. |
| `rel` | `string` | `""` | The relationship between the `target` of the link button and the document. |
| `size` | `FabSize` | `"medium"` | The size of the button. |
| `target` | `LinkTarget` | `""` | The target of the link button. |
| `type` | `FormSubmitterType` | `"button"` | The type of the element. |
| `value` | `string` | `` | The value associated with the element's name when it's submitted with form data. |
| `variant` | `FabVariant` | `"primary-container"` | The appearance variant of the button. |

**Slots:** `(default)`, `label`, `close-icon`

**Events:** `click`

<details><summary>CSS custom properties (248)</summary>

- `--m3e-fab-small-container-height` — Height of the small FAB container.
- `--m3e-fab-small-label-text-font-size` — Font size for the small FAB label text.
- `--m3e-fab-small-label-text-font-weight` — Font weight for the small FAB label text.
- `--m3e-fab-small-label-text-line-height` — Line height for the small FAB label text.
- `--m3e-fab-small-label-text-tracking` — Letter spacing (tracking) for the small FAB label text.
- `--m3e-fab-small-icon-size` — Icon size for the small FAB.
- `--m3e-fab-small-shape` — Border radius for the small FAB.
- `--m3e-fab-small-leading-space` — Leading space for the small FAB.
- `--m3e-fab-small-trailing-space` — Trailing space for the small FAB.
- `--m3e-fab-small-icon-label-space` — Space between icon and label for the small FAB.
- `--m3e-fab-medium-container-height` — Height of the medium FAB container.
- `--m3e-fab-medium-label-text-font-size` — Font size for the medium FAB label text.
- `--m3e-fab-medium-label-text-font-weight` — Font weight for the medium FAB label text.
- `--m3e-fab-medium-label-text-line-height` — Line height for the medium FAB label text.
- `--m3e-fab-medium-label-text-tracking` — Letter spacing (tracking) for the medium FAB label text.
- `--m3e-fab-medium-icon-size` — Icon size for the medium FAB.
- `--m3e-fab-medium-shape` — Border radius for the medium FAB.
- `--m3e-fab-medium-leading-space` — Leading space for the medium FAB.
- `--m3e-fab-medium-trailing-space` — Trailing space for the medium FAB.
- `--m3e-fab-medium-icon-label-space` — Space between icon and label for the medium FAB.
- `--m3e-fab-large-container-height` — Height of the large FAB container.
- `--m3e-fab-large-label-text-font-size` — Font size for the large FAB label text.
- `--m3e-fab-large-label-text-font-weight` — Font weight for the large FAB label text.
- `--m3e-fab-large-label-text-line-height` — Line height for the large FAB label text.
- `--m3e-fab-large-label-text-tracking` — Letter spacing (tracking) for the large FAB label text.
- `--m3e-fab-large-icon-size` — Icon size for the large FAB.
- `--m3e-fab-large-shape` — Border radius for the large FAB.
- `--m3e-fab-large-leading-space` — Leading space for the large FAB.
- `--m3e-fab-large-trailing-space` — Trailing space for the large FAB.
- `--m3e-fab-large-icon-label-space` — Space between icon and label for the large FAB.
- `--m3e-primary-fab-label-text-color` — Default label text color for primary FAB.
- `--m3e-primary-fab-icon-color` — Default icon color for primary FAB.
- `--m3e-primary-fab-container-color` — Default container background color for primary FAB.
- `--m3e-primary-fab-container-elevation` — Resting elevation for primary FAB.
- `--m3e-primary-fab-lowered-container-elevation` — Lowered resting elevation for primary FAB.
- `--m3e-primary-fab-disabled-container-color` — Container background color when disabled (primary).
- `--m3e-primary-fab-disabled-container-opacity` — Opacity of container when disabled (primary).
- `--m3e-primary-fab-disabled-icon-color` — Icon color when disabled (primary).
- `--m3e-primary-fab-disabled-icon-opacity` — Icon opacity when disabled (primary).
- `--m3e-primary-fab-disabled-label-text-color` — Label text color when disabled (primary).
- `--m3e-primary-fab-disabled-label-text-opacity` — Label text opacity when disabled (primary).
- `--m3e-primary-fab-disabled-container-elevation` — Elevation when disabled (primary).
- `--m3e-primary-fab-lowered-disabled-container-elevation` — Lowered elevation when disabled (primary).
- `--m3e-primary-fab-hover-icon-color` — Icon color on hover (primary).
- `--m3e-primary-fab-hover-label-text-color` — Label text color on hover (primary).
- `--m3e-primary-fab-hover-state-layer-color` — State layer color on hover (primary).
- `--m3e-primary-fab-hover-state-layer-opacity` — State layer opacity on hover (primary).
- `--m3e-primary-fab-hover-container-elevation` — Elevation on hover (primary).
- `--m3e-primary-fab-lowered-hover-container-elevation` — Lowered elevation on hover (primary).
- `--m3e-primary-fab-focus-icon-color` — Icon color on focus (primary).
- `--m3e-primary-fab-focus-label-text-color` — Label text color on focus (primary).
- `--m3e-primary-fab-focus-state-layer-color` — State layer color on focus (primary).
- `--m3e-primary-fab-focus-state-layer-opacity` — State layer opacity on focus (primary).
- `--m3e-primary-fab-focus-container-elevation` — Elevation on focus (primary).
- `--m3e-primary-fab-lowered-focus-container-elevation` — Lowered elevation on focus (primary).
- `--m3e-primary-fab-pressed-icon-color` — Icon color on pressed (primary).
- `--m3e-primary-fab-pressed-label-text-color` — Label text color on pressed (primary).
- `--m3e-primary-fab-pressed-state-layer-color` — State layer color on pressed (primary).
- `--m3e-primary-fab-pressed-state-layer-opacity` — State layer opacity on pressed (primary).
- `--m3e-primary-fab-pressed-container-elevation` — Elevation on pressed (primary).
- `--m3e-primary-fab-lowered-pressed-container-elevation` — Lowered elevation on pressed (primary).
- `--m3e-secondary-fab-label-text-color` — Default label text color for secondary FAB.
- `--m3e-secondary-fab-icon-color` — Default icon color for secondary FAB.
- `--m3e-secondary-fab-container-color` — Default container background color for secondary FAB.
- `--m3e-secondary-fab-container-elevation` — Resting elevation for secondary FAB.
- `--m3e-secondary-fab-lowered-container-elevation` — Lowered resting elevation for secondary FAB.
- `--m3e-secondary-fab-disabled-container-color` — Container background color when disabled (secondary).
- `--m3e-secondary-fab-disabled-container-opacity` — Opacity of container when disabled (secondary).
- `--m3e-secondary-fab-disabled-icon-color` — Icon color when disabled (secondary).
- `--m3e-secondary-fab-disabled-icon-opacity` — Icon opacity when disabled (secondary).
- `--m3e-secondary-fab-disabled-label-text-color` — Label text color when disabled (secondary).
- `--m3e-secondary-fab-disabled-label-text-opacity` — Label text opacity when disabled (secondary).
- `--m3e-secondary-fab-disabled-container-elevation` — Elevation when disabled (secondary).
- `--m3e-secondary-fab-lowered-disabled-container-elevation` — Lowered elevation when disabled (secondary).
- `--m3e-secondary-fab-hover-icon-color` — Icon color on hover (secondary).
- `--m3e-secondary-fab-hover-label-text-color` — Label text color on hover (secondary).
- `--m3e-secondary-fab-hover-state-layer-color` — State layer color on hover (secondary).
- `--m3e-secondary-fab-hover-state-layer-opacity` — State layer opacity on hover (secondary).
- `--m3e-secondary-fab-hover-container-elevation` — Elevation on hover (secondary).
- `--m3e-secondary-fab-lowered-hover-container-elevation` — Lowered elevation on hover (secondary).
- `--m3e-secondary-fab-focus-icon-color` — Icon color on focus (secondary).
- `--m3e-secondary-fab-focus-label-text-color` — Label text color on focus (secondary).
- `--m3e-secondary-fab-focus-state-layer-color` — State layer color on focus (secondary).
- `--m3e-secondary-fab-focus-state-layer-opacity` — State layer opacity on focus (secondary).
- `--m3e-secondary-fab-focus-container-elevation` — Elevation on focus (secondary).
- `--m3e-secondary-fab-lowered-focus-container-elevation` — Lowered elevation on focus (secondary).
- `--m3e-secondary-fab-pressed-icon-color` — Icon color on pressed (secondary).
- `--m3e-secondary-fab-pressed-label-text-color` — Label text color on pressed (secondary).
- `--m3e-secondary-fab-pressed-state-layer-color` — State layer color on pressed (secondary).
- `--m3e-secondary-fab-pressed-state-layer-opacity` — State layer opacity on pressed (secondary).
- `--m3e-secondary-fab-pressed-container-elevation` — Elevation on pressed (secondary).
- `--m3e-secondary-fab-lowered-pressed-container-elevation` — Lowered elevation on pressed (secondary).
- `--m3e-tertiary-fab-label-text-color` — Default label text color for tertiary FAB.
- `--m3e-tertiary-fab-icon-color` — Default icon color for tertiary FAB.
- `--m3e-tertiary-fab-container-color` — Default container background color for tertiary FAB.
- `--m3e-tertiary-fab-container-elevation` — Resting elevation for tertiary FAB.
- `--m3e-tertiary-fab-lowered-container-elevation` — Lowered resting elevation for tertiary FAB.
- `--m3e-tertiary-fab-disabled-container-color` — Container background color when disabled (tertiary).
- `--m3e-tertiary-fab-disabled-container-opacity` — Opacity of container when disabled (tertiary).
- `--m3e-tertiary-fab-disabled-icon-color` — Icon color when disabled (tertiary).
- `--m3e-tertiary-fab-disabled-icon-opacity` — Icon opacity when disabled (tertiary).
- `--m3e-tertiary-fab-disabled-label-text-color` — Label text color when disabled (tertiary).
- `--m3e-tertiary-fab-disabled-label-text-opacity` — Label text opacity when disabled (tertiary).
- `--m3e-tertiary-fab-disabled-container-elevation` — Elevation when disabled (tertiary).
- `--m3e-tertiary-fab-lowered-disabled-container-elevation` — Lowered elevation when disabled (tertiary).
- `--m3e-tertiary-fab-hover-icon-color` — Icon color on hover (tertiary).
- `--m3e-tertiary-fab-hover-label-text-color` — Label text color on hover (tertiary).
- `--m3e-tertiary-fab-hover-state-layer-color` — State layer color on hover (tertiary).
- `--m3e-tertiary-fab-hover-state-layer-opacity` — State layer opacity on hover (tertiary).
- `--m3e-tertiary-fab-hover-container-elevation` — Elevation on hover (tertiary).
- `--m3e-tertiary-fab-lowered-hover-container-elevation` — Lowered elevation on hover (tertiary).
- `--m3e-tertiary-fab-focus-icon-color` — Icon color on focus (tertiary).
- `--m3e-tertiary-fab-focus-label-text-color` — Label text color on focus (tertiary).
- `--m3e-tertiary-fab-focus-state-layer-color` — State layer color on focus (tertiary).
- `--m3e-tertiary-fab-focus-state-layer-opacity` — State layer opacity on focus (tertiary).
- `--m3e-tertiary-fab-focus-container-elevation` — Elevation on focus (tertiary).
- `--m3e-tertiary-fab-lowered-focus-container-elevation` — Lowered elevation on focus (tertiary).
- `--m3e-tertiary-fab-pressed-icon-color` — Icon color on pressed (tertiary).
- `--m3e-tertiary-fab-pressed-label-text-color` — Label text color on pressed (tertiary).
- `--m3e-tertiary-fab-pressed-state-layer-color` — State layer color on pressed (tertiary).
- `--m3e-tertiary-fab-pressed-state-layer-opacity` — State layer opacity on pressed (tertiary).
- `--m3e-tertiary-fab-pressed-container-elevation` — Elevation on pressed (tertiary).
- `--m3e-tertiary-fab-lowered-pressed-container-elevation` — Lowered elevation on pressed (tertiary).
- `--m3e-primary-container-fab-label-text-color` — Default label text color for primary-container FAB.
- `--m3e-primary-container-fab-icon-color` — Default icon color for primary-container FAB.
- `--m3e-primary-container-fab-container-color` — Default container background color for primary-container FAB.
- `--m3e-primary-container-fab-container-elevation` — Resting elevation for primary-container FAB.
- `--m3e-primary-container-fab-lowered-container-elevation` — Lowered resting elevation for primary-container FAB.
- `--m3e-primary-container-fab-disabled-container-color` — Container background color when disabled (primary-container).
- `--m3e-primary-container-fab-disabled-container-opacity` — Opacity of container when disabled (primary-container).
- `--m3e-primary-container-fab-disabled-icon-color` — Icon color when disabled (primary-container).
- `--m3e-primary-container-fab-disabled-icon-opacity` — Icon opacity when disabled (primary-container).
- `--m3e-primary-container-fab-disabled-label-text-color` — Label text color when disabled (primary-container).
- `--m3e-primary-container-fab-disabled-label-text-opacity` — Label text opacity when disabled (primary-container).
- `--m3e-primary-container-fab-disabled-container-elevation` — Elevation when disabled (primary-container).
- `--m3e-primary-container-fab-lowered-disabled-container-elevation` — Lowered elevation when disabled (primary-container).
- `--m3e-primary-container-fab-hover-icon-color` — Icon color on hover (primary-container).
- `--m3e-primary-container-fab-hover-label-text-color` — Label text color on hover (primary-container).
- `--m3e-primary-container-fab-hover-state-layer-color` — State layer color on hover (primary-container).
- `--m3e-primary-container-fab-hover-state-layer-opacity` — State layer opacity on hover (primary-container).
- `--m3e-primary-container-fab-hover-container-elevation` — Elevation on hover (primary-container).
- `--m3e-primary-container-fab-lowered-hover-container-elevation` — Lowered elevation on hover (primary-container).
- `--m3e-primary-container-fab-focus-icon-color` — Icon color on focus (primary-container).
- `--m3e-primary-container-fab-focus-label-text-color` — Label text color on focus (primary-container).
- `--m3e-primary-container-fab-focus-state-layer-color` — State layer color on focus (primary-container).
- `--m3e-primary-container-fab-focus-state-layer-opacity` — State layer opacity on focus (primary-container).
- `--m3e-primary-container-fab-focus-container-elevation` — Elevation on focus (primary-container).
- `--m3e-primary-container-fab-lowered-focus-container-elevation` — Lowered elevation on focus (primary-container).
- `--m3e-primary-container-fab-pressed-icon-color` — Icon color on pressed (primary-container).
- `--m3e-primary-container-fab-pressed-label-text-color` — Label text color on pressed (primary-container).
- `--m3e-primary-container-fab-pressed-state-layer-color` — State layer color on pressed (primary-container).
- `--m3e-primary-container-fab-pressed-state-layer-opacity` — State layer opacity on pressed (primary-container).
- `--m3e-primary-container-fab-pressed-container-elevation` — Elevation on pressed (primary-container).
- `--m3e-primary-container-fab-lowered-pressed-container-elevation` — Lowered elevation on pressed (primary-container).
- `--m3e-secondary-container-fab-label-text-color` — Default label text color for secondary-container FAB.
- `--m3e-secondary-container-fab-icon-color` — Default icon color for secondary-container FAB.
- `--m3e-secondary-container-fab-container-color` — Default container background color for secondary-container FAB.
- `--m3e-secondary-container-fab-container-elevation` — Resting elevation for secondary-container FAB.
- `--m3e-secondary-container-fab-lowered-container-elevation` — Lowered resting elevation for secondary-container FAB.
- `--m3e-secondary-container-fab-disabled-container-color` — Container background color when disabled (secondary-container).
- `--m3e-secondary-container-fab-disabled-container-opacity` — Opacity of container when disabled (secondary-container).
- `--m3e-secondary-container-fab-disabled-icon-color` — Icon color when disabled (secondary-container).
- `--m3e-secondary-container-fab-disabled-icon-opacity` — Icon opacity when disabled (secondary-container).
- `--m3e-secondary-container-fab-disabled-label-text-color` — Label text color when disabled (secondary-container).
- `--m3e-secondary-container-fab-disabled-label-text-opacity` — Label text opacity when disabled (secondary-container).
- `--m3e-secondary-container-fab-disabled-container-elevation` — Elevation when disabled (secondary-container).
- `--m3e-secondary-container-fab-lowered-disabled-container-elevation` — Lowered elevation when disabled (secondary-container).
- `--m3e-secondary-container-fab-hover-icon-color` — Icon color on hover (secondary-container).
- `--m3e-secondary-container-fab-hover-label-text-color` — Label text color on hover (secondary-container).
- `--m3e-secondary-container-fab-hover-state-layer-color` — State layer color on hover (secondary-container).
- `--m3e-secondary-container-fab-hover-state-layer-opacity` — State layer opacity on hover (secondary-container).
- `--m3e-secondary-container-fab-hover-container-elevation` — Elevation on hover (secondary-container).
- `--m3e-secondary-container-fab-lowered-hover-container-elevation` — Lowered elevation on hover (secondary-container).
- `--m3e-secondary-container-fab-focus-icon-color` — Icon color on focus (secondary-container).
- `--m3e-secondary-container-fab-focus-label-text-color` — Label text color on focus (secondary-container).
- `--m3e-secondary-container-fab-focus-state-layer-color` — State layer color on focus (secondary-container).
- `--m3e-secondary-container-fab-focus-state-layer-opacity` — State layer opacity on focus (secondary-container).
- `--m3e-secondary-container-fab-focus-container-elevation` — Elevation on focus (secondary-container).
- `--m3e-secondary-container-fab-lowered-focus-container-elevation` — Lowered elevation on focus (secondary-container).
- `--m3e-secondary-container-fab-pressed-icon-color` — Icon color on pressed (secondary-container).
- `--m3e-secondary-container-fab-pressed-label-text-color` — Label text color on pressed (secondary-container).
- `--m3e-secondary-container-fab-pressed-state-layer-color` — State layer color on pressed (secondary-container).
- `--m3e-secondary-container-fab-pressed-state-layer-opacity` — State layer opacity on pressed (secondary-container).
- `--m3e-secondary-container-fab-pressed-container-elevation` — Elevation on pressed (secondary-container).
- `--m3e-secondary-container-fab-lowered-pressed-container-elevation` — Lowered elevation on pressed (secondary-container).
- `--m3e-tertiary-container-fab-label-text-color` — Default label text color for tertiary-container FAB.
- `--m3e-tertiary-container-fab-icon-color` — Default icon color for tertiary-container FAB.
- `--m3e-tertiary-container-fab-container-color` — Default container background color for tertiary-container FAB.
- `--m3e-tertiary-container-fab-container-elevation` — Resting elevation for tertiary-container FAB.
- `--m3e-tertiary-container-fab-lowered-container-elevation` — Lowered resting elevation for tertiary-container FAB.
- `--m3e-tertiary-container-fab-disabled-container-color` — Container background color when disabled (tertiary-container).
- `--m3e-tertiary-container-fab-disabled-container-opacity` — Opacity of container when disabled (tertiary-container).
- `--m3e-tertiary-container-fab-disabled-icon-color` — Icon color when disabled (tertiary-container).
- `--m3e-tertiary-container-fab-disabled-icon-opacity` — Icon opacity when disabled (tertiary-container).
- `--m3e-tertiary-container-fab-disabled-label-text-color` — Label text color when disabled (tertiary-container).
- `--m3e-tertiary-container-fab-disabled-label-text-opacity` — Label text opacity when disabled (tertiary-container).
- `--m3e-tertiary-container-fab-disabled-container-elevation` — Elevation when disabled (tertiary-container).
- `--m3e-tertiary-container-fab-lowered-disabled-container-elevation` — Lowered elevation when disabled (tertiary-container).
- `--m3e-tertiary-container-fab-hover-icon-color` — Icon color on hover (tertiary-container).
- `--m3e-tertiary-container-fab-hover-label-text-color` — Label text color on hover (tertiary-container).
- `--m3e-tertiary-container-fab-hover-state-layer-color` — State layer color on hover (tertiary-container).
- `--m3e-tertiary-container-fab-hover-state-layer-opacity` — State layer opacity on hover (tertiary-container).
- `--m3e-tertiary-container-fab-hover-container-elevation` — Elevation on hover (tertiary-container).
- `--m3e-tertiary-container-fab-lowered-hover-container-elevation` — Lowered elevation on hover (tertiary-container).
- `--m3e-tertiary-container-fab-focus-icon-color` — Icon color on focus (tertiary-container).
- `--m3e-tertiary-container-fab-focus-label-text-color` — Label text color on focus (tertiary-container).
- `--m3e-tertiary-container-fab-focus-state-layer-color` — State layer color on focus (tertiary-container).
- `--m3e-tertiary-container-fab-focus-state-layer-opacity` — State layer opacity on focus (tertiary-container).
- `--m3e-tertiary-container-fab-focus-container-elevation` — Elevation on focus (tertiary-container).
- `--m3e-tertiary-container-fab-lowered-focus-container-elevation` — Lowered elevation on focus (tertiary-container).
- `--m3e-tertiary-container-fab-pressed-icon-color` — Icon color on pressed (tertiary-container).
- `--m3e-tertiary-container-fab-pressed-label-text-color` — Label text color on pressed (tertiary-container).
- `--m3e-tertiary-container-fab-pressed-state-layer-color` — State layer color on pressed (tertiary-container).
- `--m3e-tertiary-container-fab-pressed-state-layer-opacity` — State layer opacity on pressed (tertiary-container).
- `--m3e-tertiary-container-fab-pressed-container-elevation` — Elevation on pressed (tertiary-container).
- `--m3e-tertiary-container-fab-lowered-pressed-container-elevation` — Lowered elevation on pressed (tertiary-container).
- `--m3e-surface-fab-label-text-color` — Default label text color for surface FAB.
- `--m3e-surface-fab-icon-color` — Default icon color for surface FAB.
- `--m3e-surface-fab-container-color` — Default container background color for surface FAB.
- `--m3e-surface-fab-container-elevation` — Resting elevation for surface FAB.
- `--m3e-surface-fab-lowered-container-elevation` — Lowered resting elevation for surface FAB.
- `--m3e-surface-fab-lowered-container-color` — Lowered container background color for surface FAB.
- `--m3e-surface-fab-disabled-container-color` — Container background color when disabled (surface).
- `--m3e-surface-fab-disabled-container-opacity` — Opacity of container when disabled (surface).
- `--m3e-surface-fab-disabled-icon-color` — Icon color when disabled (surface).
- `--m3e-surface-fab-disabled-icon-opacity` — Icon opacity when disabled (surface).
- `--m3e-surface-fab-disabled-label-text-color` — Label text color when disabled (surface).
- `--m3e-surface-fab-disabled-label-text-opacity` — Label text opacity when disabled (surface).
- `--m3e-surface-fab-disabled-container-elevation` — Elevation when disabled (surface).
- `--m3e-surface-fab-lowered-disabled-container-elevation` — Lowered elevation when disabled (surface).
- `--m3e-surface-fab-hover-icon-color` — Icon color on hover (surface).
- `--m3e-surface-fab-hover-label-text-color` — Label text color on hover (surface).
- `--m3e-surface-fab-hover-state-layer-color` — State layer color on hover (surface).
- `--m3e-surface-fab-hover-state-layer-opacity` — State layer opacity on hover (surface).
- `--m3e-surface-fab-hover-container-elevation` — Elevation on hover (surface).
- `--m3e-surface-fab-lowered-hover-container-elevation` — Lowered elevation on hover (surface).
- `--m3e-surface-fab-focus-icon-color` — Icon color on focus (surface).
- `--m3e-surface-fab-focus-label-text-color` — Label text color on focus (surface).
- `--m3e-surface-fab-focus-state-layer-color` — State layer color on focus (surface).
- `--m3e-surface-fab-focus-state-layer-opacity` — State layer opacity on focus (surface).
- `--m3e-surface-fab-focus-container-elevation` — Elevation on focus (surface).
- `--m3e-surface-fab-lowered-focus-container-elevation` — Lowered elevation on focus (surface).
- `--m3e-surface-fab-pressed-icon-color` — Icon color on pressed (surface).
- `--m3e-surface-fab-pressed-label-text-color` — Label text color on pressed (surface).
- `--m3e-surface-fab-pressed-state-layer-color` — State layer color on pressed (surface).
- `--m3e-surface-fab-pressed-state-layer-opacity` — State layer opacity on pressed (surface).
- `--m3e-surface-fab-pressed-container-elevation` — Elevation on pressed (surface).
- `--m3e-surface-fab-lowered-pressed-container-elevation` — Lowered elevation on pressed (surface).

</details>

### `FabMenu` — `<m3e-fab-menu>` (`@m3e/fab-menu`)

A menu, opened from a floating action button (FAB), used to display multiple related actions.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `variant` | `FabMenuVariant` | `"primary"` | The appearance variant of the menu. |

**Slots:** `(default)`

**Events:** `beforetoggle`, `toggle`

<details><summary>CSS custom properties (17)</summary>

- `--m3e-fab-menu-spacing` — Vertical gap between menu items.
- `--m3e-fab-menu-max-width` — Maximum width of the menu.
- `--m3e-primary-fab-color` — Foreground color for primary variant items.
- `--m3e-primary-fab-container-color` — Container color for primary variant items.
- `--m3e-primary-fab-hover-color` — Hover background color for primary variant items.
- `--m3e-primary-fab-focus-color` — Focus background color for primary variant items.
- `--m3e-primary-fab-ripple-color` — Ripple color for primary variant items.
- `--m3e-secondary-fab-color` — Foreground color for secondary variant items.
- `--m3e-secondary-fab-container-color` — Container color for secondary variant items.
- `--m3e-secondary-fab-hover-color` — Hover background color for secondary variant items.
- `--m3e-secondary-fab-focus-color` — Focus background color for secondary variant items.
- `--m3e-secondary-fab-ripple-color` — Ripple color for secondary variant items.
- `--m3e-tertiary-fab-color` — Foreground color for tertiary variant items.
- `--m3e-tertiary-fab-container-color` — Container color for tertiary variant items.
- `--m3e-tertiary-fab-hover-color` — Hover background color for tertiary variant items.
- `--m3e-tertiary-fab-focus-color` — Focus background color for tertiary variant items.
- `--m3e-tertiary-fab-ripple-color` — Ripple color for tertiary variant items.

</details>

### `FabMenuTrigger` — `<m3e-fab-menu-trigger>` (`@m3e/fab-menu`)

An element, nested within a clickable element, used to open a floating action button (FAB) menu.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `for` | `string | null` | `null` | The identifier of the interactive control to which this element is attached. |

### `FilterChip` — `<m3e-filter-chip>` (`@m3e/chips`)

A chip users interact with to select/deselect options.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `disabled` | `boolean` | `false` | A value indicating whether the element is disabled. |
| `disabled-interactive` | `boolean` | `false` | A value indicating whether the element is disabled and interactive. |
| `selected` | `boolean` | `false` | A value indicating whether the element is selected. |
| `value` | `string` | `` | A string representing the value of the chip. |
| `variant` | `ChipVariant` | `"outlined"` | The appearance variant of the chip. |

**Slots:** `(default)`, `icon`, `trailing-icon`

**Events:** `input`, `change`, `click`

<details><summary>CSS custom properties (45)</summary>

- `--m3e-chip-container-shape` — Border radius of the chip container.
- `--m3e-chip-container-height` — Base height of the chip container before density adjustment.
- `--m3e-chip-label-text-font-size` — Font size of the chip label text.
- `--m3e-chip-label-text-font-weight` — Font weight of the chip label text.
- `--m3e-chip-label-text-line-height` — Line height of the chip label text.
- `--m3e-chip-label-text-tracking` — Letter spacing of the chip label text.
- `--m3e-chip-icon-size` — Font size of leading/trailing icons.
- `--m3e-chip-spacing` — Horizontal gap between chip content elements.
- `--m3e-chip-padding-start` — Default start padding when no icon is present.
- `--m3e-chip-padding-end` — Default end padding when no trailing icon is present.
- `--m3e-chip-with-icon-padding-start` — Start padding when leading icon is present.
- `--m3e-chip-with-icon-padding-end` — End padding when trailing icon is present.
- `--m3e-chip-disabled-label-text-color` — Base color for disabled label text.
- `--m3e-chip-disabled-label-text-opacity` — Opacity applied to disabled label text.
- `--m3e-chip-disabled-icon-color` — Base color for disabled icons.
- `--m3e-chip-disabled-icon-opacity` — Opacity applied to disabled icons.
- `--m3e-elevated-chip-container-color` — Background color for elevated variant.
- `--m3e-elevated-chip-elevation` — Elevation level for elevated variant.
- `--m3e-elevated-chip-hover-elevation` — Elevation level on hover.
- `--m3e-elevated-chip-disabled-container-color` — Background color for disabled elevated variant.
- `--m3e-elevated-chip-disabled-container-opacity` — Opacity applied to disabled elevated background.
- `--m3e-elevated-chip-disabled-elevation` — Elevation level for disabled elevated variant.
- `--m3e-outlined-chip-outline-thickness` — Outline thickness for outlined variant.
- `--m3e-outlined-chip-outline-color` — Outline color for outlined variant.
- `--m3e-outlined-chip-disabled-outline-color` — Outline color for disabled outlined variant.
- `--m3e-outlined-chip-disabled-outline-opacity` — Opacity applied to disabled outline.
- `--m3e-chip-selected-outline-thickness` — Outline thickness for selected state.
- `--m3e-chip-selected-label-text-color` — Text color in selected state.
- `--m3e-chip-selected-container-color` — Background color in selected state.
- `--m3e-chip-selected-container-hover-color` — Hover state layer color in selected state.
- `--m3e-chip-selected-container-focus-color` — Focus state layer color in selected state.
- `--m3e-chip-selected-hover-elevation` — Elevation on hover in selected state.
- `--m3e-chip-selected-ripple-color` — Ripple color in selected state.
- `--m3e-chip-selected-state-layer-focus-color` — Focus state layer color in selected state.
- `--m3e-chip-selected-state-layer-hover-color` — Hover state layer color in selected state.
- `--m3e-chip-selected-leading-icon-color` — Leading icon color in selected state.
- `--m3e-chip-selected-trailing-icon-color` — Trailing icon color in selected state.
- `--m3e-chip-unselected-label-text-color` — Text color in unselected state.
- `--m3e-chip-unselected-ripple-color` — Ripple color in unselected state.
- `--m3e-chip-unselected-state-layer-focus-color` — Focus state layer color in unselected state.
- `--m3e-chip-unselected-state-layer-hover-color` — Hover state layer color in unselected state.
- `--m3e-chip-unselected-leading-icon-color` — Leading icon color in unselected state.
- `--m3e-chip-unselected-trailing-icon-color` — Trailing icon color in unselected state.
- `--m3e-chip-label-text-color` — Label text color in default state.
- `--m3e-chip-icon-color` — Icon color in default state.

</details>

### `FilterChipSet` — `<m3e-filter-chip-set>` (`@m3e/chips`)

A container that organizes filter chips into a cohesive group, enabling selection and

| Attribute | Type | Default | Description |
|---|---|---|---|
| `disabled` | `boolean` | `false` | Whether the element is disabled. |
| `hide-selection-indicator` | `boolean` | `false` | Whether to hide the selection indicator. |
| `multi` | `boolean` | `false` | Whether multiple chips can be selected. |
| `name` | `string` | `` | The name that identifies the element when submitting the associated form. |
| `vertical` | `boolean` | `false` | Whether the element is oriented vertically. |

**Slots:** `(default)`

**Events:** `change`, `input`

<details><summary>CSS custom properties (1)</summary>

- `--m3e-chip-set-spacing` — The spacing (gap) between chips in the set.

</details>

### `FocusRing` — `<m3e-focus-ring>` (`@m3e/core`)

A focus ring used to depict a strong focus indicator.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `disabled` | `boolean` | `false` | Whether the focus events will not trigger the focus ring. Focus rings can be still controlled manually by using the `show` and `hide` methods. |
| `inward` | `boolean` | `false` | Whether the focus ring animates inward instead of outward. |
| `for` | `string | null` | `null` | The identifier of the interactive control to which this element is attached. |

<details><summary>CSS custom properties (5)</summary>

- `--m3e-focus-ring-color` — The color of the focus ring.
- `--m3e-focus-ring-duration` — The duration of the focus ring animation.
- `--m3e-focus-ring-growth-factor` — The factor by which the focus ring grows.
- `--m3e-focus-ring-thickness` — The thickness of the focus ring.
- `--m3e-focus-ring-visibility` — The visibility of the focus ring.

</details>

### `FocusTrap` — `<m3e-focus-trap>` (`@m3e/core`)

A non-visual element used to trap focus within nested content.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `disabled` | `boolean` | `false` | Disables the focus trap. |

**Slots:** `(default)`

### `FormField` — `<m3e-form-field>` (`@m3e/form-field`)

A container for form controls that applies Material Design styling and behavior.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `float-label` | `FloatLabelType` | `"auto"` | Specifies whether the label should float always or only when necessary. |
| `hide-required-marker` | `boolean` | `false` | Whether the required marker should be hidden. |
| `hide-subscript` | `HideSubscriptType` | `"auto"` | Whether subscript content is hidden. |
| `variant` | `FormFieldVariant` | `"outlined"` | The appearance variant of the field. |

**Slots:** `(default)`, `prefix`, `prefix-text`, `suffix`, `suffix-text`, `hint`, `error`

<details><summary>CSS custom properties (27)</summary>

- `--m3e-form-field-font-size` — Font size for the form field container text.
- `--m3e-form-field-font-weight` — Font weight for the form field container text.
- `--m3e-form-field-line-height` — Line height for the form field container text.
- `--m3e-form-field-tracking` — Letter spacing for the form field container text.
- `--m3e-form-field-label-font-size` — Font size for the floating label.
- `--m3e-form-field-label-font-weight` — Font weight for the floating label.
- `--m3e-form-field-label-line-height` — Line height for the floating label.
- `--m3e-form-field-label-tracking` — Letter spacing for the floating label.
- `--m3e-form-field-subscript-font-size` — Font size for hint and error text.
- `--m3e-form-field-subscript-font-weight` — Font weight for hint and error text.
- `--m3e-form-field-subscript-line-height` — Line height for hint and error text.
- `--m3e-form-field-subscript-tracking` — Letter spacing for hint and error text.
- `--m3e-form-field-color` — Text color for the form field container.
- `--m3e-form-field-subscript-color` — Color for hint and error text.
- `--m3e-form-field-invalid-color` — Color used when the control is invalid.
- `--m3e-form-field-focused-outline-color` — Outline color when focused.
- `--m3e-form-field-focused-color` — Label color when focused.
- `--m3e-form-field-outline-color` — Outline color in outlined variant.
- `--m3e-form-field-container-color` — Background color in filled variant.
- `--m3e-form-field-hover-container-color` — Hover background color in filled variant.
- `--m3e-form-field-width` — Width of the form field container.
- `--m3e-form-field-icon-size` — Size of prefix and suffix icons.
- `--m3e-outlined-form-field-container-shape` — Corner radius for outlined container.
- `--m3e-form-field-container-shape` — Corner radius for filled container.
- `--m3e-form-field-hover-container-opacity` — Opacity for hover background in filled variant.
- `--m3e-form-field-disabled-opacity` — Opacity for disabled text.
- `--m3e-form-field-disabled-container-opacity` — Opacity for disabled container background.

</details>

### `Heading` — `<m3e-heading>` (`@m3e/heading`)

A heading to a page or section.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `emphasized` | `boolean` | `false` | Whether the heading uses an emphasized typescale. |
| `level` | `HeadingLevel | undefined` | `undefined` | The accessibility level of the heading. |
| `size` | `HeadingSize` | `"medium"` | The size of the heading. |
| `variant` | `HeadingVariant` | `"display"` | The appearance variant of the heading. |

**Slots:** `(default)`

<details><summary>CSS custom properties (96)</summary>

- `--md-sys-typescale-display-large-font-size` — Font size for Display Large text, ideal for hero headlines
- `--md-sys-typescale-display-large-font-weight` — Font weight for Display Large text
- `--md-sys-typescale-display-large-tracking` — Letter spacing for Display Large text
- `--md-sys-typescale-display-large-line-height` — Line height for Display Large text
- `--md-sys-typescale-display-medium-font-size` — Font size for Display Medium text
- `--md-sys-typescale-display-medium-font-weight` — Font weight for Display Medium text
- `--md-sys-typescale-display-medium-tracking` — Letter spacing for Display Medium text
- `--md-sys-typescale-display-medium-line-height` — Line height for Display Medium text
- `--md-sys-typescale-display-small-font-size` — Font size for Display Small text
- `--md-sys-typescale-display-small-font-weight` — Font weight for Display Small text
- `--md-sys-typescale-display-small-tracking` — Letter spacing for Display Small text
- `--md-sys-typescale-display-small-line-height` — Line height for Display Small text
- `--md-sys-typescale-headline-large-font-size` — Font size for Headline Large text
- `--md-sys-typescale-headline-large-font-weight` — Font weight for Headline Large text
- `--md-sys-typescale-headline-large-tracking` — Letter spacing for Headline Large text
- `--md-sys-typescale-headline-large-line-height` — Line height for Headline Large text
- `--md-sys-typescale-headline-medium-font-size` — Font size for Headline Medium text
- `--md-sys-typescale-headline-medium-font-weight` — Font weight for Headline Medium text
- `--md-sys-typescale-headline-medium-tracking` — Letter spacing for Headline Medium text
- `--md-sys-typescale-headline-medium-line-height` — Line height for Headline Medium text
- `--md-sys-typescale-headline-small-font-size` — Font size for Headline Small text
- `--md-sys-typescale-headline-small-font-weight` — Font weight for Headline Small text
- `--md-sys-typescale-headline-small-tracking` — Letter spacing for Headline Small text
- `--md-sys-typescale-headline-small-line-height` — Line height for Headline Small text
- `--md-sys-typescale-title-large-font-size` — Font size for Title Large text
- `--md-sys-typescale-title-large-font-weight` — Font weight for Title Large text
- `--md-sys-typescale-title-large-tracking` — Letter spacing for Title Large text
- `--md-sys-typescale-title-large-line-height` — Line height for Title Large text
- `--md-sys-typescale-title-medium-font-size` — Font size for Title Medium text
- `--md-sys-typescale-title-medium-font-weight` — Font weight for Title Medium text
- `--md-sys-typescale-title-medium-tracking` — Letter spacing for Title Medium text
- `--md-sys-typescale-title-medium-line-height` — Line height for Title Medium text
- `--md-sys-typescale-title-small-font-size` — Font size for Title Small text
- `--md-sys-typescale-title-small-font-weight` — Font weight for Title Small text
- `--md-sys-typescale-title-small-tracking` — Letter spacing for Title Small text
- `--md-sys-typescale-title-small-line-height` — Line height for Title Small text
- `--md-sys-typescale-label-large-font-size` — Font size for Label Large text
- `--md-sys-typescale-label-large-font-weight` — Font weight for Label Large text
- `--md-sys-typescale-label-large-tracking` — Letter spacing for Label Large text
- `--md-sys-typescale-label-large-line-height` — Line height for Label Large text
- `--md-sys-typescale-label-medium-font-size` — Font size for Label Medium text
- `--md-sys-typescale-label-medium-font-weight` — Font weight for Label Medium text
- `--md-sys-typescale-label-medium-tracking` — Letter spacing for Label Medium text
- `--md-sys-typescale-label-medium-line-height` — Line height for Label Medium text
- `--md-sys-typescale-label-small-font-size` — Font size for Label Small text
- `--md-sys-typescale-label-small-font-weight` — Font weight for Label Small text
- `--md-sys-typescale-label-small-tracking` — Letter spacing for Label Small text
- `--md-sys-typescale-label-small-line-height` — Line height for Label Small text
- `--md-sys-typescale-emphasized-display-large-font-size` — Font size for emphasized Display Large text
- `--md-sys-typescale-emphasized-display-large-font-weight` — Font weight for emphasized Display Large text
- `--md-sys-typescale-emphasized-display-large-tracking` — Letter spacing for emphasized Display Large text
- `--md-sys-typescale-emphasized-display-large-line-height` — Line height for emphasized Display Large text
- `--md-sys-typescale-emphasized-display-medium-font-size` — Font size for emphasized Display Medium text
- `--md-sys-typescale-emphasized-display-medium-font-weight` — Font weight for emphasized Display Medium text
- `--md-sys-typescale-emphasized-display-medium-tracking` — Letter spacing for emphasized Display Medium text
- `--md-sys-typescale-emphasized-display-medium-line-height` — Line height for emphasized Display Medium text
- `--md-sys-typescale-emphasized-display-small-font-size` — Font size for emphasized Display Small text
- `--md-sys-typescale-emphasized-display-small-font-weight` — Font weight for emphasized Display Small text
- `--md-sys-typescale-emphasized-display-small-tracking` — Letter spacing for emphasized Display Small text
- `--md-sys-typescale-emphasized-display-small-line-height` — Line height for emphasized Display Small text
- `--md-sys-typescale-emphasized-headline-large-font-size` — Font size for emphasized Headline Large text
- `--md-sys-typescale-emphasized-headline-large-font-weight` — Font weight for emphasized Headline Large text
- `--md-sys-typescale-emphasized-headline-large-tracking` — Letter spacing for emphasized Headline Large text
- `--md-sys-typescale-emphasized-headline-large-line-height` — Line height for emphasized Headline Large text
- `--md-sys-typescale-emphasized-headline-medium-font-size` — Font size for emphasized Headline Medium text
- `--md-sys-typescale-emphasized-headline-medium-font-weight` — Font weight for emphasized Headline Medium text
- `--md-sys-typescale-emphasized-headline-medium-tracking` — Letter spacing for emphasized Headline Medium text
- `--md-sys-typescale-emphasized-headline-medium-line-height` — Line height for emphasized Headline Medium text
- `--md-sys-typescale-emphasized-headline-small-font-size` — Font size for emphasized Headline Small text
- `--md-sys-typescale-emphasized-headline-small-font-weight` — Font weight for emphasized Headline Small text
- `--md-sys-typescale-emphasized-headline-small-tracking` — Letter spacing for emphasized Headline Small text
- `--md-sys-typescale-emphasized-headline-small-line-height` — Line height for emphasized Headline Small text
- `--md-sys-typescale-emphasized-title-large-font-size` — Font size for emphasized Title Large text
- `--md-sys-typescale-emphasized-title-large-font-weight` — Font weight for emphasized Title Large text
- `--md-sys-typescale-emphasized-title-large-tracking` — Letter spacing for emphasized Title Large text
- `--md-sys-typescale-emphasized-title-large-line-height` — Line height for emphasized Title Large text
- `--md-sys-typescale-emphasized-title-medium-font-size` — Font size for emphasized Title Medium text
- `--md-sys-typescale-emphasized-title-medium-font-weight` — Font weight for emphasized Title Medium text
- `--md-sys-typescale-emphasized-title-medium-tracking` — Letter spacing for emphasized Title Medium text
- `--md-sys-typescale-emphasized-title-medium-line-height` — Line height for emphasized Title Medium text
- `--md-sys-typescale-emphasized-title-small-font-size` — Font size for emphasized Title Small text
- `--md-sys-typescale-emphasized-title-small-font-weight` — Font weight for emphasized Title Small text
- `--md-sys-typescale-emphasized-title-small-tracking` — Letter spacing for emphasized Title Small text
- `--md-sys-typescale-emphasized-title-small-line-height` — Line height for emphasized Title Small text
- `--md-sys-typescale-emphasized-label-large-font-size` — Font size for emphasized Label Large text
- `--md-sys-typescale-emphasized-label-large-font-weight` — Font weight for emphasized Label Large text
- `--md-sys-typescale-emphasized-label-large-tracking` — Letter spacing for emphasized Label Large text
- `--md-sys-typescale-emphasized-label-large-line-height` — Line height for emphasized Label Large text
- `--md-sys-typescale-emphasized-label-medium-font-size` — Font size for emphasized Label Medium text
- `--md-sys-typescale-emphasized-label-medium-font-weight` — Font weight for emphasized Label Medium text
- `--md-sys-typescale-emphasized-label-medium-tracking` — Letter spacing for emphasized Label Medium text
- `--md-sys-typescale-emphasized-label-medium-line-height` — Line height for emphasized Label Medium text
- `--md-sys-typescale-emphasized-label-small-font-size` — Font size for emphasized Label Small text
- `--md-sys-typescale-emphasized-label-small-font-weight` — Font weight for emphasized Label Small text
- `--md-sys-typescale-emphasized-label-small-tracking` — Letter spacing for emphasized Label Small text
- `--md-sys-typescale-emphasized-label-small-line-height` — Line height for emphasized Label Small text

</details>

### `Icon` — `<m3e-icon>` (`@m3e/icon`)

A small symbol used to easily identify an action or category.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `filled` | `boolean` | `false` | Whether the icon is filled. |
| `grade` | `IconGrade` | `"medium"` | The grade of the icon. |
| `optical-size` | `number` | `24` | A value from 20 to 48 indicating the optical size of the icon. |
| `name` | `string` | `""` | The name of the icon. |
| `variant` | `IconVariant` | `"outlined"` | The appearance variant of the icon. |
| `weight` | `number` | `400` | A value from 100 to 700 indicating the weight of the icon. |

### `IconButton` — `<m3e-icon-button>` (`@m3e/icon-button`)

An icon button users interact with to perform a supplementary action.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `disabled` | `boolean` | `false` | Whether the element is disabled. |
| `disabled-interactive` | `boolean` | `false` | Whether the element is disabled and interactive. |
| `download` | `string | null` | `null` | A value indicating whether the `target` of the link button will be downloaded, optionally specifying the new name of the file. |
| `href` | `string` | `""` | The URL to which the link button points. |
| `name` | `string` | `` | The name of the element, submitted as a pair with the element's `value` as part of form data, when the element is used to submit a form. |
| `rel` | `string` | `""` | The relationship between the `target` of the link button and the document. |
| `selected` | `boolean` | `false` | Whether the toggle button is selected. |
| `shape` | `IconButtonShape` | `"rounded"` | The shape of the button. |
| `size` | `IconButtonSize` | `"small"` | The size of the button. |
| `target` | `LinkTarget` | `""` | The target of the link button. |
| `toggle` | `boolean` | `false` | Whether the button will toggle between selected and unselected states. |
| `type` | `FormSubmitterType` | `"button"` | The type of the element. |
| `value` | `string` | `` | The value associated with the element's name when it's submitted with form data. |
| `variant` | `IconButtonVariant` | `"standard"` | The appearance variant of the button. |
| `width` | `IconButtonWidth` | `"default"` | The width of the button. |

**Slots:** `(default)`, `selected`

**Events:** `input`, `change`, `click`

<details><summary>CSS custom properties (194)</summary>

- `--m3e-icon-button-extra-small-container-height` — Height of the extra-small container.
- `--m3e-icon-button-extra-small-outline-thickness` — Outline thickness for extra-small.
- `--m3e-icon-button-extra-small-icon-size` — Icon size for extra-small.
- `--m3e-icon-button-extra-small-shape-round` — Corner radius for round extra-small.
- `--m3e-icon-button-extra-small-shape-square` — Corner radius for square extra-small.
- `--m3e-icon-button-extra-small-selected-shape-round` — Corner radius for selected round extra-small.
- `--m3e-icon-button-extra-small-selected-shape-square` — Corner radius for selected square extra-small.
- `--m3e-icon-button-extra-small-shape-pressed-morph` — Corner radius for pressed extra-small.
- `--m3e-icon-button-extra-small-narrow-leading-space` — Leading space for extra-small (narrow).
- `--m3e-icon-button-extra-small-narrow-trailing-space` — Trailing space for extra-small (narrow).
- `--m3e-icon-button-extra-small-default-leading-space` — Leading space for extra-small (default).
- `--m3e-icon-button-extra-small-default-trailing-space` — Trailing space for extra-small (default).
- `--m3e-icon-button-extra-small-wide-leading-space` — Leading space for extra-small (wide).
- `--m3e-icon-button-extra-small-wide-trailing-space` — Trailing space for extra-small (wide).
- `--m3e-icon-button-small-container-height` — Height of the small container.
- `--m3e-icon-button-small-outline-thickness` — Outline thickness for small.
- `--m3e-icon-button-small-icon-size` — Icon size for small.
- `--m3e-icon-button-small-shape-round` — Corner radius for round small.
- `--m3e-icon-button-small-shape-square` — Corner radius for square small.
- `--m3e-icon-button-small-selected-shape-round` — Corner radius for selected round small.
- `--m3e-icon-button-small-selected-shape-square` — Corner radius for selected square small.
- `--m3e-icon-button-small-shape-pressed-morph` — Corner radius for pressed small.
- `--m3e-icon-button-small-narrow-leading-space` — Leading space for small (narrow).
- `--m3e-icon-button-small-narrow-trailing-space` — Trailing space for small (narrow).
- `--m3e-icon-button-small-default-leading-space` — Leading space for small (default).
- `--m3e-icon-button-small-default-trailing-space` — Trailing space for small (default).
- `--m3e-icon-button-small-wide-leading-space` — Leading space for small (wide).
- `--m3e-icon-button-small-wide-trailing-space` — Trailing space for small (wide).
- `--m3e-icon-button-medium-container-height` — Height of the medium container.
- `--m3e-icon-button-medium-outline-thickness` — Outline thickness for medium.
- `--m3e-icon-button-medium-icon-size` — Icon size for medium.
- `--m3e-icon-button-medium-shape-round` — Corner radius for round medium.
- `--m3e-icon-button-medium-shape-square` — Corner radius for square medium.
- `--m3e-icon-button-medium-selected-shape-round` — Corner radius for selected round medium.
- `--m3e-icon-button-medium-selected-shape-square` — Corner radius for selected square medium.
- `--m3e-icon-button-medium-shape-pressed-morph` — Corner radius for pressed medium.
- `--m3e-icon-button-medium-narrow-leading-space` — Leading space for medium (narrow).
- `--m3e-icon-button-medium-narrow-trailing-space` — Trailing space for medium (narrow).
- `--m3e-icon-button-medium-default-leading-space` — Leading space for medium (default).
- `--m3e-icon-button-medium-default-trailing-space` — Trailing space for medium (default).
- `--m3e-icon-button-medium-wide-leading-space` — Leading space for medium (wide).
- `--m3e-icon-button-medium-wide-trailing-space` — Trailing space for medium (wide).
- `--m3e-icon-button-large-container-height` — Height of the large container.
- `--m3e-icon-button-large-outline-thickness` — Outline thickness for large.
- `--m3e-icon-button-large-icon-size` — Icon size for large.
- `--m3e-icon-button-large-shape-round` — Corner radius for round large.
- `--m3e-icon-button-large-shape-square` — Corner radius for square large.
- `--m3e-icon-button-large-selected-shape-round` — Corner radius for selected round large.
- `--m3e-icon-button-large-selected-shape-square` — Corner radius for selected square large.
- `--m3e-icon-button-large-shape-pressed-morph` — Corner radius for pressed large.
- `--m3e-icon-button-large-narrow-leading-space` — Leading space for large (narrow).
- `--m3e-icon-button-large-narrow-trailing-space` — Trailing space for large (narrow).
- `--m3e-icon-button-large-default-leading-space` — Leading space for large (default).
- `--m3e-icon-button-large-default-trailing-space` — Trailing space for large (default).
- `--m3e-icon-button-large-wide-leading-space` — Leading space for large (wide).
- `--m3e-icon-button-large-wide-trailing-space` — Trailing space for large (wide).
- `--m3e-icon-button-extra-large-container-height` — Height of the extra-large container.
- `--m3e-icon-button-extra-large-outline-thickness` — Outline thickness for extra-large.
- `--m3e-icon-button-extra-large-icon-size` — Icon size for extra-large.
- `--m3e-icon-button-extra-large-shape-round` — Corner radius for round extra-large.
- `--m3e-icon-button-extra-large-shape-square` — Corner radius for square extra-large.
- `--m3e-icon-button-extra-large-selected-shape-round` — Corner radius for selected round extra-large.
- `--m3e-icon-button-extra-large-selected-shape-square` — Corner radius for selected square extra-large.
- `--m3e-icon-button-extra-large-shape-pressed-morph` — Corner radius for pressed extra-large.
- `--m3e-icon-button-extra-large-narrow-leading-space` — Leading space for extra-large (narrow).
- `--m3e-icon-button-extra-large-narrow-trailing-space` — Trailing space for extra-large (narrow).
- `--m3e-icon-button-extra-large-default-leading-space` — Leading space for extra-large (default).
- `--m3e-icon-button-extra-large-default-trailing-space` — Trailing space for extra-large (default).
- `--m3e-icon-button-extra-large-wide-leading-space` — Leading space for extra-large (wide).
- `--m3e-icon-button-extra-large-wide-trailing-space` — Trailing space for extra-large (wide).
- `--m3e-outlined-icon-button-icon-color` — Default icon color for outlined variant.
- `--m3e-outlined-icon-button-outline-color` — Default outline color for outlined variant.
- `--m3e-outlined-icon-button-unselected-icon-color` — Unselected icon color for outlined variant.
- `--m3e-outlined-icon-button-selected-icon-color` — Selected icon color for outlined variant.
- `--m3e-outlined-icon-button-selected-container-color` — Selected container background color for outlined variant.
- `--m3e-outlined-icon-button-disabled-container-color` — Container background color when disabled (outlined).
- `--m3e-outlined-icon-button-disabled-container-opacity` — Opacity of container when disabled (outlined).
- `--m3e-outlined-icon-button-disabled-icon-color` — Icon color when disabled (outlined).
- `--m3e-outlined-icon-button-disabled-icon-opacity` — Icon opacity when disabled (outlined).
- `--m3e-outlined-icon-button-disabled-outline-color` — Outline color when disabled (outlined).
- `--m3e-outlined-icon-button-hover-icon-color` — Icon color on hover (outlined).
- `--m3e-outlined-icon-button-hover-outline-color` — Outline color on hover (outlined).
- `--m3e-outlined-icon-button-hover-state-layer-color` — State layer color on hover (outlined).
- `--m3e-outlined-icon-button-hover-state-layer-opacity` — State layer opacity on hover (outlined).
- `--m3e-outlined-icon-button-hover-unselected-icon-color` — Unselected icon color on hover (outlined).
- `--m3e-outlined-icon-button-hover-unselected-state-layer-color` — Unselected state layer color on hover (outlined).
- `--m3e-outlined-icon-button-hover-selected-icon-color` — Selected icon color on hover (outlined).
- `--m3e-outlined-icon-button-hover-selected-state-layer-color` — Selected state layer color on hover (outlined).
- `--m3e-outlined-icon-button-focus-icon-color` — Icon color on focus (outlined).
- `--m3e-outlined-icon-button-focus-outline-color` — Outline color on focus (outlined).
- `--m3e-outlined-icon-button-focus-state-layer-color` — State layer color on focus (outlined).
- `--m3e-outlined-icon-button-focus-state-layer-opacity` — State layer opacity on focus (outlined).
- `--m3e-outlined-icon-button-focus-unselected-icon-color` — Unselected icon color on focus (outlined).
- `--m3e-outlined-icon-button-focus-unselected-state-layer-color` — Unselected state layer color on focus (outlined).
- `--m3e-outlined-icon-button-focus-selected-icon-color` — Selected icon color on focus (outlined).
- `--m3e-outlined-icon-button-focus-selected-state-layer-color` — Selected state layer color on focus (outlined).
- `--m3e-outlined-icon-button-pressed-icon-color` — Icon color on pressed (outlined).
- `--m3e-outlined-icon-button-pressed-outline-color` — Outline color on pressed (outlined).
- `--m3e-outlined-icon-button-pressed-state-layer-color` — State layer color on pressed (outlined).
- `--m3e-outlined-icon-button-pressed-state-layer-opacity` — State layer opacity on pressed (outlined).
- `--m3e-outlined-icon-button-pressed-unselected-icon-color` — Unselected icon color on pressed (outlined).
- `--m3e-outlined-icon-button-pressed-unselected-state-layer-color` — Unselected state layer color on pressed (outlined).
- `--m3e-outlined-icon-button-pressed-selected-icon-color` — Selected icon color on pressed (outlined).
- `--m3e-outlined-icon-button-pressed-selected-state-layer-color` — Selected state layer color on pressed (outlined).
- `--m3e-filled-icon-button-icon-color` — Default icon color for filled variant.
- `--m3e-filled-icon-button-container-color` — Default container background color for filled variant.
- `--m3e-filled-icon-button-unselected-icon-color` — Unselected icon color for filled variant.
- `--m3e-filled-icon-button-unselected-container-color` — Unselected container background color for filled variant.
- `--m3e-filled-icon-button-selected-icon-color` — Selected icon color for filled variant.
- `--m3e-filled-icon-button-selected-container-color` — Selected container background color for filled variant.
- `--m3e-filled-icon-button-disabled-container-color` — Container background color when disabled (filled).
- `--m3e-filled-icon-button-disabled-container-opacity` — Opacity of container when disabled (filled).
- `--m3e-filled-icon-button-disabled-icon-color` — Icon color when disabled (filled).
- `--m3e-filled-icon-button-disabled-icon-opacity` — Icon opacity when disabled (filled).
- `--m3e-filled-icon-button-hover-icon-color` — Icon color on hover (filled).
- `--m3e-filled-icon-button-hover-state-layer-color` — State layer color on hover (filled).
- `--m3e-filled-icon-button-hover-state-layer-opacity` — State layer opacity on hover (filled).
- `--m3e-filled-icon-button-hover-unselected-icon-color` — Unselected icon color on hover (filled).
- `--m3e-filled-icon-button-hover-unselected-state-layer-color` — Unselected state layer color on hover (filled).
- `--m3e-filled-icon-button-hover-selected-icon-color` — Selected icon color on hover (filled).
- `--m3e-filled-icon-button-hover-selected-state-layer-color` — Selected state layer color on hover (filled).
- `--m3e-filled-icon-button-focus-icon-color` — Icon color on focus (filled).
- `--m3e-filled-icon-button-focus-state-layer-color` — State layer color on focus (filled).
- `--m3e-filled-icon-button-focus-state-layer-opacity` — State layer opacity on focus (filled).
- `--m3e-filled-icon-button-focus-unselected-icon-color` — Unselected icon color on focus (filled).
- `--m3e-filled-icon-button-focus-unselected-state-layer-color` — Unselected state layer color on focus (filled).
- `--m3e-filled-icon-button-focus-selected-icon-color` — Selected icon color on focus (filled).
- `--m3e-filled-icon-button-focus-selected-state-layer-color` — Selected state layer color on focus (filled).
- `--m3e-filled-icon-button-pressed-icon-color` — Icon color on pressed (filled).
- `--m3e-filled-icon-button-pressed-state-layer-color` — State layer color on pressed (filled).
- `--m3e-filled-icon-button-pressed-state-layer-opacity` — State layer opacity on pressed (filled).
- `--m3e-filled-icon-button-pressed-unselected-icon-color` — Unselected icon color on pressed (filled).
- `--m3e-filled-icon-button-pressed-unselected-state-layer-color` — Unselected state layer color on pressed (filled).
- `--m3e-filled-icon-button-pressed-selected-icon-color` — Selected icon color on pressed (filled).
- `--m3e-filled-icon-button-pressed-selected-state-layer-color` — Selected state layer color on pressed (filled).
- `--m3e-tonal-icon-button-icon-color` — Default icon color for tonal variant.
- `--m3e-tonal-icon-button-container-color` — Default container background color for tonal variant.
- `--m3e-tonal-icon-button-unselected-icon-color` — Unselected icon color for tonal variant.
- `--m3e-tonal-icon-button-unselected-container-color` — Unselected container background color for tonal variant.
- `--m3e-tonal-icon-button-selected-icon-color` — Selected icon color for tonal variant.
- `--m3e-tonal-icon-button-selected-container-color` — Selected container background color for tonal variant.
- `--m3e-tonal-icon-button-disabled-container-color` — Container background color when disabled (tonal).
- `--m3e-tonal-icon-button-disabled-container-opacity` — Opacity of container when disabled (tonal).
- `--m3e-tonal-icon-button-disabled-icon-color` — Icon color when disabled (tonal).
- `--m3e-tonal-icon-button-disabled-icon-opacity` — Icon opacity when disabled (tonal).
- `--m3e-tonal-icon-button-hover-icon-color` — Icon color on hover (tonal).
- `--m3e-tonal-icon-button-hover-state-layer-color` — State layer color on hover (tonal).
- `--m3e-tonal-icon-button-hover-state-layer-opacity` — State layer opacity on hover (tonal).
- `--m3e-tonal-icon-button-hover-unselected-icon-color` — Unselected icon color on hover (tonal).
- `--m3e-tonal-icon-button-hover-unselected-state-layer-color` — Unselected state layer color on hover (tonal).
- `--m3e-tonal-icon-button-hover-selected-icon-color` — Selected icon color on hover (tonal).
- `--m3e-tonal-icon-button-hover-selected-state-layer-color` — Selected state layer color on hover (tonal).
- `--m3e-tonal-icon-button-focus-icon-color` — Icon color on focus (tonal).
- `--m3e-tonal-icon-button-focus-state-layer-color` — State layer color on focus (tonal).
- `--m3e-tonal-icon-button-focus-state-layer-opacity` — State layer opacity on focus (tonal).
- `--m3e-tonal-icon-button-focus-unselected-icon-color` — Unselected icon color on focus (tonal).
- `--m3e-tonal-icon-button-focus-unselected-state-layer-color` — Unselected state layer color on focus (tonal).
- `--m3e-tonal-icon-button-focus-selected-icon-color` — Selected icon color on focus (tonal).
- `--m3e-tonal-icon-button-focus-selected-state-layer-color` — Selected state layer color on focus (tonal).
- `--m3e-tonal-icon-button-pressed-icon-color` — Icon color on pressed (tonal).
- `--m3e-tonal-icon-button-pressed-state-layer-color` — State layer color on pressed (tonal).
- `--m3e-tonal-icon-button-pressed-state-layer-opacity` — State layer opacity on pressed (tonal).
- `--m3e-tonal-icon-button-pressed-unselected-icon-color` — Unselected icon color on pressed (tonal).
- `--m3e-tonal-icon-button-pressed-unselected-state-layer-color` — Unselected state layer color on pressed (tonal).
- `--m3e-tonal-icon-button-pressed-selected-icon-color` — Selected icon color on pressed (tonal).
- `--m3e-tonal-icon-button-pressed-selected-state-layer-color` — Selected state layer color on pressed (tonal).
- `--m3e-standard-icon-button-icon-color` — Default icon color for standard variant.
- `--m3e-standard-icon-button-unselected-icon-color` — Unselected icon color for standard variant.
- `--m3e-standard-icon-button-selected-icon-color` — Selected icon color for standard variant.
- `--m3e-standard-icon-button-disabled-container-color` — Container background color when disabled (standard).
- `--m3e-standard-icon-button-disabled-container-opacity` — Opacity of container when disabled (standard).
- `--m3e-standard-icon-button-disabled-icon-color` — Icon color when disabled (standard).
- `--m3e-standard-icon-button-disabled-icon-opacity` — Icon opacity when disabled (standard).
- `--m3e-standard-icon-button-hover-icon-color` — Icon color on hover (standard).
- `--m3e-standard-icon-button-hover-state-layer-color` — State layer color on hover (standard).
- `--m3e-standard-icon-button-hover-state-layer-opacity` — State layer opacity on hover (standard).
- `--m3e-standard-icon-button-hover-unselected-icon-color` — Unselected icon color on hover (standard).
- `--m3e-standard-icon-button-hover-unselected-state-layer-color` — Unselected state layer color on hover (standard).
- `--m3e-standard-icon-button-hover-selected-icon-color` — Selected icon color on hover (standard).
- `--m3e-standard-icon-button-hover-selected-state-layer-color` — Selected state layer color on hover (standard).
- `--m3e-standard-icon-button-focus-icon-color` — Icon color on focus (standard).
- `--m3e-standard-icon-button-focus-state-layer-color` — State layer color on focus (standard).
- `--m3e-standard-icon-button-focus-state-layer-opacity` — State layer opacity on focus (standard).
- `--m3e-standard-icon-button-focus-unselected-icon-color` — Unselected icon color on focus (standard).
- `--m3e-standard-icon-button-focus-unselected-state-layer-color` — Unselected state layer color on focus (standard).
- `--m3e-standard-icon-button-focus-selected-icon-color` — Selected icon color on focus (standard).
- `--m3e-standard-icon-button-focus-selected-state-layer-color` — Selected state layer color on focus (standard).
- `--m3e-standard-icon-button-pressed-icon-color` — Icon color on pressed (standard).
- `--m3e-standard-icon-button-pressed-state-layer-color` — State layer color on pressed (standard).
- `--m3e-standard-icon-button-pressed-state-layer-opacity` — State layer opacity on pressed (standard).
- `--m3e-standard-icon-button-pressed-unselected-icon-color` — Unselected icon color on pressed (standard).
- `--m3e-standard-icon-button-pressed-unselected-state-layer-color` — Unselected state layer color on pressed (standard).
- `--m3e-standard-icon-button-pressed-selected-icon-color` — Selected icon color on pressed (standard).
- `--m3e-standard-icon-button-pressed-selected-state-layer-color` — Selected state layer color on pressed (standard).

</details>

### `InputChip` — `<m3e-input-chip>` (`@m3e/chips`)

A chip which represents a discrete piece of information entered by a user.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `disabled` | `boolean` | `false` | Whether the element is disabled. |
| `disabled-interactive` | `boolean` | `false` | Whether the element is disabled and interactive. |
| `removable` | `boolean` | `false` | Whether the chip is removable. |
| `remove-label` | `string` | `"Remove"` | The accessible label given to the button used to remove the chip. |
| `value` | `string` | `` | A string representing the value of the chip. |
| `variant` | `ChipVariant` | `"outlined"` | The appearance variant of the chip. |

**Slots:** `(default)`, `avatar`, `icon`, `remove-icon`, `trailing-icon`

**Events:** `remove`, `click`

<details><summary>CSS custom properties (31)</summary>

- `--m3e-chip-container-shape` — Border radius of the chip container.
- `--m3e-chip-container-height` — Base height of the chip container before density adjustment.
- `--m3e-chip-label-text-font-size` — Font size of the chip label text.
- `--m3e-chip-label-text-font-weight` — Font weight of the chip label text.
- `--m3e-chip-label-text-line-height` — Line height of the chip label text.
- `--m3e-chip-label-text-tracking` — Letter spacing of the chip label text.
- `--m3e-chip-label-text-color` — Label text color in default state.
- `--m3e-chip-icon-color` — Icon color in default state.
- `--m3e-chip-icon-size` — Font size of leading/trailing icons.
- `--m3e-chip-spacing` — Horizontal gap between chip content elements.
- `--m3e-chip-padding-start` — Default start padding when no icon is present.
- `--m3e-chip-padding-end` — Default end padding when no trailing icon is present.
- `--m3e-chip-with-icon-padding-start` — Start padding when leading icon is present.
- `--m3e-chip-with-icon-padding-end` — End padding when trailing icon is present.
- `--m3e-chip-disabled-label-text-color` — Base color for disabled label text.
- `--m3e-chip-disabled-label-text-opacity` — Opacity applied to disabled label text.
- `--m3e-chip-disabled-icon-color` — Base color for disabled icons.
- `--m3e-chip-disabled-icon-opacity` — Opacity applied to disabled icons.
- `--m3e-elevated-chip-container-color` — Background color for elevated variant.
- `--m3e-elevated-chip-elevation` — Elevation level for elevated variant.
- `--m3e-elevated-chip-hover-elevation` — Elevation level on hover.
- `--m3e-elevated-chip-disabled-container-color` — Background color for disabled elevated variant.
- `--m3e-elevated-chip-disabled-container-opacity` — Opacity applied to disabled elevated background.
- `--m3e-elevated-chip-disabled-elevation` — Elevation level for disabled elevated variant.
- `--m3e-outlined-chip-outline-thickness` — Outline thickness for outlined variant.
- `--m3e-outlined-chip-outline-color` — Outline color for outlined variant.
- `--m3e-outlined-chip-disabled-outline-color` — Outline color for disabled outlined variant.
- `--m3e-outlined-chip-disabled-outline-opacity` — Opacity applied to disabled outline.
- `--m3e-chip-avatar-size` — Font size of the avatar slot content.
- `--m3e-chip-disabled-avatar-opacity` — Opacity applied to the avatar when disabled.
- `--m3e-chip-with-avatar-padding-start` — Start padding when an avatar is present.

</details>

### `InputChipSet` — `<m3e-input-chip-set>` (`@m3e/chips`)

A container that transforms user input into a cohesive set of interactive chips, supporting entry, editing, and removal of discrete values.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `disabled` | `boolean` | `false` | Whether the element is disabled. |
| `name` | `string` | `` | The name that identifies the element when submitting the associated form. |
| `required` | `boolean` | `false` | Whether a value is required for the element. |
| `vertical` | `boolean` | `false` | Whether the element is oriented vertically. |

**Slots:** `(default)`, `input`

**Events:** `change`

<details><summary>CSS custom properties (1)</summary>

- `--m3e-chip-set-spacing` — The spacing (gap) between chips in the set.

</details>

### `LinearProgressIndicator` — `<m3e-linear-progress-indicator>` (`@m3e/progress-indicator`)

A horizontal bar for indicating progress and activity.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `buffer-value` | `number` | `0` | A fractional value, between 0 and `max`, indicating buffer progress. |
| `max` | `number` | `100` | The maximum progress value. |
| `mode` | `LinearProgressMode` | `"determinate"` | The mode of the progress bar. |
| `value` | `number` | `0` | A fractional value, between 0 and `max`, indicating progress. |
| `variant` | `ProgressIndicatorVariant` | `"flat"` | The appearance of the indicator. |

<details><summary>CSS custom properties (7)</summary>

- `--m3e-linear-progress-indicator-thickness` — Thickness (height) of the progress bar.
- `--m3e-linear-progress-indicator-shape` — Border radius of the progress bar.
- `--m3e-progress-indicator-track-color` — Track color of the progress bar (background/buffer).
- `--m3e-progress-indicator-color` — Color of the progress indicator (foreground).
- `--m3e-linear-wavy-progress-indicator-amplitude` — Amplitude of the `wavy` variant.
- `--m3e-linear-wavy-progress-indicator-wavelength` — Wavelength of the `wavy` variant.
- `--m3e-linear-wavy-indeterminate-progress-indicator-wavelength` — Wavelength of the indeterminate/query `wavy` variant.

</details>

### `List` — `<m3e-list>` (`@m3e/list`)

A list of items.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `variant` | `ListVariant` | `"standard"` | The appearance variant of the list. |

**Slots:** `(default)`

<details><summary>CSS custom properties (10)</summary>

- `--m3e-list-divider-inset-start-size` — Start inset for dividers within the list.
- `--m3e-list-divider-inset-end-size` — End inset for dividers within the list.
- `--m3e-segmented-list-segment-gap` — Gap between list items in segmented variant.
- `--m3e-segmented-list-container-shape` — Border radius of the segmented list container.
- `--m3e-segmented-list-item-container-color` — Background color of items in segmented variant.
- `--m3e-segmented-list-item-disabled-container-color` — Background color of disabled items in segmented variant.
- `--m3e-segmented-list-item-container-shape` — Border radius of items in segmented variant.
- `--m3e-segmented-list-item-hover-container-shape` — Border radius of items in segmented variant on hover.
- `--m3e-segmented-list-item-focus-container-shape` — Border radius of items in segmented variant on focus.
- `--m3e-segmented-list-item-selected-container-shape` — Border radius of items in segmented variant when selected.

</details>

### `ListAction` — `<m3e-list-action>` (`@m3e/list`)

An item in a list that performs an action.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `disabled` | `boolean` | `false` | Whether the element is disabled. |
| `download` | `string | null` | `null` | A value indicating whether the `target` of the link button will be downloaded, optionally specifying the new name of the file. |
| `href` | `string` | `""` | The URL to which the link button points. |
| `rel` | `string` | `""` | The relationship between the `target` of the link button and the document. |
| `target` | `LinkTarget` | `""` | The target of the link button. |

**Slots:** `(default)`, `leading`, `overline`, `supporting-text`, `trailing`

**Events:** `click`

<details><summary>CSS custom properties (66)</summary>

- `--m3e-list-item-between-space` — Horizontal gap between elements.
- `--m3e-list-item-padding-inline` — Horizontal padding for the list item.
- `--m3e-list-item-padding-block` — Vertical padding for the list item.
- `--m3e-list-item-height` — Minimum height of the list item.
- `--m3e-list-item-font-size` — Font size for main content.
- `--m3e-list-item-font-weight` — Font weight for main content.
- `--m3e-list-item-line-height` — Line height for main content.
- `--m3e-list-item-tracking` — Letter spacing for main content.
- `--m3e-list-item-overline-font-size` — Font size for overline slot.
- `--m3e-list-item-overline-font-weight` — Font weight for overline slot.
- `--m3e-list-item-overline-line-height` — Line height for overline slot.
- `--m3e-list-item-overline-tracking` — Letter spacing for overline slot.
- `--m3e-list-item-supporting-text-font-size` — Font size for supporting text slot.
- `--m3e-list-item-supporting-text-font-weight` — Font weight for supporting text slot.
- `--m3e-list-item-supporting-text-line-height` — Line height for supporting text slot.
- `--m3e-list-item-supporting-text-tracking` — Letter spacing for supporting text slot.
- `--m3e-list-item-trailing-text-font-size` — Font size for trailing supporting text slot.
- `--m3e-list-item-trailing-text-font-weight` — Font weight for trailing supporting text slot.
- `--m3e-list-item-trailing-text-line-height` — Line height for trailing supporting text slot.
- `--m3e-list-item-trailing-text-tracking` — Letter spacing for trailing supporting text slot.
- `--m3e-list-item-icon-size` — Size for leading/trailing icons.
- `--m3e-list-item-label-text-color` — Color for the main content.
- `--m3e-list-item-overline-color` — Color for the overline slot.
- `--m3e-list-item-supporting-text-color` — Color for the supporting text slot.
- `--m3e-list-item-leading-color` — Color for the leading content.
- `--m3e-list-item-trailing-color` — Color for the trailing content.
- `--m3e-list-item-container-color` — Background color of the list item.
- `--m3e-list-item-container-shape` — Border radius of the list item.
- `--m3e-list-item-hover-container-shape` — Border radius of the list item on hover.
- `--m3e-list-item-focus-container-shape` — Border radius of the list item on focus.
- `--m3e-list-item-video-width` — Width of the video slot.
- `--m3e-list-item-video-height` — Height of the video slot.
- `--m3e-list-item-video-shape` — Border radius of the video slot.
- `--m3e-list-item-image-width` — Width of the image slot.
- `--m3e-list-item-image-height` — Height of the image slot.
- `--m3e-list-item-image-shape` — Border radius of the image slot.
- `--m3e-list-item-disabled-container-color` — Background color of the list item when disabled.
- `--m3e-list-item-disabled-label-text-color` — Color for the main content when disabled.
- `--m3e-list-item-disabled-label-text-opacity` — Opacity for the main content when disabled.
- `--m3e-list-item-disabled-overline-color` — Color for the overline slot when disabled.
- `--m3e-list-item-disabled-overline-opacity` — Opacity for the overline slot when disabled.
- `--m3e-list-item-disabled-supporting-text-color` — Color for the supporting text slot when disabled.
- `--m3e-list-item-disabled-supporting-text-opacity` — Opacity for the supporting text slot when disabled.
- `--m3e-list-item-disabled-leading-color` — Color for the leading icon when disabled.
- `--m3e-list-item-disabled-leading-opacity` — Opacity for the leading icon when disabled.
- `--m3e-list-item-disabled-trailing-color` — Color for the trailing icon when disabled.
- `--m3e-list-item-disabled-trailing-opacity` — Opacity for the trailing icon when disabled.
- `--m3e-list-item-hover-state-layer-color` — Color for the hover state layer.
- `--m3e-list-item-hover-state-layer-opacity` — Opacity for the hover state layer.
- `--m3e-list-item-focus-state-layer-color` — Color for the focus state layer.
- `--m3e-list-item-focus-state-layer-opacity` — Opacity for the focus state layer.
- `--m3e-list-item-pressed-state-layer-color` — Color for the pressed state layer.
- `--m3e-list-item-pressed-state-layer-opacity` — Opacity for the pressed state layer.
- `--m3e-list-item-three-line-top-offset` — Top offset for media in three line items.
- `--m3e-list-item-disabled-media-opacity` — Opacity for media when disabled.
- `--m3e-list-item-leading-space` — Horizontal padding for the leading side.
- `--m3e-list-item-trailing-space` — Horizontal padding for the trailing side.
- `--m3e-list-item-one-line-top-space` — Top padding for one-line items.
- `--m3e-list-item-one-line-bottom-space` — Bottom padding for one-line items.
- `--m3e-list-item-two-line-top-space` — Top padding for two-line items.
- `--m3e-list-item-two-line-bottom-space` — Bottom padding for two-line items.
- `--m3e-list-item-three-line-top-space` — Top padding for three-line items.
- `--m3e-list-item-three-line-bottom-space` — Bottom padding for three-line items.
- `--m3e-list-item-one-line-height` — Minimum height of a one line list item.
- `--m3e-list-item-two-line-height` — Minimum height of a two line list item.
- `--m3e-list-item-three-line-height` — Minimum height of a three line list item.

</details>

### `ListItem` — `<m3e-list-item>` (`@m3e/list`)

An item in a list.

**Slots:** `(default)`, `leading`, `overline`, `supporting-text`, `trailing`

<details><summary>CSS custom properties (47)</summary>

- `--m3e-list-item-between-space` — Horizontal gap between elements.
- `--m3e-list-item-leading-space` — Horizontal padding for the leading side.
- `--m3e-list-item-trailing-space` — Horizontal padding for the trailing side.
- `--m3e-list-item-padding-inline` — Horizontal padding for the list item.
- `--m3e-list-item-padding-block` — Vertical padding for the list item.
- `--m3e-list-item-one-line-top-space` — Top padding for one-line items.
- `--m3e-list-item-one-line-bottom-space` — Bottom padding for one-line items.
- `--m3e-list-item-two-line-top-space` — Top padding for two-line items.
- `--m3e-list-item-two-line-bottom-space` — Bottom padding for two-line items.
- `--m3e-list-item-three-line-top-space` — Top padding for three-line items.
- `--m3e-list-item-three-line-bottom-space` — Bottom padding for three-line items.
- `--m3e-list-item-font-size` — Font size for main content.
- `--m3e-list-item-font-weight` — Font weight for main content.
- `--m3e-list-item-line-height` — Line height for main content.
- `--m3e-list-item-tracking` — Letter spacing for main content.
- `--m3e-list-item-overline-font-size` — Font size for overline slot.
- `--m3e-list-item-overline-font-weight` — Font weight for overline slot.
- `--m3e-list-item-overline-line-height` — Line height for overline slot.
- `--m3e-list-item-overline-tracking` — Letter spacing for overline slot.
- `--m3e-list-item-supporting-text-font-size` — Font size for supporting text slot.
- `--m3e-list-item-supporting-text-font-weight` — Font weight for supporting text slot.
- `--m3e-list-item-supporting-text-line-height` — Line height for supporting text slot.
- `--m3e-list-item-supporting-text-tracking` — Letter spacing for supporting text slot.
- `--m3e-list-item-trailing-text-font-size` — Font size for trailing supporting text slot.
- `--m3e-list-item-trailing-text-font-weight` — Font weight for trailing supporting text slot.
- `--m3e-list-item-trailing-text-line-height` — Line height for trailing supporting text slot.
- `--m3e-list-item-trailing-text-tracking` — Letter spacing for trailing supporting text slot.
- `--m3e-list-item-icon-size` — Size for leading/trailing icons.
- `--m3e-list-item-label-text-color` — Color for the main content.
- `--m3e-list-item-overline-color` — Color for the overline slot.
- `--m3e-list-item-supporting-text-color` — Color for the supporting text slot.
- `--m3e-list-item-leading-color` — Color for the leading content.
- `--m3e-list-item-trailing-color` — Color for the trailing content.
- `--m3e-list-item-container-color` — Background color of the list item.
- `--m3e-list-item-container-shape` — Border radius of the list item.
- `--m3e-list-item-hover-container-shape` — Border radius of the list item on hover.
- `--m3e-list-item-focus-container-shape` — Border radius of the list item on focus.
- `--m3e-list-item-video-width` — Width of the video slot.
- `--m3e-list-item-video-height` — Height of the video slot.
- `--m3e-list-item-video-shape` — Border radius of the video slot.
- `--m3e-list-item-image-width` — Width of the image slot.
- `--m3e-list-item-image-height` — Height of the image slot.
- `--m3e-list-item-image-shape` — Border radius of the image slot.
- `--m3e-list-item-three-line-top-offset` — Top offset for media in three line items.
- `--m3e-list-item-one-line-height` — Minimum height of a one line list item.
- `--m3e-list-item-two-line-height` — Minimum height of a two line list item.
- `--m3e-list-item-three-line-height` — Minimum height of a three line list item.

</details>

### `ListItemButton` — `<m3e-list-item-button>` (`@m3e/list`)

| Attribute | Type | Default | Description |
|---|---|---|---|
| `href` | `string` | `""` | The URL to which the link button points. |
| `target` | `LinkTarget` | `""` | The target of the link button. |
| `rel` | `string` | `""` | The relationship between the `target` of the link button and the document. |
| `download` | `string | null` | `null` | A value indicating whether the `target` of the link button will be downloaded, optionally specifying the new name of the file. |
| `disabled` | `boolean` | `false` | Whether the element is disabled. |

**Slots:** `(default)`, `leading`, `overline`, `supporting-text`, `trailing`

**Events:** `click`

<details><summary>CSS custom properties (47)</summary>

- `--m3e-list-item-between-space` — Horizontal gap between elements.
- `--m3e-list-item-leading-space` — Horizontal padding for the leading side.
- `--m3e-list-item-trailing-space` — Horizontal padding for the trailing side.
- `--m3e-list-item-padding-inline` — Horizontal padding for the list item.
- `--m3e-list-item-padding-block` — Vertical padding for the list item.
- `--m3e-list-item-one-line-top-space` — Top padding for one-line items.
- `--m3e-list-item-one-line-bottom-space` — Bottom padding for one-line items.
- `--m3e-list-item-two-line-top-space` — Top padding for two-line items.
- `--m3e-list-item-two-line-bottom-space` — Bottom padding for two-line items.
- `--m3e-list-item-three-line-top-space` — Top padding for three-line items.
- `--m3e-list-item-three-line-bottom-space` — Bottom padding for three-line items.
- `--m3e-list-item-font-size` — Font size for main content.
- `--m3e-list-item-font-weight` — Font weight for main content.
- `--m3e-list-item-line-height` — Line height for main content.
- `--m3e-list-item-tracking` — Letter spacing for main content.
- `--m3e-list-item-overline-font-size` — Font size for overline slot.
- `--m3e-list-item-overline-font-weight` — Font weight for overline slot.
- `--m3e-list-item-overline-line-height` — Line height for overline slot.
- `--m3e-list-item-overline-tracking` — Letter spacing for overline slot.
- `--m3e-list-item-supporting-text-font-size` — Font size for supporting text slot.
- `--m3e-list-item-supporting-text-font-weight` — Font weight for supporting text slot.
- `--m3e-list-item-supporting-text-line-height` — Line height for supporting text slot.
- `--m3e-list-item-supporting-text-tracking` — Letter spacing for supporting text slot.
- `--m3e-list-item-trailing-text-font-size` — Font size for trailing supporting text slot.
- `--m3e-list-item-trailing-text-font-weight` — Font weight for trailing supporting text slot.
- `--m3e-list-item-trailing-text-line-height` — Line height for trailing supporting text slot.
- `--m3e-list-item-trailing-text-tracking` — Letter spacing for trailing supporting text slot.
- `--m3e-list-item-icon-size` — Size for leading/trailing icons.
- `--m3e-list-item-label-text-color` — Color for the main content.
- `--m3e-list-item-overline-color` — Color for the overline slot.
- `--m3e-list-item-supporting-text-color` — Color for the supporting text slot.
- `--m3e-list-item-leading-color` — Color for the leading content.
- `--m3e-list-item-trailing-color` — Color for the trailing content.
- `--m3e-list-item-container-color` — Background color of the list item.
- `--m3e-list-item-container-shape` — Border radius of the list item.
- `--m3e-list-item-hover-container-shape` — Border radius of the list item on hover.
- `--m3e-list-item-focus-container-shape` — Border radius of the list item on focus.
- `--m3e-list-item-video-width` — Width of the video slot.
- `--m3e-list-item-video-height` — Height of the video slot.
- `--m3e-list-item-video-shape` — Border radius of the video slot.
- `--m3e-list-item-image-width` — Width of the image slot.
- `--m3e-list-item-image-height` — Height of the image slot.
- `--m3e-list-item-image-shape` — Border radius of the image slot.
- `--m3e-list-item-three-line-top-offset` — Top offset for media in three line items.
- `--m3e-list-item-one-line-height` — Minimum height of a one line list item.
- `--m3e-list-item-two-line-height` — Minimum height of a two line list item.
- `--m3e-list-item-three-line-height` — Minimum height of a three line list item.

</details>

### `ListOption` — `<m3e-list-option>` (`@m3e/list`)

A selectable option in a list.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `disabled` | `boolean` | `false` | Whether the element is disabled. |
| `selected` | `boolean` | `false` | Whether the element is selected. |
| `value` | `string` | `` | A string representing the value of the option. |

**Slots:** `(default)`, `leading`, `overline`, `supporting-text`, `trailing`

**Events:** `input`, `change`, `click`

<details><summary>CSS custom properties (81)</summary>

- `--m3e-list-item-between-space` — Horizontal gap between elements.
- `--m3e-list-item-padding-inline` — Horizontal padding for the list item.
- `--m3e-list-item-padding-block` — Vertical padding for the list item.
- `--m3e-list-item-height` — Minimum height of the list item.
- `--m3e-list-item-font-size` — Font size for main content.
- `--m3e-list-item-font-weight` — Font weight for main content.
- `--m3e-list-item-line-height` — Line height for main content.
- `--m3e-list-item-tracking` — Letter spacing for main content.
- `--m3e-list-item-overline-font-size` — Font size for overline slot.
- `--m3e-list-item-overline-font-weight` — Font weight for overline slot.
- `--m3e-list-item-overline-line-height` — Line height for overline slot.
- `--m3e-list-item-overline-tracking` — Letter spacing for overline slot.
- `--m3e-list-item-supporting-text-font-size` — Font size for supporting text slot.
- `--m3e-list-item-supporting-text-font-weight` — Font weight for supporting text slot.
- `--m3e-list-item-supporting-text-line-height` — Line height for supporting text slot.
- `--m3e-list-item-supporting-text-tracking` — Letter spacing for supporting text slot.
- `--m3e-list-item-trailing-text-font-size` — Font size for trailing supporting text slot.
- `--m3e-list-item-trailing-text-font-weight` — Font weight for trailing supporting text slot.
- `--m3e-list-item-trailing-text-line-height` — Line height for trailing supporting text slot.
- `--m3e-list-item-trailing-text-tracking` — Letter spacing for trailing supporting text slot.
- `--m3e-list-item-icon-size` — Size for leading/trailing icons.
- `--m3e-list-item-label-text-color` — Color for the main content.
- `--m3e-list-item-overline-color` — Color for the overline slot.
- `--m3e-list-item-supporting-text-color` — Color for the supporting text slot.
- `--m3e-list-item-leading-color` — Color for the leading content.
- `--m3e-list-item-trailing-color` — Color for the trailing content.
- `--m3e-list-item-container-color` — Background color of the list item.
- `--m3e-list-item-container-shape` — Border radius of the list item.
- `--m3e-list-item-hover-container-shape` — Border radius of the list item on hover.
- `--m3e-list-item-focus-container-shape` — Border radius of the list item on focus.
- `--m3e-list-item-video-width` — Width of the video slot.
- `--m3e-list-item-video-height` — Height of the video slot.
- `--m3e-list-item-video-shape` — Border radius of the video slot.
- `--m3e-list-item-image-width` — Width of the image slot.
- `--m3e-list-item-image-height` — Height of the image slot.
- `--m3e-list-item-image-shape` — Border radius of the image slot.
- `--m3e-list-item-disabled-container-color` — Background color of the list item when disabled.
- `--m3e-list-item-disabled-label-text-color` — Color for the main content when disabled.
- `--m3e-list-item-disabled-label-text-opacity` — Opacity for the main content when disabled.
- `--m3e-list-item-disabled-overline-color` — Color for the overline slot when disabled.
- `--m3e-list-item-disabled-overline-opacity` — Opacity for the overline slot when disabled.
- `--m3e-list-item-disabled-supporting-text-color` — Color for the supporting text slot when disabled.
- `--m3e-list-item-disabled-supporting-text-opacity` — Opacity for the supporting text slot when disabled.
- `--m3e-list-item-disabled-leading-color` — Color for the leading icon when disabled.
- `--m3e-list-item-disabled-leading-opacity` — Opacity for the leading icon when disabled.
- `--m3e-list-item-disabled-trailing-color` — Color for the trailing icon when disabled.
- `--m3e-list-item-disabled-trailing-opacity` — Opacity for the trailing icon when disabled.
- `--m3e-list-item-hover-state-layer-color` — Color for the hover state layer.
- `--m3e-list-item-hover-state-layer-opacity` — Opacity for the hover state layer.
- `--m3e-list-item-focus-state-layer-color` — Color for the focus state layer.
- `--m3e-list-item-focus-state-layer-opacity` — Opacity for the focus state layer.
- `--m3e-list-item-pressed-state-layer-color` — Color for the pressed state layer.
- `--m3e-list-item-pressed-state-layer-opacity` — Opacity for the pressed state layer.
- `--m3e-list-item-selected-label-text-color` — Selected color for the main content.
- `--m3e-list-item-selected-overline-color` — Selected color for the overline slot.
- `--m3e-list-item-selected-supporting-text-color` — Selected color for the supporting text slot.
- `--m3e-list-item-selected-leading-color` — Selected color for the leading content.
- `--m3e-list-item-selected-trailing-color` — Selected color for the trailing content.
- `--m3e-list-item-selected-container-color` — Selected background color of the list item.
- `--m3e-list-item-selected-container-shape` — Selected border radius of the list item.
- `--m3e-list-item-selected-disabled-container-color` — Selected background color when disabled.
- `--m3e-list-item-selected-disabled-container-opacity` — Selected opacity when disabled.
- `--m3e-list-item-selected-hover-state-layer-color` — Color for the hover state layer when selected.
- `--m3e-list-item-selected-hover-state-layer-opacity` — Opacity for the hover state layer when selected.
- `--m3e-list-item-selected-focus-state-layer-color` — Color for the focus state layer when selected.
- `--m3e-list-item-selected-focus-state-layer-opacity` — Opacity for the focus state layer when selected.
- `--m3e-list-item-selected-pressed-state-layer-color` — Color for the pressed state layer when selected.
- `--m3e-list-item-selected-pressed-state-layer-opacity` — Opacity for the pressed state layer when selected.
- `--m3e-list-item-three-line-top-offset` — Top offset for media in three line items.
- `--m3e-list-item-disabled-media-opacity` — Opacity for media when disabled.
- `--m3e-list-item-leading-space` — Horizontal padding for the leading side.
- `--m3e-list-item-trailing-space` — Horizontal padding for the trailing side.
- `--m3e-list-item-one-line-top-space` — Top padding for one-line items.
- `--m3e-list-item-one-line-bottom-space` — Bottom padding for one-line items.
- `--m3e-list-item-two-line-top-space` — Top padding for two-line items.
- `--m3e-list-item-two-line-bottom-space` — Bottom padding for two-line items.
- `--m3e-list-item-three-line-top-space` — Top padding for three-line items.
- `--m3e-list-item-three-line-bottom-space` — Bottom padding for three-line items.
- `--m3e-list-item-one-line-height` — Minimum height of a one line list item.
- `--m3e-list-item-two-line-height` — Minimum height of a two line list item.
- `--m3e-list-item-three-line-height` — Minimum height of a three line list item.

</details>

### `LoadingIndicator` — `<m3e-loading-indicator>` (`@m3e/loading-indicator`)

Shows indeterminate progress for a short wait time.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `variant` | `LoadingIndicatorVariant` | `"uncontained"` | The appearance variant of the indicator. |

<details><summary>CSS custom properties (6)</summary>

- `--m3e-loading-indicator-active-indicator-color` — Uncontained active indicator color.
- `--m3e-loading-indicator-contained-active-indicator-color` — Contained active indicator color.
- `--m3e-loading-indicator-contained-container-color` — Contained container (background) color.
- `--m3e-loading-indicator-active-indicator-size` — Size of the active indicator.
- `--m3e-loading-indicator-container-shape` — Container shape.
- `--m3e-loading-indicator-container-size` — Container size.

</details>

### `Menu` — `<m3e-menu>` (`@m3e/menu`)

Presents a list of choices on a temporary surface.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `position-x` | `MenuPositionX` | `"after"` | The position of the menu, on the x-axis. |
| `position-y` | `MenuPositionY` | `"below"` | The position of the menu, on the y-axis. |
| `variant` | `MenuVariant` | `"standard"` | The appearance variant of the menu. |
| `submenu` | `boolean` | `false` | A value indicating whether the menu is a submenu. |

**Slots:** `(default)`

**Events:** `beforetoggle`, `toggle`

<details><summary>CSS custom properties (12)</summary>

- `--m3e-menu-container-shape` — Controls the corner radius of the menu container.
- `--m3e-menu-active-container-shape` — Controls the corner radius of the menu container when active.
- `--m3e-menu-container-min-width` — Minimum width of the menu container.
- `--m3e-menu-container-max-width` — Maximum width of the menu container.
- `--m3e-menu-container-max-height` — Maximum height of the menu container.
- `--m3e-menu-container-padding-block` — Vertical padding inside the menu container.
- `--m3e-menu-container-padding-inline` — Horizontal padding inside the menu container.
- `--m3e-menu-container-color` — Background color of the menu container.
- `--m3e-menu-container-elevation` — Box shadow elevation of the menu container.
- `--m3e-vibrant-menu-container-color` — Background color of the menu container for vibrant variant.
- `--m3e-menu-divider-spacing` — Vertical spacing around slotted `m3e-divider` elements.
- `--m3e-menu-gap` — Gap between content in the menu.

</details>

### `MenuItem` — `<m3e-menu-item>` (`@m3e/fab-menu`)

An item of a floating action button (FAB) menu.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `disabled` | `boolean` | `false` | Whether the element is disabled. |
| `download` | `string | null` | `null` | A value indicating whether the `target` of the link button will be downloaded, optionally specifying the new name of the file. |
| `href` | `string` | `""` | The URL to which the link button points. |
| `rel` | `string` | `""` | The relationship between the `target` of the link button and the document. |
| `target` | `LinkTarget` | `""` | The target of the link button. |

**Slots:** `(default)`, `icon`

**Events:** `click`

<details><summary>CSS custom properties (10)</summary>

- `--m3e-fab-menu-item-height` — Height of the menu item.
- `--m3e-fab-menu-item-font-size` — Font size of the menu item label.
- `--m3e-fab-menu-item-font-weight` — Font weight of the menu item label.
- `--m3e-fab-menu-item-line-height` — Line height of the menu item label.
- `--m3e-fab-menu-item-tracking` — Letter spacing of the menu item label.
- `--m3e-fab-menu-item-shape` — Border radius of the menu item.
- `--m3e-fab-menu-item-leading-space` — Padding at the start of the menu item.
- `--m3e-fab-menu-item-trailing-space` — Padding at the end of the menu item.
- `--m3e-fab-menu-item-spacing` — Gap between icon and label.
- `--m3e-fab-menu-item-icon-size` — Size of the icon in the menu item.

</details>

### `MenuItemCheckbox` — `<m3e-menu-item-checkbox>` (`@m3e/menu`)

An item of a menu which supports a checkable state.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `disabled` | `boolean` | `false` | Whether the element is disabled. |
| `checked` | `boolean` | `false` | Whether the element is checked. |

**Slots:** `(default)`, `icon`, `trailing-icon`

**Events:** `click`

<details><summary>CSS custom properties (38)</summary>

- `--m3e-menu-item-container-height` — Height of the menu item container.
- `--m3e-menu-item-color` — Text color for unselected, enabled menu items.
- `--m3e-menu-item-container-hover-color` — State layer hover color for unselected items.
- `--m3e-menu-item-container-focus-color` — State layer focus color for unselected items.
- `--m3e-menu-item-ripple-color` — Ripple color for unselected items.
- `--m3e-menu-item-selected-color` — Text color for selected items.
- `--m3e-menu-item-selected-container-color` — Background color for selected items.
- `--m3e-menu-item-selected-container-hover-color` — State layer hover color for selected items.
- `--m3e-menu-item-selected-container-focus-color` — State layer focus color for selected items.
- `--m3e-menu-item-selected-ripple-color` — Ripple color for selected items.
- `--m3e-menu-item-active-state-layer-color` — State layer color for expanded items.
- `--m3e-menu-item-active-state-layer-opacity` — State layer opacity for expanded items.
- `--m3e-menu-item-disabled-color` — Base color for disabled items.
- `--m3e-menu-item-disabled-opacity` — Opacity percentage for disabled item color mix.
- `--m3e-vibrant-menu-item-color` — Text color for unselected, enabled menu items for vibrant variant.
- `--m3e-vibrant-menu-item-container-hover-color` — State layer hover color for unselected items for vibrant variant.
- `--m3e-vibrant-menu-item-container-focus-color` — State layer focus color for unselected items for vibrant variant.
- `--m3e-vibrant-menu-item-ripple-color` — Ripple color for unselected items for vibrant variant.
- `--m3e-vibrant-menu-item-selected-color` — Text color for selected items for vibrant variant.
- `--m3e-vibrant-menu-item-selected-container-color` — Background color for selected items for vibrant variant.
- `--m3e-vibrant-menu-item-selected-container-hover-color` — State layer hover color for selected items for vibrant variant.
- `--m3e-vibrant-menu-item-selected-container-focus-color` — State layer focus color for selected items for vibrant variant.
- `--m3e-vibrant-menu-item-selected-ripple-color` — Ripple color for selected items for vibrant variant.
- `--m3e-vibrant-menu-item-active-state-layer-color` — State layer color for expanded items for vibrant variant.
- `--m3e-vibrant-menu-item-disabled-color` — Base color for disabled items for vibrant variant
- `--m3e-menu-item-icon-label-space` — Horizontal gap between icon and content.
- `--m3e-menu-item-padding-start` — Start padding for the item wrapper.
- `--m3e-menu-item-padding-end` — End padding for the item wrapper.
- `--m3e-menu-item-label-text-font-size` — Font size for menu item text.
- `--m3e-menu-item-label-text-font-weight` — Font weight for menu item text.
- `--m3e-menu-item-label-text-line-height` — Line height for menu item text.
- `--m3e-menu-item-label-text-tracking` — Letter spacing for menu item text.
- `--m3e-menu-item-focus-ring-shape` — Border radius for the focus ring.
- `--m3e-menu-item-icon-size` — Font size for leading and trailing icons.
- `--m3e-menu-item-shape` — Base shape of the menu item.
- `--m3e-menu-item-selected-shape` — Shape used for a selected menu item.
- `--m3e-menu-item-first-child-shape` — Shape for the first menu item in a menu.
- `--m3e-menu-item-last-child-shape` — Shape for the last menu item in a menu.

</details>

### `MenuItemGroup` — `<m3e-menu-item-group>` (`@m3e/menu`)

Groups related items (such a radios) in a menu.

**Slots:** `(default)`

### `MenuItemRadio` — `<m3e-menu-item-radio>` (`@m3e/menu`)

An item of a menu which supports a mutually exclusive checkable state.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `disabled` | `boolean` | `false` | Whether the element is disabled. |
| `checked` | `boolean` | `false` | Whether the element is checked. |

**Slots:** `(default)`, `icon`, `trailing-icon`

**Events:** `click`

<details><summary>CSS custom properties (38)</summary>

- `--m3e-menu-item-container-height` — Height of the menu item container.
- `--m3e-menu-item-color` — Text color for unselected, enabled menu items.
- `--m3e-menu-item-container-hover-color` — State layer hover color for unselected items.
- `--m3e-menu-item-container-focus-color` — State layer focus color for unselected items.
- `--m3e-menu-item-ripple-color` — Ripple color for unselected items.
- `--m3e-menu-item-selected-color` — Text color for selected items.
- `--m3e-menu-item-selected-container-color` — Background color for selected items.
- `--m3e-menu-item-selected-container-hover-color` — State layer hover color for selected items.
- `--m3e-menu-item-selected-container-focus-color` — State layer focus color for selected items.
- `--m3e-menu-item-selected-ripple-color` — Ripple color for selected items.
- `--m3e-menu-item-active-state-layer-color` — State layer color for expanded items.
- `--m3e-menu-item-active-state-layer-opacity` — State layer opacity for expanded items.
- `--m3e-menu-item-disabled-color` — Base color for disabled items.
- `--m3e-menu-item-disabled-opacity` — Opacity percentage for disabled item color mix.
- `--m3e-vibrant-menu-item-color` — Text color for unselected, enabled menu items for vibrant variant.
- `--m3e-vibrant-menu-item-container-hover-color` — State layer hover color for unselected items for vibrant variant.
- `--m3e-vibrant-menu-item-container-focus-color` — State layer focus color for unselected items for vibrant variant.
- `--m3e-vibrant-menu-item-ripple-color` — Ripple color for unselected items for vibrant variant.
- `--m3e-vibrant-menu-item-selected-color` — Text color for selected items for vibrant variant.
- `--m3e-vibrant-menu-item-selected-container-color` — Background color for selected items for vibrant variant.
- `--m3e-vibrant-menu-item-selected-container-hover-color` — State layer hover color for selected items for vibrant variant.
- `--m3e-vibrant-menu-item-selected-container-focus-color` — State layer focus color for selected items for vibrant variant.
- `--m3e-vibrant-menu-item-selected-ripple-color` — Ripple color for selected items for vibrant variant.
- `--m3e-vibrant-menu-item-active-state-layer-color` — State layer color for expanded items for vibrant variant.
- `--m3e-vibrant-menu-item-disabled-color` — Base color for disabled items for vibrant variant
- `--m3e-menu-item-icon-label-space` — Horizontal gap between icon and content.
- `--m3e-menu-item-padding-start` — Start padding for the item wrapper.
- `--m3e-menu-item-padding-end` — End padding for the item wrapper.
- `--m3e-menu-item-label-text-font-size` — Font size for menu item text.
- `--m3e-menu-item-label-text-font-weight` — Font weight for menu item text.
- `--m3e-menu-item-label-text-line-height` — Line height for menu item text.
- `--m3e-menu-item-label-text-tracking` — Letter spacing for menu item text.
- `--m3e-menu-item-focus-ring-shape` — Border radius for the focus ring.
- `--m3e-menu-item-icon-size` — Font size for leading and trailing icons.
- `--m3e-menu-item-shape` — Base shape of the menu item.
- `--m3e-menu-item-selected-shape` — Shape used for a selected menu item.
- `--m3e-menu-item-first-child-shape` — Shape for the first menu item in a menu.
- `--m3e-menu-item-last-child-shape` — Shape for the last menu item in a menu.

</details>

### `MenuTrigger` — `<m3e-menu-trigger>` (`@m3e/menu`)

An element, nested within a clickable element, used to open a menu.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `for` | `string | null` | `null` | The identifier of the interactive control to which this element is attached. |

**Slots:** `(default)`

### `NavBar` — `<m3e-nav-bar>` (`@m3e/nav-bar`)

A horizontal bar, typically used on smaller devices, that allows a user to switch between 3-5 views.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `mode` | `NavBarMode` | `"compact"` | The mode in which items in the bar are presented. |

**Slots:** `(default)`

**Events:** `change`

<details><summary>CSS custom properties (3)</summary>

- `--m3e-nav-bar-height` — Height of the navigation bar.
- `--m3e-nav-bar-container-color` — Background color of the navigation bar container.
- `--m3e-nav-bar-vertical-item-width` — Minimum width of vertical nav items.

</details>

### `NavItem` — `<m3e-nav-item>` (`@m3e/nav-bar`)

An item, placed in a navigation bar or rail, used to navigate to destinations in an application.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `disabled` | `boolean` | `false` | A value indicating whether the element is disabled. |
| `disabled-interactive` | `boolean` | `false` | A value indicating whether the element is disabled and interactive. |
| `download` | `string | null` | `null` | A value indicating whether the `target` of the link button will be downloaded, optionally specifying the new name of the file. |
| `href` | `string` | `""` | The URL to which the link button points. |
| `orientation` | `NavItemOrientation` | `"vertical"` | The layout orientation of the item. |
| `rel` | `string` | `""` | The relationship between the `target` of the link button and the document. |
| `selected` | `boolean` | `false` | A value indicating whether the element is selected. |
| `target` | `LinkTarget` | `""` | The target of the link button. |

**Slots:** `(default)`, `icon`, `selected-icon`

**Events:** `input`, `change`, `click`

<details><summary>CSS custom properties (28)</summary>

- `--m3e-nav-item-label-text-font-size` — Font size for the label text.
- `--m3e-nav-item-label-text-font-weight` — Font weight for the label text.
- `--m3e-nav-item-label-text-line-height` — Line height for the label text.
- `--m3e-nav-item-label-text-tracking` — Letter spacing for the label text.
- `--m3e-nav-item-shape` — Border radius of the nav item.
- `--m3e-nav-item-icon-size` — Size of the icon.
- `--m3e-nav-item-spacing` — Spacing between icon and label.
- `--m3e-nav-item-inactive-label-text-color` — Color of the label text when inactive.
- `--m3e-nav-item-inactive-icon-color` — Color of the icon when inactive.
- `--m3e-nav-item-inactive-hover-state-layer-color` — State layer color on hover when inactive.
- `--m3e-nav-item-inactive-focus-state-layer-color` — State layer color on focus when inactive.
- `--m3e-nav-item-inactive-pressed-state-layer-color` — State layer color on press when inactive.
- `--m3e-nav-item-active-label-text-color` — Color of the label text when active/selected.
- `--m3e-nav-item-active-icon-color` — Color of the icon when active/selected.
- `--m3e-nav-item-active-container-color` — Container color when active/selected.
- `--m3e-nav-item-active-hover-state-layer-color` — State layer color on hover when active.
- `--m3e-nav-item-active-focus-state-layer-color` — State layer color on focus when active.
- `--m3e-nav-item-active-pressed-state-layer-color` — State layer color on press when active.
- `--m3e-nav-item-focus-ring-shape` — Border radius for the focus ring.
- `--m3e-nav-item-disabled-label-text-color` — Color of the label text when disabled.
- `--m3e-nav-item-disabled-label-text-opacity` — Opacity of the label text when disabled.
- `--m3e-nav-item-disabled-icon-color` — Color of the icon when disabled.
- `--m3e-nav-item-disabled-icon-opacity` — Opacity of the icon when disabled.
- `--m3e-horizontal-nav-item-padding` — Padding for horizontal orientation.
- `--m3e-horizontal-nav-item-active-indicator-height` — Height of the active indicator in horizontal orientation.
- `--m3e-vertical-nav-item-active-indicator-width` — Width of the active indicator in vertical orientation.
- `--m3e-vertical-nav-item-active-indicator-height` — Height of the active indicator in vertical orientation.
- `--m3e-vertical-nav-item-active-indicator-margin` — Margin for the active indicator in vertical orientation.

</details>

### `NavMenu` — `<m3e-nav-menu>` (`@m3e/nav-menu`)

A hierarchical menu, typically used on larger devices, that allows a user to switch between views.

**Slots:** `(default)`

<details><summary>CSS custom properties (7)</summary>

- `--m3e-nav-menu-padding-top` — Top padding for the menu.
- `--m3e-nav-menu-padding-bottom` — Bottom padding for the menu.
- `--m3e-nav-menu-padding-left` — Left padding for the menu.
- `--m3e-nav-menu-padding-right` — Right padding for the menu.
- `--m3e-nav-menu-divider-margin` — Margin for divider elements in the menu.
- `--m3e-nav-menu-scrollbar-width` — Width of the menu scrollbar.
- `--m3e-nav-menu-scrollbar-color` — Color of the menu scrollbar.

</details>

### `NavMenuItem` — `<m3e-nav-menu-item>` (`@m3e/nav-menu`)

An expandable item, selectable item within a navigation menu.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `disabled` | `boolean` | `false` | Whether the element is disabled. |
| `indeterminate` | `string` | `` | Whether the element's selected / checked state is indeterminate. |
| `open` | `boolean` | `false` | Whether the item is expanded. |
| `selected` | `boolean` | `false` | Whether the item is selected. |

**Slots:** `(default)`, `label`, `icon`, `badge`, `selected-icon`, `toggle-icon`

**Events:** `opening`, `opened`, `closing`, `closed`, `click`

<details><summary>CSS custom properties (31)</summary>

- `--m3e-nav-menu-item-font-size` — Font size for the item label.
- `--m3e-nav-menu-item-font-weight` — Font weight for the item label.
- `--m3e-nav-menu-item-line-height` — Line height for the item label.
- `--m3e-nav-menu-item-tracking` — Letter spacing for the item label.
- `--m3e-nav-menu-item-padding` — Inline padding for the item.
- `--m3e-nav-menu-item-height` — Height of the item.
- `--m3e-nav-menu-item-spacing` — Spacing between icon and label.
- `--m3e-nav-menu-item-shape` — Border radius of the item and focus ring.
- `--m3e-nav-menu-item-icon-size` — Size of the icon.
- `--m3e-nav-menu-item-inset` — Indentation for nested items.
- `--m3e-nav-menu-item-label-color` — Text color for the item label.
- `--m3e-nav-menu-item-selected-label-color` — Text color for selected item label.
- `--m3e-nav-menu-item-selected-container-color` — Background color for selected item.
- `--m3e-nav-menu-item-selected-container-focus-color` — Focus color for selected item container.
- `--m3e-nav-menu-item-selected-container-hover-color` — Hover color for selected item container.
- `--m3e-nav-menu-item-selected-ripple-color` — Ripple color for selected item.
- `--m3e-nav-menu-item-unselected-container-focus-color` — Focus color for unselected item container.
- `--m3e-nav-menu-item-unselected-container-hover-color` — Hover color for unselected item container.
- `--m3e-nav-menu-item-unselected-ripple-color` — Ripple color for unselected item.
- `--m3e-nav-menu-item-open-container-color` — Background color for open item with children.
- `--m3e-nav-menu-item-open-container-focus-color` — Focus color for open item container.
- `--m3e-nav-menu-item-open-container-hover-color` — Hover color for open item container.
- `--m3e-nav-menu-item-open-ripple-color` — Ripple color for open item.
- `--m3e-nav-menu-item-disabled-color` — Text color for disabled item.
- `--m3e-nav-menu-item-disabled-color-opacity` — Opacity for disabled item text color.
- `--m3e-nav-menu-item-badge-font-size` — Font size for badge slot.
- `--m3e-nav-menu-item-badge-font-weight` — Font weight for badge slot.
- `--m3e-nav-menu-item-badge-line-height` — Line height for badge slot.
- `--m3e-nav-menu-item-badge-tracking` — Letter spacing for badge slot.
- `--m3e-nav-menu-divider-margin` — Margin for divider elements.
- `--m3e-nav-menu-item-vertical-inset` — Vertical margin for first/last child items.

</details>

### `NavMenuItemGroup` — `<m3e-nav-menu-item-group>` (`@m3e/nav-menu`)

A top-level semantic grouping of items in a navigation menu.

**Slots:** `(default)`, `label`

<details><summary>CSS custom properties (2)</summary>

- `--m3e-nav-menu-item-group-label-inset` — Insets the label from the start edge of the group.
- `--m3e-nav-menu-item-group-label-space` — Vertical spacing around the group's label.

</details>

### `NavRail` — `<m3e-nav-rail>` (`@m3e/nav-rail`)

A vertical bar, typically used on larger devices, that allows a user to switch between views.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `mode` | `NavBarMode` | `"compact"` | The mode in which items in the rail are presented. |

**Slots:** `(default)`

**Events:** `change`

<details><summary>CSS custom properties (12)</summary>

- `--m3e-nav-rail-top-space` — Top block padding for the nav rail.
- `--m3e-nav-rail-bottom-space` — Bottom block padding for the nav rail.
- `--m3e-nav-rail-compact-width` — Width of the nav rail in compact mode.
- `--m3e-nav-rail-expanded-inline-padding` — Inline padding for expanded nav rail.
- `--m3e-nav-rail-expanded-min-width` — Minimum width of the nav rail in expanded mode.
- `--m3e-nav-rail-expanded-max-width` — Maximum width of the nav rail in expanded mode.
- `--m3e-nav-rail-expanded-item-height` — Height of nav items in expanded mode.
- `--m3e-nav-rail-button-item-space` — Space below icon buttons and FABs.
- `--m3e-nav-rail-expanded-icon-button-inset` — Inset for icon buttons in expanded mode.
- `--m3e-nav-bar-height` — Height of the navigation bar.
- `--m3e-nav-bar-container-color` — Background color of the navigation bar container.
- `--m3e-nav-bar-vertical-item-width` — Minimum width of vertical nav items.

</details>

### `NavRailToggle` — `<m3e-nav-rail-toggle>` (`@m3e/nav-rail`)

An element, nested within a clickable element, used to toggle the expanded state of a navigation rail.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `for` | `string | null` | `null` | The identifier of the interactive control to which this element is attached. |

### `Optgroup` — `<m3e-optgroup>` (`@m3e/option`)

Groups options under a subheading.

**Slots:** `(default)`, `label`

<details><summary>CSS custom properties (8)</summary>

- `--m3e-option-height` — The height of the group label container.
- `--m3e-option-font-size` — The font size of the group label.
- `--m3e-option-font-weight` — The font weight of the group label.
- `--m3e-option-line-height` — The line height of the group label.
- `--m3e-option-tracking` — The letter spacing of the group label.
- `--m3e-option-padding-end` — The right padding of the label.
- `--m3e-option-padding-start` — The left padding of the label.
- `--m3e-option-color` — The text color of the group label.

</details>

### `Option` — `<m3e-option>` (`@m3e/option`)

An option that can be selected.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `disabled` | `boolean` | `false` | Whether the element is disabled. |
| `selected` | `boolean` | `false` | Whether the element is selected. |
| `value` | `string` | `` | A string representing the value of the option. |

**Slots:** `(default)`

<details><summary>CSS custom properties (25)</summary>

- `--m3e-option-container-height` — The height of the option container.
- `--m3e-option-color` — The text color of the option.
- `--m3e-option-container-hover-color` — The color for the hover state layer.
- `--m3e-option-container-focus-color` — The color for the focus state layer.
- `--m3e-option-ripple-color` — The color of the ripple effect.
- `--m3e-option-selected-color` — The text color when the option is selected.
- `--m3e-option-selected-container-color` — The background color when the option is selected.
- `--m3e-option-selected-container-hover-color` — The hover color for the selected state layer.
- `--m3e-option-selected-container-focus-color` — The focus color for the selected state layer.
- `--m3e-option-selected-ripple-color` — The ripple color when the option is selected.
- `--m3e-option-disabled-color` — The text color when the option is disabled.
- `--m3e-option-disabled-opacity` — The opacity level applied to the disabled text color.
- `--m3e-option-icon-label-space` — The spacing between the icon and label.
- `--m3e-option-padding-start` — The left padding of the option content.
- `--m3e-option-padding-end` — The right padding of the option content.
- `--m3e-option-label-text-font-size` — The font size of the option label.
- `--m3e-option-label-text-font-weight` — The font weight of the option label.
- `--m3e-option-label-text-line-height` — The line height of the option label.
- `--m3e-option-label-text-tracking` — The letter spacing of the option label.
- `--m3e-option-focus-ring-shape` — The corner radius of the focus ring.
- `--m3e-option-icon-size` — The size of the option icons.
- `--m3e-option-shape` — Base shape of the option.
- `--m3e-option-selected-shape` — Shape used for a selected option.
- `--m3e-option-first-child-shape` — Shape for the first option in a list.
- `--m3e-option-last-child-shape` — Shape for the last option in a list.

</details>

### `OptionPanel` — `<m3e-option-panel>` (`@m3e/option`)

Presents a list of options on a temporary surface.

**Slots:** `(default)`

**Events:** `beforetoggle`, `toggle`

<details><summary>CSS custom properties (12)</summary>

- `--m3e-option-panel-container-shape` — Corner radius of the panel container.
- `--m3e-option-panel-container-min-width` — Minimum width of the panel container.
- `--m3e-option-panel-container-max-width` — Maximum width of the panel container.
- `--m3e-option-panel-container-max-height` — Maximum height of the panel container.
- `--m3e-option-panel-container-padding-block` — Vertical padding inside the panel container.
- `--m3e-option-panel-container-padding-inline` — Horizontal padding inside the panel container.
- `--m3e-option-panel-container-color` — Background color of the panel container.
- `--m3e-option-panel-container-elevation` — Box shadow elevation of the panel container.
- `--m3e-option-panel-gap` — Vertical spacing between option items.
- `--m3e-option-panel-divider-spacing` — Vertical spacing around slotted `m3e-divider` elements.
- `--m3e-option-panel-text-highlight-container-color` — Background color used for text highlight matches.
- `--m3e-option-panel-text-highlight-color` — Text color used for text highlight matches.

</details>

### `Paginator` — `<m3e-paginator>` (`@m3e/paginator`)

Provides navigation for paged information, typically used with a table.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `disabled` | `boolean` | `false` | Whether the element is disabled. |
| `first-page-label` | `string` | `"First page"` | The accessible label given to the button used to move to the first page. |
| `hide-page-size` | `boolean` | `false` | Whether to hide page size selection. |
| `items-per-page-label` | `string` | `"Items per page:"` | The label for the page size selector. |
| `last-page-label` | `string` | `"Last page"` | The accessible label given to the button used to move to the last page. |
| `length` | `number` | `0` | The length of the total number of items which are being paginated. |
| `next-page-label` | `string` | `"Next page"` | The accessible label given to the button used to move to the next page. |
| `page-index` | `number` | `0` | The zero-based page index of the displayed list of items. |
| `page-size` | `number | "all"` | `50` | The number of items to display in a page. |
| `page-sizes` | `string` | `"5,10,25,50,100"` | A comma separated list of available page sizes. |
| `page-size-variant` | `FormFieldVariant` | `"outlined"` | The appearance variant of the page size field. |
| `previous-page-label` | `string` | `"Previous page"` | The accessible label given to the button used to move to the previous page. |
| `show-first-last-buttons` | `boolean` | `false` | Whether to show first/last buttons. |

**Slots:** `first-page-icon`, `previous-page-icon`, `next-page-icon`, `last-page-icon`

**Events:** `page`

<details><summary>CSS custom properties (4)</summary>

- `--m3e-paginator-font-size` — The font size used for paginator text.
- `--m3e-paginator-font-weight` — The font weight used for paginator text.
- `--m3e-paginator-line-height` — The line height used for paginator text.
- `--m3e-paginator-tracking` — The letter-spacing used for paginator text.

</details>

### `PseudoCheckbox` — `<m3e-pseudo-checkbox>` (`@m3e/core`)

An element which looks like a checkbox.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `checked` | `boolean` | `false` | A value indicating whether the element is checked. |
| `disabled` | `boolean` | `false` | A value indicating whether the element is disabled. |
| `indeterminate` | `boolean` | `false` | A value indicating whether the element's checked state is indeterminate. |

<details><summary>CSS custom properties (12)</summary>

- `--m3e-checkbox-icon-size` — Size of the checkbox icon.
- `--m3e-checkbox-container-shape` — Border radius of the checkbox container.
- `--m3e-checkbox-unselected-outline-thickness` — Outline thickness for unselected state.
- `--m3e-checkbox-unselected-outline-color` — Outline color for unselected state.
- `--m3e-checkbox-selected-container-color` — Background color for selected state.
- `--m3e-checkbox-selected-icon-color` — Icon color for selected state.
- `--m3e-checkbox-unselected-disabled-outline-color` — Outline color for unselected disabled state.
- `--m3e-checkbox-unselected-disabled-outline-opacity` — Outline opacity for unselected disabled state.
- `--m3e-checkbox-selected-disabled-container-color` — Background color for selected disabled state.
- `--m3e-checkbox-selected-disabled-container-opacity` — Background opacity for selected disabled state.
- `--m3e-checkbox-selected-disabled-icon-color` — Icon color for selected disabled state.
- `--m3e-checkbox-selected-disabled-icon-opacity` — Icon opacity for selected disabled state.

</details>

### `PseudoRadio` — `<m3e-pseudo-radio>` (`@m3e/core`)

An element which looks like a radio button.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `checked` | `boolean` | `false` | A value indicating whether the element is checked. |
| `disabled` | `boolean` | `false` | A value indicating whether the element is disabled. |

<details><summary>CSS custom properties (4)</summary>

- `--m3e-radio-icon-size` — Size of the radio icon.
- `--m3e-radio-unselected-icon-color` — Color of the unselected radio icon.
- `--m3e-radio-selected-icon-color` — Color of the selected radio icon.
- `--m3e-radio-disabled-icon-color` — Color of the disabled radio icon.

</details>

### `Radio` — `<m3e-radio>` (`@m3e/radio-group`)

A radio button that allows a user to select one option from a set of options.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `checked` | `boolean` | `false` | Whether the element is checked. |
| `disabled` | `boolean` | `false` | Whether the element is disabled. |
| `name` | `string` | `` | The name that identifies the element when submitting the associated form. |
| `required` | `string` | `` | Whether the element is required. |
| `value` | `string` | `"on"` | A string representing the value of the radio. |

**Events:** `input`, `change`, `click`

<details><summary>CSS custom properties (15)</summary>

- `--m3e-radio-container-size` — Base size of the radio button container.
- `--m3e-radio-icon-size` — Size of the radio icon inside the wrapper.
- `--m3e-radio-unselected-hover-color` — Hover state layer color when radio is not selected.
- `--m3e-radio-unselected-focus-color` — Focus state layer color when radio is not selected.
- `--m3e-radio-unselected-ripple-color` — Ripple color when radio is not selected.
- `--m3e-radio-unselected-icon-color` — Icon color when radio is not selected.
- `--m3e-radio-selected-hover-color` — Hover state layer color when radio is selected.
- `--m3e-radio-selected-focus-color` — Focus state layer color when radio is selected.
- `--m3e-radio-selected-ripple-color` — Ripple color when radio is selected.
- `--m3e-radio-selected-icon-color` — Icon color when radio is selected.
- `--m3e-radio-disabled-icon-color` — Icon color when radio is disabled.
- `--m3e-radio-error-hover-color` — Fallback hover color used when the radio is invalid and touched.
- `--m3e-radio-error-focus-color` — Fallback focus color used when the radio is invalid and touched.
- `--m3e-radio-error-ripple-color` — Fallback ripple color used when the radio is invalid and touched.
- `--m3e-radio-error-icon-color` — Fallback icon color used when the radio is invalid and touched.

</details>

### `RadioGroup` — `<m3e-radio-group>` (`@m3e/radio-group`)

A container for a set of radio buttons.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `aria-invalid` | `string` | `` |  |
| `disabled` | `boolean` | `false` | Whether the element is disabled. |
| `name` | `string` | `` | The name that identifies the element when submitting the associated form. |
| `required` | `boolean` | `false` | Whether the element is required. |

**Slots:** `(default)`

**Events:** `change`

### `RichTooltip` — `<m3e-rich-tooltip>` (`@m3e/tooltip`)

Provides contextual details for a control, such as explaining the value or purpose of a feature.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `disabled` | `boolean` | `false` | Whether the element is disabled. |
| `for` | `string | null` | `null` | The identifier of the interactive control to which this element is attached. |
| `hide-delay` | `number` | `200` | The amount of time, in milliseconds, before hiding the tooltip. |
| `position` | `RichTooltipPosition` | `"below-after"` | The position of the tooltip. |
| `show-delay` | `number` | `0` | The amount of time, in milliseconds, before showing the tooltip. |
| `touch-gestures` | `TooltipTouchGestures` | `"auto"` | The mode in which to handle touch gestures. |

**Slots:** `(default)`, `subhead`, `actions`

**Events:** `beforetoggle`, `toggle`

<details><summary>CSS custom properties (20)</summary>

- `--m3e-rich-tooltip-padding-top` — Top padding of the tooltip container.
- `--m3e-rich-tooltip-padding-bottom` — Bottom padding of the tooltip container (when no actions are present).
- `--m3e-rich-tooltip-padding-inline` — Horizontal padding of the tooltip container.
- `--m3e-rich-tooltip-max-width` — Maximum width of the tooltip surface.
- `--m3e-rich-tooltip-shape` — Border‑radius of the tooltip container.
- `--m3e-rich-tooltip-container-color` — Background color of the tooltip surface.
- `--m3e-rich-tooltip-subhead-color` — Color of the subhead text.
- `--m3e-rich-tooltip-subhead-font-size` — Font size of the subhead text.
- `--m3e-rich-tooltip-subhead-font-weight` — Font weight of the subhead text.
- `--m3e-rich-tooltip-subhead-line-height` — Line height of the subhead text.
- `--m3e-rich-tooltip-subhead-tracking` — Letter‑spacing of the subhead text.
- `--m3e-rich-tooltip-subhead-bottom-space` — Space below the subhead before the supporting text.
- `--m3e-rich-tooltip-supporting-text-color` — Color of the supporting text.
- `--m3e-rich-tooltip-supporting-text-font-size` — Font size of the supporting text.
- `--m3e-rich-tooltip-supporting-text-font-weight` — Font weight of the supporting text.
- `--m3e-rich-tooltip-supporting-text-line-height` — Line height of the supporting text.
- `--m3e-rich-tooltip-supporting-text-tracking` — Letter‑spacing of the supporting text.
- `--m3e-rich-tooltip-actions-padding-inline` — Horizontal padding applied to the actions slot area.
- `--m3e-rich-tooltip-actions-top-space` — Space above the actions slot.
- `--m3e-rich-tooltip-actions-bottom-space` — Space below the actions slot.

</details>

### `RichTooltipAction` — `<m3e-rich-tooltip-action>` (`@m3e/tooltip`)

An element, nested within a clickable element, used to dismiss a parenting rich tooltip.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `disable-restore-focus` | `boolean` | `false` | Whether to focus should not be restored to the trigger when activated. |

**Slots:** `(default)`

### `Ripple` — `<m3e-ripple>` (`@m3e/core`)

Connects user input to screen reactions using ripples.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `centered` | `boolean` | `false` | Whether the ripple always originates from the center of the element's bounds, rather than originating from the location of the click event. |
| `disabled` | `boolean` | `false` | Whether click events will not trigger the ripple. Ripples can be still controlled manually by using the `show` and 'hide' methods. |
| `for` | `string | null` | `null` | The identifier of the interactive control to which this element is attached. |
| `radius` | `number | null` | `null` | The radius, in pixels, of the ripple. |
| `unbounded` | `boolean` | `false` | Whether the ripple is visible outside the element's bounds. |

<details><summary>CSS custom properties (6)</summary>

- `--m3e-ripple-color` — The color of the ripple.
- `--m3e-ripple-enter-duration` — The duration for the enter animation (expansion from point of contact).
- `--m3e-ripple-exit-duration` — The duration for the exit animation (fade-out).
- `--m3e-ripple-opacity` — The opacity of the ripple.
- `--m3e-ripple-scale-factor` — The factor by which to scale the ripple.
- `--m3e-ripple-shape` — The shape of the ripple.

</details>

### `ScrollContainer` — `<m3e-scroll-container>` (`@m3e/core`)

A vertically oriented content container which presents dividers above and below content when scrolled.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `dividers` | `ScrollDividers` | `"above-below"` | The dividers used to separate scrollable content. |
| `thin` | `boolean` | `false` | Whether to present thin scrollbars. |

**Slots:** `(default)`

<details><summary>CSS custom properties (6)</summary>

- `--m3e-divider-thickness` — Thickness of the divider lines above and below content.
- `--m3e-divider-color` — Color of the divider lines when visible.
- `--m3e-focus-ring-color` — Color of the focus ring outline.
- `--m3e-focus-ring-thickness` — Thickness of the focus ring outline.
- `--m3e-focus-ring-factor` — Animation factor for focus ring thickness.
- `--m3e-focus-ring-duration` — Duration of the focus ring animation.

</details>

### `SegmentedButton` — `<m3e-segmented-button>` (`@m3e/segmented-button`)

A button that allows a user to select from a limited set of options.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `disabled` | `boolean` | `false` | Whether the element is disabled. |
| `hide-selection-indicator` | `boolean` | `false` | Whether to hide the selection indicator. |
| `multi` | `boolean` | `false` | Whether multiple options can be selected. |
| `name` | `string` | `` | The name that identifies the element when submitting the associated form. |

**Slots:** `(default)`

**Events:** `change`, `input`

<details><summary>CSS custom properties (2)</summary>

- `--m3e-segmented-button-start-shape` — Border radius for the first segment in a segmented button.
- `--m3e-segmented-button-end-shape` — Border radius for the last segment in a segmented button.

</details>

### `Select` — `<m3e-select>` (`@m3e/select`)

A form control that allows users to select a value from a set of predefined options.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `disabled` | `boolean` | `false` | Whether the element is disabled. |
| `hide-selection-indicator` | `boolean` | `false` | Whether to hide the selection indicator for single select options. |
| `multi` | `boolean` | `false` | Whether multiple options can be selected. |
| `name` | `string` | `` | The name that identifies the element when submitting the associated form. |
| `required` | `boolean` | `false` | Whether the element is required. |

**Slots:** `(default)`, `arrow`, `value`

**Events:** `change`, `toggle`, `input`

<details><summary>CSS custom properties (8)</summary>

- `--m3e-form-field-font-size` — The font size of the select control.
- `--m3e-form-field-font-weight` — The font weight of the select control.
- `--m3e-form-field-line-height` — The line height of the select control.
- `--m3e-form-field-tracking` — The letter spacing of the select control.
- `--m3e-select-container-shape` — The corner radius of the select container.
- `--m3e-select-disabled-color` — The text color when the select is disabled.
- `--m3e-select-disabled-color-opacity` — The opacity level applied to the disabled text color.
- `--m3e-select-icon-size` — The size of the dropdown arrow icon.

</details>

### `SelectionList` — `<m3e-selection-list>` (`@m3e/list`)

A list of selectable options.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `hide-selection-indicator` | `boolean` | `false` | Whether to hide the selection indicator. |
| `multi` | `boolean` | `false` | Whether multiple items can be selected. |
| `variant` | `ListVariant` | `"standard"` | The appearance variant of the list. |
| `name` | `string` | `` | The name that identifies the element when submitting the associated form. |
| `disabled` | `boolean` | `false` | Whether the element is disabled. |

**Slots:** `(default)`

**Events:** `change`, `input`

<details><summary>CSS custom properties (10)</summary>

- `--m3e-list-divider-inset-start-size` — Start inset for dividers within the list.
- `--m3e-list-divider-inset-end-size` — End inset for dividers within the list.
- `--m3e-segmented-list-segment-gap` — Gap between list items in segmented variant.
- `--m3e-segmented-list-container-shape` — Border radius of the segmented list container.
- `--m3e-segmented-list-item-container-color` — Background color of items in segmented variant.
- `--m3e-segmented-list-item-disabled-container-color` — Background color of disabled items in segmented variant.
- `--m3e-segmented-list-item-container-shape` — Border radius of items in segmented variant.
- `--m3e-segmented-list-item-hover-container-shape` — Border radius of items in segmented variant on hover.
- `--m3e-segmented-list-item-focus-container-shape` — Border radius of items in segmented variant on focus.
- `--m3e-segmented-list-item-selected-container-shape` — Border radius of items in segmented variant when selected.

</details>

### `Shape` — `<m3e-shape>` (`@m3e/shape`)

A shape used to add emphasis and decorative flair.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `name` | `ShapeName | null` | `null` | The name of the shape. |

**Slots:** `(default)`

<details><summary>CSS custom properties (3)</summary>

- `--m3e-shape-size` — Default size of the shape.
- `--m3e-shape-container-color` — Container (background) color of the shape.
- `--m3e-shape-transition` — Transition used to morph between shapes.

</details>

### `Slide` — `<m3e-slide>` (`@m3e/core`)

A carousel-like container used to horizontally cycle through slotted items.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `selected-index` | `number | null` | `null` | The zero-based index of the visible item. |

<details><summary>CSS custom properties (1)</summary>

- `--m3e-slide-animation-duration` — The duration of transitions between slotted items.

</details>

### `SlideGroup` — `<m3e-slide-group>` (`@m3e/slide-group`)

Presents pagination controls used to scroll overflowing content.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `disabled` | `boolean` | `false` | Whether scroll buttons are disabled. |
| `next-page-label` | `string` | `"Next page"` | The accessible label given to the button used to move to the next page. |
| `previous-page-label` | `string` | `"Previous page"` | The accessible label given to the button used to move to the previous page. |
| `threshold` | `number` | `0` | A value, in pixels, indicating the scroll threshold at which to begin showing pagination controls. |
| `vertical` | `boolean` | `false` | Whether content is oriented vertically. |

**Slots:** `(default)`, `next-icon`, `prev-icon`

<details><summary>CSS custom properties (4)</summary>

- `--m3e-slide-group-button-icon-size` — Sets icon size for scroll buttons; overrides default small icon size.
- `--m3e-slide-group-button-size` — Defines scroll button size; used for width (horizontal) or height (vertical).
- `--m3e-slide-group-divider-top` — Adds top border to content container for visual separation.
- `--m3e-slide-group-divider-bottom` — Adds bottom border to content container for visual separation.

</details>

### `Slider` — `<m3e-slider>` (`@m3e/slider`)

Allows for the selection of numeric values from a range.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `disabled` | `boolean` | `false` | Whether the element is disabled. |
| `discrete` | `boolean` | `false` | Whether to show tick marks. |
| `labelled` | `boolean` | `false` | Whether to show value labels when activated. |
| `max` | `number` | `100` | The maximum allowable value. |
| `min` | `number` | `0` | The minimum allowable value. |
| `step` | `number` | `1` | The value at which the thumb will snap. |
| `size` | `SliderSize` | `"extra-small"` | The size of the slider. |

<details><summary>CSS custom properties (34)</summary>

- `--m3e-slider-min-width` — Minimum inline size of the slider host.
- `--m3e-slider-small-height` — Height of the slider when size is small or extra-small.
- `--m3e-slider-medium-height` — Height of the slider when size is medium.
- `--m3e-slider-large-height` — Height of the slider when size is large.
- `--m3e-slider-extra-large-height` — Height of the slider when size is extra-large.
- `--m3e-slider-small-active-track-shape` — Corner shape of the active track for small sliders.
- `--m3e-slider-small-inactive-active-track-start-shape` — Corner shape of the inactive track start for small sliders.
- `--m3e-slider-small-inactive-track-end-shape` — Corner shape of the inactive track end for small sliders.
- `--m3e-slider-medium-active-track-shape` — Corner shape of the active track for medium sliders.
- `--m3e-slider-medium-inactive-active-track-start-shape` — Corner shape of the inactive track start for medium sliders.
- `--m3e-slider-medium-inactive-track-end-shape` — Corner shape of the inactive track end for medium sliders.
- `--m3e-slider-large-active-track-shape` — Corner shape of the active track for large sliders.
- `--m3e-slider-large-inactive-active-track-start-shape` — Corner shape of the inactive track start for large sliders.
- `--m3e-slider-large-inactive-track-end-shape` — Corner shape of the inactive track end for large sliders.
- `--m3e-slider-extra-large-active-track-shape` — Corner shape of the active track for extra-large sliders.
- `--m3e-slider-extra-large-inactive-active-track-start-shape` — Corner shape of the inactive track start for extra-large sliders.
- `--m3e-slider-extra-large-inactive-track-end-shape` — Corner shape of the inactive track end for extra-large sliders.
- `--m3e-slider-extra-small-track-height` — Height of the track for extra-small sliders.
- `--m3e-slider-small-track-height` — Height of the track for small sliders.
- `--m3e-slider-medium-track-height` — Height of the track for medium sliders.
- `--m3e-slider-large-track-height` — Height of the track for large sliders.
- `--m3e-slider-extra-large-track-height` — Height of the track for extra-large sliders.
- `--m3e-slider-tick-size` — Size of each tick mark.
- `--m3e-slider-tick-shape` — Corner shape of each tick mark.
- `--m3e-slider-inactive-track-color` — Background color of the inactive track when enabled.
- `--m3e-slider-disabled-inactive-track-color` — Base color of the inactive track when disabled.
- `--m3e-slider-disabled-inactive-track-opacity` — Opacity of the inactive track when disabled.
- `--m3e-slider-active-track-color` — Background color of the active track when enabled.
- `--m3e-slider-disabled-active-track-color` — Base color of the active track when disabled.
- `--m3e-slider-disabled-active-track-opacity` — Opacity of the active track when disabled.
- `--m3e-slider-tick-active-color` — Color of active ticks when enabled.
- `--m3e-slider-disabled-tick-active-color` — Color of active ticks when disabled.
- `--m3e-slider-tick-inactive-color` — Color of inactive ticks when enabled.
- `--m3e-slider-disabled-tick-inactive-color` — Color of inactive ticks when disabled.

</details>

### `SliderThumb` — `<m3e-slider-thumb>` (`@m3e/slider`)

A thumb used to select a value in a slider.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `disabled` | `boolean` | `false` | Whether the element is disabled. |
| `name` | `string` | `` | The name that identifies the element when submitting the associated form. |
| `value` | `number | null` | `null` | The value of the thumb. |

**Events:** `value-change`, `input`, `change`, `click`

<details><summary>CSS custom properties (13)</summary>

- `--m3e-slider-thumb-width` — Width of the slider thumb.
- `--m3e-slider-thumb-padding` — Horizontal padding around the thumb.
- `--m3e-slider-thumb-color` — Active color of the slider thumb when enabled.
- `--m3e-slider-thumb-pressed-width` — Width of the thumb when pressed.
- `--m3e-slider-thumb-disabled-color` — Color of the thumb when disabled.
- `--m3e-slider-thumb-disabled-opacity` — Opacity of the thumb when disabled.
- `--m3e-slider-label-width` — Width of the floating label above the thumb.
- `--m3e-slider-label-container-color` — Background color of the label container.
- `--m3e-slider-label-color` — Text color of the label.
- `--m3e-slider-label-font-size` — Font size of the label text.
- `--m3e-slider-label-font-weight` — Font weight of the label text.
- `--m3e-slider-label-line-height` — Line height of the label text.
- `--m3e-slider-label-tracking` — Letter spacing of the label text.

</details>

### `Snackbar` — `<m3e-snackbar>` (`@m3e/snackbar`)

Presents short updates about application processes at the bottom of the screen.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `action` | `string` | `""` | The label of the snackbar's action. |
| `close-label` | `string` | `"Close"` | The accessible label given to the button used to dismiss the snackbar. |
| `dismissible` | `boolean` | `false` | Whether a button is presented that can be used to close the snackbar. |
| `duration` | `number` | `3000` | The length of time, in milliseconds, to wait before automatically dismissing the snackbar. |

**Slots:** `(default)`, `close-icon`

**Events:** `beforetoggle`, `toggle`

<details><summary>CSS custom properties (6)</summary>

- `--m3e-snackbar-margin` — Vertical offset from the bottom of the viewport.
- `--m3e-snackbar-container-shape` — Border radius of the snackbar container.
- `--m3e-snackbar-container-color` — Background color of the snackbar.
- `--m3e-snackbar-padding` — Internal spacing of the snackbar container.
- `--m3e-snackbar-min-width` — Minimum width of the snackbar.
- `--m3e-snackbar-max-width` — Maximum width of the snackbar.

</details>

### `SplitButton` — `<m3e-split-button>` (`@m3e/split-button`)

A button used to show an action with a menu of related actions.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `variant` | `SplitButtonVariant` | `"filled"` | The appearance variant of the button. |
| `size` | `ButtonSize` | `"small"` | The size of the button. |

**Slots:** `leading-button`, `trailing-button`

<details><summary>CSS custom properties (40)</summary>

- `--m3e-split-button-extra-small-trailing-button-unselected-leading-space` — Leading space for the trailing button (extra-small, unselected).
- `--m3e-split-button-extra-small-trailing-button-unselected-trailing-space` — Trailing space for the trailing button (extra-small, unselected).
- `--m3e-split-button-small-trailing-button-unselected-leading-space` — Leading space for the trailing button (small, unselected).
- `--m3e-split-button-small-trailing-button-unselected-trailing-space` — Trailing space for the trailing button (small, unselected).
- `--m3e-split-button-medium-trailing-button-unselected-leading-space` — Leading space for the trailing button (medium, unselected).
- `--m3e-split-button-medium-trailing-button-unselected-trailing-space` — Trailing space for the trailing button (medium, unselected).
- `--m3e-split-button-large-trailing-button-unselected-leading-space` — Leading space for the trailing button (large, unselected).
- `--m3e-split-button-large-trailing-button-unselected-trailing-space` — Trailing space for the trailing button (large, unselected).
- `--m3e-split-button-extra-large-trailing-button-unselected-leading-space` — Leading space for the trailing button (extra-large, unselected).
- `--m3e-split-button-extra-large-trailing-button-unselected-trailing-space` — Trailing space for the trailing button (extra-large, unselected).
- `--m3e-split-button-extra-small-trailing-button-selected-leading-space` — Leading space for the trailing button (extra-small, selected).
- `--m3e-split-button-extra-small-trailing-button-selected-trailing-space` — Trailing space for the trailing button (extra-small, selected).
- `--m3e-split-button-small-trailing-button-selected-leading-space` — Leading space for the trailing button (small, selected).
- `--m3e-split-button-small-trailing-button-selected-trailing-space` — Trailing space for the trailing button (small, selected).
- `--m3e-split-button-medium-trailing-button-selected-leading-space` — Leading space for the trailing button (medium, selected).
- `--m3e-split-button-medium-trailing-button-selected-trailing-space` — Trailing space for the trailing button (medium, selected).
- `--m3e-split-button-large-trailing-button-selected-leading-space` — Leading space for the trailing button (large, selected).
- `--m3e-split-button-large-trailing-button-selected-trailing-space` — Trailing space for the trailing button (large, selected).
- `--m3e-split-button-extra-large-trailing-button-selected-leading-space` — Leading space for the trailing button (extra-large, selected).
- `--m3e-split-button-extra-large-trailing-button-selected-trailing-space` — Trailing space for the trailing button (extra-large, selected).
- `--m3e-split-button-extra-small-inner-corner-size` — Inner corner size for the leading/trailing button (extra-small).
- `--m3e-split-button-small-inner-corner-size` — Inner corner size for the leading/trailing button (small).
- `--m3e-split-button-medium-inner-corner-size` — Inner corner size for the leading/trailing button (medium).
- `--m3e-split-button-large-inner-corner-size` — Inner corner size for the leading/trailing button (large).
- `--m3e-split-button-extra-large-inner-corner-size` — Inner corner size for the leading/trailing button (extra-large).
- `--m3e-split-button-extra-small-inner-corner-hover-size` — Inner corner size on hover (extra-small).
- `--m3e-split-button-small-inner-corner-hover-size` — Inner corner size on hover (small).
- `--m3e-split-button-medium-inner-corner-hover-size` — Inner corner size on hover (medium).
- `--m3e-split-button-large-inner-corner-hover-size` — Inner corner size on hover (large).
- `--m3e-split-button-extra-large-inner-corner-hover-size` — Inner corner size on hover (extra-large).
- `--m3e-split-button-extra-small-inner-corner-pressed-size` — Inner corner size on press (extra-small).
- `--m3e-split-button-small-inner-corner-pressed-size` — Inner corner size on press (small).
- `--m3e-split-button-medium-inner-corner-pressed-size` — Inner corner size on press (medium).
- `--m3e-split-button-large-inner-corner-pressed-size` — Inner corner size on press (large).
- `--m3e-split-button-extra-large-inner-corner-pressed-size` — Inner corner size on press (extra-large).
- `--m3e-split-button-extra-small-between-spacing` — Spacing between leading and trailing buttons (extra-small).
- `--m3e-split-button-small-between-spacing` — Spacing between leading and trailing buttons (small).
- `--m3e-split-button-medium-between-spacing` — Spacing between leading and trailing buttons (medium).
- `--m3e-split-button-large-between-spacing` — Spacing between leading and trailing buttons (large).
- `--m3e-split-button-extra-large-between-spacing` — Spacing between leading and trailing buttons (extra-large).

</details>

### `StateLayer` — `<m3e-state-layer>` (`@m3e/core`)

Provides focus and hover state layer treatment for an interactive element.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `disabled` | `boolean` | `false` | Whether hover and focus events will not trigger the state layer. State layers can still be controlled manually using the `show` and `hide` methods. |
| `disable-hover` | `boolean` | `false` | Whether hover events will not trigger the state layer. State layers can still be controlled manually using the `show` and `hide` methods. |
| `for` | `string | null` | `null` | The identifier of the interactive control to which this element is attached. |

<details><summary>CSS custom properties (6)</summary>

- `--m3e-state-layer-duration` — Duration of state layer changes.
- `--m3e-state-layer-easing` — Easing curve of state layer changes.
- `--m3e-state-layer-focus-color` — Color on hover.
- `--m3e-state-layer-focus-opacity` — Opacity on focus.
- `--m3e-state-layer-hover-color` — Color on hover.
- `--m3e-state-layer-hover-opacity` — Opacity on hover.

</details>

### `Step` — `<m3e-step>` (`@m3e/stepper`)

A step in a wizard-like workflow.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `completed` | `boolean` | `false` | Whether the step has been completed. |
| `disabled` | `boolean` | `false` | Whether the element is disabled. |
| `editable` | `boolean` | `false` | Whether the step is editable and users can return to it after completion. |
| `for` | `string | null` | `null` | The identifier of the interactive control to which this element is attached. |
| `optional` | `boolean` | `false` | Whether the step is optional. |
| `selected` | `boolean` | `false` | Whether the element is selected. |
| `invalid` | `boolean` | `false` | Whether the step has an error. |

**Slots:** `(default)`, `icon`, `done-icon`, `edit-icon`, `error-icon`, `hint`, `error`

**Events:** `input`, `change`, `click`

<details><summary>CSS custom properties (27)</summary>

- `--m3e-step-shape` — Border radius of the step container, defining its visual shape.
- `--m3e-step-padding` — Internal padding of the step container, used for layout spacing.
- `--m3e-step-icon-shape` — Border radius of the icon container, controlling its geometric form.
- `--m3e-step-icon-size` — Width and height of the icon container and icon glyph.
- `--m3e-step-selected-icon-container-color` — Background color of the icon when the step is selected.
- `--m3e-step-selected-icon-color` — Foreground color of the icon when the step is selected.
- `--m3e-step-completed-icon-container-color` — Background color of the icon when the step is completed.
- `--m3e-step-completed-icon-color` — Foreground color of the icon when the step is completed.
- `--m3e-step-unselected-icon-container-color` — Background color of the icon when the step is inactive.
- `--m3e-step-unselected-icon-color` — Foreground color of the icon when the step is inactive.
- `--m3e-step-icon-error-color` — Foreground color of the icon when the step is invalid.
- `--m3e-step-disabled-icon-container-color` — Base color used to mix the disabled icon background.
- `--m3e-step-disabled-icon-color` — Base color used to mix the disabled icon foreground.
- `--m3e-step-label-color` — Text color of the step label in its default state.
- `--m3e-step-label-error-color` — Text color of the step label when the step is invalid.
- `--m3e-step-disabled-label-color` — Base color used to mix the disabled label foreground.
- `--m3e-step-font-size` — Font size of the step label.
- `--m3e-step-font-weight` — Font weight of the step label.
- `--m3e-step-line-height` — Line height of the step label.
- `--m3e-step-tracking` — Letter spacing of the step label.
- `--m3e-step-icon-label-space` — Gap between icon and label.
- `--m3e-step-hint-font-size` — Font size of hint and error messages.
- `--m3e-step-hint-font-weight` — Font weight of hint and error messages.
- `--m3e-step-hint-line-height` — Line height of hint and error messages.
- `--m3e-step-hint-tracking` — Letter spacing of hint and error messages.
- `--m3e-step-hint-color` — Text color of hint messages in valid state.
- `--m3e-step-disabled-hint-color` — Base color used to mix the disabled hint foreground.

</details>

### `StepPanel` — `<m3e-step-panel>` (`@m3e/stepper`)

A panel presented for a step in a wizard-like workflow.

**Slots:** `(default)`, `actions-`

<details><summary>CSS custom properties (3)</summary>

- `--m3e-step-panel-padding` — Padding inside the step panel container, defining internal spacing around content.
- `--m3e-step-panel-spacing` — Vertical gap between stacked elements within the step panel.
- `--m3e-step-panel-actions-height` — Minimum height of the slotted actions container.

</details>

### `Stepper` — `<m3e-stepper>` (`@m3e/stepper`)

Provides a wizard-like workflow by dividing content into logical steps.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `header-position` | `StepHeaderPosition` | `"above"` | The position of the step header, when oriented horizontally. |
| `label-position` | `StepLabelPosition` | `"end"` | The position of the step labels, when oriented horizontally. |
| `linear` | `boolean` | `false` | Whether the validity of previous steps should be checked or not. |
| `orientation` | `StepperOrientation` | `"horizontal"` | The orientation of the stepper. |

**Slots:** `step`, `panel`

**Events:** `change`

<details><summary>CSS custom properties (3)</summary>

- `--m3e-step-divider-thickness` — Thickness of the divider line between steps.
- `--m3e-step-divider-color` — Color of the divider line between steps.
- `--m3e-step-divider-inset` — Inset offset for divider alignment within step layout.

</details>

### `StepperPrevious` — `<m3e-stepper-previous>` (`@m3e/stepper`)

An element, nested within a clickable element, used to move a stepper to the next step.

**Slots:** `(default)`

### `StepperReset` — `<m3e-stepper-reset>` (`@m3e/stepper`)

An element, nested within a clickable element, used to reset a stepper to its initial state.

**Slots:** `(default)`

### `SuggestionChip` — `<m3e-suggestion-chip>` (`@m3e/chips`)

A chip used to help narrow a user's intent by presenting dynamically generated suggestions, such as

| Attribute | Type | Default | Description |
|---|---|---|---|
| `disabled` | `boolean` | `false` | A value indicating whether the element is disabled. |
| `disabled-interactive` | `boolean` | `false` | A value indicating whether the element is disabled and interactive. |
| `download` | `string | null` | `null` | A value indicating whether the `target` of the link button will be downloaded, optionally specifying the new name of the file. |
| `href` | `string` | `""` | The URL to which the link button points. |
| `name` | `string` | `` | The name of the element, submitted as a pair with the element's `value` as part of form data, when the element is used to submit a form. |
| `rel` | `string` | `""` | The relationship between the `target` of the link button and the document. |
| `target` | `LinkTarget` | `""` | The target of the link button. |
| `type` | `FormSubmitterType` | `"button"` | The type of the element. |
| `value` | `string` | `` | A string representing the value of the chip. |
| `variant` | `ChipVariant` | `"outlined"` | The appearance variant of the chip. |

**Slots:** `(default)`, `icon`, `trailing-icon`

**Events:** `click`

<details><summary>CSS custom properties (28)</summary>

- `--m3e-chip-container-shape` — Border radius of the chip container.
- `--m3e-chip-container-height` — Base height of the chip container before density adjustment.
- `--m3e-chip-label-text-font-size` — Font size of the chip label text.
- `--m3e-chip-label-text-font-weight` — Font weight of the chip label text.
- `--m3e-chip-label-text-line-height` — Line height of the chip label text.
- `--m3e-chip-label-text-tracking` — Letter spacing of the chip label text.
- `--m3e-chip-label-text-color` — Label text color in default state.
- `--m3e-chip-icon-color` — Icon color in default state.
- `--m3e-chip-icon-size` — Font size of leading/trailing icons.
- `--m3e-chip-spacing` — Horizontal gap between chip content elements.
- `--m3e-chip-padding-start` — Default start padding when no icon is present.
- `--m3e-chip-padding-end` — Default end padding when no trailing icon is present.
- `--m3e-chip-with-icon-padding-start` — Start padding when leading icon is present.
- `--m3e-chip-with-icon-padding-end` — End padding when trailing icon is present.
- `--m3e-chip-disabled-label-text-color` — Base color for disabled label text.
- `--m3e-chip-disabled-label-text-opacity` — Opacity applied to disabled label text.
- `--m3e-chip-disabled-icon-color` — Base color for disabled icons.
- `--m3e-chip-disabled-icon-opacity` — Opacity applied to disabled icons.
- `--m3e-elevated-chip-container-color` — Background color for elevated variant.
- `--m3e-elevated-chip-elevation` — Elevation level for elevated variant.
- `--m3e-elevated-chip-hover-elevation` — Elevation level on hover.
- `--m3e-elevated-chip-disabled-container-color` — Background color for disabled elevated variant.
- `--m3e-elevated-chip-disabled-container-opacity` — Opacity applied to disabled elevated background.
- `--m3e-elevated-chip-disabled-elevation` — Elevation level for disabled elevated variant.
- `--m3e-outlined-chip-outline-thickness` — Outline thickness for outlined variant.
- `--m3e-outlined-chip-outline-color` — Outline color for outlined variant.
- `--m3e-outlined-chip-disabled-outline-color` — Outline color for disabled outlined variant.
- `--m3e-outlined-chip-disabled-outline-opacity` — Opacity applied to disabled outline.

</details>

### `Switch` — `<m3e-switch>` (`@m3e/switch`)

An on/off control that can be toggled by clicking.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `checked` | `boolean` | `false` | Whether the element is checked. |
| `disabled` | `boolean` | `false` | Whether the element is disabled. |
| `icons` | `SwitchIcons` | `"none"` | The icons to present. |
| `name` | `string` | `` | The name that identifies the element when submitting the associated form. |
| `value` | `string` | `"on"` | A string representing the value of the switch. |

**Events:** `input`, `change`, `click`

<details><summary>CSS custom properties (69)</summary>

- `--m3e-switch-selected-icon-color` — Color of the icon when the switch is selected.
- `--m3e-switch-selected-icon-size` — Size of the icon in the selected state.
- `--m3e-switch-unselected-icon-color` — Color of the icon when the switch is unselected.
- `--m3e-switch-unselected-icon-size` — Size of the icon in the unselected state.
- `--m3e-switch-track-height` — Height of the switch track.
- `--m3e-switch-track-width` — Width of the switch track.
- `--m3e-switch-track-outline-color` — Color of the track’s outline.
- `--m3e-switch-track-outline-width` — Thickness of the track’s outline.
- `--m3e-switch-track-shape` — Corner shape of the track.
- `--m3e-switch-selected-track-color` — Track color when selected.
- `--m3e-switch-unselected-track-color` — Track color when unselected.
- `--m3e-switch-unselected-handle-height` — Height of the handle when unselected.
- `--m3e-switch-unselected-handle-width` — Width of the handle when unselected.
- `--m3e-switch-with-icon-handle-height` — Height of the handle when icons are present.
- `--m3e-switch-with-icon-handle-width` — Width of the handle when icons are present.
- `--m3e-switch-selected-handle-height` — Height of the handle when selected.
- `--m3e-switch-selected-handle-width` — Width of the handle when selected.
- `--m3e-switch-pressed-handle-height` — Height of the handle during press.
- `--m3e-switch-pressed-handle-width` — Width of the handle during press.
- `--m3e-switch-handle-shape` — Corner shape of the handle.
- `--m3e-switch-selected-handle-color` — Handle color when selected.
- `--m3e-switch-unselected-handle-color` — Handle color when unselected.
- `--m3e-switch-state-layer-size` — Diameter of the state layer overlay.
- `--m3e-switch-state-layer-shape` — Corner shape of the state layer.
- `--m3e-switch-disabled-selected-icon-color` — Icon color when selected and disabled.
- `--m3e-switch-disabled-selected-icon-opacity` — Icon opacity when selected and disabled.
- `--m3e-switch-disabled-unselected-icon-color` — Icon color when unselected and disabled.
- `--m3e-switch-disabled-unselected-icon-opacity` — Icon opacity when unselected and disabled.
- `--m3e-switch-disabled-track-opacity` — Track opacity when disabled.
- `--m3e-switch-disabled-selected-track-color` — Track color when selected and disabled.
- `--m3e-switch-disabled-unselected-track-color` — Track color when unselected and disabled.
- `--m3e-switch-disabled-unselected-track-outline-color` — Outline color when unselected and disabled.
- `--m3e-switch-disabled-unselected-handle-opacity` — Handle opacity when unselected and disabled.
- `--m3e-switch-disabled-selected-handle-opacity` — Handle opacity when selected and disabled.
- `--m3e-switch-disabled-selected-handle-color` — Handle color when selected and disabled.
- `--m3e-switch-disabled-unselected-handle-color` — Handle color when unselected and disabled.
- `--m3e-switch-selected-hover-icon-color` — Icon color when selected and hovered.
- `--m3e-switch-unselected-hover-icon-color` — Icon color when unselected and hovered.
- `--m3e-switch-selected-hover-track-color` — Track color when selected and hovered.
- `--m3e-switch-selected-hover-state-layer-color` — State layer color when selected and hovered.
- `--m3e-switch-selected-hover-state-layer-opacity` — State layer opacity when selected and hovered.
- `--m3e-switch-unselected-hover-track-color` — Track color when unselected and hovered.
- `--m3e-switch-unselected-hover-track-outline-color` — Outline color when unselected and hovered.
- `--m3e-switch-unselected-hover-state-layer-color` — State layer color when unselected and hovered.
- `--m3e-switch-unselected-hover-state-layer-opacity` — State layer opacity when unselected and hovered.
- `--m3e-switch-selected-hover-handle-color` — Handle color when selected and hovered.
- `--m3e-switch-unselected-hover-handle-color` — Handle color when unselected and hovered.
- `--m3e-switch-selected-focus-icon-color` — Icon color when selected and focused.
- `--m3e-switch-unselected-focus-icon-color` — Icon color when unselected and focused.
- `--m3e-switch-selected-focus-track-color` — Track color when selected and focused.
- `--m3e-switch-selected-focus-state-layer-color` — State layer color when selected and focused.
- `--m3e-switch-selected-focus-state-layer-opacity` — State layer opacity when selected and focused.
- `--m3e-switch-unselected-focus-track-color` — Track color when unselected and focused.
- `--m3e-switch-unselected-focus-track-outline-color` — Outline color when unselected and focused.
- `--m3e-switch-unselected-focus-state-layer-color` — State layer color when unselected and focused.
- `--m3e-switch-unselected-focus-state-layer-opacity` — State layer opacity when unselected and focused.
- `--m3e-switch-selected-focus-handle-color` — Handle color when selected and focused.
- `--m3e-switch-unselected-focus-handle-color` — Handle color when unselected and focused.
- `--m3e-switch-selected-pressed-icon-color` — Icon color when selected and pressed.
- `--m3e-switch-unselected-pressed-icon-color` — Icon color when unselected and pressed.
- `--m3e-switch-selected-pressed-track-color` — Track color when selected and pressed.
- `--m3e-switch-selected-pressed-state-layer-color` — State layer color when selected and pressed.
- `--m3e-switch-selected-pressed-state-layer-opacity` — State layer opacity when selected and pressed.
- `--m3e-switch-unselected-pressed-track-color` — Track color when unselected and pressed.
- `--m3e-switch-unselected-pressed-track-outline-color` — Outline color when unselected and pressed.
- `--m3e-switch-unselected-pressed-state-layer-color` — State layer color when unselected and pressed.
- `--m3e-switch-unselected-pressed-state-layer-opacity` — State layer opacity when unselected and pressed.
- `--m3e-switch-selected-pressed-handle-color` — Handle color when selected and pressed.
- `--m3e-switch-unselected-pressed-handle-color` — Handle color when unselected and pressed.

</details>

### `Tab` — `<m3e-tab>` (`@m3e/tabs`)

An interactive element that, when activated, presents an associated tab panel.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `disabled` | `boolean` | `false` | Whether the element is disabled. |
| `for` | `string | null` | `null` | The identifier of the interactive control to which this element is attached. |
| `selected` | `boolean` | `false` | Whether the element is selected. |

**Slots:** `(default)`, `icon`

**Events:** `input`, `change`, `click`

<details><summary>CSS custom properties (19)</summary>

- `--m3e-tab-font-size` — Font size for tab label.
- `--m3e-tab-font-weight` — Font weight for tab label.
- `--m3e-tab-line-height` — Line height for tab label.
- `--m3e-tab-tracking` — Letter spacing for tab label.
- `--m3e-tab-padding-start` — Padding on the inline start of the tab.
- `--m3e-tab-padding-end` — Padding on the inline end of the tab.
- `--m3e-tab-focus-ring-shape` — Border radius for the focus ring.
- `--m3e-tab-selected-color` — Text color for selected tab.
- `--m3e-tab-selected-container-hover-color` — Hover state-layer color for selected tab.
- `--m3e-tab-selected-container-focus-color` — Focus state-layer color for selected tab.
- `--m3e-tab-selected-ripple-color` — Ripple color for selected tab.
- `--m3e-tab-unselected-color` — Text color for unselected tab.
- `--m3e-tab-unselected-container-hover-color` — Hover state-layer color for unselected tab.
- `--m3e-tab-unselected-container-focus-color` — Focus state-layer color for unselected tab.
- `--m3e-tab-unselected-ripple-color` — Ripple color for unselected tab.
- `--m3e-tab-disabled-color` — Text color for disabled tab.
- `--m3e-tab-disabled-opacity` — Text opacity for disabled tab.
- `--m3e-tab-spacing` — Column gap between icon and label.
- `--m3e-tab-icon-size` — Font size for slotted icon.

</details>

### `TabPanel` — `<m3e-tab-panel>` (`@m3e/tabs`)

A panel presented for a tab.

**Slots:** `(default)`

### `Tabs` — `<m3e-tabs>` (`@m3e/tabs`)

Organizes content into separate views where only one view can be visible at a time.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `disable-pagination` | `boolean` | `false` | Whether scroll buttons are disabled. |
| `header-position` | `TabHeaderPosition` | `"before"` | The position of the tab headers. |
| `next-page-label` | `string` | `"Next page"` | The accessible label given to the button used to move to the next page. |
| `previous-page-label` | `string` | `"Previous page"` | The accessible label given to the button used to move to the previous page. |
| `stretch` | `boolean` | `false` | Whether tabs are stretched to fill the header. |
| `variant` | `TabVariant` | `"secondary"` | The appearance variant of the tabs. |

**Slots:** `(default)`, `panel`, `next-icon`, `prev-icon`

**Events:** `change`

<details><summary>CSS custom properties (7)</summary>

- `--m3e-tabs-paginator-button-icon-size` — Overrides the icon size for paginator buttons.
- `--m3e-tabs-active-indicator-color` — Color of the active tab indicator.
- `--m3e-tabs-primary-before-active-indicator-shape` — Border radius for active indicator when header is before and variant is primary.
- `--m3e-tabs-primary-after-active-indicator-shape` — Border radius for active indicator when header is after and variant is primary.
- `--m3e-tabs-primary-active-indicator-inset` — Inset for primary variant's active indicator.
- `--m3e-tabs-primary-active-indicator-thickness` — Thickness for primary variant's active indicator.
- `--m3e-tabs-secondary-active-indicator-thickness` — Thickness for secondary variant's active indicator.

</details>

### `TextHighlight` — `<m3e-text-highlight>` (`@m3e/core`)

Highlights text which matches a given search term.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `case-sensitive` | `boolean` | `false` | A value indicating whether matching is case sensitive. |
| `disabled` | `boolean` | `false` | A value indicating whether text highlighting is disabled. |
| `term` | `string` | `""` | The term to highlight. |

**Slots:** `(default)`

**Events:** `highlight`

<details><summary>CSS custom properties (4)</summary>

- `--m3e-text-highlight-container-color` — Background color applied to highlighted text ranges.
- `--m3e-text-highlight-color` — Foreground color of highlighted text content.
- `--m3e-text-highlight-decoration` — Optional text decoration (e.g., underline, line-through) for highlighted text.
- `--m3e-text-highlight-shadow` — Optional text shadow for emphasis or contrast.

</details>

### `TextOverflow` — `<m3e-text-overflow>` (`@m3e/core`)

An inline container which presents an ellipsis when content overflows.

**Slots:** `(default)`

### `TextareaAutosize` — `<m3e-textarea-autosize>` (`@m3e/textarea-autosize`)

A non-visual element used to automatically resize a `textarea` to fit its content.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `disabled` | `boolean` | `false` | Whether auto-sizing is disabled. |
| `for` | `string | null` | `null` | The identifier of the interactive control to which this element is attached. |
| `max-rows` | `number` | `0` | The maximum amount of rows in the `textarea`. |
| `min-rows` | `number` | `0` | The minimum amount of rows in the `textarea`. |

### `Theme` — `<m3e-theme>` (`@m3e/theme`)

A non-visual element responsible for application-level theming.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `color` | `string` | `"#6750A4"` | The hex color from which to derive dynamic color palettes. |
| `contrast` | `ContrastLevel` | `"standard"` | The contrast level of the theme. |
| `density` | `number` | `0` | The density scale (0, -1, -2). |
| `scheme` | `ColorScheme` | `"auto"` | The color scheme of the theme. |
| `strong-focus` | `boolean` | `false` | Whether to enable strong focus indicators. |
| `motion` | `MotionScheme` | `"standard"` | The motion scheme. |

**Events:** `change`

### `Toc` — `<m3e-toc>` (`@m3e/toc`)

A table of contents that provides in-page scroll navigation.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `for` | `string | null` | `null` | The identifier of the interactive control to which this element is attached. |
| `max-depth` | `number` | `2` | The maximum depth of the table of contents. |

**Slots:** `(default)`, `overline`, `title`

<details><summary>CSS custom properties (16)</summary>

- `--m3e-toc-width` — Width of the table of contents.
- `--m3e-toc-item-shape` — Border radius of TOC items and active indicator.
- `--m3e-toc-active-indicator-color` — Border color of the active indicator.
- `--m3e-toc-active-indicator-animation-duration` — Animation duration for the active indicator.
- `--m3e-toc-item-padding` — Inline padding for TOC items and header.
- `--m3e-toc-header-space` — Block space below and between header elements.
- `--m3e-toc-overline-font-size` — Font size for the overline slot.
- `--m3e-toc-overline-font-weight` — Font weight for the overline slot.
- `--m3e-toc-overline-line-height` — Line height for the overline slot.
- `--m3e-toc-overline-tracking` — Letter spacing for the overline slot.
- `--m3e-toc-overline-color` — Text color for the overline slot.
- `--m3e-toc-title-font-size` — Font size for the title slot.
- `--m3e-toc-title-font-weight` — Font weight for the title slot.
- `--m3e-toc-title-line-height` — Line height for the title slot.
- `--m3e-toc-title-tracking` — Letter spacing for the title slot.
- `--m3e-toc-title-color` — Text color for the title slot.

</details>

### `TocItem` — `<m3e-toc-item>` (`@m3e/toc`)

An item in a table of contents.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `disabled` | `boolean` | `false` | A value indicating whether the element is disabled. |
| `selected` | `boolean` | `false` | Whether the element is selected. |

**Slots:** `(default)`

**Events:** `click`

<details><summary>CSS custom properties (15)</summary>

- `--m3e-toc-item-shape` — Border radius of the TOC item.
- `--m3e-toc-item-padding-block` — Block padding for the TOC item.
- `--m3e-toc-item-padding` — Inline padding for the TOC item.
- `--m3e-toc-item-inset` — Indentation per level for the TOC item.
- `--m3e-toc-active-indicator-animation-duration` — Animation duration for the active indicator.
- `--m3e-toc-item-font-size` — Font size for unselected items.
- `--m3e-toc-item-font-weight` — Font weight for unselected items.
- `--m3e-toc-item-line-height` — Line height for unselected items.
- `--m3e-toc-item-tracking` — Letter spacing for unselected items.
- `--m3e-toc-item-color` — Text color for unselected items.
- `--m3e-toc-item-selected-font-size` — Font size for selected items.
- `--m3e-toc-item-selected-font-weight` — Font weight for selected items.
- `--m3e-toc-item-selected-line-height` — Line height for selected items.
- `--m3e-toc-item-selected-tracking` — Letter spacing for selected items.
- `--m3e-toc-item-selected-color` — Text color for selected items.

</details>

### `Toolbar` — `<m3e-toolbar>` (`@m3e/toolbar`)

Presents frequently used actions relevant to the current page.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `elevated` | `boolean` | `false` | Whether the toolbar is elevated. |
| `shape` | `ToolbarShape` | `"square"` | The shape of the toolbar. |
| `variant` | `ToolbarVariant` | `"standard"` | The appearance variant of the toolbar. |
| `vertical` | `boolean` | `false` | Whether the element is oriented vertically. |

**Slots:** `(default)`

<details><summary>CSS custom properties (9)</summary>

- `--m3e-toolbar-size` — The size (height or width) of the toolbar.
- `--m3e-toolbar-spacing` — The gap between toolbar items.
- `--m3e-toolbar-rounded-shape` — Border radius for rounded shape.
- `--m3e-toolbar-rounded-padding` — Padding for rounded shape.
- `--m3e-toolbar-square-padding` — Padding for square shape.
- `--m3e-toolbar-standard-container-color` — Container color for the standard variant.
- `--m3e-toolbar-standard-color` — Foreground color for the standard variant.
- `--m3e-toolbar-vibrant-container-color` — Container color for the vibrant variant.
- `--m3e-toolbar-vibrant-color` — Foreground color for the vibrant variant.

</details>

### `Tooltip` — `<m3e-tooltip>` (`@m3e/tooltip`)

Adds additional context to a button or other UI element.

| Attribute | Type | Default | Description |
|---|---|---|---|
| `disabled` | `boolean` | `false` | Whether the element is disabled. |
| `for` | `string | null` | `null` | The identifier of the interactive control to which this element is attached. |
| `hide-delay` | `number` | `200` | The amount of time, in milliseconds, before hiding the tooltip. |
| `position` | `TooltipPosition` | `"below"` | The position of the tooltip. |
| `show-delay` | `number` | `0` | The amount of time, in milliseconds, before showing the tooltip. |
| `touch-gestures` | `TooltipTouchGestures` | `"auto"` | The mode in which to handle touch gestures. |

**Slots:** `(default)`

<details><summary>CSS custom properties (12)</summary>

- `--m3e-tooltip-padding` — Internal spacing of the tooltip container.
- `--m3e-tooltip-min-width` — Minimum width of the tooltip.
- `--m3e-tooltip-max-width` — Maximum width of the tooltip.
- `--m3e-tooltip-min-height` — Minimum height of the tooltip container.
- `--m3e-tooltip-max-height` — Maximum height of the tooltip.
- `--m3e-tooltip-shape` — Border radius of the tooltip container.
- `--m3e-tooltip-container-color` — Background color of the tooltip.
- `--m3e-tooltip-supporting-text-color` — Text color of supporting text.
- `--m3e-tooltip-supporting-text-font-size` — Font size of supporting text.
- `--m3e-tooltip-supporting-text-font-weight` — Font weight of supporting text.
- `--m3e-tooltip-supporting-text-line-height` — Line height of supporting text.
- `--m3e-tooltip-supporting-text-tracking` — Letter spacing of supporting text.

</details>

