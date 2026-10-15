// Single source of truth for company facts (NAP), images and shared content.
// Every piece of copy in this file comes from the current tmsynergy.com website.

export const SITE_URL = "https://tmsynergy.com";

export const company = {
  name: "T&M Synergy Limited",
  shortName: "T&M Synergy",
  legalName: "T&M Synergy Limited",
  tagline: "E&I Engineering Services, Metering, and EPCC Contractor",
  founded: "2012-09",
  description:
    "T&M Synergy Limited is a proudly South Sudanese-owned company providing construction, electrical and instrumentation (E&I) engineering services, and testing and measurement solutions to the oil and gas industry.",
  phone: "+211 (0) 925-636-666",
  phoneHref: "tel:+211925636666",
  email: "info@tmsynergy.com",
  address: {
    street: "Scandic Building, Havana Street",
    city: "Juba",
    country: "South Sudan",
    countryCode: "SS",
  },
  // Coordinates from the Google Maps embed on the current site
  geo: { lat: 4.85995, lng: 31.60261 },
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.4739637420203!2d31.602614364796974!3d4.8599500843209285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x171281349d29709f%3A0x9444c45abccbdd05!2sT%26M%20SYNERGY%20LIMITED!5e0!3m2!1sen!2sug!4v1721747530358!5m2!1sen!2sug",
  mapLink: "https://www.google.com/maps/search/?api=1&query=T%26M+Synergy+Limited+Juba",
  video: "https://youtu.be/wKCFFwuItmE",
  social: {
    linkedin: "https://www.linkedin.com/company/technical-and-measurement-cooperation-ltd/",
  },
} as const;

export const fullAddress = `${company.address.street}, ${company.address.city}, ${company.address.country}`;

// Evaluated at build time (static pages are rebuilt on each deploy).
export const currentYear = new Date().getFullYear();

