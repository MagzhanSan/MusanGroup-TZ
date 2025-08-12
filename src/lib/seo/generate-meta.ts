import { ArticleByTagResponse, ArticleListResponse } from "@/types/types";

export interface PageMeta {
  title: string;
  description: string;
  keywords: string[];
  image?: string;
  url?: string;
  type: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

export const generateHomePageMeta = (): PageMeta => {
  return {
    title: "Kapital.kz - Новости Казахстана | Экономика, Финансы, Бизнес",
    description:
      "Актуальные новости Казахстана: экономика, финансы, бизнес, государство, технологии. Деловой портал с последними событиями в стране и мире.",
    keywords: [
      "новости Казахстана",
      "экономика",
      "финансы",
      "бизнес",
      "государство",
      "технологии",
    ],
    type: "website",
    url: "https://kapital.kz",
  };
};

export const generateNewsPageMeta = (
  mainNews: { articleByTag: ArticleByTagResponse; totalPages: number },
  articles: ArticleListResponse,
): PageMeta => {
  const tagName = mainNews.articleByTag?.data?.name || "Новости";
  const tagDescription = mainNews.articleByTag?.data?.description || "";

  const latestArticle = articles?.data?.rows?.[0];

  return {
    title: `${tagName} - Новости Казахстана | Kapital.kz`,
    description:
      tagDescription ||
      `Последние новости ${tagName.toLowerCase()} в Казахстане. Актуальная информация о событиях в экономике, финансах и бизнесе.`,
    keywords: [tagName, "новости Казахстана", "экономика", "финансы", "бизнес"],
    image: latestArticle?.image,
    type: "website",
    section: tagName,
    tags:
      articles?.data?.rows
        ?.slice(0, 5)
        .map((article) => article.category.name) || [],
  };
};

export const generateArticleMeta = (article: any): PageMeta => {
  return {
    title: article.title,
    description: article.subtitle || article.title,
    keywords: [
      article.category.name,
      ...article.tags.map((tag: any) => tag.name),
      "новости Казахстана",
    ],
    image: article.image,
    type: "article",
    publishedTime: article.published_at,
    modifiedTime: article.updated_at,
    author: "Kapital.kz",
    section: article.category.name,
    tags: article.tags.map((tag: any) => tag.name),
    url: `https://kapital.kz/article/${article.slug}`,
  };
};
