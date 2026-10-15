import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Arrow, CtaBand, PageHero, Photo, SectionHeading } from "@/components/ui";
import { webPageSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { consulting, services } from "@/lib/services";

const title = "Oil & Gas Engineering Services in South Sudan";
const description =
  "Plant automation, power transmission and distribution, E&I engineering, metering, testing and measurement, and ICT services from T&M Synergy in South Sudan.";

export const metadata = pageMeta({ title, description, path: "/services" });

export default function ServicesIndex() {
  return (
    <>
      <JsonLd data={webPageSchema("CollectionPage", "/services", title, description)} />
      <PageHero
        eyebrow="Services"
        title="Oil and gas engineering services in South Sudan"
        lead="T&M Synergy Limited offers a comprehensive suite of services in the oil and gas industry."
      />

      <section className="py-24 lg:py-32">
        <div className="container-x space-y-24 lg:space-y-32">
          {services.map((s, i) => (
            <article key={s.slug} className="grid items-center gap-12 lg:grid-cols-12">
              <div className={`lg:col-span-5 ${i % 2 ? "lg:order-2 lg:col-start-8" : ""}`}>
                <Photo {...s.image} sizes="(min-width: 1024px) 40vw, 100vw" mark={i === 0} />
              </div>
              <div className={`lg:col-span-6 ${i % 2 ? "lg:order-1" : "lg:col-start-7"}`}>
                <p className="font-label text-xs font-semibold tracking-[0.2em] text-brand-deep">
                  {String(i + 1).padStart(2, "0")} / {s.code}
                </p>
                <h2 className="mt-4 text-3xl font-extrabold text-ink sm:text-4xl">
                  <Link href={s.path} className="hover:text-brand-deep">{s.name}</Link>
                </h2>
                <p className="mt-5 text-lg leading-8 text-steel">{s.summary}</p>
                <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {s.groups.flatMap((g) => g.items).slice(0, 6).map((c) => (
                    <li key={c.title} className="flex gap-3 text-ink">
                      <span aria-hidden className="mt-3 h-[2px] w-3 shrink-0 bg-brand" />
                      {c.title}
                    </li>
                  ))}
                </ul>
                <Link href={s.path} className="btn-dark mt-10">
                  {s.name} <Arrow />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="blueprint-light border-y border-line bg-paper py-24 lg:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Consulting" title="Professional consulting services" />
          </div>
          <div className="space-y-6 text-lg leading-8 text-steel lg:col-span-6 lg:col-start-7">
            <p>{consulting}</p>
            <p>
              We offer expert consulting services to help clients navigate the complexities of the oil and gas
              industry, providing strategic advice and guidance to optimize their operations.
            </p>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
