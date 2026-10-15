import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/ui";
import { webPageSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { services } from "@/lib/services";
import { company, fullAddress } from "@/lib/site";

const title = "Contact Us: Scandic Building, Juba";
const description =
  "Contact T&M Synergy Limited, Scandic Building, Havana Street, Juba, South Sudan. Call +211 (0) 925-636-666 or email info@tmsynergy.com for project inquiries.";

export const metadata = pageMeta({ title, description, path: "/contact" });

export default function Contact() {
  return (
    <>
      <JsonLd data={webPageSchema("ContactPage", "/contact", title, description)} />
      <PageHero
        eyebrow="Contact"
        title="Contact us"
        lead="You can contact us through the contact form on our website, via email, or by phone."
      />

      <section className="py-24 lg:py-32">
        <div className="container-x grid gap-20 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-extrabold text-ink">Project inquiry</h2>
            <div className="mt-12">
              <ContactForm services={services.map((s) => s.name)} />
            </div>
          </div>

          <aside className="lg:col-span-4 lg:col-start-9">
            <div className="space-y-10">
              <div className="border-t-2 border-ink pt-6">
                <h2 className="eyebrow">Our address</h2>
                <address className="mt-4 text-lg leading-8 not-italic text-ink">
                  {company.name}
                  <br />
                  {company.address.street}
                  <br />
                  {company.address.city}, {company.address.country}
                </address>
                <a href={company.mapLink} target="_blank" rel="noopener" className="mt-3 inline-block font-semibold text-brand-deep underline underline-offset-4">
                  Get directions
                </a>
              </div>
              <div className="border-t-2 border-ink pt-6">
                <h2 className="eyebrow">Call us</h2>
                <a href={company.phoneHref} className="mt-4 block font-display text-2xl font-extrabold text-ink hover:text-brand-deep">
                  {company.phone}
                </a>
              </div>
              <div className="border-t-2 border-ink pt-6">
                <h2 className="eyebrow">Email us</h2>
                <a href={`mailto:${company.email}`} className="mt-4 block font-display text-2xl font-extrabold text-ink hover:text-brand-deep">
                  {company.email}
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section aria-label="Map" className="border-t border-line">
        <iframe
          title={`Map showing ${company.name}, ${fullAddress}`}
          src={company.mapEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block h-[440px] w-full grayscale"
        />
      </section>
    </>
  );
}
