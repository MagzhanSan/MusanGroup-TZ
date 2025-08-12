export type Tag = {
  id: number;
  name: string;
  slug: string;
  frequency: number;
  is_supertag: boolean;
  parent_id: number | null;
};

export type ResponseType<T> = {
  statusCode: number;
  error: boolean;
  message: string | null;
  data: T;
};

export type TagListResponse = ResponseType<{
  limit: number;
  offset: number;
  count: number;
  rows: Tag[];
}>;

export type RelatedTag = {
  id: number;
  name: string;
  slug: string;
  frequency: number;
  articles_tags: {
    article_id: number;
    tag_id: number;
  };
};

export type Data = {
  id: number;
  name: string;
  description: string;
  slug: string;
  frequency: number;
  is_supertag: boolean;
  parent_id: number | null;
  meta: Record<string, unknown>;
  updated_at: string;
  parent: unknown | null;
  related: RelatedTag[];
};

export type ArticleByTagResponse = ResponseType<Data>;

interface Category {
  id: number;
  name: string;
  slug: string;
}

interface Author {
  id: number;
  name: string;
  slug: string;
  articles_authors: {
    article_id: number;
    author_id: number;
  };
}

interface Locale {
  id: number;
  name: string;
  code: string;
}

interface Type {
  name: string;
}

export interface Article {
  id: number;
  status: string;
  title: string;
  subtitle: string;
  slug: string;
  image: string;
  preview_thumbnail: string | null;
  image_caption: string;
  type_id: number;
  published_at: string;
  category_id: number;
  project_id: number | null;
  is_breaking: boolean;
  is_important: boolean;
  is_pr: boolean;
  is_live: boolean;
  is_commentable: boolean;
  is_editor_choice: boolean;
  in_slider: boolean;
  in_head: boolean;
  views: number;
  show_preview: boolean;
  tts: string | null;
  is_legacy: boolean;
  is_green: boolean;
  source_id: number | null;
  locale_id: number;
  translated_article_id: number | null;
  updated_at: string;
  tags: Tag[];
  type: Type;
  category: Category;
  authors: Author[];
  people: unknown[];
  locale: Locale;
  translated_article: unknown | null;
}

interface ArticlesData {
  rows: Article[];
  limit: number;
  offset: number;
  count: number;
}

export type ArticleListResponse = ResponseType<ArticlesData>;
