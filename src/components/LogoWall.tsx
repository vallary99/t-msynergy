import type { Img } from "@/lib/site";
import { SiteImage } from "./SiteImage";
import { SectionHeading } from "./ui";

/**
 * Continuously scrolling logo strip (CSS only, no JavaScript).
 * - Every logo is in the HTML once for search engines and screen readers; the duplicate
 *   set that makes the loop seamless is hidden from assistive tech.
 * - Pauses on hover/focus. With "reduce motion" switched on it becomes a static, wrapping row.
 * - A logo that fails to load is simply hidden.
 */
export function LogoWall({
  eyebrow,
  title,
  items,
  reverse = false,
  heading = true,
}: {
  eyebrow: string;
  title: string;
  items: Img[];
  reverse?: boolean;
  heading?: boolean;
}) {
  const duration = `${Math.max(items.length * 4, 24)}s`;
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="logo-row flex shrink-0 items-center gap-6 pr-6">
      {items.map((c, i) => (
        <li
          key={`${c.src}-${i}`}
          className="relative h-24 w-44 shrink-0 border border-line bg-white sm:h-28 sm:w-52"
        >
          <span className="absolute inset-5 block">
            <SiteImage
              src={c.src}
              alt={hidden ? "" : c.alt}
              sizes="208px"
              eager
              className="object-contain"
            />
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="logo-wall">
      {heading ? <SectionHeading eyebrow={eyebrow} title={title} /> : null}
      <div
        className="logo-marquee group relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]"
        style={{ ["--marquee-duration" as string]: duration }}
      >
        <div className={`logo-track flex w-max ${reverse ? "logo-track-reverse" : ""}`}>
          {row(false)}
          {row(true)}
        </div>
      </div>
    </div>
  );
}
