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

function ArticleLinkButton({ link }) {
  if (!link?.text || !link?.url) return null;

  return (
    <div className="blogpost-content-action">
      <Link to={link.url} className="blogpost-action-btn">
        {link.text}
        <span aria-hidden="true"> →</span>
      </Link>
    </div>
  );
}

function FAQBlock({ items = [], postSlug }) {
  if (!items.length) return null;

  return (
    <section
      className="blogpost-faq"
      aria-labelledby={`blogpost-faq-${postSlug}`}
    >
      <h2 id={`blogpost-faq-${postSlug}`}>
        Frequently Asked Questions
      </h2>

      {items.map((faq, index) => (
        <div
          className="blogpost-faq-item"
          key={`${postSlug}-faq-${index}`}
        >
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </div>
      ))}
    </section>
  );
}

function ArticleContentBlock({ block, index, post }) {
  if (typeof block === "string") {
    return (
      <>

        <p
          className="blogpost-paragraph"
          dangerouslySetInnerHTML={{
            __html: formatArticleContent(block),
          }}
        />
      </>
    );
  }

  if (!block || typeof block !== "object") return null;

  if (block.type === "heading") {
    return <h2 className="blogpost-section-heading">{block.text}</h2>;
  }

  if (block.type === "list") {
    return (
      <ul className="blogpost-list">
        {(Array.isArray(block.items) ? block.items : []).map(
          (item, itemIndex) => (
            <li
              key={`${post.slug}-${index}-${itemIndex}`}
              dangerouslySetInnerHTML={{
                __html: formatArticleContent(item),
              }}
            />
          )
        )}
      </ul>
    );
  }

  if (block.type === "faq") {
    return <FAQBlock items={block.items || []} postSlug={`${post.slug}-${index}`} />;
  }

  if (block.type === "paragraph") {
    return (
      <>

        <p
          className="blogpost-paragraph"
          dangerouslySetInnerHTML={{
            __html: formatArticleContent(block.text || ""),
          }}
        />

        {block.link && <ArticleLinkButton link={block.link} />}
      </>
    );
  }

  return null;
}

function BlogPost() {
  const { slug } = useParams();

  const post = allPosts.find((item) => item.slug === slug);

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

        <section className="blogpost-body blogpost-not-found">
          <div className="container">
            <h1>Article Not Found</h1>
            <p>
              The article you're looking for doesn't exist or may have been moved.
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
  const articleTitle = post.metaTitle || `${post.title} | Dynamic Solar`;
  const articleDescription = post.metaDescription || post.excerpt || post.title;

  // Use the same image shown on the blog listing card as the article hero.
  const heroImage = post.heroImage || post.image;
  const absoluteHeroImage = getAbsoluteUrl(heroImage);

  const publishedDate = post.datePublished || undefined;
  const modifiedDate = post.dateModified || publishedDate;

  const content = Array.isArray(post.content) ? post.content : [];
  const contentFaqs = content.flatMap((block) =>
    block?.type === "faq" && Array.isArray(block.items) ? block.items : []
  );
  const faqs =
    Array.isArray(post.faqs) && post.faqs.length
      ? post.faqs
      : contentFaqs;

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
    ...(absoluteHeroImage && { image: [absoluteHeroImage] }),
    ...(publishedDate && { datePublished: publishedDate }),
    ...(modifiedDate && { dateModified: modifiedDate }),
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
    ...(post.category && { articleSection: post.category }),
    inLanguage: "en-IN",
  };

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

  const hasFaqBlock = content.some((block) => block?.type === "faq");
  const relatedLinks = Array.isArray(post.relatedLinks)
    ? post.relatedLinks.filter((item) => item?.text && item?.url)
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

      <main className="blogpost-body">
        <div className="container">
          {heroImage && (
            <figure className="blogpost-hero-image">
              <img
                src={heroImage}
                alt={post.imageAlt || post.title}
                fetchPriority="high"
                decoding="async"
              />

              {post.category && (
                <span
                  className="blogpost-hero-tag"
                  style={{ background: post.accent || "#f97316" }}
                >
                  {post.category}
                </span>
              )}
            </figure>
          )}

          <header className="blogpost-header">
            <h1 className="blogpost-title">{post.title}</h1>

            {post.date && (
              <p className="blogpost-date">
                <time dateTime={publishedDate}>{post.date}</time>
              </p>
            )}

            {/* {post.excerpt && (
              <p className="blogpost-excerpt">{post.excerpt}</p>
            )} */}
          </header>

          <article className="blogpost-article">
            {content.map((block, index) => (
              <div
                key={`${post.slug}-${index}`}
                className="blogpost-content-block"
              >
                <ArticleContentBlock
                  block={block}
                  index={index}
                  post={post}
                />
              </div>
            ))}

            {!hasFaqBlock && faqs.length > 0 && (
              <FAQBlock items={faqs} postSlug={post.slug} />
            )}
          </article>

          {relatedLinks.length > 0 && (
            <nav
              className="blogpost-related"
              aria-label="Related Dynamic Solar pages"
            >
              <h2>Explore Related Solar Resources</h2>
              <ul>
                {relatedLinks.map((item, index) => (
                  <li key={`${post.slug}-related-${index}`}>
                    <Link to={item.url}>{item.text}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          <div className="blogpost-back">
            <Link to="/blog/" className="blogpost-back-btn">
              ← Back to All Articles
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default BlogPost;
