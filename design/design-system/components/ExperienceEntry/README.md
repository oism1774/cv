# ExperienceEntry

One job in the Experience list: date column on the left, company / role / bullets on the right. Entries are separated by a `line` hairline, no cards.

- Date: mono 13px `muted`, column `date-column` (200px). Yepika shows `apr 2026 - oct 2026`; others the year only (`2025`, `2023 - 2026`).
- Company: Fraunces 28px (`heading-entry`), `text`.
- Role: mono 15px `accent`.
- Bullets: Geist 16px `text-body`, a mono `-` in `border-hover` as the marker, 10px apart.
- Hover: an accent `>` caret appears before the date.
- Phones: the date moves above the company, 12px; company 24px; padding 24px.

```html
<article class="kd-entry">
  <div class="kd-entry__when"><span class="kd-entry__caret" aria-hidden="true">&gt;</span><span>apr 2026 - oct 2026</span></div>
  <div class="kd-entry__main">
    <h3 class="kd-entry__company">Yepika</h3>
    <p class="kd-entry__role">System Administrator</p>
    <ul class="kd-entry__points">
      <li>Configured mail DNS: MX, SPF, DKIM, DMARC</li>
    </ul>
  </div>
</article>
```
