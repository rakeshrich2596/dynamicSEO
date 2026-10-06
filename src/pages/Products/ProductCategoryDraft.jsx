import { Link, useParams } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SEO from "../../components/SEO/SEO";

import {
  PRODUCT_CATEGORIES,
  PRODUCT_DRAFTS,
} from "../../data/productDraftData";

import "./ProductCategoryDraft.css";

/* =========================================================
   HERO IMAGES
========================================================= */

const HERO_IMAGES = [
  "/locations/solar-tambaram.webp",
  "/locations/solar-guduvanchery.webp",
  "/locations/solar-perungalathur.webp",
  "/locations/solar-urapakkam.webp",
];

/* =========================================================
   PRODUCT CARD
========================================================= */

const ProductCard = ({ product }) => {
  return (
    <article className="draft-product-card">
      {/* IMAGE */}
      <div className="draft-product-image">
        {product.image ? (
          <img
            src={product.image}
            alt={`${product.brand} ${product.name}`}
            className="draft-product-real-image"
            loading="lazy"
          />
        ) : (
          <div className="draft-product-image-placeholder">
            Product Image
          </div>
        )}

        {product.badge && (
          <span className="draft-product-badge">
            {product.badge}
          </span>
        )}
      </div>

      {/* CONTENT */}
      <div className="draft-product-content">
        {product.brand && (
          <span className="draft-product-brand">
            {product.brand}
          </span>
        )}

        <h3>{product.name}</h3>

        {product.type && (
          <span className="draft-product-type">
            {product.type}
          </span>
        )}

        {product.description && (
          <p className="draft-product-description">
            {product.description}
          </p>
        )}

        {/* META */}
        {(product.range || product.warranty) && (
          <div className="draft-product-meta">
            {product.range && (
              <div className="draft-meta-item">
                <span>Capacity / Range</span>
                <strong>{product.range}</strong>
              </div>
            )}

            {product.warranty && (
              <div className="draft-meta-item">
                <span>Warranty</span>
                <strong>{product.warranty}</strong>
              </div>
            )}
          </div>
        )}

        {/* HIGHLIGHTS */}
        {product.highlights?.length > 0 && (
          <div className="draft-highlights">
            <h4>Key Highlights</h4>

            <ul>
              {product.highlights.map((item, index) => (
                <li key={index}>
                  <span>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* SPECIFICATIONS */}
        {product.specs?.length > 0 && (
          <details className="draft-specs">
            <summary>
              <span>View Specifications</span>
              <span>+</span>
            </summary>

            <div className="draft-specs-content">
              {product.specs.map((spec, index) => (
                <div
                  className="draft-spec-row"
                  key={index}
                >
                  <span>{spec.label}</span>
                  <strong>{spec.value}</strong>
                </div>
              ))}
            </div>
          </details>
        )}

        {/* CTA */}
        <Link
          to="/contact/"
          className="draft-product-btn"
        >
          Enquire Now
          <span>→</span>
        </Link>
      </div>
    </article>
  );
};

/* =========================================================
   EMPTY CATEGORY
========================================================= */

const EmptyCategory = ({ category }) => {
  return (
    <div className="draft-empty-category">
      <div className="draft-empty-icon">+</div>

      <span className="draft-eyebrow">
        Product Range Under Confirmation
      </span>

      <h3>{category.name}</h3>

      <p>
        Product details for this category are currently under
        confirmation. Approved products will be added after TL
        review.
      </p>

      <Link
        to="/contact/"
        className="draft-primary-btn"
      >
        Contact Dynamic Solar
      </Link>
    </div>
  );
};

/* =========================================================
   PRODUCT CATEGORY PAGE
========================================================= */

const ProductCategoryDraft = () => {
  const { category } = useParams();

  /* -------------------------------------------------------
     DEBUG
     This helps confirm what URL React is receiving.
  ------------------------------------------------------- */

  console.log(
    "Product Category URL:",
    category
  );

  console.log(
    "Available Product Categories:",
    PRODUCT_CATEGORIES
  );

  /* -------------------------------------------------------
     FIND CATEGORY
  ------------------------------------------------------- */

  const categoryData = PRODUCT_CATEGORIES.find(
    (item) =>
      item.slug?.toLowerCase() ===
      category?.toLowerCase()
  );

  /* =======================================================
     CATEGORY NOT FOUND
  ======================================================= */

  if (!categoryData) {
    return (
      <>
        <Navbar />

        <main className="draft-product-page">
          <section className="draft-not-found">
            <div className="draft-container">
              <span className="draft-eyebrow">
                Products
              </span>

              <h1>
                Product Category Not Found
              </h1>

              <p>
                The product category you are looking for
                is not available.
              </p>

              <Link
                to="/products/"
                className="draft-primary-btn"
              >
                View All Products
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </>
    );
  }

  /* -------------------------------------------------------
     PRODUCTS
  ------------------------------------------------------- */

  const products =
    PRODUCT_DRAFTS?.[categoryData.slug] || [];

  /* -------------------------------------------------------
     HERO IMAGE
     
     Selects one of the four location images based
     on the product category index.
  ------------------------------------------------------- */

  const categoryIndex =
    PRODUCT_CATEGORIES.findIndex(
      (item) =>
        item.slug === categoryData.slug
    );

  const heroImage =
    HERO_IMAGES[
      categoryIndex % HERO_IMAGES.length
    ];

  /* =======================================================
     CATEGORY PAGE
  ======================================================= */

  return (
    <>
      <SEO
        title={`${categoryData.name} | Dynamic Solar`}
        description={categoryData.description}
        canonical={`https://www.dynamicsolar.in/products/${categoryData.slug}/`}
      />

      <Navbar />

      <main className="draft-product-page">

        {/* =================================================
            HERO
        ================================================= */}

        <section
          className="draft-product-hero"
          style={{
            backgroundImage: `
              linear-gradient(
                90deg,
                rgba(5, 20, 30, 0.82) 0%,
                rgba(5, 20, 30, 0.65) 50%,
                rgba(5, 20, 30, 0.35) 100%
              ),
              url("${heroImage}")
            `,
          }}
        >
          <div className="draft-container">

            {/* BREADCRUMB */}

            <div className="draft-breadcrumb">

              <Link to="/">
                Home
              </Link>

              <span>/</span>

              <Link to="/products/">
                Products
              </Link>

              <span>/</span>

              <span>
                {categoryData.name}
              </span>

            </div>

            {/* HERO CONTENT */}

            <div className="draft-hero-content">

              <div className="draft-hero-text">

                <span className="draft-eyebrow">
                  Product Category
                </span>

                <h1>
                  {categoryData.name}
                </h1>

                <p>
                  {categoryData.description}
                </p>

              </div>

            </div>

          </div>
        </section>

        {/* =================================================
            PRODUCTS
        ================================================= */}

        <section className="draft-products-section">

          <div className="draft-container">

            <div className="draft-section-heading">

              <div>

                <span className="draft-eyebrow">
                  Product Range
                </span>

                <h2>
                  {categoryData.name} Solutions
                </h2>

              </div>

              <p>
                Product information shown here is currently
                a draft for internal review and TL approval.
              </p>

            </div>

            {/* PRODUCTS */}

            {products.length > 0 ? (

              <div className="draft-products-grid">

                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}

              </div>

            ) : (

              <EmptyCategory
                category={categoryData}
              />

            )}

          </div>

        </section>

        {/* =================================================
            CTA
        ================================================= */}

        <section className="draft-category-cta">

          <div className="draft-container">

            <div className="draft-cta-inner">

              <div>

                <span className="draft-eyebrow">
                  Need Product Guidance?
                </span>

                <h2>
                  Looking for the right{" "}
                  {categoryData.name}?
                </h2>

                <p>
                  Contact Dynamic Solar to discuss your
                  requirements and identify a suitable
                  solution.
                </p>

              </div>

              <Link
                to="/contact/"
                className="draft-primary-btn"
              >
                Contact Us
                <span>→</span>
              </Link>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
};

export default ProductCategoryDraft;