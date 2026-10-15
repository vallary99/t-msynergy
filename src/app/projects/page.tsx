import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { LogoWall } from "@/components/LogoWall";
import { CtaBand, PageHero, Photo, SectionHeading } from "@/components/ui";
import { webPageSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { clients, img } from "@/lib/site";

const title = "Projects: Construction, E&I & Testing Work";
const description =
  "T&M Synergy's portfolio of completed projects in South Sudan, showcasing our work in construction, E&I engineering, and testing services.";

export const metadata = pageMeta({ title, description, path: "/projects" });

// Photos grouped under the section headings they appeared in on the current site.
const groups = [
  {
    heading: "Electrical Instrumentation and Mechanical",
    href: "/services/electrical-instrumentation",
    photos: [img.eim1, img.eim2, img.eim3, img.eim4, img.eim5],
  },
  {
    heading: "Oil & Gas Equipment Supplies and Services",
    href: "/services/metering-testing-measurement",
    photos: [img.og1, img.og2, img.og3, img.og4],
  },
  {
    heading: "Power Transmission, Auxiliary Power and System Support",
    href: "/services/power-distribution",
    photos: [img.powerTD, img.auxPower, img.integration],
  },
  {
    heading: "ICT Supplies",
    href: "/services/ict",
    photos: [img.ict1, img.ict2, img.ict3],
  },
];

export default function Projects() {
  return (
    <>
      <JsonLd data={webPageSchema("CollectionPage", "/projects", title, description)} />
      <PageHero
        eyebrow="Projects"
        title="Our work in construction, E&I engineering and testing"
        lead="Handling projects of increasing scope and complexity with precision and care."
      />

      {groups.map((g, gi) => (
        <section key={g.heading} className={`py-24 lg:py-28 ${gi ? "border-t border-line" : ""}`}>
          <div className="container-x">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <SectionHeading eyebrow="Projects" title={g.heading} />
              <Link href={g.href} className="font-label text-xs font-semibold uppercase tracking-[0.2em] text-brand-deep hover:text-ink">
                View service
              </Link>
            </div>
            <ul className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
              {g.photos.map((p, i) => (
                <li key={p.src} className={i === 0 && g.photos.length % 2 === 1 ? "col-span-2 row-span-2" : ""}>
                  <Photo
                    {...p}
                    mark={false}
                    className="aspect-square h-full"
                    sizes={i === 0 ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"}
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <section className="border-t border-line bg-paper py-24 lg:py-32">
        <div className="container-x">
          <LogoWall eyebrow="Clients" title="Our clients" items={clients} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
