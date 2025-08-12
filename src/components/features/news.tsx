import { MainNews } from "./main-news";
import { SecondaryNews } from "./secondary-news";
import { ErrorBoundary } from "./error-boundary";
import { Text } from "./text";
import { NewsService } from "@/lib/api";
import { API_CONSTANTS, ERROR_MESSAGES } from "@/lib/constants";
import { DynamicMeta } from "@/components/seo";
import { generateNewsPageMeta } from "@/lib/seo/generate-meta";

export const revalidate = API_CONSTANTS.REVALIDATE_TIME;

interface NewsProps {
  searchParams?: Promise<{
    page?: string;
    articlesPage?: string;
    sortedArticlesPage?: string;
  }>;
}

const NewsContent = async ({ searchParams }: NewsProps) => {
  const params = await searchParams;
  const mainPage = params?.page ? Number(params.page) : 1;
  const articlesPage = params?.articlesPage ? Number(params.articlesPage) : 1;
  const sortedArticlesPage = params?.sortedArticlesPage
    ? Number(params.sortedArticlesPage)
    : 1;

  try {
    const { mainNews, articles, sortedArticles } =
      await NewsService.getCombinedNewsData(mainPage, articlesPage, {
        sort: "desc",
        page: sortedArticlesPage,
      });

    const meta = generateNewsPageMeta(mainNews, articles.articles);

    return (
      <>
        <DynamicMeta meta={meta} />
        <div className="mob-container">
          <div className="flex gap-2.5">
            <MainNews
              articleByTag={mainNews.articleByTag}
              page={mainPage}
              totalPages={mainNews.totalPages}
              articles={articles.articles}
              articlePage={articlesPage}
              articleTotalPages={articles.totalPages}
            />
            <SecondaryNews
              articles={sortedArticles.articles.data.rows}
              page={sortedArticlesPage}
              totalPages={sortedArticles.totalPages}
            />
          </div>
        </div>
      </>
    );
  } catch (error) {
    console.error(ERROR_MESSAGES.DATA_LOAD_ERROR, error);
    throw error;
  }
};

const NewsErrorFallback = () => (
  <div className="container">
    <div className="flex gap-2.5">
      <div className="flex h-[274px] flex-2/3 flex-col bg-white">
        <div className="px-10 pt-5">
          <div className="flex items-end">
            <Text type="heading">{ERROR_MESSAGES.DATA_LOAD_ERROR}</Text>
          </div>
          <Text type="page-description">{ERROR_MESSAGES.TRY_LATER}</Text>
        </div>
      </div>
    </div>
  </div>
);

export const News = async (props: NewsProps) => {
  return (
    <ErrorBoundary fallback={<NewsErrorFallback />}>
      <NewsContent {...props} />
    </ErrorBoundary>
  );
};
