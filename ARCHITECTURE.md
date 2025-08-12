# Архитектура проекта

## Структура проекта

```
src/
├── app/                    # App Router (Next.js 15)
│   ├── (routes)/          # Группировка роутов
│   │   ├── page.tsx       # Главная страница
│   │   └── layout.tsx     # Корневой layout
│   ├── globals.css        # Глобальные стили
│   └── favicon.ico        # Иконка сайта
├── components/            # Переиспользуемые компоненты
│   ├── ui/               # Базовые UI компоненты (будущие)
│   ├── layout/           # Компоненты макета
│   │   ├── Header/       # Компоненты заголовка
│   │   └── footer.tsx    # Компонент подвала
│   └── features/         # Компоненты функциональности
│       ├── news.tsx      # Основной компонент новостей
│       ├── article-list.tsx
│       ├── main-news.tsx
│       ├── news-list.tsx
│       ├── pagination.tsx
│       ├── secondary-news.tsx
│       ├── text.tsx
│       ├── html-parse.tsx
│       └── error-boundary.tsx
├── lib/                  # Утилиты и конфигурации
│   ├── api/             # API клиенты
│   │   ├── api.ts
│   │   └── news-service.ts
│   ├── utils/           # Утилиты
│   │   ├── utils.ts
│   │   ├── form-date.ts
│   │   └── image.ts
│   └── constants/       # Константы
│       └── constants.ts
├── hooks/               # Кастомные хуки
│   └── use-url-params.ts
├── types/               # TypeScript типы
│   └── types.ts
├── assets/              # Статические ресурсы
│   ├── logo.tsx
│   └── user.tsx
└── styles/              # Дополнительные стили (будущие)
```

## Принципы архитектуры

### 1. Разделение ответственности
- **components/ui/** - Базовые UI компоненты (кнопки, инпуты, модалы)
- **components/layout/** - Компоненты макета (header, footer, sidebar)
- **components/features/** - Компоненты конкретной функциональности

### 2. Организация утилит
- **lib/api/** - Все API клиенты и сервисы
- **lib/utils/** - Переиспользуемые утилиты
- **lib/constants/** - Константы приложения

### 3. Индексные файлы
Каждая папка имеет `index.ts` файл для удобства импортов:
```typescript
// Вместо
import { Header } from "@/components/layout/Header/header";
import { News } from "@/components/features/news";

// Можно использовать
import { Header, News } from "@/components/layout";
import { News } from "@/components/features";
```

### 4. Группировка роутов
Использование `(routes)` группы для организации страниц в App Router.

## Преимущества новой архитектуры

1. **Масштабируемость** - Легко добавлять новые компоненты и функциональности
2. **Переиспользование** - Четкое разделение на переиспользуемые части
3. **Читаемость** - Понятная структура папок и файлов
4. **Поддержка** - Легко находить и изменять код
5. **Производительность** - Оптимизированные импорты через индексные файлы

## Следующие шаги

1. Добавить базовые UI компоненты в `components/ui/`
2. Создать дополнительные стили в `styles/`
3. Добавить тесты для компонентов
4. Настроить Storybook для документации компонентов
