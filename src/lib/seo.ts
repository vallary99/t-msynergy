import type { Metadata } from "next";
import { SITE_URL, company } from "./site";

/** Per-page metadata with a self-referencing canonical and matching OG/Twitter tags. */
export function pageMeta({
  title,
  description,
  path,
  image,
  absoluteTitle = false,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  absoluteTitle?: boolean;
  type?: "website" | "article";
}): Metadata {
  const url = `${SITE_URL}${path}`;
  // Fall back to the generated brand card (app/opengraph-image.tsx) when a page has no photo.
  const ogImage = image ?? `${SITE_URL}/opengraph-image`;
  const fullTitle = absoluteTitle ? title : `${title} | ${company.shortName}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      url,
      title: fullTitle,
      description,
      siteName: company.name,
      locale: "en_GB",
      images: [{ url: ogImage, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}
