import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useInView } from "../../hooks/useInView";

import { allPosts, categories } from "../../data/blogPosts";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import Seo, {
  businessSchema,
  itemListSchema,
  breadcrumbSchema,
} from "../../seo/Seo";

import "./Blog.css";

const BLOG_PATH = "/blog/";

function getBlogPostUrl(slug) {
  return `${BLOG_PATH}${slug}/`;
}

function AnimSection({ children, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const animatedElements = element.querySelectorAll(
      ".fade-in-up, .fade-in-left, .fade-in-right, .scale-up"
    );

    if (!("IntersectionObserver" in window)) {
      animatedElements.forEach((item) => item.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(
                ".fade-in-up, .fade-in-left, .fade-in-right, .scale-up"
              )
              .forEach((item) => item.classList.add("visible"));
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [heroRef, heroInView] = useInView();

  const normalizedSearch = search.trim().toLowerCase();

  const filtered = allPosts.filter((post) => {
    const matchCategory =
      activeCategory === "All" || post.category === activeCategory;

    const searchableText = [
      post.title,
      post.metaTitle,
      post.metaDescription,
      post.excerpt,
      post.category,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return (
      matchCategory &&
      (normalizedSearch === "" || searchableText.includes(normalizedSearch))
    );
  });

  const blogItemList = allPosts.map((post) => ({
    name: post.title,
    path: getBlogPostUrl(post.slug),
  }));

  const resetFilters = () => {
    setSearch("");
    setActiveCategory("All");
  };

  return (
    <>
      <Navbar />

      <Seo
        title="Solar Energy Guides & Tips in Tamil Nadu | Dynamic Solar"
        description="Explore solar energy guides, rooftop solar installation advice, government subsidy information, solar panel maintenance tips and product comparisons from Dynamic Solar."
        path={BLOG_PATH}
        jsonLd={[
          businessSchema,
          itemListSchema("Dynamic Solar Solar Energy Blog", blogItemList),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: BLOG_PATH },
          ]),
        ]}
      />

      <header
        ref={heroRef}
        className={`page-hero blog-hero ${
          heroInView ? "animate-typing" : ""
        }`}
      >
        <div className="blog-hero-bg" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1920&q=80"
            alt=""
            className="blog-hero-photo"
            fetchPriority="high"
          />
        </div>

        <div className="blog-hero-overlay" aria-hidden="true" />

        <div className="container page-hero-content blog-hero-content">
          <span className="page-hero-tag">Knowledge Hub</span>
          <h1 className="page-hero-title">Solar Energy Guides &amp; Tips</h1>
          <p className="page-hero-sub">
            Explore practical solar guides, installation advice, maintenance
            tips and solar energy updates from Dynamic Solar.
          </p>

          <nav className="breadcrumb blog-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">Blog</span>
          </nav>
        </div>
      </header>

      <main className="blog-section">
        <div className="container blog-container">
          <AnimSection className="blog-controls fade-in-up">
            <div className="blog-controls-top">
              <div className="blog-section-intro">
                <span className="blog-eyebrow">Explore our articles</span>
                <h2>Latest Solar Insights</h2>
                <p>
                  Clear, practical information to help you make smarter solar
                  energy decisions.
                </p>
              </div>

              <label className="blog-search-wrap">
                <span className="blog-search-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" focusable="false">
                    <circle cx="10.8" cy="10.8" r="6.8" />
                    <path d="m16 16 4.2 4.2" />
                  </svg>
                </span>
                <input
                  type="search"
                  className="blog-search"
                  placeholder="Search articles..."
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  aria-label="Search blog posts"
                />
              </label>
            </div>

            <div
              className="blog-categories"
              role="tablist"
              aria-label="Filter articles by category"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`blog-cat-btn ${
                    activeCategory === category ? "blog-cat-btn--active" : ""
                  }`}
                  onClick={() => setActiveCategory(category)}
                  role="tab"
                  aria-selected={activeCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>
          </AnimSection>

          <div className="blog-results-row">
            <p className="blog-count" aria-live="polite">
              <strong>{filtered.length}</strong>{" "}
              {filtered.length === 1 ? "article" : "articles"} found
              {normalizedSearch ? (
                <span className="blog-search-note"> for “{search.trim()}”</span>
              ) : null}
            </p>
            {(search || activeCategory !== "All") && (
              <button
                type="button"
                className="blog-reset-btn"
                onClick={resetFilters}
              >
                Clear filters <span aria-hidden="true">×</span>
              </button>
            )}
          </div>

          {filtered.length > 0 ? (
            <div className="blog-full-grid">
              {filtered.map((post) => (
                <AnimSection key={post.slug} className="blog-grid-item">
                  <Link
                    to={getBlogPostUrl(post.slug)}
                    className="blog-card-link"
                    aria-label={`Read article: ${post.title}`}
                  >
                    <article
                      className="blog-card-full fade-in-up"
                      style={{
                        "--card-bg": post.color || "#f4f7fa",
                        "--card-accent": post.accent || "#f47b20",
                      }}
                    >
                      <div className="blog-card-full-img">
                        <img
                          src={post.image}
                          alt={post.imageAlt || post.title}
                          className="blog-card-full-photo"
                          loading="lazy"
                          decoding="async"
                          width="640"
                          height="400"
                        />
                        <span className="blog-card-full-tag">
                          {post.category}
                        </span>
                      </div>

                      <div className="blog-card-full-body">
                        <span className="blog-card-kicker">
                          <span className="blog-card-kicker-dot" />
                          Solar knowledge
                        </span>
                        <h2 className="blog-card-full-title">{post.title}</h2>
                        <p className="blog-card-full-excerpt">{post.excerpt}</p>
                        <span className="blog-read-more-btn">
                          Read article <span aria-hidden="true">→</span>
                        </span>
                      </div>
                    </article>
                  </Link>
                </AnimSection>
              ))}
            </div>
          ) : (
            <div className="blog-empty">
              <span className="blog-empty-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" focusable="false">
                  <circle cx="10.8" cy="10.8" r="6.8" />
                  <path d="m16 16 4.2 4.2" />
                </svg>
              </span>
              <h2>No articles found</h2>
              <p>Try another keyword or choose a different category.</p>
              <button type="button" className="blog-reset-primary" onClick={resetFilters}>
                Reset filters
              </button>
            </div>
          )}

          <AnimSection className="blog-newsletter fade-in-up">
            <div className="newsletter-decoration" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="newsletter-inner">
              <div className="newsletter-text">
                <span className="newsletter-eyebrow">Stay informed</span>
                <h2>Get Solar Insights in Your Inbox</h2>
                <p>
                  Discover useful solar guides, maintenance tips and updates
                  from Dynamic Solar.
                </p>
              </div>

              <form
                className="newsletter-form"
                onSubmit={(event) => event.preventDefault()}
              >
                <label className="sr-only" htmlFor="blog-newsletter-email">
                  Email address
                </label>
                <input
                  id="blog-newsletter-email"
                  type="email"
                  placeholder="Enter your email address"
                  className="newsletter-input"
                  autoComplete="email"
                  required
                />
                <button type="submit" className="newsletter-submit">
                  Subscribe <span aria-hidden="true">→</span>
                </button>
                <p className="newsletter-note">
                  Helpful updates only. No spam.
                </p>
              </form>
            </div>
          </AnimSection>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Blog;
