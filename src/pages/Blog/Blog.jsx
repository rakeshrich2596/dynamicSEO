
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

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(
                ".fade-in-up, .fade-in-left, .fade-in-right, .scale-up"
              )
              .forEach((item) => item.classList.add("visible"));
          } else {
            entry.target
              .querySelectorAll(
                ".fade-in-up, .fade-in-left, .fade-in-right, .scale-up"
              )
              .forEach((item) => item.classList.remove("visible"));
          }
        });
      },
      { threshold: 0.08 }
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
      activeCategory === "All" ||
      post.category === activeCategory;

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

    const matchSearch =
      normalizedSearch === "" ||
      searchableText.includes(normalizedSearch);

    return matchCategory && matchSearch;
  });

  const blogItemList = allPosts.map((post) => ({
    name: post.title,
    path: getBlogPostUrl(post.slug),
  }));

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

      <div
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

        <div className="page-hero-overlay" />

        <div className="container page-hero-content">
          <span className="page-hero-tag">Knowledge Hub</span>

          <h1 className="page-hero-title">
            Solar Energy Guides &amp; Tips
          </h1>

          <p className="page-hero-sub">
            Explore practical solar guides, installation advice,
            maintenance tips and solar energy updates from Dynamic Solar.
          </p>

          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">Blog</span>
          </nav>
        </div>
      </div>

      <section className="blog-section">
        <div className="container">
          <AnimSection className="blog-controls fade-in-up">
            <div className="blog-search-wrap">
              <span className="blog-search-icon" aria-hidden="true">
                🔍
              </span>

              <input
                type="search"
                className="blog-search"
                placeholder="Search articles..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                aria-label="Search blog posts"
              />
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
                    activeCategory === category
                      ? "blog-cat-btn--active"
                      : ""
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

          <p className="blog-count" aria-live="polite">
            {filtered.length} article
            {filtered.length !== 1 ? "s" : ""} found
          </p>

          {filtered.length > 0 ? (
            <div className="blog-full-grid">
              {filtered.map((post) => (
                <AnimSection key={post.slug}>
                  <Link
                    to={getBlogPostUrl(post.slug)}
                    className="blog-card-link hover-glow"
                    aria-label={`Read article: ${post.title}`}
                  >
                    <article
                      className="blog-card-full fade-in-up hover-glow"
                      style={{
                        "--card-bg": post.color,
                        "--card-accent": post.accent,
                      }}
                    >
                      <div className="blog-card-full-img hover-glow">
                        <img
                          src={post.image}
                          alt={post.imageAlt || post.title}
                          className="blog-card-full-photo hover-glow"
                          loading="lazy"
                          decoding="async"
                          width="640"
                          height="400"
                        />

                        <span className="blog-card-full-tag hover-glow">
                          {post.category}
                        </span>
                      </div>

                      <div className="blog-card-full-body hover-glow">
                        <h2 className="blog-card-full-title hover-glow">
                          {post.title}
                        </h2>

                        <p className="blog-card-full-excerpt hover-glow">
                          {post.excerpt}
                        </p>

                        <span className="blog-read-more-btn">
                          Read Article <span aria-hidden="true">→</span>
                        </span>
                      </div>
                    </article>
                  </Link>
                </AnimSection>
              ))}
            </div>
          ) : (
            <div className="blog-empty">
              <span aria-hidden="true">🔍</span>

              <p>
                No articles found. Try a different search or category.
              </p>

              <button
                type="button"
                className="btn-primary"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
              >
                Reset Filters
              </button>
            </div>
          )}

          <AnimSection className="blog-newsletter fade-in-up">
            <div className="newsletter-inner">
              <div className="newsletter-text">
                <h3>Get Solar Insights in Your Inbox</h3>

                <p>
                  Subscribe for solar energy guides, maintenance tips
                  and updates from Dynamic Solar.
                </p>
              </div>

              <form
                className="newsletter-form"
                onSubmit={(event) => event.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="newsletter-input"
                  aria-label="Email for newsletter"
                  autoComplete="email"
                  required
                />

                <button type="submit" className="btn-primary">
                  Subscribe
                </button>
              </form>
            </div>
          </AnimSection>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Blog;
