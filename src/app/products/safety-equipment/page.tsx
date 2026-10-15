import { JsonLd } from "@/components/JsonLd";
import { CheckList, CtaBand, PageHero, Photo, SectionHeading } from "@/components/ui";
import { webPageSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { safetyProduct as p } from "@/lib/services";
import { img } from "@/lib/site";

export const metadata = pageMeta({
  title: p.metaTitle,
  description: p.metaDescription,
  path: p.path,
  image: img.safety1.src,
});

const fields = ["Safety Equipment", "Personnel Safety gears", "Industrial safety kits"];
const industries = ["Road construction", "Mining", "Energy", "Oil and gas"];

export default function SafetyEquipment() {
  return (
    <>
      <JsonLd data={webPageSchema("CollectionPage", p.path, p.h1, p.metaDescription)} />
      <PageHero
        eyebrow="Products"
        title={p.h1}
        lead="T&M supplies signage and safety solutions for road construction, mining, energy, and the oil and gas industries."
      />

      <section className="py-24 lg:py-32">
        <div className="container-x grid gap-16 lg:grid-cols-12">
          <div className="space-y-6 text-lg leading-8 text-steel lg:col-span-6">
            <p className="eyebrow">Safety comes first</p>
            <p>
              T&amp;M supplies signage and safety solutions for road construction, mining, energy, and the oil and gas
              industries. The company offers an extensive range of safety signs and products, along with safety
              isolation systems.
            </p>
            <p>
              Safety comes first. Therefore, we ensure a high degree of safety for both personnel and equipment. Our
              safety signage is well-labeled for all to see and act upon promptly.
            </p>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <Photo {...img.safety1} priority sizes="(min-width: 1024px) 40vw, 100vw" />
          </div>
        </div>
      </section>

      <section className="blueprint-light border-y border-line bg-paper py-24 lg:py-32">
        <div className="container-x grid items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading eyebrow="Products" title="We are the industry's experts in the following fields" />
            <div className="mt-10">
              <CheckList items={fields} />
            </div>
            <h2 className="mt-14 eyebrow">Industries supplied</h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {industries.map((x) => (
                <li key={x} className="border border-line bg-white px-3 py-2 font-label text-xs font-medium uppercase tracking-wider text-ink">
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <Photo {...img.safety2} mark={false} sizes="(min-width: 1024px) 40vw, 100vw" />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
