import { SITE_URL, company, img } from "./site";
import type { Service } from "./services";

const ORG_ID = `${SITE_URL}/#organization`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness"],
        "@id": ORG_ID,
        name: company.name,
        legalName: company.legalName,
        alternateName: company.shortName,
        slogan: company.tagline,
        url: SITE_URL,
        logo: `${SITE_URL}${img.logo.src}`,
        image: `${SITE_URL}${img.plantAutomation.src}`,
        description: company.description,
        foundingDate: company.founded,
        telephone: company.phone,
        email: company.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: company.address.street,
          addressLocality: company.address.city,
          addressCountry: company.address.countryCode,
        },
        geo: { "@type": "GeoCoordinates", latitude: company.geo.lat, longitude: company.geo.lng },
        hasMap: company.mapLink,
        areaServed: { "@type": "Country", name: "South Sudan" },
        knowsAbout: [
          "Electrical and instrumentation (E&I) engineering",
          "Metering",
          "EPCC",
          "Plant automation",
          "Distributed Control System (DCS)",
          "Emergency Shutdown System (ESD)",
          "Fire and Gas System (FGS)",
          "Power transmission and distribution",
          "Flow meter validation and calibration",
          "Meter proving",
          "Well testing",
        ],
        sameAs: [company.social.linkedin],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: company.name,
        publisher: { "@id": ORG_ID },
        inLanguage: "en",
      },
    ],
  };
}

export function serviceSchema(s: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}${s.path}#service`,
    name: s.name,
    serviceType: s.serviceType,
    description: s.metaDescription,
    url: `${SITE_URL}${s.path}`,
    image: `${SITE_URL}${s.image.src}`,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "South Sudan" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: s.name,
      itemListElement: s.groups.flatMap((g) =>
        g.items.map((c) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: c.title, ...(c.body ? { description: c.body } : {}) },
        })),
      ),
    },
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function webPageSchema(
  type: "AboutPage" | "ContactPage" | "CollectionPage" | "WebPage",
  path: string,
  name: string,
  description: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    url: `${SITE_URL}${path}`,
    name,
    description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": ORG_ID },
  };
}
