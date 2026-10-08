import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Seo, {
  breadcrumbSchema,
  businessSchema,
  serviceSchema,
} from "../../seo/Seo";

import "../../styles/tailwind.css";

/* =========================================================
   SERVICE DATA
========================================================= */

const SERVICE_DATA = {
  "/services/solar-panel-installation/": {
    title: "Solar Panel Installation | Dynamic Solar",

    description:
      "Explore Dynamic Solar's solar panel installation service for suitable homes and businesses. Contact us for a site-specific solar assessment and quote.",

    h1: "Solar Panel Installation",

    intro:
      "Solar panel installation for homes and businesses with system selection based on site and electricity requirements.",

    image: "/services/solar-panel-installation.webp",

    faq: [
      [
        "What is solar panel installation?",
        "It is a solar-related solution designed for the application described above. The exact system configuration depends on site and usage requirements.",
      ],
      [
        "How much does it cost?",
        "Pricing depends on system capacity, components, installation conditions and project scope. Contact Dynamic Solar for a project-specific quotation.",
      ],
      [
        "How do I know which system is suitable?",
        "Share your recent electricity/usage information, site details and requirements so the appropriate configuration can be assessed.",
      ],
    ],
  },

  "/services/solar-power-plant/": {
    title: "Solar Power Plant Solutions | Dynamic Solar",

    description:
      "Explore solar power plant solutions from Dynamic Solar for suitable residential, commercial or other applications. Contact us for project assessment.",

    h1: "Solar Power Plant",

    intro:
      "Solar power plant solutions for suitable project requirements, subject to site assessment and system design.",

    image: "/services/solar-power-plant.webp",

    faq: [
      [
        "What is solar power plant?",
        "It is a solar-related solution designed for the application described above. The exact system configuration depends on site and usage requirements.",
      ],
      [
        "How much does it cost?",
        "Pricing depends on system capacity, components, installation conditions and project scope. Contact Dynamic Solar for a project-specific quotation.",
      ],
      [
        "How do I know which system is suitable?",
        "Share your recent electricity/usage information, site details and requirements so the appropriate configuration can be assessed.",
      ],
    ],
  },

  "/services/solar-water-heater/": {
    title: "Solar Water Heater Solutions | Dynamic Solar",

    description:
      "Explore solar water heater solutions from Dynamic Solar. Contact our team to discuss your hot-water requirements and suitable system.",

    h1: "Solar Water Heater",

    intro:
      "Solar water-heating solutions for suitable hot-water requirements.",

    image: "/services/solar-water-heater.webp",

    faq: [
      [
        "What is solar water heater?",
        "It is a solar-related solution designed for the application described above. The exact system configuration depends on site and usage requirements.",
      ],
      [
        "How much does it cost?",
        "Pricing depends on system capacity, components, installation conditions and project scope. Contact Dynamic Solar for a project-specific quotation.",
      ],
      [
        "How do I know which system is suitable?",
        "Share your recent electricity/usage information, site details and requirements so the appropriate configuration can be assessed.",
      ],
    ],
  },

  "/services/solar-water-pumping-systems/": {
    title: "Solar Water Pumping Systems | Dynamic Solar",

    description:
      "Explore solar water pumping system solutions from Dynamic Solar for suitable water-pumping requirements. Request a site-specific consultation.",

    h1: "Solar Water Pumping Systems",

    intro:
      "Solar water pumping solutions for suitable water-pumping applications.",

    image: "/services/solar-waterpumping-system.webp",

    faq: [
      [
        "What is solar water pumping systems?",
        "It is a solar-related solution designed for the application described above. The exact system configuration depends on site and usage requirements.",
      ],
      [
        "How much does it cost?",
        "Pricing depends on system capacity, components, installation conditions and project scope. Contact Dynamic Solar for a project-specific quotation.",
      ],
      [
        "How do I know which system is suitable?",
        "Share your recent electricity/usage information, site details and requirements so the appropriate configuration can be assessed.",
      ],
    ],
  },

  "/services/solar-street-lights/": {
    title: "Solar Street Light Solutions | Dynamic Solar",

    description:
      "Explore solar street light solutions from Dynamic Solar for suitable residential, commercial and outdoor applications. Contact us for details.",

    h1: "Solar Street Lights",

    intro:
      "Solar street-light solutions for suitable outdoor and lighting applications.",

    image: "/services/solar-street-lights.webp",

    faq: [
      [
        "What is solar street lights?",
        "It is a solar-related solution designed for the application described above. The exact system configuration depends on site and usage requirements.",
      ],
      [
        "How much does it cost?",
        "Pricing depends on system capacity, components, installation conditions and project scope. Contact Dynamic Solar for a project-specific quotation.",
      ],
      [
        "How do I know which system is suitable?",
        "Share your recent electricity/usage information, site details and requirements so the appropriate configuration can be assessed.",
      ],
    ],
  },
};

