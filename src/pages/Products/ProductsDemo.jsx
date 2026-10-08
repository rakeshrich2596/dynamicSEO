import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import SEO from "../../components/SEO/SEO";
import Seo, {
  businessSchema,
  breadcrumbSchema,
  itemListSchema,
} from "../../seo/Seo";

import { PRODUCT_CATEGORIES } from "../../data/productDraftData";


import "./ProductsDemo.css";


/* =========================================================
   CATEGORY ICONS
========================================================= */

const CATEGORY_ICONS = [
  "☀",
  "▣",
  "♨",
  "💧",
  "◉",
  "⌂",
  "⚡",
];


/* =========================================================
   PRODUCTS DEMO PAGE
========================================================= */

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
      {
        name: "Home",
        path: "/",
      },
      {
        name: "Products",
        path: "/products/",
      },
    ]),
  ]}
/>

      <Navbar />

      <main className="products-demo">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="products-demo-hero">

          <div className="container">

            <span className="products-demo-eyebrow">
              Dynamic Solar Products
            </span>

            <h1>
              Solar & Power Products
            </h1>

            <p>
              Explore solar products and power solutions
              for homes, businesses, industries and outdoor
              applications.
            </p>

            <nav
              className="products-demo-breadcrumb"
              aria-label="Breadcrumb"
            >
              <Link to="/">
                Home
              </Link>

              <span>›</span>

              <span>
                Products
              </span>
            </nav>

          </div>

        </section>


        {/* =====================================================
            CATEGORY SECTION
        ===================================================== */}

        <section className="products-demo-categories">

          <div className="container">

            <div className="products-demo-heading">

              <span>
                Product Categories
              </span>

              <h2>
                Solar Solutions for Every Requirement
              </h2>

              <p>
                Browse our solar and power products by
                application. Explore suitable solutions for
                solar generation, water heating, pumping,
                lighting, backup power and energy storage.
              </p>

            </div>


            {/* =================================================
                PRODUCT CATEGORY CARDS
            ================================================= */}

            <div className="products-demo-grid">

              {PRODUCT_CATEGORIES.map(
                (category, index) => (

                  <Link
                    key={category.slug}
                    to={`/products/${category.slug}/`}
                    className="products-demo-card"
                  >

                    <div className="products-demo-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>


                    <div className="products-demo-card-icon">
                      {CATEGORY_ICONS[index]}
                    </div>


                    <h3>
                      {category.name}
                    </h3>


                    <p>
                      {category.description}
                    </p>


                    <span className="products-demo-link">
                      Explore Products →
                    </span>

                  </Link>

                )
              )}

            </div>

          </div>

        </section>


        {/* =====================================================
            CTA
        ===================================================== */}

        <section className="products-demo-note">

          <div className="container">

            <div className="products-demo-note-inner">

              <div>

                <span>
                  Need Help Choosing?
                </span>

                <h2>
                  Find the right solar solution
                </h2>

                <p>
                  Tell us about your power, water heating,
                  pumping, lighting or energy-storage
                  requirement. Our team can help identify a
                  suitable solution based on your application.
                </p>

              </div>


              <Link
                to="/contact/"
                className="products-demo-contact"
              >
                Discuss Your Requirement →
              </Link>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}