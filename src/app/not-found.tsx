import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="blueprint bg-ink text-white">
      <div className="container-x py-32 lg:py-40">
        <p className="font-label text-sm font-semibold uppercase tracking-[0.22em] text-brand">Error 404</p>
        <h1 className="mt-6 max-w-3xl text-4xl font-extrabold sm:text-6xl">Page not found</h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
          Go back to the homepage or view our services below.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className="btn-primary">Homepage</Link>
          <Link href="/contact" className="btn-ghost">Contact us</Link>
        </div>
        <ul className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li key={s.slug}>
              <Link href={s.path} className="text-white/70 underline-offset-4 hover:text-white hover:underline">
                {s.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
