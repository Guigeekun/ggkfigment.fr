# ggkfigment.fr

Static portfolio of **Guilleme Benoit** (*Guigeek / GGK*) — freelance software engineer & composer.

React + Vite, CSS Modules, no other UI dependency.

## Getting started

```sh
npm install
npm run dev       # dev server
npm run build     # type-check + static build -> dist/
npm run preview   # serve dist/ locally
```

## Where to edit content

| What | File |
|---|---|
| FR / EN copy | `src/i18n/dict.ts` |
| Music tracks | `src/data/tracks.ts` (YouTube IDs) |
| Featured GitHub repos | `src/data/repos.ts` |
| Links & email | `src/data/links.ts` |
| Freelance stack | `src/components/Freelance.tsx` (`stack` constant) |

## Using it as a template

Everything personal lives in a handful of files — swap them and the site is yours:

1. Fork the repo, or clone it and delete `.git` to start from a clean history. (If you own a repo and want a one-click *Use this template* button on GitHub, enable **Settings → Template repository**.)
2. Replace the content listed in the table above.
3. Update the site metadata in `index.html`: `<title>`, meta description, Open Graph tags, `<html lang>`, and the fonts `<link>` if you change typography.
4. Restyle via the design tokens in `src/styles/tokens.css` — every color, font and spacing decision flows from there.
5. Replace `public/favicon.svg`.
6. Reorder, add or remove sections in `src/App.tsx` — each section is a self-contained component in `src/components/`.

## Deployment

`npm run build` produces a 100 % static site in `dist/` (relative base — deployable on any host, GitHub Pages, Netlify, etc.).
