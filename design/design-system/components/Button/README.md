# Button

Two buttons only: primary (accent fill) for "Download CV", outline for "Contact".

- At most one primary per view area: hero has Download CV primary + Contact outline; the contact section repeats Download CV primary.
- Height `control-height` (46px), padding 0 20px, `radius-md`, Geist 15/500.
- Primary: `accent` fill, `accent-ink` text and icon, hover brightens 8%.
- Outline: transparent, `border`, `text`; hover fills `surface-hover`, border `border-hover`.
- Download CV carries the download stroke icon (16px) before the label and links to the PDF of the current language.
- Phones: full width, 48px tall, stacked with 10px gap.

```html
<a class="kd-btn kd-btn--primary" href="/cv/orkhan-ismayilov-cv-en.pdf" download>
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v12"/><path d="M6 11l6 6 6-6"/><path d="M5 20h14"/></svg>
  Download CV
</a>
<a class="kd-btn kd-btn--outline" href="#contact">Contact</a>
```
