import { PAGINATION_CONSTANTS } from "../constants";

export interface PageRange {
  startPage: number;
  endPage: number;
}

export interface PaginationParams {
  currentPage: number;
  totalPages: number;
}

export const validateTagData = (tags: unknown): boolean => {
  const tagData = tags as { data?: { rows?: Array<{ slug?: string }> } };
  return Boolean(tagData?.data?.rows?.[0]?.slug);
};

export const validateArticleData = (article: unknown): boolean => {
  const articleData = article as { data?: unknown };
  return Boolean(articleData?.data);
};

export const calculatePageRange = ({
  currentPage,
  totalPages,
}: PaginationParams): PageRange => {
  const { PAGES_TO_SHOW, HALF_PAGES } = PAGINATION_CONSTANTS;

  let startPage = Math.max(1, currentPage - HALF_PAGES);
  const endPage = Math.min(totalPages, startPage + PAGES_TO_SHOW - 1);

  if (endPage - startPage < PAGES_TO_SHOW - 1) {
    startPage = Math.max(1, endPage - PAGES_TO_SHOW + 1);
  }

  return { startPage, endPage };
};

export const generatePageArray = (
  startPage: number,
  endPage: number,
): number[] => {
  return Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i,
  );
};

export const calculateOffset = (page: number, limit: number): number => {
  return (page - 1) * limit;
};

export const safeGet = <T>(
  obj: Record<string, unknown>,
  path: string,
  defaultValue: T,
): T => {
  return path.split(".").reduce((acc, key) => {
    return (acc as Record<string, unknown>) &&
      (acc as Record<string, unknown>)[key] !== undefined
      ? ((acc as Record<string, unknown>)[key] as T)
      : defaultValue;
  }, obj as T);
};
