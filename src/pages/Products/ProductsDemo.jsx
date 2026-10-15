import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Seo, {
  businessSchema,
  breadcrumbSchema,
  itemListSchema,
} from "../../seo/Seo";

import { PRODUCT_CATEGORIES } from "../../data/productDraftData";
import "./ProductsDemo.css";

const CATEGORY_ICONS = ["☀", "▣", "♨", "💧", "◉", "⌂", "⚡"];

export default function ProductsDemo() {
  return (
    <>
      <Seo
        title="Solar Products & Power Solutions | Dynamic Solar"
        description="Explore Dynamic Solar products including solar power plants, solar panels, solar water heaters, solar water pumping systems, solar street lights, solar home UPS and solar inverter and battery solutions."
        path="/products/"
        jsonLd={[
          businessSchema,
          itemListSchema(
            "Dynamic Solar Product Categories",
            PRODUCT_CATEGORIES.map((category) => ({
              name: category.name,
              path: `/products/${category.slug}/`,
            }))
          ),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products/" },
          ]),
        ]}
      />

      <Navbar />

      <main className="products-demo">
        {/* HERO */}
        <section className="products-demo-hero">
          <div className="products-demo-hero-overlay" aria-hidden="true" />
          <div className="products-demo-container products-demo-hero-content">
            <div className="products-demo-eyebrow">
              <span className="products-demo-eyebrow-dot" />
              Smart energy. Reliable solutions.
            </div>

            <h1>
              Solar &amp; Power
              <span> Products</span>
            </h1>

            <p className="products-demo-hero-description">
              Explore practical solar and power solutions for homes, businesses,
              industries and outdoor applications. Find a category that fits your
              needs and talk to our team about the right setup.
            </p>

            <div className="products-demo-hero-actions">
              <a href="#product-categories" className="products-demo-primary-button">
                Explore Categories <span aria-hidden="true">↓</span>
              </a>
              <Link to="/contact/" className="products-demo-secondary-button">
                Talk to Our Team <span aria-hidden="true">↗</span>
              </Link>
            </div>

            <nav className="products-demo-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Products</span>
            </nav>
          </div>

          <div className="products-demo-hero-bottom" aria-hidden="true">
            <span>Energy solutions for everyday needs</span>
            <span className="products-demo-hero-line" />
          </div>
        </section>

        {/* CATEGORY SECTION */}
        <section
          className="products-demo-categories"
          id="product-categories"
        >
          <div className="products-demo-container">
            <div className="products-demo-heading">
              <div className="products-demo-section-kicker">
                <span /> Product Categories
              </div>
              <h2>
                Solar solutions for
                <span> every requirement</span>
              </h2>
              <p>
                Browse by application to explore solutions for solar generation,
                water heating, pumping, lighting, backup power and energy storage.
              </p>
            </div>

            <div className="products-demo-grid">
              {PRODUCT_CATEGORIES.map((category, index) => (
                <Link
                  key={category.slug}
                  to={`/products/${category.slug}/`}
                  className="products-demo-card"
                >
                  <div className="products-demo-card-top">
                    <div className="products-demo-card-icon" aria-hidden="true">
                      {CATEGORY_ICONS[index % CATEGORY_ICONS.length]}
                    </div>
                    <span className="products-demo-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3>{category.name}</h3>
                  <p>{category.description}</p>

                  <span className="products-demo-link">
                    Explore Products <span aria-hidden="true">↗</span>
                  </span>
                </Link>
              ))}
            </div>

            <div className="products-demo-category-footnote">
              <span className="products-demo-footnote-icon" aria-hidden="true">
                ✓
              </span>
              <p>
                Need help comparing options? Our team can discuss your application
                and help you identify what needs to be assessed before choosing a
                product.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="products-demo-note">
          <div className="products-demo-container">
            <div className="products-demo-note-inner">
              <div className="products-demo-cta-mark" aria-hidden="true">
                <span>☀</span>
              </div>

              <div className="products-demo-note-copy">
                <div className="products-demo-section-kicker products-demo-section-kicker-light">
                  <span /> Need help choosing?
                </div>
                <h2>Let’s find the right solar solution.</h2>
                <p>
                  Tell us about your power, water heating, pumping, lighting or
                  energy-storage requirement. We can discuss your application and
                  the details needed for a suitable recommendation.
                </p>
              </div>

              <Link to="/contact/" className="products-demo-contact">
                Discuss Your Requirement <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
