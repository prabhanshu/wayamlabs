# Wayam Labs — Web (Next.js)

Under-construction site for `wayamlabs.com`. App Router · TypeScript ·
Tailwind. The design tokens (paper / ink / accent / Geist / Instrument
Serif) live in `tailwind.config.ts` and `src/app/globals.css` — they
match the design system at the parent of this folder.

## Run locally

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Build

```bash
npm run build
npm run start
```

## Deploy on Railway

Railway picks up `package.json` automatically. Defaults that work:

- **Build command**: `npm run build`
- **Start command**: `npm run start`
- **Port**: Railway sets `$PORT`; the start script reads it.
- **Node version**: 18.17+ (declared in `package.json` `engines`).

That's it — push the `nextjs/` folder to a GitHub repo and connect it
to Railway. No environment variables are required for the under-
construction page.

## What's on right now

- `/` renders the under-construction page.
- Every other path 302-redirects to `/` (see `next.config.js`). Drop
  the `redirects()` block when real routes go live.
- `robots.txt` blocks indexing until launch. Delete or relax the file
  when you're ready to be discovered.

## Adding real routes later

Each new page is a folder under `src/app/`:

```
src/app/products/page.tsx     →  /products
src/app/about/page.tsx        →  /about
```

When you add a real route, remove the catch-all redirect in
`next.config.js`.

## Design tokens

All colors and fonts are defined twice on purpose:

- **`tailwind.config.ts`** — utility classes (`bg-paper-0`,
  `text-ink-2`, `text-accent`, `font-serif`, etc).
- **`src/app/globals.css`** — CSS variables for arbitrary CSS and any
  raw SVG/HTML that needs them.

Keep these in sync. The source of truth is the parent project's
`colors_and_type.css`.
