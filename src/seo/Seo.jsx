import { useEffect } from "react";

const SITE_URL = "https://dynamicsolar.in";

function upsertMeta(attribute, key, content) {
  if (!content) return;

  let el = document.head.querySelector(
    `meta[${attribute}="${key}"]`
  );

  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attribute, key);
    document.head.appendChild(el);
  }

  el.setAttribute("content", content);
}

function Seo({
  title,
  description,
  path = "/",
  image = "/logo.png",
  type = "website",
  noindex = false,
  jsonLd = [],
}) {
  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${
      path === "/" ? "/" : path.replace(/\/$/, "") + "/"
    }`;

    const imageUrl = image.startsWith("http")
      ? image
      : `${SITE_URL}${image}`;

    document.title = title;

    // Basic SEO
    upsertMeta("name", "description", description);

    // Robots
    upsertMeta(
      "name",
      "robots",
      noindex
        ? "noindex, nofollow"
        : "index, follow, max-image-preview:large"
    );

    // Open Graph
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:image", imageUrl);
    upsertMeta("property", "og:site_name", "Dynamic Solar");

    // Twitter
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", imageUrl);

    // Canonical
    let canonical = document.head.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }

    canonical.href = canonicalUrl;

    // JSON-LD
    document.head
      .querySelectorAll('script[data-dynamic-seo="true"]')
      .forEach((node) => node.remove());

    jsonLd.filter(Boolean).forEach((data) => {
      const script = document.createElement("script");

      script.type = "application/ld+json";
      script.dataset.dynamicSeo = "true";
      script.textContent = JSON.stringify(data);

      document.head.appendChild(script);
    });

    return () => {
      document.head
        .querySelectorAll('script[data-dynamic-seo="true"]')
        .forEach((node) => node.remove());
    };
  }, [
    title,
    description,
    path,
    image,
    type,
    noindex,
    jsonLd,
  ]);

  return null;
}

export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: "Dynamic Solar",
  url: `${SITE_URL}/`,
  telephone: "+91 9841582874",
  email: "info@dynamicsolar.in",

  address: {
    "@type": "PostalAddress",
    streetAddress: "1, Gandhi Rd, West Tambaram",
    addressLocality: "Tambaram",
    addressRegion: "Tamil Nadu",
    postalCode: "600045",
    addressCountry: "IN",
  },

  sameAs: [
    "https://www.instagram.com/dynamic_solars/",
    "https://www.facebook.com/share/1doH6LGFm4/",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: "Dynamic Solar",
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
};

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${
        item.path === "/"
          ? "/"
          : item.path.replace(/\/$/, "") + "/"
      }`,
    })),
  };
}

export function itemListSchema(name, items) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: `${SITE_URL}${
        item.path === "/"
          ? "/"
          : item.path.replace(/\/$/, "") + "/"
      }`,
    })),
  };
}

export function serviceSchema(name, description, path) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}${path}#service`,
    name,
    serviceType: name,
    description,

    provider: {
      "@id": `${SITE_URL}/#organization`,
    },

    url: `${SITE_URL}${path}`,
  };
}

export default Seo;