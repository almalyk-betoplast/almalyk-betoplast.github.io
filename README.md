# Almalyk MMC – Betoplast

Corporate website for Almalyk MMC – Betoplast, a copper downstream producer
(oxygen-free copper rod, conversion products, ED copper foil and electronics-grade materials).

Built with [Astro](https://astro.build) — static, no backend.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview  # serve the production build
```

## Structure

```
src/
  data/site.ts        # company info, nav, Formspree ID
  data/products.ts    # product catalogue
  layouts/Base.astro  # shared layout (head, header, footer)
  components/          # Header, Footer, ProductCard, CtaBand
  pages/              # Home, About, Products, Quality, How We Work, Sustainability, Contact
public/images/        # stock imagery (replace with real photos)
```

## Editing content

- **Products** — edit `src/data/products.ts`. Images live in `public/images/products/`.
- **Company details / navigation** — edit `src/data/site.ts`.
- **Page copy** — each page is a single `.astro` file in `src/pages/`.

## Contact form

The contact form posts to [Formspree](https://formspree.io). Set your form ID in
`src/data/site.ts` (`formspreeId`). Until then the form shows a "not configured" notice.

## Images

Stock photos in `public/images/` are temporary placeholders (sourced from Unsplash;
see `public/images/_credits.json`). Replace with real production / product photography.
Keep the same filenames to avoid touching the code, or update paths in the data files.
```
