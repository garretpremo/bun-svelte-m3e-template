import type { CemAttribute, LoadedElement } from "../cem-types";
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
  /** Skip null reads when syncing managed props back from the element. */
  dropNullChange?: boolean;
}

/**
 * Render a Svelte 5 wrapper for one custom element.
 *
 * - Passive: plain pass-through.
 * - Property-driven / selection-managed: `managed` props are bound, pushed to the
 *   element via `syncFn` after upgrade, and read back from change/input events so
 *   `bind:` is two-way. `dropNullChange` skips the null flicker a SelectionManager
 *   emits between deselect and reselect.
 *
 * Every wrapper spreads `...rest` onto the element so class, style, id, and
 * aria/data attributes pass straight through.
 */
export function renderWrapper(el: LoadedElement, opts: WrapperOptions = {}): RenderedFile {
  const { pkg, tag, className, declaration: d, exportedNames } = el;
  const classification = opts.classification ?? "passive";
  const managed = opts.managed ?? [];
  const managedSet = new Set(managed.map((m) => m.name));
  const attrs = d.attributes ?? [];
  const slots = d.slots ?? [];
  const events = (d.events ?? []).filter((e) => !!e.name);

  // Some element classes aren't re-exported under their CEM name; fall back to
  // HTMLElement for the `element` bindable type rather than import a missing name.
  const classExported = exportedNames.has(className);
  const elementType = classExported ? className : "HTMLElement";

  // Managed names never render as attributes (they're driven as properties).
  const plainAttrs = attrs.filter((a) => !managedSet.has(a.name));

  const propNameOf = (name: string) => attrPropName(name);
  const reservedNames = new Set([
    ...plainAttrs.map((a) => propNameOf(a.name)),
    ...managed.map((m) => propNameOf(m.name)),
  ]);
  const slotNames = slots.map((s) => slotPropName(s.name, reservedNames));

  // Primitive/literal types are emitted verbatim. A type that names other types
  // is only kept (and imported) when every referenced name is actually exported
  // by the package; otherwise we degrade to `string` so the wrapper compiles.
  const typeImports = new Set<string>();
  const attrType = (a: CemAttribute): string => {
    const t = inferType(a);
    const ids = extractIdentifiers(t);
    if (ids.length === 0) return t;
    if (ids.every((id) => exportedNames.has(id))) {
      for (const id of ids) typeImports.add(id);
      return t;
    }
    return "string";
  };

  // --- Props interface ---
  const propLines: string[] = [];
  for (const a of plainAttrs) {
    if (a.description) propLines.push(`    /** ${cleanDescription(a.description)} */`);
    propLines.push(`    ${propNameOf(a.name)}?: ${attrType(a)};`);
  }
  for (const m of managed) {
    if (m.description) propLines.push(`    /** ${cleanDescription(m.description)} */`);
    propLines.push(`    ${propNameOf(m.name)}?: ${m.type};`);
  }
  for (let i = 0; i < slots.length; i++) {
    const s = slots[i]!;
    if (s.description) propLines.push(`    /** ${cleanDescription(s.description)} */`);
    propLines.push(`    ${slotNames[i]!}?: Snippet;`);
  }
  for (const e of events) {
    const ty = e.type?.text ?? "Event";
    if (e.description) propLines.push(`    /** ${cleanDescription(e.description)} */`);
    propLines.push(`    on${e.name}?: (e: ${ty}) => void;`);
  }
  propLines.push(`    element?: ${elementType};`);
  // Forward class/style/id/aria-*/data-* and any other native attribute.
  propLines.push("    // biome-ignore lint/suspicious/noExplicitAny: pass-through attrs");
  propLines.push("    [key: string]: any;");

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
  destructParts.push("...rest");

  // --- readback (element -> bindable) so `bind:` is two-way for form controls ---
  const hasReadback =
    managed.length > 0 && events.some((e) => e.name === "change" || e.name === "input");
  const readbackLines = managed.map((m) => {
    const p = propNameOf(m.name);
    const read = `node["${m.name}"]`;
    if (opts.dropNullChange) {
      return `    { const next = ${read}; if (next != null) ${p} = next as ${m.type}; }`;
    }
    return `    ${p} = ${read} as ${m.type};`;
  });

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
    const ty = e.type?.text ?? "Event";
    if (hasReadback && (e.name === "change" || e.name === "input")) {
      elementAttrs.push(`on${e.name}={(e: ${ty}) => { syncFromDom(); on${e.name}?.(e); }}`);
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
  if (opts.syncFn) importLines.push(`  import { ${opts.syncFn} } from "../runtime/upgrade";`);
  importLines.push(`  if (browser) void import("${pkg}");`);
  const typeNames = [
    ...(classExported ? [className] : []),
    ...[...typeImports].filter((id) => id !== className),
  ];
  if (typeNames.length > 0) {
    importLines.push(`  import type { ${typeNames.join(", ")} } from "${pkg}";`);
  }

  // --- script body ---
  const effects = managed
    .map(
      (m) =>
        `  $effect(() => {\n    if (${propNameOf(m.name)} !== undefined) ${opts.syncFn}(element, "${m.name}", ${propNameOf(m.name)});\n  });`,
    )
    .join("\n");

  const readbackFn = hasReadback
    ? `
  function syncFromDom() {
    if (!element) return;
    const node = element as unknown as Record<string, unknown>;
${readbackLines.join("\n")}
  }`
    : "";

  const scriptBodyParts = [`  let { ${destructParts.join(", ")} }: Props = $props();`];
  if (readbackFn) scriptBodyParts.push(readbackFn);
  if (effects) scriptBodyParts.push(`\n${effects}`);

  const openTagLines = ["bind:this={element}", "{...rest}", ...elementAttrs]
    .map((s) => `  ${s}`)
    .join("\n");
  const body = [slotBody, defaultSlot].filter(Boolean).join("\n");

  // Forwarding a click handler to a custom element trips two a11y rules that
  // don't apply to a pass-through wrapper; silence them on the element only.
  const ignoreComment = events.some((e) => e.name === "click")
    ? "<!-- svelte-ignore a11y_click_events_have_key_events -->\n<!-- svelte-ignore a11y_no_static_element_interactions -->\n"
    : "";

  const contents = `<!-- @generated by scripts/generate.ts — do not edit -->
<script lang="ts">
${importLines.join("\n")}

  interface Props {
${propLines.join("\n")}
  }

${scriptBodyParts.join("\n")}
</script>

${ignoreComment}<${tag}
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
