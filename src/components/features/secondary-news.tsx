import { User } from "@/assets/user";
import { Text } from "./text";
import { formatDate, getImageUrl } from "@/lib/utils";
import { Article } from "@/types/types";
import Image from "next/image";
import { FunctionComponent } from "react";

interface SecondaryNewsProps {
  articles: Article[];
  page: number;
  totalPages: number;
}

const SecondaryNews: FunctionComponent<SecondaryNewsProps> = ({ articles }) => {
  return (
    <div className="hidden h-fit flex-1/3 flex-col bg-white pt-5 md:flex">
      <Text type="news-heading" highlight classNames="mx-5">
        Популярные материалы
      </Text>

      <div>
        {articles.map((article) => (
          <article
            key={article.id}
            className="border-divider flex gap-2.5 border-b-[1px] px-5 py-1.5"
          >
            <div className="min-h-[80px] min-w-[91px] py-2.5">
              <Image
                src={getImageUrl(article.image)}
                alt={article.title}
                width={91}
                height={60}
              />
            </div>
            <div className="flex flex-col pt-1.5 pb-2.5">
              <Text
                type="news-side-info"
                classNames="text-dark-gray flex gap-1 items-center"
              >
                {formatDate(article.published_at)} <User width={7} height={7} />{" "}
                267
              </Text>
              <Text type="news-side-title">{article.title}</Text>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export { SecondaryNews };
