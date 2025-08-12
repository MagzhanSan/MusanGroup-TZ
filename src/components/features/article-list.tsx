import { Text } from "./text";
import { Pagination } from "./pagination";
import { Article } from "@/types/types";
import { FunctionComponent } from "react";
import { formatDate, getImageUrl } from "@/lib/utils";
import { User } from "@/assets/user";
import Image from "next/image";

interface ArticleListProps {
  articles: Article[];
  page: number;
  totalPages: number;
}
const ArticleList: FunctionComponent<ArticleListProps> = ({
  articles,
  page,
  totalPages,
}) => {
  return (
    <div>
      {articles.map((article) => (
        <article
          key={article.id}
          className="border-divider border-b-[1px] px-5 py-2.5 md:px-10 md:py-4"
        >
          <div className="mb-1 flex items-center justify-start gap-2.5 md:hidden">
            <Text type="news-tag" classNames="text-green">
              {article.category.name}
            </Text>
            <Text type="news-info" classNames="text-dark-gray">
              {formatDate(article.published_at)}
            </Text>
            <Text
              type="news-info"
              classNames="text-gray flex items-center gap-1 justify-center text-dark-gray"
            >
              <User fillColor="var(--color-dark-gray)" />
              267
            </Text>
          </div>
          <div className="flex gap-2.5 md:gap-5">
            {article.image && (
              <div className="min-h-[83px] min-w-[121px] md:min-h-[132px] md:min-w-[200px]">
                <Image
                  src={getImageUrl(article.image)}
                  alt={article.title}
                  width={200}
                  height={132}
                />
              </div>
            )}
            <div className="flex flex-col gap-1.5">
              <div className="hidden items-center justify-start gap-2.5 md:flex">
                <Text type="news-tag" classNames="text-green">
                  {article.category.name}
                </Text>
                <Text type="news-info" classNames="text-dark-gray">
                  {formatDate(article.published_at)}
                </Text>
                <Text
                  type="news-info"
                  classNames="text-gray flex items-center gap-1 justify-center text-dark-gray"
                >
                  <User fillColor="var(--color-dark-gray)" />
                  267
                </Text>
              </div>
              <Text type="news-heading">{article.title}</Text>
              <Text type="news-description" classNames="hidden md:block">
                {article.subtitle}
              </Text>
            </div>
          </div>
          <Text type="news-description" classNames="block md:hidden">
            {article.subtitle}
          </Text>
        </article>
      ))}
      <div className="mt-auto">
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          paramKey="articlesPage"
        />
      </div>
    </div>
  );
};

export { ArticleList };