/* =========================================================
   PROCESS
========================================================= */

const PROCESS = [
  "Requirement discussion",
  "Site information collection",
  "Technical/site assessment",
  "Solution recommendation",
  "Quotation and scope confirmation",
  "Installation/commissioning as applicable",
];

/* =========================================================
   RELATED SERVICES
========================================================= */

const RELATED_SERVICES = [
  {
    title: "Solar Panel Installation",
    path: "/services/solar-panel-installation/",
    description:
      "Explore Dynamic Solar's solar panel installation service for suitable homes and businesses. Contact us for a site-specific solar assessment and quote.",
  },
  {
    title: "Solar Power Plant Solutions",
    path: "/services/solar-power-plant/",
    description:
      "Explore solar power plant solutions from Dynamic Solar for suitable residential, commercial or other applications. Contact us for project assessment.",
  },
  {
    title: "Solar Water Heater Solutions",
    path: "/services/solar-water-heater/",
    description:
      "Explore solar water heater solutions from Dynamic Solar. Contact our team to discuss your hot-water requirements and suitable system.",
  },
  {
    title: "Solar Water Pumping Systems",
    path: "/services/solar-water-pumping-systems/",
    description:
      "Explore solar water pumping system solutions from Dynamic Solar for suitable water-pumping requirements. Request a site-specific consultation.",
  },
  {
    title: "Solar Street Lights Solutions",
    path: "/services/solar-street-lights/",
    description:
      "Explore solar street light solutions from Dynamic Solar for suitable residential, commercial and outdoor applications. Contact us for details.",
  },
];

/* =========================================================
   LOCATION PAGES
========================================================= */

const LOCATION_PAGES = [
  {
    title: "Tambaram",
    path: "/solar-panel-installation-tambaram/",
  },
  {
    title: "Perungalathur",
    path: "/solar-panel-installation-perungalathur/",
  },
  {
    title: "Guduvanchery",
    path: "/solar-panel-installation-guduvanchery/",
  },
  {
    title: "Urapakkam",
    path: "/solar-panel-installation-urapakkam/",
  },
];

/* =========================================================
   FAQ
========================================================= */

function FAQ({ items }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      {items.map(([question, answer], index) => (
        <details
          key={question}
          className={`group ${
            index !== items.length - 1
              ? "border-b border-slate-200"
              : ""
          }`}
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 font-semibold text-slate-900 transition hover:bg-slate-50 sm:px-7">
            <span>{question}</span>

            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-50 text-lg text-orange-600 transition-transform duration-200 group-open:rotate-45">
              +
            </span>
          </summary>

          <div className="px-6 pb-6 sm:px-7">
            <p className="max-w-4xl text-[15px] leading-7 text-slate-600">
              {answer}
            </p>
          </div>
        </details>
      ))}
    </div>
  );
}

/* =========================================================
   SERVICE ROUTE
========================================================= */

