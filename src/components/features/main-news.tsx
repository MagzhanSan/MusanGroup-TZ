import { ArticleList } from "./article-list";
import { NewsList } from "./news-list";
import { ArticleByTagResponse, ArticleListResponse } from "@/types/types";
import { FunctionComponent, memo } from "react";

interface MainNewsProps {
  articleByTag: ArticleByTagResponse;
  page: number;
  totalPages: number;
  articles: ArticleListResponse;
  articlePage: number;
  articleTotalPages: number;
}

const MainNews: FunctionComponent<MainNewsProps> = memo(
  ({
    articleByTag,
    page,
    totalPages,
    articles,
    articlePage,
    articleTotalPages,
  }) => {
    const { name, description } = articleByTag?.data || {};
    const { data } = articles || {};

    return (
      <div className="flex min-h-[274px] flex-2/3 flex-col bg-white">
        <NewsList
          name={name}
          description={description}
          page={page}
          totalPages={totalPages}
        />
        <ArticleList
          articles={data?.rows}
          page={articlePage}
          totalPages={articleTotalPages}
        />
      </div>
    );
  },
);

MainNews.displayName = "MainNews";

export { MainNews };
