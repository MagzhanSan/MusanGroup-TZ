export const API_CONSTANTS = {
  LIMIT: 1,
  ARTICLES_LIMIT: 7,
  SECONDARY_ARTICLES_LIMIT: 5,
  REVALIDATE_TIME: 3600,
  DEFAULT_TOTAL_PAGES: 100,
} as const;

export const PAGINATION_CONSTANTS = {
  PAGES_TO_SHOW: 5,
  HALF_PAGES: Math.floor(5 / 2),
} as const;

export const ERROR_MESSAGES = {
  TAG_NOT_FOUND: "Тег не найден",
  ARTICLE_NOT_FOUND: "Статья не найдена",
  DATA_LOAD_ERROR: "Ошибка загрузки данных",
  TRY_LATER: "Попробуйте позже",
} as const;
