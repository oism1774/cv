# khandev.xyz

Одностраничный сайт-визитка на Astro + Tailwind CSS. Три языка: `/en/`, `/ru/`, `/az/`.

## Локально

```bash
npm install
npm run dev      # http://localhost:4321/en/
npm run build    # сборка статики
npm run preview  # просмотр собранной версии
```

## Где что лежит

- Готовая статика после сборки — в `dist/` (её и заливать на Cloudflare Pages / R2).
- Тексты — `src/i18n/en.ts`, `ru.ts`, `az.ts`; общие терминальные подписи — `src/i18n/common.ts`.
- Контакты — `src/config.ts` (пустое значение = ссылка скрыта).
- CV — `public/cv/orkhan-ismayilov-cv-{en,ru,az}.pdf`.
- Редирект `/` → `/en/`: `public/_redirects` (Pages) и meta refresh в `dist/index.html` (R2).
