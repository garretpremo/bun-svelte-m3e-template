import type { LoadedElement } from "../cem-types";
import { attrPropName, componentName, slotPropName } from "../naming";
import { cleanDescription, extractIdentifiers, inferType } from "../render-types";

export interface RenderedFile {
  componentName: string;
  filename: string;
  classification: "passive" | "property-driven" | "selection-managed";
  contents: string;
}

/** A writable property (from an attribute or a public field) bound + property-synced. */
export interface ManagedProp {
  /** Original CEM name, used as the DOM property key. */
  name: string;
  /** Rendered TS type for the prop. */
  type: string;
  description?: string;
}

export interface WrapperOptions {
  classification?: RenderedFile["classification"];
  /** Writable props driven as DOM properties (not attributes) after upgrade. */
  managed?: ManagedProp[];
  /** Runtime sync helper used in the `$effect` for each managed prop. */
  syncFn?: "syncProperty" | "syncManagedProperty";
  /** Wrap change/input handlers to drop spurious null reads (selection managers). */
  dropNullChange?: boolean;
}

/**
 * Render a Svelte 5 wrapper for one custom element. The passive archetype passes
 * no managed props; property-driven and selection-managed supply `managed` + a
 * `syncFn` (and `dropNullChange` for selection managers).
 */
export function renderWrapper(el: LoadedElement, opts: WrapperOptions = {}): RenderedFile {
  const { pkg, tag, className, declaration: d } = el;
  const classification = opts.classification ?? "passive";
  const managed = opts.managed ?? [];
  const managedSet = new Set(managed.map((m) => m.name));
  const attrs = d.attributes ?? [];
  const slots = d.slots ?? [];
  const events = (d.events ?? []).filter((e) => !!e.name);

  // Managed names never render as attributes (they're driven as properties).
  const plainAttrs = attrs.filter((a) => !managedSet.has(a.name));

  const propNameOf = (name: string) => attrPropName(name);
  const reservedNames = new Set([
    ...plainAttrs.map((a) => propNameOf(a.name)),
    ...managed.map((m) => propNameOf(m.name)),
  ]);
  const slotNames = slots.map((s) => slotPropName(s.name, reservedNames));

  const extraIdents = new Set<string>();
  for (const a of plainAttrs) {
    for (const id of extractIdentifiers(inferType(a))) extraIdents.add(id);
  }

  // --- Props interface ---
  const propLines: string[] = [];
  for (const a of plainAttrs) {
    if (a.description) {
      propLines.push(`    /** ${cleanDescription(a.description)} */`);
    }
    propLines.push(`    ${propNameOf(a.name)}?: ${inferType(a)};`);
  }
  for (const m of managed) {
    if (m.description) {
      propLines.push(`    /** ${cleanDescription(m.description)} */`);
    }
    propLines.push(`    ${propNameOf(m.name)}?: ${m.type};`);
  }
  for (let i = 0; i < slots.length; i++) {
    const s = slots[i]!;
    if (s.description) {
      propLines.push(`    /** ${cleanDescription(s.description)} */`);
    }
    propLines.push(`    ${slotNames[i]!}?: Snippet;`);
  }
  for (const e of events) {
    const ty = e.type?.text ?? "Event";
    if (e.description) {
      propLines.push(`    /** ${cleanDescription(e.description)} */`);
    }
    propLines.push(`    on${e.name}?: (e: ${ty}) => void;`);
  }
  propLines.push(`    element?: ${className};`);

  // --- destructure ---
  const destructParts: string[] = [];
  for (const a of plainAttrs) destructParts.push(propNameOf(a.name));
  for (const m of managed) {
    const fallback = m.type === "boolean" ? "false" : "undefined";
    destructParts.push(`${propNameOf(m.name)} = $bindable(${fallback})`);
  }
  destructParts.push(...slotNames);
  destructParts.push(...events.map((e) => `on${e.name}`));
  destructParts.push("element = $bindable()");

  // --- element attributes (managed props are NOT rendered as attributes) ---
  const elementAttrs: string[] = [];
  for (const a of plainAttrs) {
    const name = propNameOf(a.name);
    const ty = inferType(a);
    if (ty === "boolean") {
      elementAttrs.push(`${a.name}={${name} || undefined}`);
    } else if (a.name === name) {
      elementAttrs.push(`{${name}}`);
    } else {
      elementAttrs.push(`${a.name}={${name}}`);
    }
  }
  for (const e of events) {
    if (opts.dropNullChange && (e.name === "change" || e.name === "input")) {
      elementAttrs.push(`on${e.name}={dropNullChange(on${e.name})}`);
    } else {
      elementAttrs.push(`on${e.name}={on${e.name}}`);
    }
  }

  // --- slot projection (inline; a `slot=` attr must descend from the element) ---
  const slotBody = slots
    .map((s, i) =>
      s.name === ""
        ? ""
        : `  {#if ${slotNames[i]}}<div slot="${s.name}" style="display:contents">{@render ${slotNames[i]}()}</div>{/if}`,
    )
    .filter(Boolean)
    .join("\n");
  const defaultSlot = slots.some((s) => s.name === "") ? "  {@render children?.()}" : "";

  // --- imports ---
  const importLines: string[] = [];
  if (slots.length > 0) importLines.push(`  import type { Snippet } from "svelte";`);
  importLines.push(`  import { browser } from "../runtime/env";`);
  if (opts.syncFn) {
    importLines.push(`  import { ${opts.syncFn} } from "../runtime/upgrade";`);
  }
  importLines.push(`  if (browser) void import("${pkg}");`);
  importLines.push(`  import type { ${className} } from "${pkg}";`);
  if (extraIdents.size > 0) {
    importLines.push(`  import type { ${[...extraIdents].join(", ")} } from "${pkg}";`);
  }

  // --- script body ---
  const hasNullableEvent = events.some((e) => e.name === "change" || e.name === "input");
  const dropNullHelper =
    opts.dropNullChange && hasNullableEvent
      ? `
  function dropNullChange<E extends Event>(
    handler?: (e: E) => void,
  ): ((e: E) => void) | undefined {
    if (!handler) return undefined;
    return (e: E) => {
      const v = (e.target as { value?: unknown } | null)?.value;
      if (v == null) return;
      handler(e);
    };
  }`
      : "";

  // Only push the property when defined, so an unset bindable never clobbers the
  // element's own default (e.g. a select's computed value).
  const effects = managed
    .map(
      (m) =>
        `  $effect(() => {\n    if (${propNameOf(m.name)} !== undefined) ${opts.syncFn}(element, "${m.name}", ${propNameOf(m.name)});\n  });`,
    )
    .join("\n");

  const scriptBodyParts = [`  let { ${destructParts.join(", ")} }: Props = $props();`];
  if (dropNullHelper) scriptBodyParts.push(dropNullHelper);
  if (effects) scriptBodyParts.push(`\n${effects}`);

  const openTagLines = ["bind:this={element}", ...elementAttrs].map((s) => `  ${s}`).join("\n");
  const body = [slotBody, defaultSlot].filter(Boolean).join("\n");

  const contents = `<!-- @generated by scripts/generate.ts — do not edit -->
<script lang="ts">
${importLines.join("\n")}

  interface Props {
${propLines.join("\n")}
  }

${scriptBodyParts.join("\n")}
</script>

<${tag}
${openTagLines}
>
${body}
</${tag}>
`;

  return {
    componentName: componentName(tag),
    filename: `${componentName(tag)}.svelte`,
    classification,
    contents,
  };
}
