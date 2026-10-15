import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { LogoWall } from "@/components/LogoWall";
import { Arrow, CtaBand, FaqList, FlowLine, Photo, SectionHeading, ServiceCard } from "@/components/ui";
import { faqSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { services } from "@/lib/services";
import { clients, company, homeFaqs, img, partners } from "@/lib/site";

export const metadata = pageMeta({
  title: "E&I Engineering, Metering & EPCC, South Sudan | T&M Synergy",
  absoluteTitle: true,
  description:
    "T&M Synergy Limited: South Sudanese-owned E&I engineering services, metering and EPCC contractor for the oil and gas industry, based in Juba since 2012.",
  path: "/",
});

// Facts stated on the current website (no invented figures).
const facts = [
  { value: "2012", label: "Incorporated in September 2012" },
  { value: "Juba", label: "Scandic Building, Havana Street" },
  { value: "E&I", label: "E&I Engineering Services" },
  { value: "EPCC", label: "EPCC Contractor" },
];

// Systems and equipment named on the current website.
const systems = [
  "DCS", "ESD", "FGS", "Metering Systems", "MCC", "Switchgears", "Step-Down Substations", "Transmission Lines",
  "Power Control", "Transformers", "Distribution Panels", "DC Auxiliary Systems", "Multiphase Flow Meters",
  "Field Instrumentation",
];

const industries = ["Oil and gas", "Energy", "Mining", "Road construction"];

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />

      {/* Hero */}
      <section className="blueprint relative overflow-hidden bg-ink text-white">
        <FlowLine className="absolute -bottom-6 left-0 hidden w-[520px] opacity-35 xl:block" />
        <div className="container-x relative grid items-center gap-16 py-20 lg:grid-cols-12 lg:py-32">
          <div className="lg:col-span-7">
            <p className="eyebrow flex items-center gap-3 !text-brand">
              <span aria-hidden className="h-px w-8 bg-brand" />
              Excellence in Industrial Innovation and Solutions
            </p>
            <h1 className="mt-6 text-4xl leading-[1.04] font-extrabold sm:text-5xl lg:text-[60px]">
              E&amp;I Engineering Services, Metering and EPCC Contractor in <span className="text-brand">South Sudan</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-white/75">
              Welcome to {company.name}, your trusted partner in engineering excellence. As a leading provider of
              industrial technology and solutions, we specialize in delivering cutting-edge E&amp;I engineering
              services, comprehensive construction solutions, and precise metering services.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/services" className="btn-primary">
                Our services <Arrow />
              </Link>
              <a href={company.video} target="_blank" rel="noopener" className="btn-ghost">
                Watch video
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <Photo
              {...img.plantAutomation}
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[4/3] lg:aspect-[4/5]"
            />
          </div>
        </div>
      </section>

      {/* Facts strip */}
      <section aria-label="Company facts" className="border-b border-line">
        <dl className="container-x grid grid-cols-2 lg:grid-cols-4">
          {facts.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col-reverse justify-end border-line py-10 lg:py-14 ${i % 2 ? "border-l pl-6" : ""} ${i === 2 ? "lg:border-l lg:pl-6" : ""} ${i > 1 ? "border-t lg:border-t-0" : ""}`}
            >
              <dt className="mt-2 text-sm leading-6 text-steel">{s.label}</dt>
              <dd className="font-display text-4xl font-extrabold text-ink lg:text-5xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Background */}
      <section className="py-24 lg:py-36">
        <div className="container-x grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Our company's background" title="Proudly South Sudanese-owned" />
          </div>
          <div className="space-y-6 text-lg leading-8 text-steel lg:col-span-6 lg:col-start-7">
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
            <Link href="/about" className="group inline-flex items-center gap-2 font-label text-sm font-semibold uppercase tracking-[0.18em] text-ink hover:text-brand-deep">
              About us <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="blueprint-light border-y border-line bg-paper py-24 lg:py-36">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Services"
              title="Our core services"
              lead="T&M Synergy Limited offers a comprehensive suite of services in the oil and gas industry."
            />
            <Link href="/services" className="btn-dark shrink-0">
              All services <Arrow />
            </Link>
          </div>
          <div className="mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} s={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24 lg:py-36">
        <div className="container-x grid items-center gap-16 lg:grid-cols-12">
          <div className="grid grid-cols-2 gap-6 lg:col-span-6">
            <Photo {...img.approach1} className="aspect-[3/4]" sizes="(min-width: 1024px) 25vw, 50vw" />
            <Photo {...img.approach2} className="mt-12 aspect-[3/4]" mark={false} sizes="(min-width: 1024px) 25vw, 50vw" />
          </div>
          <div className="space-y-10 lg:col-span-5 lg:col-start-8">
            <SectionHeading eyebrow="Services" title="Our approach" />
            <div className="flex gap-6">
              <span className="font-label text-sm font-semibold text-brand-deep">01</span>
              <p className="text-lg leading-8 text-steel">
                We take pride in providing solutions with the utmost respect and professionalism, addressing all your
                concerns comprehensively.
              </p>
            </div>
            <div className="flex gap-6">
              <span className="font-label text-sm font-semibold text-brand-deep">02</span>
              <p className="text-lg leading-8 text-steel">
                Our processes are straightforward and efficient, giving you the freedom to choose solutions that fit
                your needs perfectly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Systems */}
      <section className="blueprint bg-ink py-24 text-white lg:py-36">
        <div className="container-x grid items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading
              dark
              eyebrow="Plant automation · Power · Metering"
              title="Systems we work on"
              lead="Our commitment to quality and innovation ensures your projects are executed with precision and efficiency, driving your success forward."
            />
            <ul className="mt-10 flex flex-wrap gap-2">
              {systems.map((s) => (
                <li key={s} className="border border-white/20 px-3 py-2 font-label text-xs font-medium uppercase tracking-wider text-white/80">
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-6 lg:col-span-5 lg:col-start-8">
            <Photo {...img.powerTD} className="aspect-[3/4]" mark={false} sizes="(min-width: 1024px) 20vw, 50vw" />
            <Photo {...img.og1} className="mt-12 aspect-[3/4]" mark={false} sizes="(min-width: 1024px) 20vw, 50vw" />
          </div>
        </div>
      </section>

      {/* Vision / mission / industries */}
      <section className="py-24 lg:py-36">
        <div className="container-x grid gap-20 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="About us" title="Our vision" />
            <p className="mt-8 text-lg leading-8 text-steel">
              To be the leading oil and gas consultants in South Sudan and across the African continent, recognized as
              the preferred partner for innovative and reliable solutions. We aim to build lasting relationships with
              our clients based on trust, excellence, and mutual success.
            </p>
          </div>
          <div>
            <SectionHeading eyebrow="Industries" title="Industries we serve" />
            <p className="mt-8 text-lg leading-8 text-steel">
              While T&amp;M Synergy Limited primarily serves the oil and gas industry, our expertise and services are
              also applicable to other industrial sectors requiring advanced engineering and construction solutions.
            </p>
            <ul className="mt-8 divide-y divide-line border-y border-line">
              {industries.map((x) => (
                <li key={x} className="py-4 font-display text-lg font-extrabold text-ink">{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Clients & partners */}
      <section className="border-t border-line bg-paper py-24 lg:py-32">
        <div className="container-x space-y-16">
          <LogoWall eyebrow="Clients" title="Our clients" items={clients} />
          <LogoWall eyebrow="Partners" title="Our partners" items={partners} reverse />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-36">
        <div className="container-x grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
          </div>
          <div className="lg:col-span-8">
            <FaqList faqs={homeFaqs} />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
