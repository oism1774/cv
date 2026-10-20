# khandev

The design system of khandev.xyz - Orkhan Ismayilov's one-page CV site. Dark, quiet, editorial, with a terminal accent: serif headings for character, mono for anything that "comes from the machine", one emerald accent.

The page has one job: a recruiter understands who this is in 30 seconds. Every decision below serves readability first and the terminal mood second.

## Content fundamentals

- **Voice**: plain, factual, first person in About only. No hype words, no "passionate", no "junior" anywhere.
- **Honesty rule**: only real experience. Work under NDA is described in general terms (what was administered), never by internal names, code or client data.
- **Name** is always Latin: "Orkhan Ismayilov", in every language.
- **Languages**: `/en/`, `/ru/`, `/az/` - no unprefixed version, `/` redirects to `/en/`. AZ uses "email", not "poçt".
- **Mono labels stay English in all languages** - section commands (`$ whoami`, `$ cat experience.log`, `$ tail -f learning.log`, `$ cat about.txt`, `$ ping orkhan`), the prompt, neofetch keys, ping output. They are decoration and identity, not content to translate.
- **Hyphens, not em-dashes**, in all copy: "2023 - 2026", "System Administrator - Yepika".
- Dates: only Yepika shows months (`apr 2026 - oct 2026`); older entries show the year only.

## Visual foundations

### Colour

Dark-only. One ground (`bg`), one raised surface for terminal cards (`surface`), hairlines (`line`) and borders (`border`). Text in three steps: `text` for headings and emphasis, `text-body` for bullets and values, `muted` for everything secondary - `muted` is the floor for small text.

`accent` (emerald `#10b981`) is the only colour. It marks things that belong to the terminal or call to action: the prompt user, section commands, role lines, the status dot, the cursor, the primary button, the learning spinner. Never use it for body text or large fills beyond the primary button. Text on an accent fill is `accent-ink`.

### Type

Three families, all Google Fonts:

- **Fraunces** (`display`) - the name, section headings, company names. Weight 400 only, tight tracking.
- **Geist** (`sans`) - all reading text. The About paragraph is Geist 300 at 24px in `muted`, with key phrases in `text`.
- **Geist Mono** (`mono`) - prompt, section commands, dates, role lines, labels, terminal cards, footer.

Rule of thumb: if a human wrote it, sans or serif; if a shell would print it, mono.

### Layout

- Content max width `container` (1120px), side gutter `clamp(20px, 5vw, 48px)`.
- Sections stack with `space-8` (72px) vertical padding and a `line` hairline on top; phones use `space-7` (48px).
- Hero: name block left, neofetch card right (360px), aligned to the top of the name. On phones the neofetch card is removed.
- Experience: `date-column` (200px) on the left, entry on the right; on phones the date sits above the company.
- No section cards for flat content - hairlines separate. Cards (`radius-lg`, `border`) are only for things that are a "window": terminal cards and the two education/languages cards.

### Section order

Hero → About (01) → Experience (02) → Learning now (03) → Education & languages (04) → Contact (05) → footer. There is no Stack section: it was tried and removed. Keywords live in the Experience text.

## Terminal motifs

- **Prompt**: `orkhan@khandev:~$ cd ~/devops` above the name - `orkhan@khandev` in accent, command in `text`, then a block cursor.
- **Section header**: mono command in accent, a hairline that fills the row, a two-digit index in muted (`SectionHeader`).
- **neofetch card** (hero, desktop only): `orkhan@khandev`, dashes, then key/value rows - role, os, shell, focus, loc, status - and a six-swatch palette strip (`border`, `border-strong`, a mid grey, `muted`, `text`, `accent`).
- **Learning log card**: rows `[spinner] NAME  description  status`. In progress items spin `| / - \`, done items show `[ok]`, queued `[..]` in muted. Ends with "waiting for new entries _" and a blinking underscore.
- **Ping card** (contact): `PING orkhan (khandev.xyz): 3 channels`, one `reply from <label> <link>` line per contact, `--- 3 replies, 0% loss ---`. Lines appear one by one.
- **Background log**: decorative syslog lines (cron, backup, dovecot, sshd, nginx, DNS...) drift upward behind the right half of the page, fading out toward the left so the name and text stay on clean ground. Opacity `log-ghost`. Never put real claims in it.

## Motion

All motion is slow, small and skippable. Under `prefers-reduced-motion: reduce` everything renders in its final state.

| What | Spec |
| --- | --- |
| Prompt typing | starts after ~720ms, one character per 180ms, then cursor blinks |
| Cursor blink | `kd-blink` 1.05s, `steps(1)` |
| Status dot | `kd-pulse` opacity 1 → .35, 1.8s ease-in-out |
| Spinner | frames `| / - \`, 180ms each |
| Ping lines | `kd-ln` fade + 4px rise, .45s, delays .2s / .6s / 1s / 1.3s / 1.6s - start when the card scrolls into view |
| Background log | list repeated twice, `translateY(-50%)` over 420s linear, infinite |
| Hover | experience row shows an accent `>` caret; buttons brighten or fill `surface-hover` |

## Iconography

No icon set. Two inline stroke icons only - download arrow (CV buttons) and map pin (location) - 16px, stroke 2-2.2, `currentColor`. No emoji, no logos of technologies.

## Accessibility

- Every text pair passes 4.5:1 on `bg`; `muted` is the lowest allowed for small text.
- Real `<a>` / `<button>` elements, visible focus ring (`accent`, 2px, 3px offset).
- Language switch is a `<nav aria-label="Language">` with `aria-current="page"` on the active link; `hreflang` alternates in `<head>`.
- Decorative layers (background log, cursor, palette strip) are `aria-hidden="true"`.
- Touch targets ≥ 44px on phones; phone buttons are full width, 48px tall.

## Implementing on the site (Astro, no React)

- Pages are static `.astro` components; no UI framework. Client JS only for the prompt typing, the spinner and starting ping lines on scroll (IntersectionObserver).
- Use `tokens.json` as the source: expose each token as a CSS variable (`--bg`, `--accent`, `--radius-lg`, `--font-display`...) and, with Tailwind, map them in `theme.extend` (`colors.accent: 'var(--accent)'`). Don't hard-code hex values in components.
- `components/bundle.css` holds the reference classes (`kd-btn`, `kd-term`, `kd-entry`, `kd-section-head`, `kd-bglog`, motion keyframes). Port them as-is or rebuild them with Tailwind - names and values must match.
- Each component card here has a README with its markup; follow those structures.
- Fonts: one Google Fonts request (`Fraunces opsz 9..144 wght 300..600`, `Geist 300..600`, `Geist Mono 400;500`) with `display=swap` and preconnect.

## Don't

- No light theme, no second accent, no gradients behind text, no glow.
- No dot-grid or other pattern backgrounds - tried and rejected; the background log is the only background.
- No Stack section, no technology logo walls.
- No neofetch card on phones.
- No "junior", no em-dashes.
