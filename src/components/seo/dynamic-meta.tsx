import Head from "next/head";
import { PageMeta } from "@/lib/seo/generate-meta";

interface DynamicMetaProps {
  meta: PageMeta;
}

export const DynamicMeta = ({ meta }: DynamicMetaProps) => {
  const fullTitle = meta.title.includes("|")
    ? meta.title
    : `${meta.title} | Kapital.kz`;
  const fullUrl = meta.url || "https://kapital.kz";
  const fullImage = meta.image?.startsWith("http")
    ? meta.image
    : `https://kapital.kz${meta.image}`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords.join(", ")} />

      <link rel="canonical" href={fullUrl} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:url" content={fullUrl} />
      {meta.image && <meta property="og:image" content={fullImage} />}
      <meta property="og:site_name" content="Kapital.kz" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={meta.description} />
      {meta.image && <meta name="twitter:image" content={fullImage} />}

      {meta.publishedTime && (
        <meta property="article:published_time" content={meta.publishedTime} />
      )}
      {meta.modifiedTime && (
        <meta property="article:modified_time" content={meta.modifiedTime} />
      )}
      {meta.section && (
        <meta property="article:section" content={meta.section} />
      )}
      {meta.tags && meta.tags.length > 0 && (
        <meta property="article:tag" content={meta.tags.join(", ")} />
      )}
    </Head>
  );
};
