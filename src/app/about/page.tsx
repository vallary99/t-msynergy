import { JsonLd } from "@/components/JsonLd";
import { LogoWall } from "@/components/LogoWall";
import { CtaBand, PageHero, Photo, SectionHeading } from "@/components/ui";
import { webPageSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { img, partners } from "@/lib/site";

const title = "About Us: South Sudanese-Owned Since 2012";
const description =
  "T&M Synergy Limited is a proudly South Sudanese-owned company, incorporated in September 2012, offering construction, E&I engineering and testing solutions.";

export const metadata = pageMeta({ title, description, path: "/about", image: img.approach1.src });

const statements = [
  {
    title: "Vision",
    text: "To be the leading oil and gas consultants in South Sudan and across the African continent, recognized as the preferred partner for innovative and reliable solutions. We aim to build lasting relationships with our clients based on trust, excellence, and mutual success.",
  },
  {
    title: "Mission",
    text: "To work collaboratively with them to develop tailored solutions that meet their specific needs and objectives. We are committed to excellence and innovation in every project we undertake.",
  },
  {
    title: "Objectives",
    text: "To continuously improve our delivery methods and capabilities, ensuring we can handle even the most demanding tasks with precision and efficiency. To reassure our clients of our unwavering commitment to achieving their business goals through exceptional service and support.",
  },
];

export default function About() {
  return (
    <>
      <JsonLd data={webPageSchema("AboutPage", "/about", title, description)} />
      <PageHero
        eyebrow="About us"
        title="Our company's background"
        lead="Born from a vision to elevate the oil and gas industry in the Republic of South Sudan through exceptional expertise and forward-thinking solutions."
      />

      <section className="py-24 lg:py-32">
        <div className="container-x grid gap-16 lg:grid-cols-12">
          <div className="space-y-6 text-lg leading-8 text-steel lg:col-span-6">
            <p>
              T&amp;M Synergy Limited is a proudly South Sudanese-owned company, born from a vision to elevate the oil
              and gas industry in the Republic of South Sudan through exceptional expertise and forward-thinking
              solutions.
            </p>
            <p>
              Since our inception and incorporation in September 2012, we have grown into a leading player in the
              sector, offering specialized construction, electrical and instrumentation (E&amp;I) engineering services,
              along with advanced testing and measurement solutions.
            </p>
            <p>
              Founded with a mission to deliver tailored solutions that meet the specific needs of our clients, T&amp;M
              Synergy Limited has expanded its services and capabilities to tackle the unique challenges of this
              dynamic industry.
            </p>
            <p>
              Our journey began with a small team of passionate experts who saw the potential to drive progress in
              South Sudan&apos;s oil and gas industry. Today, we have established a solid reputation for quality,
              innovation, and reliability, handling projects of increasing scope and complexity with precision and
              care.
            </p>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <Photo {...img.approach1} priority sizes="(min-width: 1024px) 40vw, 100vw" />
          </div>
        </div>
      </section>

      <section className="blueprint-light border-y border-line bg-paper py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="Direction" title="Vision, mission and objectives" />
          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {statements.map((s) => (
              <div key={s.title} className="border-t-2 border-ink pt-6">
                <h2 className="text-2xl font-extrabold text-ink">{s.title}</h2>
                <p className="mt-4 leading-8 text-steel">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="blueprint bg-ink py-24 text-white lg:py-32">
        <div className="container-x grid gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading dark eyebrow="Innovation and quality" title="Our commitment to innovation and quality" />
            <div className="mt-8 space-y-5 text-lg leading-8 text-white/70">
              <p>
                From the beginning, T&amp;M Synergy Limited has placed a strong emphasis on innovation. Our engineers and
                specialists are continuously trained to stay ahead of industry advancements, ensuring that we provide
                clients with cutting-edge, efficient, and effective solutions.
              </p>
              <p>
                Every project we undertake is approached with a commitment to quality, precision, and a focus on
                exceeding client expectations. This dedication to excellence has earned us the trust and loyalty of
                numerous clients within South Sudan and across borders.
              </p>
            </div>
          </div>
          <div>
            <SectionHeading dark eyebrow="Environmental stewardship" title="Community and environmental stewardship" />
            <div className="mt-8 space-y-5 text-lg leading-8 text-white/70">
              <p>
                Deeply rooted in South Sudan, we believe that our success is closely linked with the well-being of the
                communities we serve and the health of our environment.
              </p>
              <p>
                Our projects are designed with sustainability in mind, ensuring we minimize our ecological footprint
                while delivering outstanding results. Through community engagement and environmental responsibility,
                T&amp;M Synergy Limited remains dedicated to a future where our industry benefits both people and the
                planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Looking ahead" title="Shaping the future of the industry" />
          </div>
          <div className="space-y-6 text-lg leading-8 text-steel lg:col-span-6 lg:col-start-7">
            <p>
              As T&amp;M Synergy Limited looks toward the future, we are committed to expanding our footprint across
              the African continent. Our vision is to become the preferred partner for oil and gas solutions,
              recognized for our reliability, innovation, and unparalleled service.
            </p>
            <p>
              Join us as we continue to shape the future of the oil and gas industry in South Sudan and beyond, driven
              by a passion for innovation and a commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper py-24 lg:py-32">
        <div className="container-x">
          <LogoWall eyebrow="Partners" title="Our partners" items={partners} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
