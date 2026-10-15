import Link from "next/link";
import { company, img, nav } from "@/lib/site";
import { services } from "@/lib/services";
import { SiteImage } from "./SiteImage";

export function Logo({ dark = false, large = false }: { dark?: boolean; large?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label={`${company.name} home`}>
      <span className={`relative block shrink-0 overflow-hidden bg-white ring-1 ring-line ${large ? "h-20 w-20" : "h-14 w-14"}`}>
        <SiteImage src={img.logo.src} alt={img.logo.alt} sizes="80px" className="object-contain p-1" priority />
      </span>
      <span className="leading-none">
        <span className={`block font-display font-extrabold tracking-tight ${large ? "text-2xl" : "text-xl"} ${dark ? "text-white" : "text-ink"}`}>
          T&amp;M Synergy
        </span>
        <span className={`mt-1.5 block font-label text-[11px] font-medium uppercase tracking-[0.2em] ${dark ? "text-white/60" : "text-steel"}`}>
          Limited · Juba
        </span>
      </span>
    </Link>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <div className="container-x flex h-24 items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="font-label text-[13px] font-medium uppercase tracking-wider text-ink/80 transition-colors hover:text-brand"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contact" className="btn-primary hidden sm:inline-flex">
            Project inquiry
          </Link>

          {/* Mobile menu: no JavaScript needed */}
          <details className="group relative lg:hidden">
            <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center border border-line [&::-webkit-details-marker]:hidden">
              <span className="sr-only">Open menu</span>
              <span aria-hidden className="flex w-5 flex-col gap-1.5">
                <span className="h-0.5 w-full bg-ink" />
                <span className="h-0.5 w-full bg-ink" />
                <span className="h-0.5 w-3 bg-brand" />
              </span>
            </summary>
            <div className="fixed inset-x-0 top-24 bottom-0 overflow-y-auto border-t border-line bg-white">
              <div className="container-x py-8">
                <p className="eyebrow mb-4">Services</p>
                <ul className="mb-8 space-y-3">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link href={s.path} className="font-display text-lg font-bold text-ink">
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <p className="eyebrow mb-4">Company</p>
                <ul className="mb-10 space-y-3">
                  {nav.slice(1).map((n) => (
                    <li key={n.href}>
                      <Link href={n.href} className="font-display text-lg font-bold text-ink">
                        {n.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-primary w-full justify-center">
                  Project inquiry
                </Link>
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
