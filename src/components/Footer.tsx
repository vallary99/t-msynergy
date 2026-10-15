import Link from "next/link";
import { company, currentYear, fullAddress } from "@/lib/site";
import { services } from "@/lib/services";
import { Logo } from "./Header";

export function Footer() {
  return (
    <footer className="blueprint bg-ink text-white/70">
      <div className="container-x grid gap-14 py-20 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo dark large />
          <p className="mt-6 max-w-sm leading-7">
            E&amp;I Engineering Services, Metering, and EPCC Contractor. A proudly South Sudanese-owned company,
            incorporated in September 2012.
          </p>
          <address className="mt-8 space-y-2 not-italic">
            <p className="text-white">{company.name}</p>
            <p>{fullAddress}</p>
            <p>
              <a href={company.phoneHref} className="hover:text-white">{company.phone}</a>
            </p>
            <p>
              <a href={`mailto:${company.email}`} className="hover:text-white">{company.email}</a>
            </p>
          </address>
        </div>

        <div className="lg:col-span-4">
          <h2 className="font-label text-xs font-semibold uppercase tracking-[0.22em] text-brand">Services</h2>
          <ul className="mt-6 space-y-3">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={s.path} className="hover:text-white">{s.name}</Link>
              </li>
            ))}
            <li>
              <Link href="/products/safety-equipment" className="hover:text-white">Safety Signage &amp; Equipment</Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h2 className="font-label text-xs font-semibold uppercase tracking-[0.22em] text-brand">Company</h2>
          <ul className="mt-6 space-y-3">
            <li><Link href="/about" className="hover:text-white">About us</Link></li>
            <li><Link href="/projects" className="hover:text-white">Projects</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact us</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h2 className="font-label text-xs font-semibold uppercase tracking-[0.22em] text-brand">Follow</h2>
          <ul className="mt-6 space-y-3">
            <li>
              <a href={company.social.linkedin} target="_blank" rel="noopener" className="hover:text-white">LinkedIn</a>
            </li>
            <li>
              <a href={company.video} target="_blank" rel="noopener" className="hover:text-white">Watch video</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-6 text-sm sm:flex-row sm:justify-between">
          <p>© {currentYear} {company.name}. All Rights Reserved.</p>
          <p className="font-label text-[11px] uppercase tracking-[0.2em] text-white/50">Juba, South Sudan</p>
        </div>
      </div>
    </footer>
  );
}
