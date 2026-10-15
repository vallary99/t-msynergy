import { img, type Img } from "./site";

// Every title, sentence and list item below is taken from the current tmsynergy.com website.
// Headings and meta tags only rearrange that wording for search engines.

export type Capability = { title: string; body?: string };

export type Service = {
  slug: string;
  path: string;
  code: string; // abbreviation used on the site (E&I, DCS, MCC…) shown as a tag
  name: string;
  serviceType: string;
  metaTitle: string; // brand suffix " | T&M Synergy" is added automatically
  metaDescription: string;
  h1: string;
  summary: string;
  intro: string[];
  image: Img;
  groups: { heading: string; text?: string; items: Capability[] }[];
  gallery?: Img[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: "plant-automation",
    path: "/services/plant-automation",
    code: "DCS · ESD · FGS",
    name: "Plant Automation",
    serviceType: "Plant automation: DCS, ESD, fire and gas and metering systems",
    metaTitle: "Plant Automation: DCS, ESD & FGS, South Sudan",
    metaDescription:
      "Plant automation from T&M Synergy in South Sudan: Distributed Control Systems (DCS), Emergency Shutdown (ESD), Fire and Gas (FGS) and Metering Systems.",
    h1: "Plant Automation: DCS, ESD, Fire and Gas and Metering Systems",
    summary:
      "Advanced automation solutions to streamline operations and enhance safety in complex industrial environments.",
    intro: [
      "We provide advanced automation solutions to streamline operations and enhance safety in complex industrial environments.",
      "Streamlined solutions such as Distributed Control Systems (DCS), Emergency Shutdown Systems (ESD), Fire and Gas Systems (FGS), and accurate Metering Systems for efficient and safe operations.",
    ],
    image: img.plantAutomation,
    groups: [
      {
        heading: "Automation and safety systems",
        items: [
          {
            title: "Distributed Control System (DCS)",
            body: "Offering seamless integration for large-scale systems, our DCS solutions enable centralized control and streamlined operations, ensuring optimal performance across the plant.",
          },
          {
            title: "Emergency Shutdown System (ESD)",
            body: "Our ESD solutions are designed to safely halt operations in emergencies, protecting both personnel and equipment.",
          },
          {
            title: "Fire and Gas System (FGS)",
            body: "Featuring high-sensitivity detection and rapid response, our FGS systems prioritize safety by quickly identifying fire and gas hazards and mitigating risks.",
          },
          {
            title: "Metering Systems",
            body: "We deliver accurate resource measurement and monitoring systems to optimize operations and resource management.",
          },
        ],
      },
    ],
    related: ["metering-testing-measurement", "electrical-instrumentation", "power-distribution"],
  },
  {
    slug: "power-distribution",
    path: "/services/power-distribution",
    code: "MCC · SUBSTATIONS",
    name: "Power Transmission & Distribution",
    serviceType: "Power transmission and distribution, auxiliary power systems, system integration and support",
    metaTitle: "Power Transmission & Distribution, South Sudan",
    metaDescription:
      "Switchgear (MCC), step-down substations, power transmission, DC auxiliary systems, transformers and distribution panels from T&M Synergy, South Sudan.",
    h1: "Power Transmission & Distribution, Auxiliary Power and System Support",
    summary:
      "Reliable and customized power transmission services, from switchgear (MCC) to step-down substations, ensuring efficient and safe energy distribution across industrial applications.",
    intro: [
      "We deliver reliable power solutions to support efficient energy distribution across industrial applications.",
      "Reliable and customized power transmission services, from switchgear (MCC) to step-down substations, ensuring efficient and safe energy distribution across industrial applications.",
    ],
    image: img.powerTD,
    groups: [
      {
        heading: "Power transmission and distribution",
        items: [
          {
            title: "Switchgear (MCC - Motor Control Centers)",
            body: "Switchgear solutions prioritize safety and efficiency, providing advanced control for motors and other electrical devices.",
          },
          {
            title: "Step-Down Substations",
            body: "Designed to convert high-voltage power to medium voltage, our substations ensure safe and dependable power distribution across facilities.",
          },
          {
            title: "Power Transmission",
            body: "We offer tailored power transmission solutions that handle high to medium voltage needs, ensuring stability and reliability across various industrial applications.",
          },
        ],
      },
      {
        heading: "Auxiliary power systems",
        text: "Our auxiliary power systems provide crucial support for continuous operations, communication, and emergency backup.",
        items: [
          {
            title: "DC Auxiliary Systems",
            body: "We offer dependable DC power solutions for control, communication, and backup, ensuring uninterrupted operation of essential systems.",
          },
          {
            title: "Transformers and Distribution Panels",
            body: "Custom-built transformers and distribution panels provide seamless power management to meet the unique needs of your facility.",
          },
        ],
      },
      {
        heading: "System integration and support",
        text: "We provide comprehensive support throughout the lifecycle of your power systems, from installation to maintenance.",
        items: [
          {
            title: "Installation, Testing, and Commissioning",
            body: "Our team handles every step of system deployment, ensuring all power systems are installed, tested, and commissioned to the highest standards.",
          },
          {
            title: "Maintenance and Service Programs",
            body: "We offer ongoing maintenance and service plans to maximize system uptime and performance, giving you peace of mind that your operations will remain efficient and resilient.",
          },
        ],
      },
    ],
    gallery: [img.auxPower, img.integration],
    related: ["electrical-instrumentation", "plant-automation", "metering-testing-measurement"],
  },
  {
    slug: "electrical-instrumentation",
    path: "/services/electrical-instrumentation",
    code: "E&I",
    name: "Electrical, Instrumentation & Mechanical",
    serviceType: "Electrical and instrumentation (E&I) engineering",
    metaTitle: "E&I Engineering Services in South Sudan",
    metaDescription:
      "Electrical and instrumentation (E&I) engineering from T&M Synergy: transmission lines, MCC, substations, power control, switchgears, transformers.",
    h1: "Electrical, Instrumentation and Mechanical (E&I) Engineering Services",
    summary:
      "We undertake electrical projects ranging from small maintenance tasks, building services, and electrical refurbishments to measured-term electrical maintenance and testing contracts.",
    intro: [
      "We undertake electrical projects ranging from small maintenance tasks, building services, and electrical refurbishments to measured-term electrical maintenance and testing contracts, as well as industry-leading electrical preventative programs.",
      "We achieve the highest levels of quality, innovation, and ethics by focusing on our fundamental business areas.",
    ],
    image: img.eim1,
    groups: [
      {
        heading: "Our electrical and instrumentation work",
        items: [
          { title: "Transmission Lines" },
          { title: "MCC" },
          { title: "Substation" },
          { title: "Power Control" },
          { title: "Switchgears" },
          { title: "Transformers" },
          { title: "Field Instrumentation" },
        ],
      },
    ],
    gallery: [img.eim2, img.eim3, img.eim4, img.eim5],
    related: ["power-distribution", "plant-automation", "metering-testing-measurement"],
  },
  {
    slug: "metering-testing-measurement",
    path: "/services/metering-testing-measurement",
    code: "METERING",
    name: "Metering, Testing & Measurement",
    serviceType: "Metering, flow meter calibration, meter proving and well testing",
    metaTitle: "Metering & Well Testing in South Sudan",
    metaDescription:
      "Flow meter validation and calibration, meter proving, pipe proving, well testing, tank cleaning and multiphase flow meters from T&M Synergy, South Sudan.",
    h1: "Metering, Flow Meter Calibration, Meter Proving and Well Testing",
    summary:
      "Flow meter validation & calibration, meter proving, pipe proving, well testing, tank cleaning and validation, and multiphase flow meters (inline and mobile).",
    intro: [
      "Since our inception and incorporation in September 2012, we have grown into a leading player in the sector, offering specialized construction, electrical and instrumentation (E&I) engineering services, along with advanced testing and measurement solutions.",
      "We deliver accurate resource measurement and monitoring systems to optimize operations and resource management.",
    ],
    image: img.og1,
    groups: [
      {
        heading: "Testing and measurement services",
        items: [
          { title: "Flow meter validation & calibration" },
          { title: "Meter proving" },
          { title: "Pipe proving" },
          { title: "Well testing" },
          { title: "Tank cleaning and validation" },
          { title: "Multiphase Flow Meter (inline and mobile)" },
        ],
      },
      {
        heading: "Field instrumentation and control systems",
        items: [
          { title: "Field Instrumentation" },
          { title: "Fire and gas protection equipment (FGS)" },
          { title: "Distributed Control System (DCS)" },
          { title: "Emergency Shutdown System (ESD)" },
        ],
      },
    ],
    gallery: [img.og2, img.og3, img.og4],
    related: ["plant-automation", "electrical-instrumentation", "power-distribution"],
  },
  {
    slug: "ict",
    path: "/services/ict",
    code: "ICT",
    name: "ICT Supplies & Support",
    serviceType: "ICT support, consultancy and procurement",
    metaTitle: "ICT Support, Networking & Supplies in Juba",
    metaDescription:
      "ICT support and consultancy, LAN setup, computer servicing, network security, backup and data recovery, document archiving and ICT procurement in Juba.",
    h1: "ICT Supplies, Support and Consultancy",
    summary:
      "ICT support and consultancy, Local Area Network setup, network and internet security, back up and data recovery, and ICT procurement.",
    intro: [],
    image: img.ict1,
    groups: [
      {
        heading: "ICT services",
        items: [
          { title: "ICT support and consultancy" },
          { title: "Local Area Network setup, computer servicing and maintenance" },
          { title: "Network and internet security" },
          { title: "Back up and data recovery services" },
          { title: "Document management and archiving" },
          { title: "ICT procurement" },
        ],
      },
    ],
    gallery: [img.ict2, img.ict3],
    related: ["electrical-instrumentation", "plant-automation", "power-distribution"],
  },
];

export const safetyProduct = {
  path: "/products/safety-equipment",
  metaTitle: "Safety Signage & Safety Equipment, South Sudan",
  metaDescription:
    "T&M Synergy supplies signage and safety solutions, safety equipment, personnel safety gear, industrial safety kits and safety isolation systems.",
  h1: "Safety Signage, Safety Equipment and Safety Isolation Systems",
};

export const consulting =
  "Our goal is to provide services that meet business needs while using optimum technological solutions. Our service offerings are broadly classified into professional consulting services. T&M Synergy Limited professional services offers technical skills to implement or support a solution at any stage, from inception to post delivery.";

export const getService = (slug: string) => {
  const s = services.find((x) => x.slug === slug);
  if (!s) throw new Error(`Unknown service: ${slug}`);
  return s;
};
