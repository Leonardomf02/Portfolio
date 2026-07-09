# Portfolio

Personal portfolio — Leonardo M. F. Santos.

Live: https://leonardomf02.github.io/Portfolio/

## Stack

React + Vite. No runtime dependencies beyond React. Content lives in a single file.

## Editing content

Everything shown on the page is in [`src/data/content.js`](src/data/content.js) —
name, roles, about text, Erasmus timeline, projects, skills and contact links.
Edit that file; no component changes needed for text updates.

Two things still need real values in that file:

- `profile.linkedin` — your LinkedIn URL.
- `profile.cv` — drop a `cv.pdf` into [`public/`](public/) (it's already wired to `/Portfolio/cv.pdf`).

## Run locally

```bash
npm install
npm run dev      # http://localhost:3004
```

## Deploy (GitHub Pages)

```bash
npm run deploy   # builds and publishes dist/ to the gh-pages branch
```
