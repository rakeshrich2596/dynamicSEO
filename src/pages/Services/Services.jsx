import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SEO from "../../components/SEO/SEO";

import "./Services.css";

const services = [
  {
    title: "Solar Panel Installation",
    description:
      "Solar panel installation for homes and businesses with system selection based on site and electricity requirements.",
    path: "/services/solar-panel-installation/",
  },
  {
    title: "Solar Power Plant",
    description:
      "Solar power plant solutions for suitable project requirements, subject to site assessment and system design.",
    path: "/services/solar-power-plant/",
  },
  {
    title: "Solar Water Heater",
    description:
      "Solar water-heating solutions for suitable hot-water requirements.",
    path: "/services/solar-water-heater/",
  },
  {
    title: "Solar Water Pumping Systems",
    description:
      "Solar water pumping solutions for suitable water-pumping applications.",
    path: "/services/solar-water-pumping-systems/",
  },
  {
    title: "Solar Street Lights",
    description:
      "Solar street-light solutions for suitable outdoor and lighting applications.",
    path: "/services/solar-street-lights/",
  },
];

function Services() {
  return (
    <>
      <SEO
        title="Solar Services in Tambaram | Dynamic Solar"
        description="Explore Dynamic Solar services including solar panel installation, solar power plants, solar water heaters, solar pumping systems and solar street lights."
        canonical="https://www.dynamicsolar.in/services/"
      />

      <Navbar />

      <main className="services-page">
        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="services-hero">
          <div className="services-hero-overlay"></div>

          <div className="services-hero-inner">
            <p className="services-eyebrow">Our Services</p>

            <h1 className="services-hero-title">
              Solar Services in Tambaram
            </h1>

            <p className="services-hero-description">
              Explore Dynamic Solar services including solar panel
              installation, solar power plants, solar water heaters, solar
              pumping systems, and solar street lights.
            </p>

            <nav
              className="services-breadcrumb"
              aria-label="Breadcrumb"
            >
              <Link to="/">Home</Link>
              <span aria-hidden="true">›</span>
              <span>Services</span>
            </nav>
          </div>
        </section>

        {/* =====================================================
            SERVICES
        ====================================================== */}

        <section className="services-list-section">
          <div className="services-list-inner">
            <div className="services-section-header">
              <p className="services-section-eyebrow">
                What We Offer
              </p>

              <h2 className="services-section-title">
                Our Solar Services
              </h2>

              <p className="services-section-description">
                Explore our solar service options and discuss your
                requirements with Dynamic Solar for a site-specific
                assessment.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <article
                  key={service.path}
                  className="service-card"
                >
                  <div className="service-card-content">
                    <h2 className="service-card-title">
                      {service.title}
                    </h2>

                    <p className="service-card-description">
                      {service.description}
                    </p>
                  </div>

                  <Link
                    to={service.path}
                    className="service-card-link"
                    aria-label={`View ${service.title} service`}
                  >
                    View Service
                    <span aria-hidden="true">→</span>
                  </Link>
                </article>
              ))}
            </div>

            {/* =================================================
                CTA
            ================================================== */}

            <section className="services-cta">
              <div className="services-cta-content">
                <p className="services-cta-eyebrow">
                  Need a Site Assessment?
                </p>

                <h2>Discuss Your Solar Requirement</h2>

                <p>
                  The appropriate solution depends on site conditions,
                  requirements, capacity, equipment configuration and
                  project objectives. Contact Dynamic Solar to discuss
                  your requirement.
                </p>

                <div className="services-cta-actions">
                  <a
                    href="tel:+919841582874"
                    className="services-cta-primary"
                  >
                    Call 9841582874
                  </a>

                  <Link
                    to="/contact/"
                    className="services-cta-secondary"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Services;