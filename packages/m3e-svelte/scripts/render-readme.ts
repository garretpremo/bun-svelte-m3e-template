import type { LoadedElement } from "./cem-types";
import { componentName } from "./naming";

export function renderReadme(elements: LoadedElement[]): string {
  const sorted = [...elements].sort((a, b) => a.tag.localeCompare(b.tag));
  const lines: string[] = [
    "# `@app/m3e-svelte`",
    "",
    "Generated Svelte 5 wrappers for the `@m3e/*` Material 3 web components.",
    "",
    "Run `bun run --filter @app/m3e-svelte generate` after upgrading any `@m3e/*` peer.",
    "",
    "```svelte",
    'import { Button, Dialog } from "@app/m3e-svelte";',
    "```",
    "",
    "## Components",
    "",
  ];
  for (const e of sorted) {
    const name = componentName(e.tag);
    lines.push(`### \`${name}\` — \`<${e.tag}>\` (\`${e.pkg}\`)`);
    lines.push("");
    if (e.declaration.description) {
      lines.push(e.declaration.description.split("\n")[0]!);
      lines.push("");
    }
    const attrs = e.declaration.attributes ?? [];
    if (attrs.length) {
      lines.push("| Attribute | Type | Default | Description |");
      lines.push("|---|---|---|---|");
      for (const a of attrs) {
        const desc = (a.description ?? "").replace(/\r?\n/g, " ").replace(/\|/g, "\\|");
        lines.push(
          `| \`${a.name}\` | \`${a.type?.text ?? "string"}\` | \`${a.default ?? ""}\` | ${desc} |`,
        );
      }
      lines.push("");
    }
    const slots = e.declaration.slots ?? [];
    if (slots.length) {
      lines.push(`**Slots:** ${slots.map((s) => `\`${s.name || "(default)"}\``).join(", ")}`);
      lines.push("");
    }
    const events = (e.declaration.events ?? []).filter((ev) => ev.name);
    if (events.length) {
      lines.push(`**Events:** ${events.map((ev) => `\`${ev.name}\``).join(", ")}`);
      lines.push("");
    }
    const css = e.declaration.cssProperties ?? [];
    if (css.length) {
      lines.push(`<details><summary>CSS custom properties (${css.length})</summary>`);
      lines.push("");
      for (const c of css) {
        lines.push(`- \`${c.name}\`${c.description ? ` — ${c.description}` : ""}`);
      }
      lines.push("");
      lines.push("</details>");
      lines.push("");
    }
  }
  return `${lines.join("\n")}\n`;
}
