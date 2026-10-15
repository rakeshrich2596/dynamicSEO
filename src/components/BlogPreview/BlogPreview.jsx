
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "./BlogPreview.css";

const posts = [
  {
    tag: "Solar Tips",
    title: "Top 5 Benefits of Installing Solar Panels in Tamil Nadu",
    excerpt:
      "Tamil Nadu's abundant sunshine and progressive net metering policy make it one of India's best states for solar adoption. Discover why now is the perfect time to go solar.",
    color: "#fff7ed",
    accent: "#ff6b1a",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=85",
  },
  {
    tag: "Policy & Subsidies",
    title: "How Government Subsidies Make Solar Affordable in 2025",
    excerpt:
      "MNRE's latest subsidy structure can cover up to 40% of your solar installation cost. We break down exactly how to claim your entitlements with zero paperwork hassle.",
    color: "#eff6ff",
    accent: "#0284c7",
    image:
      "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=900&q=85",
  },
  {
    tag: "Product Guide",
    title: "Solar Water Heaters vs Traditional Geysers: A Full Comparison",
    excerpt:
      "Traditional electric geysers account for up to 25% of household electricity consumption. Learn how a solar water heater pays for itself within 18–24 months.",
    color: "#f0fdf4",
    accent: "#16a34a",
    image:
      "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=900&q=85",
  },
];

const HEADING = "Solar Knowledge Hub";

function useTypewriter(text, active, speed = 45) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!active) {
      setDisplayed("");
      setDone(false);
      return;
    }

    let index = 0;
    setDisplayed("");
    setDone(false);

    const timer = setInterval(() => {
      index += 1;
      setDisplayed(text.slice(0, index));

      if (index >= text.length) {
        clearInterval(timer);
        setDone(true);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, active, speed]);

  return { displayed, done };
}

function TypewriterHeading({ active }) {
  const { displayed, done } = useTypewriter(HEADING, active);
  const highlightStart = "Solar Knowledge ".length;

  return (
    <h2 className="bp-title">
      {displayed.length <= highlightStart ? (
        displayed
      ) : (
        <>
          {displayed.slice(0, highlightStart)}
          <span>{displayed.slice(highlightStart)}</span>
        </>
      )}

      {!done && <span className="bp-cursor" aria-hidden="true">|</span>}
    </h2>
  );
}

function BlogPreview() {
  const sectionRef = useRef(null);
  const [headingActive, setHeadingActive] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const heading = section.querySelector(".bp-header");

    const headingObserver = new IntersectionObserver(
      ([entry]) => {
        setHeadingActive(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (heading) headingObserver.observe(heading);

    const cards = section.querySelectorAll(".bp-card");

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);

            setVisibleCards((previous) =>
              previous.includes(index)
                ? previous
                : [...previous, index]
            );
          }
        });
      },
      { threshold: 0.12 }
    );

    cards.forEach((card) => cardObserver.observe(card));

    return () => {
      headingObserver.disconnect();
      cardObserver.disconnect();
    };
  }, []);

  return (
    <section className="blog-preview" ref={sectionRef}>
      <div className="bp-container">
        {/* Section heading */}
        <header className="bp-header">
          <span className="bp-tag">Latest Insights</span>

          <TypewriterHeading active={headingActive} />

          <p className="bp-subtitle">
            Stay informed with the latest solar energy news, guides, and
            tips from our team of certified solar experts.
          </p>

          <span className="bp-heading-line" aria-hidden="true" />
        </header>

        {/* Blog cards */}
        <div className="bp-grid">
          {posts.map((post, index) => (
            <article
              key={post.title}
              data-index={index}
              className={`bp-card ${
                visibleCards.includes(index) ? "bp-card-visible" : ""
              }`}
              style={{
                "--card-accent": post.accent,
                "--card-background": post.color,
                "--card-delay": `${index * 120}ms`,
              }}
            >
              <Link
                to="/blog"
                className="bp-image-link"
                aria-label={`Read ${post.title}`}
              >
                <div className="bp-image-wrap">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="bp-image"
                    loading="lazy"
                  />

                  <span className="bp-card-tag">{post.tag}</span>
                </div>
              </Link>

              <div className="bp-card-body">
                <h3 className="bp-card-title">
                  {post.title}
                </h3>

                <p className="bp-card-excerpt">
                  {post.excerpt}
                </p>

                <Link to="/blog" className="bp-read-more">
                  Read Article <span aria-hidden="true">⟶</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View all button */}
        <div className="bp-footer">
          <Link to="/blog" className="bp-view-all">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BlogPreview;
