import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { Arrow, CtaBand, PageHero, Photo, SectionHeading } from "./ui";
import { serviceSchema } from "@/lib/schema";
import { getService } from "@/lib/services";
import { pageMeta } from "@/lib/seo";

export function serviceMetadata(slug: string) {
  const s = getService(slug);
  return pageMeta({ title: s.metaTitle, description: s.metaDescription, path: s.path, image: s.image.src });
}

export function ServicePage({ slug }: { slug: string }) {
  const s = getService(slug);
  const related = s.related.map(getService);

  return (
    <>
      <JsonLd data={serviceSchema(s)} />

      <PageHero eyebrow={`Services · ${s.code}`} title={s.h1} lead={s.summary}>
        <Link href="/contact" className="btn-primary mt-10">
          Project inquiry <Arrow />
        </Link>
      </PageHero>

      {/* Overview */}
      <section className="py-24 lg:py-32">
        <div className="container-x grid items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            {s.intro.length ? (
              <div className="space-y-6 text-lg leading-8 text-steel">
                <p className="eyebrow">Overview</p>
                {s.intro.map((p) => (
                  <p key={p.slice(0, 32)}>{p}</p>
                ))}
              </div>
            ) : (
              <SectionHeading eyebrow="Overview" title={s.name} lead={s.summary} />
            )}
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <Photo {...s.image} priority sizes="(min-width: 1024px) 40vw, 100vw" />
          </div>
        </div>
      </section>

      {/* Capabilities, grouped exactly as on the current site */}
      {s.groups.map((g, gi) => (
        <section
          key={g.heading}
          className={`py-24 lg:py-32 ${gi % 2 === 0 ? "blueprint-light border-y border-line bg-paper" : ""}`}
        >
          <div className="container-x">
            <SectionHeading eyebrow={s.name} title={g.heading} lead={g.text} />
            {g.items.some((i) => i.body) ? (
              <div className="mt-16 grid gap-x-12 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
                {g.items.map((c, i) => (
                  <div key={c.title} className="border-t-2 border-ink pt-6">
                    <span className="font-label text-xs font-semibold tracking-[0.2em] text-brand-deep">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-4 text-xl font-extrabold text-ink">{c.title}</h3>
                    {c.body ? <p className="mt-3 leading-7 text-steel">{c.body}</p> : null}
                  </div>
                ))}
              </div>
            ) : (
              <ul className="mt-14 grid border-t-2 border-ink sm:grid-cols-2 lg:grid-cols-3">
                {g.items.map((c, i) => (
                  <li key={c.title} className="flex items-baseline gap-5 border-b border-line py-6 sm:pr-8">
                    <span className="font-label text-xs font-semibold tracking-[0.2em] text-brand-deep">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-extrabold text-ink">{c.title}</h3>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}

      {/* Gallery: photos from the same section of the current site */}
      {s.gallery?.length ? (
        <section className="py-24 lg:py-32">
          <div className="container-x">
            <SectionHeading eyebrow="Gallery" title={s.name} />
            <ul className="mt-14 grid grid-cols-2 gap-6 lg:grid-cols-4">
              {s.gallery.map((g) => (
                <li key={g.src}>
                  <Photo {...g} mark={false} className="aspect-[3/4]" sizes="(min-width: 1024px) 25vw, 50vw" />
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {/* Related */}
      <section className="bg-ink py-24 text-white lg:py-28">
        <div className="container-x">
          <SectionHeading dark eyebrow="Services" title="Our other services" />
          <ul className="mt-12 grid gap-px bg-white/10 md:grid-cols-3">
            {related.map((r) => (
              <li key={r.slug} className="bg-ink">
                <Link href={r.path} className="group flex h-full flex-col justify-between gap-8 p-8 transition-colors hover:bg-ink-soft">
                  <span className="font-label text-xs font-semibold tracking-[0.2em] text-brand">{r.code}</span>
                  <span>
                    <span className="block font-display text-xl font-extrabold">{r.name}</span>
                    <span className="mt-3 block leading-7 text-white/60">{r.summary}</span>
                  </span>
                  <Arrow className="text-brand" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
