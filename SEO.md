# SEO Оптимизация для Kapital.kz

## Что реализовано

### 1. Метаданные
- Title и description для главной страницы
- Open Graph теги для социальных сетей
- Robots meta теги
- Keywords для поисковых систем

### 2. Структурированные данные
- JSON-LD разметка для веб-сайта
- Schema.org разметка для лучшего понимания поисковыми системами

### 3. Техническое SEO
- Sitemap.xml для индексации страниц
- Robots.txt для управления поисковыми роботами
- RSS feed для подписчиков
- Оптимизированные изображения с Next.js Image

### 4. Производительность
- Оптимизация изображений с blur placeholder
- Правильные размеры изображений
- Lazy loading для изображений

## Структура файлов

```
src/
├── app/
│   ├── robots.ts          # Robots.txt
│   ├── sitemap.ts         # Sitemap.xml
│   └── rss.xml/route.ts   # RSS feed
├── components/
│   ├── seo/
│   │   ├── structured-data.tsx  # JSON-LD разметка
│   │   └── index.ts
│   └── ui/
│       ├── optimized-image.tsx  # Оптимизированные изображения
│       └── index.ts
```

## Рекомендации для дальнейшего развития

1. **Добавить метаданные для отдельных страниц** - когда появятся страницы статей
2. **Настроить аналитику** - Google Analytics, Yandex.Metrica
3. **Добавить микроразметку для статей** - Article schema
4. **Оптимизировать скорость загрузки** - кэширование, CDN
5. **Добавить AMP версии** - для мобильных устройств

## Проверка SEO

Для проверки SEO используйте:
- Google Search Console
- Yandex.Webmaster
- PageSpeed Insights
- GTmetrix
- Lighthouse
