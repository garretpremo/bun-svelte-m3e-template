import { browser } from "$app/environment";

export type ThemeScheme = "light" | "dark";

export type ThemePreset = {
  name: string;
  color: string;
  blurb: string;
};

export const PRESETS: readonly ThemePreset[] = [
  { name: "Indigo", color: "#4A90D9", blurb: "Calm, default-friendly blue." },
  { name: "Sage", color: "#7CA982", blurb: "Muted herbal green." },
  { name: "Crimson", color: "#D9534F", blurb: "Warm, attention-grabbing red." },
  { name: "Sunset", color: "#F4A261", blurb: "Soft amber-orange." },
  { name: "Plum", color: "#8E44AD", blurb: "Rich, regal purple." },
  { name: "Slate", color: "#546E7A", blurb: "Cool blue-gray, professional." },
  { name: "Citrus", color: "#E9C46A", blurb: "Bright yellow with a kick." },
  { name: "Teal", color: "#26A69A", blurb: "Vivid sea-green." },
];

const STORAGE_KEY = "app-theme";
const DEFAULT_COLOR = "#4A90D9";
const DEFAULT_SCHEME: ThemeScheme = "light";

type Persisted = { color: string; scheme: ThemeScheme };

function hydrate(): Persisted {
  if (!browser) return { color: DEFAULT_COLOR, scheme: DEFAULT_SCHEME };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { color: DEFAULT_COLOR, scheme: DEFAULT_SCHEME };
    const parsed = JSON.parse(raw) as Partial<Persisted>;
    return {
      color: typeof parsed.color === "string" ? parsed.color : DEFAULT_COLOR,
      scheme: parsed.scheme === "dark" ? "dark" : "light",
    };
  } catch {
    return { color: DEFAULT_COLOR, scheme: DEFAULT_SCHEME };
  }
}

const initial = hydrate();

export const themeState = $state({
  color: initial.color,
  scheme: initial.scheme,
});

function persist() {
  if (!browser) return;
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ color: themeState.color, scheme: themeState.scheme }),
    );
  } catch {
    // quota / private mode — fail silently
  }
}

export function setPreset(preset: ThemePreset) {
  themeState.color = preset.color;
  persist();
}

export function setScheme(scheme: ThemeScheme) {
  themeState.scheme = scheme;
  persist();
}

export function isActivePreset(preset: ThemePreset): boolean {
  return themeState.color.toLowerCase() === preset.color.toLowerCase();
}
