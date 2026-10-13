
import { useParams, Link } from "react-router-dom";
import { allPosts } from "../../data/blogPosts";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import Seo, {
  businessSchema,
  breadcrumbSchema,
} from "../../seo/Seo";

import "./BlogPost.css";

const SITE_URL = "https://dynamicsolar.in";

function getAbsoluteUrl(imagePath) {
  if (!imagePath) return undefined;

  if (/^https?:\/\//i.test(imagePath)) {
    return imagePath;
  }

  return `${SITE_URL}${imagePath.startsWith("/") ? "" : "/"}${imagePath}`;
}

// Escape HTML before applying the supported Markdown formatting.
function formatArticleContent(content = "") {
  return String(content)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>");
}

function BlogPost() {
  const { slug } = useParams();

  const post = allPosts.find((item) => item.slug === slug);

  // Handle invalid or missing blog URLs.
  if (!post) {
    return (
      <>
        <Navbar />

        <Seo
          title="Article Not Found | Dynamic Solar"
          description="The requested article could not be found. Explore solar energy guides and tips on the Dynamic Solar blog."
          path={`/blog/${slug || ""}/`}
          noIndex={true}
        />

        <section
          className="blogpost-body"
          style={{ paddingTop: "140px" }}
        >
          <div className="container">
            <h1>Article Not Found</h1>

            <p>
              The article you're looking for doesn't exist or may
              have been moved.
            </p>

            <Link to="/blog/" className="blogpost-back-btn">
              ← Back to Blog
            </Link>
          </div>
        </section>

        <Footer />
      </>
    );
  }

  const path = `/blog/${post.slug}/`;

  const articleTitle =
    post.metaTitle || `${post.title} | Dynamic Solar`;

  const articleDescription =
    post.metaDescription || post.excerpt;

  const heroImage = post.heroImage || post.image;

  const absoluteHeroImage = getAbsoluteUrl(heroImage);

  const articleImage = post.articleImage
    ? getAbsoluteUrl(post.articleImage)
    : undefined;

  const publishedDate = post.datePublished || undefined;
  const modifiedDate = post.dateModified || publishedDate;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: articleDescription,
    url: `${SITE_URL}${path}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${path}`,
    },
    ...(absoluteHeroImage && {
      image: [absoluteHeroImage],
    }),
    ...(publishedDate && {
      datePublished: publishedDate,
    }),
    ...(modifiedDate && {
      dateModified: modifiedDate,
    }),
    author: {
      "@type": "Organization",
      name: "Dynamic Solar",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Dynamic Solar",
      url: SITE_URL,
    },
    articleSection: post.category,
    inLanguage: "en-IN",
  };

  // FAQ schema is included only when the blog post has valid FAQs.
  const faqs = Array.isArray(post.faqs)
    ? post.faqs.filter(
        (faq) =>
          faq &&
          typeof faq.question === "string" &&
          typeof faq.answer === "string" &&
          faq.question.trim() &&
          faq.answer.trim()
      )
    : [];

  const faqSchema =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  const jsonLd = [
    businessSchema,
    articleSchema,
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog/" },
      { name: post.title, path },
    ]),
    ...(faqSchema ? [faqSchema] : []),
  ];

  const content = Array.isArray(post.content)
    ? post.content
    : [];

  return (
    <>
      <Navbar />

      <Seo
        title={articleTitle}
        description={articleDescription}
        path={path}
        image={heroImage}
        type="article"
        jsonLd={jsonLd}
      />

      <section className="blogpost-body">
        <div className="container">
          {/* Hero Image */}
          {heroImage && (
            <div className="blogpost-hero-image">
              <img
                src={heroImage}
                alt={post.imageAlt || post.title}
                fetchPriority="high"
                decoding="async"
              />

              <span
                className="blogpost-hero-tag"
                style={{
                  background: post.accent || "#f59e0b",
                }}
              >
                {post.category}
              </span>
            </div>
          )}

          {/* Article Title and Metadata */}
          <header className="blogpost-header">
            <h1 className="blogpost-title">{post.title}</h1>

            {post.date && (
              <p className="blogpost-date">
                <time
                  dateTime={publishedDate || undefined}
                >
                  {post.date}
                </time>
              </p>
            )}

            {post.excerpt && (
              <p className="blogpost-excerpt">
                {post.excerpt}
              </p>
            )}
          </header>

          {/* Article Content */}
          <article className="blogpost-article">
            {content.map((paragraph, index) => (
              <div key={`${post.slug}-${index}`}>
                {/* Display an optional image after paragraph 3 */}
                {index === 3 && articleImage && (
                  <figure className="blogpost-inline-image">
                    <img
                      src={post.articleImage}
                      alt={
                        post.articleImageAlt ||
                        `${post.title} - solar energy`
                      }
                      loading="lazy"
                      decoding="async"
                    />
                  </figure>
                )}

                <p
                  className="blogpost-paragraph"
                  dangerouslySetInnerHTML={{
                    __html: formatArticleContent(paragraph),
                  }}
                />
              </div>
            ))}

            {/* Show FAQs when available in blogPosts.js */}
            {faqs.length > 0 && (
              <section
                className="blogpost-faq"
                aria-labelledby="blogpost-faq-title"
              >
                <h2 id="blogpost-faq-title">
                  Frequently Asked Questions
                </h2>

                {faqs.map((faq, index) => (
                  <div
                    className="blogpost-faq-item"
                    key={`${post.slug}-faq-${index}`}
                  >
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </section>
            )}
          </article>

          {/* Back to Blog */}
          <div className="blogpost-back">
            <Link
              to="/blog/"
              className="blogpost-back-btn"
            >
              ← Back to All Articles
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default BlogPost;
