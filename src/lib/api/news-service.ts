import { apiFetch } from "./api";
import {
  ArticleByTagResponse,
  ArticleListResponse,
  TagListResponse,
} from "@/types/types";
import { API_CONSTANTS } from "../constants";
import {
  calculateOffset,
  validateTagData,
  validateArticleData,
} from "../utils";

export interface NewsServiceParams {
  page: number;
  limit?: number;
  sort?: "desc" | "asc";
}

export interface NewsData {
  articleByTag: ArticleByTagResponse;
  totalPages: number;
}

export interface ArticlesData {
  articles: ArticleListResponse;
  totalPages: number;
}

export interface CombinedNewsData {
  mainNews: NewsData;
  articles: ArticlesData;
  sortedArticles: ArticlesData;
}

export class NewsService {
  private static async fetchTags(
    params: NewsServiceParams,
  ): Promise<TagListResponse> {
    const { page, limit = API_CONSTANTS.LIMIT } = params;
    const offset = calculateOffset(page, limit);

    return apiFetch<TagListResponse>(`tags?limit=${limit}&offset=${offset}`);
  }

  private static async fetchArticleByTag(
    slug: string,
  ): Promise<ArticleByTagResponse> {
    return apiFetch<ArticleByTagResponse>(`tags/slug/${slug}`);
  }

  private static async fetchSecondaryNews(
    params: NewsServiceParams,
  ): Promise<ArticleListResponse> {
    const {
      page,
      limit = params.sort
        ? API_CONSTANTS.SECONDARY_ARTICLES_LIMIT
        : API_CONSTANTS.ARTICLES_LIMIT,
      sort,
    } = params;
    const offset = calculateOffset(page, limit);

    return apiFetch<ArticleListResponse>(
      `articles?limit=${limit}&offset=${offset}${
        sort ? `&sort[views]=${sort}` : ""
      }`,
    );
  }

  public static async getMainNewsData(
    params: NewsServiceParams,
  ): Promise<NewsData> {
    const tags = await this.fetchTags(params);

    if (!validateTagData(tags)) {
      throw new Error("Tag data validation failed");
    }

    const tagSlug = tags.data.rows[0].slug;
    const articleByTag = await this.fetchArticleByTag(tagSlug);

    if (!validateArticleData(articleByTag)) {
      throw new Error("Article data validation failed");
    }

    const totalPages = tags?.data?.count;

    return {
      articleByTag,
      totalPages,
    };
  }

  public static async getArticlesData(
    params: NewsServiceParams,
  ): Promise<ArticlesData> {
    const articles = await this.fetchSecondaryNews(params);

    return {
      articles,
      totalPages: articles?.data?.count,
    };
  }

  public static async getCombinedNewsData(
    mainPage: number,
    secondaryPage: number,
    sortedArticlesParams: {
      sort: "desc" | "asc";
      page: number;
    },
  ): Promise<CombinedNewsData> {
    const [mainNews, articles, sortedArticles] = await Promise.all([
      this.getMainNewsData({ page: mainPage }),
      this.getArticlesData({ page: secondaryPage }),
      this.getArticlesData(sortedArticlesParams),
    ]);

    return {
      mainNews,
      articles,
      sortedArticles,
    };
  }
}
