import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { classify } from "./classify";
import { generateOne } from "./generate-one";
import { listPeerPackages, loadManifests } from "./load-manifests";
import { renderIndex } from "./render-index";
import { renderReadme } from "./render-readme";
import { renderStyles } from "./render-styles";

const here = dirname(fileURLToPath(import.meta.url));
const pkgRoot = resolve(here, "..");
const generatedDir = resolve(pkgRoot, "src/generated");

function main() {
  const peers = listPeerPackages(resolve(pkgRoot, "package.json"));
  const elements = loadManifests(peers);
  if (elements.length === 0) {
    throw new Error("[m3e-svelte] no elements discovered — is the package installed?");
  }

  rmSync(generatedDir, { recursive: true, force: true });
  mkdirSync(generatedDir, { recursive: true });

  const manifest: Record<string, { package: string; className: string; classification: string }> =
    {};

  for (const el of elements) {
    const out = generateOne(el);
    writeFileSync(resolve(generatedDir, out.filename), out.contents, "utf8");
    manifest[el.tag] = {
      package: el.pkg,
      className: el.className,
      classification: classify(el.tag, el.declaration.attributes ?? []),
    };
  }

  writeFileSync(
    resolve(generatedDir, "manifest.json"),
    `${JSON.stringify(manifest, null, 2)}\n`,
    "utf8",
  );
  writeFileSync(resolve(generatedDir, "styles.css"), renderStyles(elements), "utf8");
  writeFileSync(resolve(generatedDir, ".gitattributes"), "* linguist-generated=true\n", "utf8");
  writeFileSync(resolve(pkgRoot, "src/index.ts"), renderIndex(elements), "utf8");
  writeFileSync(resolve(pkgRoot, "README.md"), renderReadme(elements), "utf8");

  console.log(`[m3e-svelte] generated ${elements.length} wrappers across ${peers.length} packages`);
}

main();
