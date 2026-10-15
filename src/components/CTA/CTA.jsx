
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import "./CTA.css";

function CTA() {
  const ref = useRef(null);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;

    const animatedElements = section.querySelectorAll(
      ".fade-in-up, .fade-in-left, .fade-in-right, .scale-up"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animatedElements.forEach((element) => {
              element.classList.add("visible");
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="cta-section" ref={ref}>
      {/* Background image */}
      <div className="cta-bg-image" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1920&q=80"
          alt=""
          className="cta-bg-photo"
          loading="lazy"
        />
      </div>

      {/* Dark overlay */}
      <div className="cta-bg-overlay" aria-hidden="true" />

      {/* Decorative gradient */}
      <div className="cta-bg-pattern" aria-hidden="true" />

      <div className="container cta-inner">
        <span className="cta-eyebrow fade-in-up">
          Ready to Switch?
        </span>

        <h2 className="cta-heading fade-in-up delay-1">
          Start Saving with <span>Solar Energy</span> Today
        </h2>

        <p className="cta-sub fade-in-up delay-2">
          Get a free, no-obligation consultation from our certified
          solar experts. We'll assess your property, calculate your
          savings, and handle every step — from design to installation
          to subsidy claims.
        </p>

        <div className="cta-actions fade-in-up delay-3">
          <Link to="/contact" className="cta-btn-primary">
            Get a Free Quote <span aria-hidden="true">↗</span>
          </Link>

          <Link to="/solar-calculator" className="cta-btn-ghost">
            Calculate Your Savings
          </Link>
        </div>

        <div className="cta-trust fade-in-up delay-4">
          <span>✓ Free Site Assessment</span>
          <span>✓ No Hidden Costs</span>
          <span>✓ Subsidy Assistance</span>
          <span>✓ 25-Year Warranty</span>
        </div>
      </div>
    </section>
  );
}

export default CTA;
