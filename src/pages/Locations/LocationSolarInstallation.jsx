import React from "react";
import { Link, useLocation } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Seo, {
  breadcrumbSchema,
  businessSchema,
} from "../../seo/Seo";

import "./LocationSolarInstallation.css";

const LOCATION_DATA = {
  "/solar-panel-installation-tambaram/": {
    location: "Tambaram",

    title: "Solar Panel Installation in Tambaram | Dynamic Solar",

    description:
      "Looking for solar panel installation in Tambaram? Dynamic Solar is based in West Tambaram and provides solar and power-related solutions for suitable residential and business requirements. Contact the team for a site-specific assessment.",

    heroImage: "/locations/solar-tambaram.webp",

    intro:
      "Looking for solar panel installation in Tambaram? Dynamic Solar is based in West Tambaram and provides solar and power-related solutions for suitable residential and business requirements. Contact the team to discuss your electricity usage, property and installation requirements.",
  },

  "/solar-panel-installation-perungalathur/": {
    location: "Perungalathur",

    title: "Solar Panel Installation in Perungalathur | Dynamic Solar",

    description:
      "Looking for solar panel installation in Perungalathur? Dynamic Solar is based in West Tambaram and provides solar and power-related solutions for suitable residential and business requirements. Contact the team for a site-specific assessment.",

    heroImage: "/locations/solar-perungalathur.webp",

    intro:
      "Looking for solar panel installation in Perungalathur? Dynamic Solar is based in West Tambaram and provides solar and power-related solutions for suitable residential and business requirements. Contact the team to discuss your electricity usage, property and installation requirements.",
  },

  "/solar-panel-installation-guduvanchery/": {
    location: "Guduvanchery",

    title: "Solar Panel Installation in Guduvanchery | Dynamic Solar",

    description:
      "Looking for solar panel installation in Guduvanchery? Explore Dynamic Solar's solar solutions and contact the team for a site-specific assessment.",

    heroImage: "/locations/solar-guduvanchery.webp",

    intro:
      "Looking for solar panel installation in Guduvanchery? Dynamic Solar is based in West Tambaram and provides solar and power-related solutions for suitable residential and business requirements. Contact the team to discuss your electricity usage, property and installation requirements.",
  },

  "/solar-panel-installation-urapakkam/": {
    location: "Urapakkam",

    title: "Solar Panel Installation in Urapakkam | Dynamic Solar",

    description:
      "Looking for solar panel installation in Urapakkam? Explore Dynamic Solar's solar solutions and contact the team for a site-specific assessment.",

    heroImage: "/locations/solar-urapakkam.webp",

    intro:
      "Looking for solar panel installation in Urapakkam? Dynamic Solar is based in West Tambaram and provides solar and power-related solutions for suitable residential and business requirements. Contact the team to discuss your electricity usage, property and installation requirements.",
  },
};

const SOLAR_SOLUTIONS = [
  "Solar panel installation",
  "Rooftop solar solutions",
  "Solar power plant solutions",
  "Solar water heaters",
  "Solar water pumping systems",
  "Solar street lights",
  "Solar inverter and battery solutions",
];

