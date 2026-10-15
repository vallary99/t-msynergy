import type { MetadataRoute } from "next";
import { safetyProduct, services } from "@/lib/services";
import { SITE_URL, img } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const page = (path: string, priority: number, images?: string[]) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "monthly" as const,
    priority,
    ...(images ? { images: images.map((i) => `${SITE_URL}${i}`) } : {}),
  });

  return [
    page("/", 1, [img.plantAutomation.src]),
    page("/services", 0.9),
    ...services.map((s) => page(s.path, 0.9, [s.image.src, ...(s.gallery ?? []).map((g) => g.src)])),
    page(safetyProduct.path, 0.7, [img.safety1.src, img.safety2.src]),
    page("/projects", 0.8),
    page("/about", 0.7),
    page("/contact", 0.8),
  ];
}
