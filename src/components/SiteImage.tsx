import { existsSync } from "node:fs";
import { join } from "node:path";
import imageMap from "../../scripts/image-map.json";
import { FallbackImage, type Candidate } from "./FallbackImage";

const ORIGINAL = "https://tmsynergy.com/assets/";

/**
 * Picks the best source for an image, in this order:
 * 1. the local file in /public/images (optimised by Next.js), if it has been copied in;
 * 2. the photo's original location (the current tmsynergy.com, or Unsplash for ICT);
 * 3. the `fallback` stock photo of the same subject.
 * The browser moves down the list if a source fails, so no section shows a broken image.
 */
export function SiteImage({
  src,
  alt,
  fallback,
  sizes,
  priority = false,
  eager = false,
  className = "",
}: {
  src: string;
  alt: string;
  fallback?: { src: string; alt: string };
  sizes: string;
  priority?: boolean;
  eager?: boolean;
  className?: string;
}) {
  const candidates: Candidate[] = [];
  if (existsSync(join(process.cwd(), "public", src))) {
    candidates.push({ src, alt, optimized: true });
  }
  const key = src.replace(/^\/images\//, "") as keyof typeof imageMap;
  const original = imageMap[key]?.[0];
  if (original) {
    candidates.push({ src: original.startsWith("http") ? original : ORIGINAL + original, alt, optimized: false });
  }
  if (fallback) candidates.push({ ...fallback, optimized: false });

  return <FallbackImage candidates={candidates} sizes={sizes} priority={priority} eager={eager} className={className} />;
}
