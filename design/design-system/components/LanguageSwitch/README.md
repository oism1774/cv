# LanguageSwitch

Segmented en / ru / az switch in the header, right side. Lowercase mono labels.

- Frame: `border`, `radius-md`, 3px inner padding; tabs `radius-sm`, padding 4px 10px (8px 10px on phones for touch).
- Active tab: `line` background, `text`; inactive: `muted`, hover `text`.
- Each tab links to the same page in that language (`/en/`, `/ru/`, `/az/`); the active one has `aria-current="page"`.

```html
<nav class="kd-lang" aria-label="Language">
  <a href="/en/" hreflang="en" aria-current="page">en</a>
  <a href="/ru/" hreflang="ru">ru</a>
  <a href="/az/" hreflang="az">az</a>
</nav>
```
