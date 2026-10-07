import { useEffect } from "react";

const SITE_URL = "https://dynamicsolar.in";

function SEO({
  title,
  description,
  canonical,
  image = `${SITE_URL}/favicon.png`,
  type = "website",
  noindex = false,
}) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name, content, attribute = "name") => {
      if (!content) return;

      let element = document.head.querySelector(
        `meta[${attribute}="${name}"]`
      );

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    const setLink = (rel, href) => {
      let element = document.head.querySelector(`link[rel="${rel}"]`);

      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", rel);
        document.head.appendChild(element);
      }

      element.setAttribute("href", href);
    };

    // Basic SEO
    setMeta("description", description);

    // Robots
    setMeta(
      "robots",
      noindex
        ? "noindex, nofollow"
        : "index, follow, max-image-preview:large"
    );

    // Canonical
    setLink("canonical", canonical);

    // Open Graph
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:url", canonical, "property");
    setMeta("og:type", type, "property");
    setMeta("og:image", image, "property");
    setMeta("og:site_name", "Dynamic Solar", "property");

    // Twitter
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", image);
  }, [title, description, canonical, image, type, noindex]);

  return null;
}

export default SEO;