function FAQSection({ location }) {
  const faqItems = [
    {
      question: `Who provides solar panel installation in ${location}?`,
      answer: `Dynamic Solar is based in West Tambaram and can be contacted to confirm current service availability for ${location}.`,
    },

    {
      question: `How much does solar panel installation cost in ${location}?`,
      answer:
        "There is no single price that applies to every property. Cost depends on system capacity, equipment, roof/site conditions, installation requirements and other project-specific factors. Request a site-specific quotation.",
    },

    {
      question: `Can I install rooftop solar on my home in ${location}?`,
      answer:
        "Suitability depends on roof area, shading, structural conditions, electrical requirements and the chosen system. A site assessment can determine feasibility.",
    },

    {
      question: "What size solar system do I need?",
      answer:
        "The appropriate capacity depends mainly on electricity consumption and site conditions. Share recent electricity bills and property details for a more useful assessment.",
    },

    {
      question: "How do I contact Dynamic Solar?",
      answer:
        "Call 9841582874 or email info@dynamicsolar.in.",
    },
  ];

  return (
    <section className="location-section location-faq">
      <div className="location-section-heading">
        <span className="location-section-eyebrow">FAQ</span>

        <h2>Frequently Asked Questions</h2>

        <p>
          Find answers to common questions about solar panel installation and
          solar solutions in {location}.
        </p>
      </div>

      <div className="location-faq-list">
        {faqItems.map((item) => (
          <details key={item.question} className="location-faq-item">
            <summary>{item.question}</summary>

            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function LocationSolarInstallation() {
  const { pathname } = useLocation();

  const data = LOCATION_DATA[pathname];

  /*
   * Fallback prevents the page from crashing if this component
   * is accidentally rendered on an unknown location route.
   */
  if (!data) {
    return (
      <>
        <Navbar />

        <main className="location-page">
          <section className="location-not-found">
            <div className="location-container">
              <h1>Location Not Found</h1>

              <p>
                The requested solar installation location page could not be
                found.
              </p>

              <Link to="/" className="location-primary-button">
                Back to Home
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </>
    );
  }

  const {
    location,
    title,
    description,
    heroImage,
    intro,
  } = data;

  const faqItems = [
    {
      question: `Who provides solar panel installation in ${location}?`,
      answer: `Dynamic Solar is based in West Tambaram and can be contacted to confirm current service availability for ${location}.`,
    },
    {
      question: `How much does solar panel installation cost in ${location}?`,
      answer:
        "There is no single price that applies to every property. Cost depends on system capacity, equipment, roof/site conditions, installation requirements and other project-specific factors. Request a site-specific quotation.",
    },
    {
      question: `Can I install rooftop solar on my home in ${location}?`,
      answer:
        "Suitability depends on roof area, shading, structural conditions, electrical requirements and the chosen system. A site assessment can determine feasibility.",
    },
    {
      question: "What size solar system do I need?",
      answer:
        "The appropriate capacity depends mainly on electricity consumption and site conditions. Share recent electricity bills and property details for a more useful assessment.",
    },
    {
      question: "How do I contact Dynamic Solar?",
      answer:
        "Call 9841582874 or email info@dynamicsolar.in.",
    },
  ];

  const faqSchema = faqItems.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  }));

  return (
    <>
      <Seo
        title={title}
        description={description}
        path={pathname}
        jsonLd={[
          businessSchema,

          breadcrumbSchema([
            {
              name: "Home",
              path: "/",
            },
            {
              name: `Solar Panel Installation in ${location}`,
              path: pathname,
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

      <main className="location-page">
        {/* =========================================================
            HERO
        ========================================================= */}

        <header
          className="location-hero"
          style={{
            backgroundImage: `
              linear-gradient(
                90deg,
                rgba(3, 18, 32, 0.88) 0%,
                rgba(3, 18, 32, 0.72) 45%,
                rgba(3, 18, 32, 0.48) 100%
              ),
              url("${heroImage}")
            `,
          }}
        >
          <div className="location-container">
            <div className="location-hero-content">
              <span className="location-eyebrow">
                Solar Service Area
              </span>

              <h1>Solar Panel Installation in {location}</h1>

              <p>{intro}</p>

              <div className="location-hero-actions">
                <Link
                  to="/contact/"
                  className="location-primary-button"
                >
                  Request a Site Assessment
                </Link>

                <a
                  href="tel:+919841582874"
                  className="location-secondary-button"
                >
                  Call 9841582874
                </a>
              </div>

              <nav
                className="location-breadcrumb"
                aria-label="Breadcrumb"
              >
                <Link to="/">Home</Link>

                <span>›</span>

                <span>
                  Solar Panel Installation in {location}
                </span>
              </nav>
            </div>
          </div>
        </header>

        {/* =========================================================
            MAIN CONTENT
        ========================================================= */}

        <div className="location-container location-content">
          {/* =======================================================
              INTRO
          ======================================================= */}

          <section className="location-section location-intro-section">
            <div className="location-section-heading">
              <span className="location-section-eyebrow">
                Solar Solutions
              </span>

              <h2>
                Solar Solutions for {location}
              </h2>
            </div>

            <p>
              Solar system selection depends on electricity consumption,
              roof area, shading, structural conditions, electrical
              configuration and the customer's objectives.
            </p>

            <p>
              Dynamic Solar can discuss your electricity usage, property
              and installation requirements to help determine whether a
              suitable solar solution can be considered for your
              property in {location}.
            </p>

            <div className="location-solution-grid">
              {SOLAR_SOLUTIONS.map((solution) => (
                <div
                  className="location-solution-card"
                  key={solution}
                >
                  <span className="location-solution-icon">
                    ✓
                  </span>

                  <span>{solution}</span>
                </div>
              ))}
            </div>

            <div className="location-note">
              <strong>Service availability:</strong>{" "}
              Only services currently provided by Dynamic Solar should
              be considered for your specific location and project.
              Contact the team to confirm availability.
            </div>
          </section>

          {/* =======================================================
              SITE ASSESSMENT
          ======================================================= */}

          <section className="location-section">
            <div className="location-two-column">
              <div>
                <span className="location-section-eyebrow">
                  Assessment
                </span>

                <h2>
                  Why a Site Assessment Matters
                </h2>

                <p>
                  Solar system selection depends on several property
                  and electricity-related factors. A site assessment
                  helps determine what type and capacity of system may
                  be appropriate.
                </p>

                <p>
                  The assessment can consider electricity consumption,
                  roof area, shading, structural conditions, electrical
                  configuration and the customer's objectives.
                </p>
              </div>

              <div className="location-assessment-list">
                <div className="location-assessment-item">
                  <span>01</span>
                  <div>
                    <strong>Electricity Usage</strong>
                    <p>
                      Review recent electricity consumption and usage
                      requirements.
                    </p>
                  </div>
                </div>

                <div className="location-assessment-item">
                  <span>02</span>
                  <div>
                    <strong>Roof & Site</strong>
                    <p>
                      Assess available roof or site area and relevant
                      physical conditions.
                    </p>
                  </div>
                </div>

                <div className="location-assessment-item">
                  <span>03</span>
                  <div>
                    <strong>Shading & Structure</strong>
                    <p>
                      Consider shading and structural conditions that
                      may affect installation.
                    </p>
                  </div>
                </div>

                <div className="location-assessment-item">
                  <span>04</span>
                  <div>
                    <strong>Electrical Requirements</strong>
                    <p>
                      Review the property's electrical configuration
                      and project requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* =======================================================
              INSTALLATION PROCESS
          ======================================================= */}

          <section className="location-section">
            <div className="location-section-heading">
              <span className="location-section-eyebrow">
                Our Process
              </span>

              <h2>Solar Installation Process</h2>

              <p>
                The exact process can vary depending on the property,
                system and project requirements.
              </p>
            </div>

            <div className="location-process">
              <div className="location-process-item">
                <span className="location-process-number">01</span>

                <div>
                  <h3>Discuss Your Requirement</h3>

                  <p>
                    Share your electricity usage, property details and
                    solar requirements.
                  </p>
                </div>
              </div>

              <div className="location-process-item">
                <span className="location-process-number">02</span>

                <div>
                  <h3>Review Electricity Usage</h3>

                  <p>
                    Review electricity consumption and relevant site
                    information.
                  </p>
                </div>
              </div>

              <div className="location-process-item">
                <span className="location-process-number">03</span>

                <div>
                  <h3>Assess Site Suitability</h3>

                  <p>
                    Assess roof or site suitability, shading,
                    structure and electrical conditions.
                  </p>
                </div>
              </div>

              <div className="location-process-item">
                <span className="location-process-number">04</span>

                <div>
                  <h3>Recommend a Suitable System</h3>

                  <p>
                    Recommend a system based on the assessed
                    requirements and site conditions.
                  </p>
                </div>
              </div>

              <div className="location-process-item">
                <span className="location-process-number">05</span>

                <div>
                  <h3>Plan Installation</h3>

                  <p>
                    Confirm the project scope and plan installation
                    requirements.
                  </p>
                </div>
              </div>

              <div className="location-process-item">
                <span className="location-process-number">06</span>

                <div>
                  <h3>Install & Commission</h3>

                  <p>
                    Install and commission the system as applicable to
                    the project.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* =======================================================
              SERVICE AREA NOTE
          ======================================================= */}

          <section className="location-section location-service-area">
            <div className="location-service-area-content">
              <div>
                <span className="location-section-eyebrow">
                  Service Area
                </span>

                <h2>
                  Solar Services in {location}
                </h2>

                <p>
                  This page is intended to answer searches for solar
                  services in {location}.
                </p>

                <p>
                  Dynamic Solar is based in West Tambaram. This page
                  does not claim that Dynamic Solar has a physical
                  office in {location}.
                </p>
              </div>

              <div className="location-service-area-badge">
                <span>Based in</span>

                <strong>West Tambaram</strong>
              </div>
            </div>
          </section>

          {/* =======================================================
              FAQ
          ======================================================= */}

          <FAQSection location={location} />

          {/* =======================================================
              CTA
          ======================================================= */}

          <section className="location-cta">
            <div className="location-cta-content">
              <span className="location-section-eyebrow">
                Get Started
              </span>

              <h2>
                Looking for Solar Panel Installation in {location}?
              </h2>

              <p>
                Discuss your electricity usage, property and
                installation requirements with Dynamic Solar and
                request a site-specific assessment.
              </p>

              <div className="location-cta-actions">
                <a
                  href="tel:+919841582874"
                  className="location-primary-button"
                >
                  Call 9841582874
                </a>

                <a
                  href="mailto:info@dynamicsolar.in"
                  className="location-secondary-button"
                >
                  info@dynamicsolar.in
                </a>

                <Link
                  to="/contact/"
                  className="location-outline-button"
                >
                  Contact Dynamic Solar
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default LocationSolarInstallation;