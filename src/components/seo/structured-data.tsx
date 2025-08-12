import { PageMeta } from "@/lib/seo/generate-meta";

interface StructuredDataProps {
  meta?: PageMeta;
}

export const StructuredData = ({ meta }: StructuredDataProps) => {
  const getStructuredData = () => {
    if (meta?.type === "article") {
      return {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        headline: meta.title,
        description: meta.description,
        image: meta.image,
        datePublished: meta.publishedTime,
        dateModified: meta.modifiedTime,
        author: {
          "@type": "Organization",
          name: meta.author || "Kapital.kz",
        },
        publisher: {
          "@type": "Organization",
          name: "Kapital.kz",
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": meta.url,
        },
        ...(meta.section && { articleSection: meta.section }),
        ...(meta.tags &&
          meta.tags.length > 0 && { keywords: meta.tags.join(", ") }),
      };
    }

    return {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Kapital.kz",
      description:
        "Деловой портал Казахстана с актуальными новостями экономики, финансов и бизнеса",
      url: "https://kapital.kz",
    };
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData()),
      }}
    />
  );
};
