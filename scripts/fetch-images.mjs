// Copies every photo from the current tmsynergy.com site (plus three free Unsplash
// photos for ICT) into /public/images
// with descriptive, SEO-friendly file names. Runs automatically before `npm run dev`
// and `npm run build`; files already present are skipped, so it only downloads once.
//
// If the old server is unreachable (or has already been replaced), copy the images in by
// hand instead: see "Images" in README.md for the file-name map.

import { mkdir, readFile, stat, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "images");
const BASE = "https://tmsynergy.com/assets";


// local file name  ->  path(s) on the current website (first that works wins)
const IMAGE_MAP = JSON.parse(await readFile(join(dirname(fileURLToPath(import.meta.url)), "image-map.json"), "utf8"));
const HEADERS = {
  // The old server rejects requests that don't look like a browser.
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36",
  Accept: "image/avif,image/webp,image/png,image/jpeg,*/*;q=0.8",
  Referer: "https://tmsynergy.com/",
};

const exists = (p) => stat(p).then((s) => s.size > 0, () => false);

async function download(paths) {
  for (const p of paths) {
    try {
      const url = p.startsWith("http") ? p : `${BASE}/${p}`;
      const res = await fetch(url, { headers: HEADERS, signal: AbortSignal.timeout(20000) });
      const type = res.headers.get("content-type") || "";
      if (res.ok && type.startsWith("image/")) return Buffer.from(await res.arrayBuffer());
    } catch {
      /* try the next path */
    }
  }
  return null;
}

let ok = 0;
const missing = [];
for (const [local, paths] of Object.entries(IMAGE_MAP)) {
  const dest = join(ROOT, local);
  if (await exists(dest)) {
    ok++;
    continue;
  }
  const buf = await download(paths);
  if (buf) {
    await mkdir(dirname(dest), { recursive: true });
    await writeFile(dest, buf);
    ok++;
  } else {
    missing.push(`${local}  <-  ${paths[0].startsWith("http") ? paths[0] : `${BASE}/${paths[0]}`}`);
  }
}

console.log(`[images] ${ok}/${Object.keys(IMAGE_MAP).length} images in public/images`);
if (missing.length) {
  console.warn(`[images] Could not download ${missing.length} image(s). Copy them in by hand:\n  ${missing.join("\n  ")}`);
}
// Never fail the build because of images.
process.exit(0);
