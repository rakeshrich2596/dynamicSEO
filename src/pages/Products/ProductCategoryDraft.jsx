import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import Seo, {
  businessSchema,
  breadcrumbSchema,
} from "../../seo/Seo";

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
   BRAND INITIALS
========================================================= */

const getBrandInitials = (brand = "") => {
  const words = brand.trim().split(/\s+/).filter(Boolean);

  if (words.length >= 2) {
    return words
      .slice(0, 2)
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase();
  }

  return brand.substring(0, 2).toUpperCase();
};

/* =========================================================
   PRODUCT IMAGE
========================================================= */

const ProductImage = ({ product }) => {
  const [imageError, setImageError] = useState(false);

  const hasImage = Boolean(product?.image) && !imageError;

  return (
    <div className="draft-product-image">
      {hasImage ? (
        <div className="draft-product-image-inner">
          <img
            src={product.image}
            alt={`${product.brand || "Dynamic Solar"} ${
              product.name || "Solar Product"
            }`}
            className="draft-product-real-image"
            loading="lazy"
            onError={() => setImageError(true)}
          />
        </div>
      ) : (
        <div className="draft-product-image-fallback">
          <div className="draft-product-fallback-mark">
            {getBrandInitials(product?.brand || "Dynamic Solar")}
          </div>

          <span className="draft-product-fallback-brand">
            {product?.brand || "Dynamic Solar"}
          </span>

          <strong>{product?.name || product?.type || "Solar Solution"}</strong>

          <small>Solar Product</small>
        </div>
      )}

      {product?.badge && (
        <span className="draft-product-badge">{product.badge}</span>
      )}
    </div>
  );
};

/* =========================================================
   PRODUCT CARD
========================================================= */

const ProductCard = ({ product }) => {
  return (
    <article className="draft-product-card">
      {/* IMAGE */}

      <ProductImage product={product} />

      {/* CONTENT */}

      <div className="draft-product-content">
        {/* BRAND */}

        {product.brand && (
          <span className="draft-product-brand">{product.brand}</span>
        )}

        {/* PRODUCT NAME */}

        <h3>{product.name}</h3>

        {/* PRODUCT TYPE */}

        {product.type && (
          <span className="draft-product-type">{product.type}</span>
        )}

        {/* DESCRIPTION */}

        {product.description && (
          <p className="draft-product-description">{product.description}</p>
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
                <div className="draft-spec-row" key={index}>
                  <span>{spec.label}</span>

                  <strong>{spec.value}</strong>
                </div>
              ))}
            </div>
          </details>
        )}

        {/* CTA */}

        <Link to="/contact/" className="draft-product-btn">
          <span>Enquire Now</span>

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

      <span className="draft-eyebrow">Product Range Under Confirmation</span>

      <h3>{category.name}</h3>

      <p>
        Product details for this category are currently under confirmation.
        Approved products will be added after review.
      </p>

      <Link to="/contact/" className="draft-primary-btn">
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

  /* =======================================================
     FIND CATEGORY
  ======================================================= */

  const categoryData = PRODUCT_CATEGORIES.find(
    (item) => item.slug?.toLowerCase() === category?.toLowerCase(),
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
              <span className="draft-eyebrow">Products</span>

              <h1>Product Category Not Found</h1>

              <p>The product category you are looking for is not available.</p>

              <Link to="/products/" className="draft-primary-btn">
                View All Products
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </>
    );
  }

  /* =======================================================
     PRODUCTS
  ======================================================= */

  const products = PRODUCT_DRAFTS?.[categoryData.slug] || [];

  /* =======================================================
     CATEGORY HERO IMAGE
  ======================================================= */

  const categoryIndex = PRODUCT_CATEGORIES.findIndex(
    (item) => item.slug === categoryData.slug,
  );

  const heroImage = HERO_IMAGES[categoryIndex % HERO_IMAGES.length];

  /* =======================================================
     PAGE
  ======================================================= */

  return (
    <>
      <Seo
        title={`${categoryData.name} | Dynamic Solar`}
        description={categoryData.description}
        path={`/products/${categoryData.slug}/`}
        jsonLd={[
          businessSchema,

          // itemListSchema(
          //   `${categoryData.name} Products`,
          //   products.map((product) => ({
          //     name: product.name,
          //     path: `/products/${categoryData.slug}/`,
          //   })),
          // ),

          breadcrumbSchema([
            {
              name: "Home",
              path: "/",
            },
            {
              name: "Products",
              path: "/products/",
            },
            {
              name: categoryData.name,
              path: `/products/${categoryData.slug}/`,
            },
          ]),
        ]}
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
                rgba(5, 20, 30, 0.84) 0%,
                rgba(5, 20, 30, 0.68) 48%,
                rgba(5, 20, 30, 0.38) 100%
              ),
              url("${heroImage}")
            `,
          }}
        >
          <div className="draft-container">
            {/* BREADCRUMB */}

            <div className="draft-breadcrumb">
              <Link to="/">Home</Link>

              <span>/</span>

              <Link to="/products/">Products</Link>

              <span>/</span>

              <span>{categoryData.name}</span>
            </div>

            {/* HERO CONTENT */}

            <div className="draft-hero-content">
              <div className="draft-hero-text">
                <span className="draft-eyebrow">Product Category</span>

                <h1>{categoryData.name}</h1>

                <p>{categoryData.description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================
            PRODUCTS SECTION
        ================================================= */}

        <section className="draft-products-section">
          <div className="draft-container">
            {/* SECTION HEADING */}

            <div className="draft-section-heading">
              <div>
                <span className="draft-eyebrow">Product Range</span>

                <h2>{categoryData.name} Solutions</h2>
              </div>

              <p>
                Explore suitable products and solutions available from Dynamic
                Solar and its associated brands.
              </p>
            </div>

            {/* PRODUCTS */}

            {products.length > 0 ? (
              <div className="draft-products-grid">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <EmptyCategory category={categoryData} />
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
                <span className="draft-eyebrow">Need Product Guidance?</span>

                <h2>Looking for the right {categoryData.name}?</h2>

                <p>
                  Contact Dynamic Solar to discuss your requirements and
                  identify a suitable solution.
                </p>
              </div>

              <Link to="/contact/" className="draft-primary-btn">
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
