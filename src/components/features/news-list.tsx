import { HtmlParse } from "./html-parse";
import { Pagination } from "./pagination";
import { Text } from "./text";
import { FunctionComponent } from "react";

interface NewsListProps {
  name: string;
  description: string;
  page: number;
  totalPages: number;
}
const NewsList: FunctionComponent<NewsListProps> = ({
  name,
  description,
  page,
  totalPages,
}) => {
  return (
    <>
      <div className="px-5 pt-5 md:px-10 md:pt-5">
        <div className="flex gap-2.5">
          <Text type="breadcrumbs-text" classNames="whitespace-nowrap">
            Главные новости →
          </Text>
          <Text type="breadcrumbs-highlight" classNames="break-all" highlight>
            {name}
          </Text>
        </div>
        <div className="flex items-end">
          <Text type="heading">{name}</Text>
        </div>
        <HtmlParse html={description} />
      </div>
      <div className="mt-auto">
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          paramKey="page"
        />
      </div>
    </>
  );
};

export { NewsList };
