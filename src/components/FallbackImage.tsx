"use client";

import Image from "next/image";
import { useCallback, useState } from "react";

export type Candidate = { src: string; alt: string; optimized: boolean };

/**
 * Tries each candidate in order and moves to the next if one fails to load, including
 * images that already failed before the page became interactive.
 * If none load (only possible for logos, which have no stock fallback), it renders nothing.
 */
export function FallbackImage({
  candidates,
  sizes,
  priority,
  eager = false,
  className = "",
}: {
  candidates: Candidate[];
  sizes: string;
  priority?: boolean;
  eager?: boolean;
  className?: string;
}) {
  const [i, setI] = useState(0);
  const next = useCallback(() => setI((n) => n + 1), []);

  // An image that errored during server-rendered load never fires React's onError,
  // so check its state as soon as the element is attached.
  const check = useCallback(
    (el: HTMLImageElement | null) => {
      if (el && el.complete && el.naturalWidth === 0 && el.currentSrc) next();
    },
    [next],
  );

  const c = candidates[i];
  if (!c) return null;

  if (c.optimized) {
    return (
      <Image
        key={c.src}
        ref={check}
        src={c.src}
        alt={c.alt}
        fill
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : eager ? "eager" : "lazy"}
        className={className}
        onError={next}
      />
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      key={c.src}
      ref={check}
      src={c.src}
      alt={c.alt}
      loading={priority || eager ? "eager" : "lazy"}
      decoding="async"
      referrerPolicy="no-referrer"
      onError={next}
      className={`absolute inset-0 h-full w-full ${className}`}
    />
  );
}
