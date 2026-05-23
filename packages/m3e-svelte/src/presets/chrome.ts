import "../generated/styles.css";

// Eager-load the elements that appear on every page's chrome, so they upgrade
// before first paint. Everything else lazy-imports inside its own wrapper.
export const chrome = Promise.all([
  import("@m3e/theme"),
  import("@m3e/app-bar"),
  import("@m3e/icon"),
  import("@m3e/icon-button"),
  import("@m3e/divider"),
  import("@m3e/drawer-container"),
  import("@m3e/nav-menu"),
]);
