# Ali Ansar Portfolio

A multi-page portfolio for Ali Ansar, showcasing full-stack web development, native Android development, selected projects, and contact details. Built with Astro and rendered as a static site.

## Pages

- `/` — Services overview and featured projects
- `/services/` — Web, backend, and Android development services and technologies
- `/projects/` — Web and Android project listings
- `/projects/nexvion/` — NexVion Sportswear website case study (live at [nexvionsportswear.tech](https://nexvionsportswear.tech/))
- `/projects/dubaiad/` — DubaiAd website design case study (not published yet)
- `/projects/portfolio/` — Portfolio website case study
- `/about/` — Developer profile and working approach
- `/contact/` — Project inquiry and contact links

## Development

Requires Node.js `>=22.12.0`.

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

The static production output is written to `dist/`. Page titles, descriptions, and Open Graph metadata are configured through `src/layouts/Layout.astro`; page-specific values are passed by each route.
