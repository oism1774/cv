# cv

One-screen business card of Orkhan Ismayilov (AZ / RU / EN): https://oism1774.github.io/cv/

- Astro, static output, deployed to GitHub Pages by `.github/workflows/pages.yml` on every push to `main`.
- Texts: `src/content.ts`. Contacts and URLs: `src/config.ts`.
- CV PDFs: `public/cv/`.
- `redirect/` + `wrangler.toml`: the old khandev.xyz Worker now only redirects to the GitHub Pages site.
