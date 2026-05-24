import { STATIC_BUILD } from "./static-build";

export type NavItem = { href: string; label: string; icon: string };

export const navItems: NavItem[] = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/showcase/theme", label: "Theme", icon: "format_paint" },
  { href: "/showcase/shapes", label: "Shapes", icon: "category" },
  { href: "/showcase/morph", label: "Morph", icon: "animation" },
  { href: "/showcase/components", label: "Components", icon: "widgets" },
  { href: "/showcase/suite", label: "Suite", icon: "dashboard" },
  ...(STATIC_BUILD ? [] : [{ href: "/showcase/notes", label: "Notes", icon: "edit_note" }]),
];
