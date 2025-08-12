"use client";

import { Text } from "./text";
import { calculatePageRange, generatePageArray } from "@/lib/utils";
import { useUrlParams } from "@/hooks/use-url-params";

interface PaginationProps {
  currentPage: number;
  totalPages?: number;
  paramKey: string;
}

export const Pagination = ({
  currentPage,
  totalPages = 100,
  paramKey,
}: PaginationProps) => {
  const { setParam } = useUrlParams();

  const { startPage, endPage } = calculatePageRange({
    currentPage,
    totalPages,
  });

  const pages = generatePageArray(startPage, endPage);

  const handlePageClick = (page: number) => {
    setParam(paramKey, page.toString());
  };

  const renderPageButton = (page: number) => (
    <Text
      key={page}
      type="pagination"
      onClick={() => handlePageClick(page)}
      classNames={`cursor-pointer flex h-[30px] w-[30px] items-center justify-center *:transition-colors ${
        page === currentPage
          ? "border-green bg-green border text-white"
          : "border-light-gray border bg-white"
      }`}
    >
      {page}
    </Text>
  );

  const renderNavigationButton = (direction: "prev" | "next") => {
    const isPrev = direction === "prev";
    const targetPage = isPrev ? currentPage - 1 : currentPage + 1;
    const shouldShow = isPrev ? currentPage > 1 : currentPage < totalPages;

    if (!shouldShow) return null;

    return (
      <Text
        type="pagination"
        onClick={() => handlePageClick(targetPage)}
        classNames="border-light-gray flex h-[30px] w-[30px] items-center justify-center border bg-white *:transition-colors cursor-pointer"
      >
        {isPrev ? "←" : "→"}
      </Text>
    );
  };

  return (
    <div className="flex items-center justify-center gap-[1px] px-10 py-5">
      {renderNavigationButton("prev")}
      {pages.map(renderPageButton)}
      {renderNavigationButton("next")}
    </div>
  );
};