// ---------- Images ----------
// Photos are served from /public/images (see scripts/fetch-images.mjs).
// Each photo also has a `fallback`: a free Unsplash photo of the same subject, shown only
// if the photo itself can't be loaded, so no section is ever left without an image.
const U = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=80`;
const stock = {
  controlRoom: { src: U("1714596282575-82d224db8c70"), alt: "Control room with multiple monitors" },
  substation: { src: U("1509390144018-eeaf65052242"), alt: "Electrical transformer in a power substation" },
  breakers: { src: U("1576446470246-499c738d1c8e"), alt: "Circuit breakers in an electrical panel" },
  switchBox: { src: U("1544724569-5f546fd6f2b5"), alt: "Electrical switch box with circuit breakers and wiring" },
  panelTest: { src: U("1758101755915-462eddc23f57"), alt: "Electrician testing wiring inside a control panel" },
  refinery: { src: U("1678984240126-70bcddd7a228"), alt: "Oil refinery plant" },
  pipes: { src: U("1726731782158-fcf6822b6ca4"), alt: "Industrial plant with red and white pipes" },
  pumpJack: { src: U("1516199423456-1f1e91b06f25"), alt: "Oil pump jack at sunset" },
  hardHats: { src: U("1552879890-3a06dd3a06c2"), alt: "Rack of yellow safety hard hats" },
  ppe: { src: U("1662309376159-b95fb193d96b"), alt: "Hard hats and high-visibility safety vests" },
} as const;

export const img = {
  logo: { src: "/images/tm-synergy-logo.png", alt: "T&M Synergy Limited logo" },
  plantAutomation: { src: "/images/plant-automation.jpg", alt: "T&M Synergy plant automation services", fallback: stock.controlRoom },
  powerTD: { src: "/images/power-transmission-distribution.jpg", alt: "T&M Synergy power transmission and distribution", fallback: stock.substation },
  auxPower: { src: "/images/auxiliary-power-systems.jpg", alt: "T&M Synergy auxiliary power systems", fallback: stock.breakers },
  integration: { src: "/images/system-integration-support.jpg", alt: "T&M Synergy system integration and support", fallback: stock.panelTest },
  approach1: { src: "/images/tm-synergy-services-1.jpg", alt: "T&M Synergy Limited services", fallback: stock.pipes },
  approach2: { src: "/images/tm-synergy-services-2.jpg", alt: "T&M Synergy Limited services", fallback: stock.ppe },
  safety1: { src: "/images/safety-signage.jpg", alt: "T&M Synergy safety signage and safety solutions", fallback: stock.hardHats },
  safety2: { src: "/images/safety-equipment.jpg", alt: "T&M Synergy safety equipment and personnel safety gear", fallback: stock.ppe },
  eim1: { src: "/images/electrical-instrumentation-mechanical-1.jpg", alt: "T&M Synergy electrical, instrumentation and mechanical work", fallback: stock.switchBox },
  eim2: { src: "/images/electrical-instrumentation-mechanical-2.jpg", alt: "T&M Synergy electrical, instrumentation and mechanical work", fallback: stock.panelTest },
  eim3: { src: "/images/electrical-instrumentation-mechanical-3.jpg", alt: "T&M Synergy electrical, instrumentation and mechanical work", fallback: stock.breakers },
  eim4: { src: "/images/electrical-instrumentation-mechanical-4.jpg", alt: "T&M Synergy electrical, instrumentation and mechanical work", fallback: stock.substation },
  eim5: { src: "/images/electrical-instrumentation-mechanical-5.jpg", alt: "T&M Synergy electrical, instrumentation and mechanical work", fallback: stock.controlRoom },
  // ICT: free Unsplash photos (the original ICT photos were replaced on request)
  ict1: { src: "/images/ict-server-room.jpg", alt: "Server room with network cabinets and cabling", fallback: stock.controlRoom },
  ict2: { src: "/images/ict-computer-hardware.jpg", alt: "Technician installing a component in a computer", fallback: stock.switchBox },
  ict3: { src: "/images/ict-network-cable.jpg", alt: "Network cable for local area network setup", fallback: stock.breakers },
  og1: { src: "/images/oil-gas-equipment-supplies-1.jpg", alt: "T&M Synergy oil and gas equipment supplies and services", fallback: stock.refinery },
  og2: { src: "/images/oil-gas-equipment-supplies-2.jpg", alt: "T&M Synergy oil and gas equipment supplies and services", fallback: stock.pipes },
  og3: { src: "/images/oil-gas-equipment-supplies-3.jpg", alt: "T&M Synergy oil and gas equipment supplies and services", fallback: stock.pumpJack },
  og4: { src: "/images/oil-gas-equipment-supplies-4.jpg", alt: "T&M Synergy oil and gas equipment supplies and services", fallback: stock.controlRoom },
} as const;

export type Img = { src: string; alt: string; fallback?: { src: string; alt: string } };

// Client and partner names are not written on the current site, so the alt text stays generic.
// Replace `alt` with each organisation's real name once the client confirms them.
export const clients: Img[] = Array.from({ length: 11 }, (_, i) => ({
  src: `/images/clients/client-${i + 1}.${[2, 3, 6, 8, 11].includes(i + 1) ? "jpg" : "png"}`,
  alt: "T&M Synergy client logo",
}));

export const partners: Img[] = Array.from({ length: 6 }, (_, i) => ({
  src: `/images/partners/partner-${i + 1}.${i + 1 === 2 ? "jpg" : "png"}`,
  alt: "T&M Synergy partner logo",
}));

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/products/safety-equipment", label: "Products" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// FAQ from the current website. The careers question is left out because the site has no careers page.
export const homeFaqs = [
  {
    q: "What services does T&M Synergy Limited offer?",
    a: "T&M Synergy Limited provides construction services, electrical and instrumentation (E&I) engineering, testing and measurement solutions, and comprehensive consulting primarily for the oil and gas sector.",
  },
  {
    q: "What industries does T&M Synergy Limited serve?",
    a: "While T&M Synergy Limited primarily serves the oil and gas industry, our expertise and services are also applicable to other industrial sectors requiring advanced engineering and construction solutions.",
  },
  {
    q: "Can you provide examples of completed projects?",
    a: "Yes, we have a portfolio of completed projects available on our website, showcasing our work in construction, E&I engineering, and testing services.",
  },
  {
    q: "How does T&M Synergy Limited ensure the quality and safety of its projects?",
    a: "We adhere to stringent quality assurance protocols and safety standards in all our projects. Our team is trained continuously, and we utilize advanced technologies to ensure the highest levels of safety and quality.",
  },
  {
    q: "What makes T&M Synergy Limited different from other service providers in the industry?",
    a: "Our commitment to innovation, personalized solutions, and unwavering focus on client satisfaction set us apart. We pride ourselves on our ability to handle even the most demanding projects with efficiency and expertise.",
  },
  {
    q: "How can I get in touch with T&M Synergy Limited for a project inquiry?",
    a: "You can contact us through the contact form on our website, via email, or by phone. Our office locations and contact details are also listed on the website for your convenience.",
  },
  {
    q: "Does T&M Synergy Limited offer consulting services?",
    a: "Yes, we offer expert consulting services to help clients navigate the complexities of the oil and gas industry, providing strategic advice and guidance to optimize their operations.",
  },
  {
    q: "What sustainable practices does T&M Synergy Limited implement in its projects?",
    a: "We prioritize environmental stewardship in all our projects by incorporating sustainable practices, minimizing our ecological footprint, and ensuring compliance with environmental regulations.",
  },
  {
    q: "How does T&M Synergy Limited support the community?",
    a: "We are committed to giving back to the community through various initiatives, including local employment opportunities, training programs, and community development projects.",
  },
];