export function ServiceRoute({ path }) {
  const data = SERVICE_DATA[path];

  if (!data) {
    return null;
  }

  const faqSchema = data.faq.map(([name, text]) => ({
    "@type": "Question",
    name,
    acceptedAnswer: {
      "@type": "Answer",
      text,
    },
  }));

  const relatedServices = RELATED_SERVICES.filter(
    (service) => service.path !== path
  );

  return (
    <>
      {/* =====================================================
          SEO
      ===================================================== */}

      <Seo
        title={data.title}
        description={data.description}
        path={path}
        jsonLd={[
          businessSchema,

          serviceSchema(data.h1, data.intro, path),

          breadcrumbSchema([
            {
              name: "Home",
              path: "/",
            },
            {
              name: "Services",
              path: "/services/",
            },
            {
              name: data.h1,
              path,
            },
          ]),

          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqSchema,
          },
        ]}
      />

      <Navbar />

      <main className="bg-white text-slate-900">

        {/* ===================================================
            FULL BACKGROUND HERO
        ==================================================== */}

        <section
          className="relative flex min-h-[560px] items-center overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: `url("${data.image}")`,
          }}
        >
          <div className="absolute inset-0 bg-slate-950/65" />

          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-slate-950/30" />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-12">

            <div className="max-w-3xl">

              {/* Breadcrumb */}

              <nav
                aria-label="Breadcrumb"
                className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-300"
              >
                <Link
                  to="/"
                  className="transition hover:text-white"
                >
                  Home
                </Link>

                <span>/</span>

                <Link
                  to="/services/"
                  className="transition hover:text-white"
                >
                  Services
                </Link>

                <span>/</span>

                <span className="text-white">
                  {data.h1}
                </span>
              </nav>

              {/* Label */}

              <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-orange-300/30 bg-orange-500/10 px-4 py-2 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-orange-400" />

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-200">
                  Dynamic Solar Services
                </span>
              </div>

              {/* H1 */}

              <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
                {data.h1}
              </h1>

              {/* Intro */}

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
                {data.intro}
              </p>

              {/* CTA */}

              <div className="mt-8 flex flex-wrap gap-3">

                <a
                  href="tel:+919841582874"
                  className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-orange-600"
                >
                  Call 9841582874
                </a>

                <Link
                  to="/contact/"
                  className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  Request Consultation
                </Link>

              </div>

            </div>

          </div>

          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950/40 to-transparent" />
        </section>

        {/* ===================================================
            SERVICE INTRODUCTION + WHO IS THIS FOR + ASSESSMENT
            REDESIGNED SECTION
        ==================================================== */}

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:py-16">

            {/* Section heading */}

            <div className="mx-auto max-w-3xl text-center">

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
                Service Overview
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                {data.h1}
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                {data.intro}
              </p>

            </div>

            {/* Information area */}

            <div className="mt-10 grid overflow-hidden rounded-2xl border border-slate-200 md:grid-cols-2">

              {/* WHO IS THIS FOR */}

              <div className="border-b border-slate-200 bg-slate-50 p-7 md:border-b-0 md:border-r sm:p-9">

                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-extrabold text-white">
                    01
                  </div>

                  <div>

                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-orange-600">
                      Suitable For
                    </p>

                    <h3 className="mt-2 text-2xl font-extrabold text-slate-900">
                      Who Is This For?
                    </h3>

                  </div>

                </div>

                <p className="mt-5 pl-[60px] text-[15px] leading-7 text-slate-600">
                  This service can be considered by customers whose property,
                  electricity, water or lighting requirements and site
                  conditions are suitable for the solution.
                </p>

              </div>

              {/* ASSESSMENT */}

              <div className="bg-white p-7 sm:p-9">

                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-extrabold text-white">
                    02
                  </div>

                  <div>

                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-orange-600">
                      Site & Requirement
                    </p>

                    <h3 className="mt-2 text-2xl font-extrabold text-slate-900">
                      Assessment
                    </h3>

                  </div>

                </div>

                <p className="mt-5 pl-[60px] text-[15px] leading-7 text-slate-600">
                  The right solution depends on the site, required capacity,
                  equipment configuration, usage pattern and project
                  objectives. Dynamic Solar should confirm the final
                  specification before purchase or installation.
                </p>

              </div>

            </div>

            {/* Small consultation row */}

            <div className="mt-6 flex flex-col gap-4 rounded-xl bg-slate-900 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">

              <div>

                <p className="font-bold text-white">
                  Not sure which solution is suitable?
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  Share your site information and requirements with our team.
                </p>

              </div>

              <Link
                to="/contact/"
                className="inline-flex shrink-0 items-center justify-center rounded-lg bg-orange-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
              >
                Discuss Your Requirement →
              </Link>

            </div>

          </div>
        </section>

        {/* ===================================================
            PROCESS
        ==================================================== */}

        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12 lg:py-16">

            <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">

              <div>

                <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
                  Our Process
                </p>

                <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  How We Work
                </h2>

              </div>

              <p className="max-w-lg text-sm leading-7 text-slate-600">
                A structured process from initial requirement discussion
                through installation or commissioning as applicable.
              </p>

            </div>

            <div className="relative">

              <div className="absolute left-5 top-5 hidden h-px w-[calc(100%-40px)] bg-slate-200 lg:block" />

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">

                {PROCESS.map((step, index) => (
                  <div
                    key={step}
                    className="relative"
                  >

                    <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-sm font-extrabold text-white ring-8 ring-slate-50">
                      {index + 1}
                    </div>

                    <h3 className="mt-5 text-sm font-bold leading-6 text-slate-900">
                      {step}
                    </h3>

                  </div>
                ))}

              </div>

            </div>

          </div>
        </section>

        {/* ===================================================
            ASSESSMENT CTA
        ==================================================== */}

        <section className="bg-orange-500">
          <div className="mx-auto max-w-7xl px-5 py-9 sm:px-8 lg:px-12">

            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

              <div>

                <h2 className="text-2xl font-extrabold text-white">
                  Need a Site-Specific Assessment?
                </h2>

                <p className="mt-1 text-sm leading-6 text-orange-50">
                  Contact Dynamic Solar to discuss your requirement.
                </p>

              </div>

              <div className="flex flex-wrap gap-3">

                <a
                  href="tel:+919841582874"
                  className="rounded-lg bg-white px-5 py-3 text-sm font-bold text-slate-900 transition hover:bg-slate-100"
                >
                  Call 9841582874
                </a>

                <Link
                  to="/contact/"
                  className="rounded-lg border border-white/50 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Contact Us
                </Link>

              </div>

            </div>

          </div>
        </section>

        {/* ===================================================
            LOCATION SECTION
        ==================================================== */}

        {path === "/services/solar-panel-installation/" && (
          <section className="bg-white">
            <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12">

              <div className="mb-7">

                <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
                  Service Areas
                </p>

                <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
                  Solar Panel Installation Locations
                </h2>

              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

                {LOCATION_PAGES.map((location) => (
                  <Link
                    key={location.path}
                    to={location.path}
                    className="group flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 transition hover:border-orange-300 hover:bg-orange-50"
                  >

                    <span className="font-semibold text-slate-900">
                      {location.title}
                    </span>

                    <span className="ml-4 text-orange-600 transition group-hover:translate-x-1">
                      →
                    </span>

                  </Link>
                ))}

              </div>

            </div>
          </section>
        )}

        {/* ===================================================
            FAQ
        ==================================================== */}

        <section className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 lg:py-16">

            <div className="mb-8 text-center">

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
                FAQ
              </p>

              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Frequently Asked Questions
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                Answers to common questions about this service and the
                assessment process.
              </p>

            </div>

            <FAQ items={data.faq} />

          </div>
        </section>

        {/* ===================================================
            RELATED SERVICES
        ==================================================== */}

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12">

            <div className="flex items-end justify-between gap-5">

              <div>

                <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
                  Explore More
                </p>

                <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
                  Other Solar Services
                </h2>

              </div>

              <Link
                to="/services/"
                className="hidden text-sm font-bold text-orange-600 transition hover:text-orange-700 sm:block"
              >
                View All Services →
              </Link>

            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {relatedServices.slice(0, 4).map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  className="group rounded-xl border border-slate-200 p-5 transition hover:-translate-y-1 hover:border-orange-300 hover:shadow-md"
                >

                  <h3 className="font-bold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {service.description}
                  </p>

                  <span className="mt-4 inline-block text-sm font-bold text-orange-600">
                    Explore →
                  </span>

                </Link>
              ))}

            </div>

          </div>
        </section>

        {/* ===================================================
            FINAL CTA
        ==================================================== */}

        <section className="bg-slate-950">
          <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12 lg:py-14">

            <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">

              <div className="max-w-2xl">

                <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-400">
                  Get Started
                </p>

                <h2 className="mt-2 text-3xl font-extrabold text-white">
                  Discuss Your Requirement with Dynamic Solar
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Share your site information and requirements so the
                  appropriate configuration can be assessed.
                </p>

              </div>

              <div className="flex shrink-0 flex-wrap gap-3">

                <a
                  href="tel:+919841582874"
                  className="rounded-lg bg-orange-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
                >
                  Call Now
                </a>

                <a
                  href="mailto:info@dynamicsolar.in"
                  className="rounded-lg border border-slate-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-900"
                >
                  Email Us
                </a>

                <Link
                  to="/contact/"
                  className="rounded-lg bg-white px-6 py-3 text-sm font-bold text-slate-900 transition hover:bg-slate-100"
                >
                  Contact Us
                </Link>

              </div>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}