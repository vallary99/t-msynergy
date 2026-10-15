import Link from "next/link";
import type { ReactNode } from "react";
import type { Service } from "@/lib/services";
import { company } from "@/lib/site";
import { SiteImage } from "./SiteImage";

export function SectionHeading({
  eyebrow,
  title,
  lead,
  as: As = "h2",
  dark = false,
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  as?: "h1" | "h2";
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <p className={`eyebrow flex items-center gap-3 ${dark ? "!text-brand" : ""}`}>
        <span aria-hidden className="h-px w-8 bg-brand" />
        {eyebrow}
      </p>
      <As className={`mt-5 text-3xl font-extrabold leading-[1.1] sm:text-4xl lg:text-[44px] ${dark ? "text-white" : "text-ink"}`}>
        {title}
      </As>
      {lead ? <p className={`mt-6 text-lg leading-8 ${dark ? "text-white/70" : "text-steel"}`}>{lead}</p> : null}
    </div>
  );
}

/** Photo with an engineering-drawing corner mark. Always requires alt text. */
export function Photo({
  src,
  alt,
  fallback,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  className = "aspect-[4/3]",
  mark = true,
}: {
  src: string;
  alt: string;
  fallback?: { src: string; alt: string };
  sizes?: string;
  priority?: boolean;
  className?: string;
  mark?: boolean;
}) {
  return (
    <figure className={`relative ${className}`}>
      <div className="absolute inset-0 overflow-hidden bg-paper">
        <SiteImage src={src} alt={alt} fallback={fallback} sizes={sizes} priority={priority} className="object-cover" />
      </div>
      {mark ? (
        <>
          <span aria-hidden className="absolute -top-3 -left-3 h-10 w-10 border-t-4 border-l-4 border-brand" />
          <span aria-hidden className="absolute -right-3 -bottom-3 h-10 w-10 border-r-4 border-b-4 border-ink" />
        </>
      ) : null}
    </figure>
  );
}

export function ServiceCard({ s, index }: { s: Service; index: number }) {
  return (
    <Link
      href={s.path}
      className="group relative flex h-full flex-col border-t-2 border-ink bg-white pt-8 pb-2 transition-colors hover:border-brand"
    >
      <div className="flex items-center justify-between font-label text-xs font-semibold tracking-[0.2em] text-steel">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <span className="border border-line px-2 py-1 text-ink group-hover:border-brand group-hover:text-brand-deep">{s.code}</span>
      </div>
      <h3 className="mt-6 text-2xl font-extrabold text-ink">{s.name}</h3>
      <p className="mt-4 flex-1 leading-7 text-steel">{s.summary}</p>
      <span className="mt-8 inline-flex items-center gap-2 font-label text-xs font-semibold uppercase tracking-[0.2em] text-ink group-hover:text-brand-deep">
        View service <Arrow />
      </span>
    </Link>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 20 10" className={`h-2.5 w-5 transition-transform group-hover:translate-x-1 ${className}`} fill="none">
      <path d="M0 5h18M14 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function FaqList({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {faqs.map((f) => (
        <details key={f.q} className="group py-6">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 [&::-webkit-details-marker]:hidden">
            <h3 className="font-label text-lg font-semibold text-ink">{f.q}</h3>
            <span aria-hidden className="relative mt-2 h-4 w-4 shrink-0">
              <span className="absolute top-1/2 left-0 h-0.5 w-4 -translate-y-1/2 bg-brand" />
              <span className="absolute top-0 left-1/2 h-4 w-0.5 -translate-x-1/2 bg-brand transition-transform group-open:scale-y-0" />
            </span>
          </summary>
          <p className="mt-4 max-w-3xl leading-8 text-steel">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function CtaBand({
  title = "Get in touch for a project inquiry",
  text = "You can contact us through the contact form on our website, via email, or by phone.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand text-white">
      <div aria-hidden className="blueprint absolute inset-0 opacity-60" />
      <div className="container-x relative grid items-center gap-10 py-20 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-7">
          <h2 className="text-3xl font-extrabold sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/90">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
          <Link href="/contact" className="btn justify-center bg-ink whitespace-nowrap text-white hover:bg-white hover:text-ink">
            Contact us <Arrow />
          </Link>
          <a href={company.phoneHref} className="btn justify-center border border-white/60 whitespace-nowrap text-white hover:bg-white hover:text-ink">
            Call {company.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

/** Dark page header used on inner pages (no breadcrumbs, by request). */
export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="blueprint relative overflow-hidden bg-ink text-white">
      <FlowLine className="absolute right-0 bottom-0 hidden w-[620px] opacity-70 lg:block" />
      <div className="container-x relative py-24 lg:py-32">
        <p className="eyebrow flex items-center gap-3 !text-brand">
          <span aria-hidden className="h-px w-8 bg-brand" />
          {eyebrow}
        </p>
        <h1 className="mt-6 max-w-4xl text-4xl leading-[1.05] font-extrabold sm:text-5xl lg:text-6xl">{title}</h1>
        {lead ? <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">{lead}</p> : null}
        {children}
      </div>
    </section>
  );
}

/**
 * A simplified P&ID-style line: pipeline -> flow meter (FT) -> control valve -> transmitter loop.
 * Decorative; says "process engineering" at a glance.
 */
export function FlowLine({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 620 260" fill="none" className={className}>
      <g stroke="rgba(255,255,255,0.22)" strokeWidth="1.5">
        <path d="M0 200H130M190 200H330M380 200H620" />
        <path d="M160 200V120M160 90V60H300V120" strokeDasharray="4 5" />
        <path d="M355 175V140H470V200" strokeDasharray="4 5" />
      </g>
      {/* Flow meter */}
      <rect x="130" y="185" width="60" height="30" stroke="#ef1d04" strokeWidth="2" />
      <path d="M140 200h40" stroke="#ef1d04" strokeWidth="2" />
      {/* Instrument bubble FT */}
      <circle cx="160" cy="105" r="16" stroke="#ef1d04" strokeWidth="2" />
      <path d="M144 105h32" stroke="#ef1d04" strokeWidth="1" />
      <text x="160" y="101" textAnchor="middle" fontSize="9" fill="#fff" fontFamily="sans-serif">FT</text>
      <text x="160" y="115" textAnchor="middle" fontSize="8" fill="rgba(255,255,255,.6)" fontFamily="sans-serif">101</text>
      {/* Controller bubble */}
      <circle cx="300" cy="135" r="16" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
      <text x="300" y="139" textAnchor="middle" fontSize="9" fill="#fff" fontFamily="sans-serif">FIC</text>
      {/* Control valve (bowtie + actuator) */}
      <path d="M330 188l50 24v-24l-50 24z" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" />
      <path d="M355 200v-25M340 175h30" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" />
      {/* ESD bubble */}
      <rect x="455" y="120" width="30" height="30" stroke="#ef1d04" strokeWidth="2" transform="rotate(45 470 135)" />
      <text x="470" y="139" textAnchor="middle" fontSize="9" fill="#fff" fontFamily="sans-serif">ESD</text>
      {/* Flow arrow */}
      <path d="M560 200l-12-6v12z" fill="#ef1d04" />
    </svg>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-4">
      {items.map((i) => (
        <li key={i} className="flex gap-4 leading-7 text-ink">
          <span aria-hidden className="mt-3 h-[2px] w-4 shrink-0 bg-brand" />
          {i}
        </li>
      ))}
    </ul>
  );
}
