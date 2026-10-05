# Project Guide: Ali Ansar Portfolio

This guide describes the portfolio as it is implemented in this repository. It is intended as a handoff for future development and SEO work.

## 1. What this site is for

This is Ali Ansar's public software-development portfolio and service-provider website. It helps prospective clients, employers, and collaborators:

- Understand the web and Android development services Ali offers.
- See selected live, in-progress, and completed projects.
- Learn about Ali's working approach and technical toolkit.
- Contact Ali directly by email, phone, WhatsApp, GitHub, or LinkedIn.

The portfolio itself is a **static website**. It does not currently have a server-side application, database, user accounts, online form submission endpoint, or content-management system. Contact links open email/phone apps; they do not submit information to a portfolio backend.

## 2. Technology used by this portfolio

| Area | Technology | How it is used here |
|---|---|---|
| Site framework and build | Astro (`astro` dependency) | File-based pages and shared Astro components/layouts; generates static HTML into `dist/`. |
| Page and component language | `.astro` templates with JavaScript/TypeScript frontmatter | Server/build-time rendering; the site currently adds no React runtime or interactive client framework. |
| Styling | Component/page-local CSS | Each Astro page/component contains its own `<style>` block; shared header/footer styles live in the layout. No Tailwind or CSS framework is configured. |
| Output | Static HTML, CSS, and public assets | Served from the generated `dist/` directory by a static host. |
| Node/package tooling | Node.js `>=22.12.0`, npm | Dependencies and commands are declared in `package.json` and `package-lock.json`. |

**Important distinction:** React, Next.js, Node.js, Express, and MongoDB are technologies presented as Ali's web-development toolkit/services. They are **not dependencies or backend technologies used to build/run this portfolio**. Android technologies such as Kotlin, Jetpack Compose, and Firebase are likewise featured in the portfolio content; this website does not run Android code.

There is no portfolio API, database, authentication, payment system, or functioning lead-capture form at present.

## 3. Repository structure

```text
my-portfolio/
├── public/                         # Files copied as-is to the root of the built site
│   ├── favicon.svg                 # SVG browser icon
│   ├── favicon.ico                 # ICO browser icon
│   ├── resume.pdf                  # Résumé asset (currently not linked from a page)
│   ├── images/
│   │   └── ali-ansar-profile.png   # Full portrait used on the About page
│   └── projects/
│       ├── nexvion-preview.png     # NexVion website preview
│       ├── dubaiad-preview.png     # DubaiAd design preview
│       ├── portfolio-preview.png   # Portfolio screenshot and current social-share image
│       ├── asterloom/              # Android case-study screenshots
│       ├── campusnotify/           # Android case-study screenshots
│       ├── flashcard-quiz/         # Android case-study screenshots
│       └── semesta/                # Android case-study screenshots
├── src/
│   ├── components/
│   │   ├── ProjectShowcase.astro   # Shared template for web-project case studies
│   │   └── ScreenshotGallery.astro # Shared Android screenshot gallery
│   ├── layouts/
│   │   └── Layout.astro            # HTML document, SEO defaults, global header/footer
│   └── pages/                      # Astro file-based routes (see route map below)
│       ├── index.astro             # Homepage
│       ├── about.astro             # About/profile page
│       ├── contact.astro           # Contact details and inquiry links
│       ├── services.astro          # Services, stack, and delivery process
│       └── projects/
│           ├── index.astro         # Project portfolio/gallery
│           ├── nexvion.astro       # NexVion case study
│           ├── dubaiad.astro       # DubaiAd case study
│           ├── portfolio.astro     # This portfolio's case study
│           ├── asterloom.astro     # Android app case study
│           ├── campusnotify.astro  # Android app case study
│           ├── flashcard-quiz.astro # Android app case study
│           └── semesta.astro       # Android app case study
├── astro.config.mjs                # Astro configuration; currently default/minimal
├── package.json                    # Dependencies, Node requirement, npm scripts
├── package-lock.json               # Locked npm dependency versions
├── tsconfig.json                   # Astro strict TypeScript configuration
├── .gitignore                      # Ignores generated output, dependencies, env files, logs
├── .vscode/
│   ├── launch.json                 # VS Code Astro development-server launch config
│   └── extensions.json             # Recommended Astro VS Code extension
├── AGENTS.md                       # Repository-specific AI/developer guidance
├── CLAUDE.md                       # Repository-specific AI/developer guidance
├── README.md                       # Quick start and summary; links to this guide
└── PROJECT_GUIDE.md                # This architecture, maintenance, and SEO handoff
```

Generated/installed directories:

- `node_modules/` contains installed npm dependencies; do not edit or commit it.
- `.astro/` contains generated Astro types/settings; do not treat it as application source.
- `dist/` is generated production output; rebuild it with `npm run build` rather than editing it.

## 4. Routes and where to edit them

Astro derives pages from `src/pages/`. For example, `src/pages/about.astro` creates `/about/`, and `src/pages/projects/nexvion.astro` creates `/projects/nexvion/`. A trailing slash may be normalized by the hosting platform.

| URL | Source file | Purpose |
|---|---|---|
| `/` | `src/pages/index.astro` | Main introduction, service summary, featured projects, stack, calls to action. |
| `/services/` | `src/pages/services.astro` | Service descriptions, deliverables, technologies, work process. |
| `/projects/` | `src/pages/projects/index.astro` | Web and Android project listings/statuses. |
| `/projects/nexvion/` | `src/pages/projects/nexvion.astro` | Live NexVion Sportswear website case study; links to `https://nexvionsportswear.tech/`. |
| `/projects/dubaiad/` | `src/pages/projects/dubaiad.astro` | DubaiAd website design case study; clearly says the site is not published yet. |
| `/projects/portfolio/` | `src/pages/projects/portfolio.astro` | Case study for this portfolio website. |
| `/projects/campusnotify/` | `src/pages/projects/campusnotify.astro` | Android app case study and its screenshots. |
| `/projects/semesta/` | `src/pages/projects/semesta.astro` | Android app case study and its screenshots. |
| `/projects/flashcard-quiz/` | `src/pages/projects/flashcard-quiz.astro` | Android app case study and its screenshots. |
| `/projects/asterloom/` | `src/pages/projects/asterloom.astro` | Android app case study and its screenshots. |
| `/about/` | `src/pages/about.astro` | Developer profile, portrait, working principles, experience/toolkit summary. |
| `/contact/` | `src/pages/contact.astro` | Email, telephone/WhatsApp, GitHub, and LinkedIn links. |

## 5. Shared components and layout

### `src/layouts/Layout.astro`

Wraps the site pages and owns:

- The HTML document shell, language, viewport, favicon, and theme color.
- Default `<title>` and description values, which a page can override using `title` and `description` props.
- Basic Open Graph title/description/image and Twitter summary-card metadata.
- The common header navigation and footer.

When changing a shared navigation link, change it here. When adding site-wide metadata, start here. Keep page-specific titles and descriptions in their corresponding page's `<Layout ...>` invocation.

### `src/components/ProjectShowcase.astro`

Shared case-study template for the web projects NexVion, DubaiAd, and the portfolio. Each page passes typed properties such as project title, description, category, status, preview image, role, technologies, highlights, and optional live URL or launch note.

To change the case-study presentation for these web projects, update this component. To change the content for one of those projects, update that project's individual `.astro` page.

### `src/components/ScreenshotGallery.astro`

Renders Android project screenshots consistently. Android project pages provide the project key and screenshot filenames/captions. Screenshot files are loaded from `public/projects/<project-key>/`.

## 6. Where common changes belong

### Change the homepage

Edit `src/pages/index.astro`. Its service-summary cards, featured-project data, copy, toolkit, and calls to action live in that file. If you add or remove a featured project, also check `src/pages/projects/index.astro` so the full project listing agrees.

### Add or update a service / technology

Edit `src/pages/services.astro`. The homepage also has a shorter service summary and toolkit list in `src/pages/index.astro`; update both when the homepage should show the same change.

### Add a web project

1. Put its preview image in `public/projects/`.
2. Create `src/pages/projects/<slug>.astro` and use `ProjectShowcase.astro`.
3. Add the project to `src/pages/projects/index.astro`.
4. Add it to the homepage project data in `src/pages/index.astro` if it should be featured.
5. Set its status honestly (for example, live, in progress, or design only) and link externally only if it is actually published.

### Add an Android project

1. Create `src/pages/projects/<slug>.astro` following the existing Android case studies.
2. Put screenshots in `public/projects/<slug>/` and pass their filenames to `ScreenshotGallery.astro`.
3. Add the Android entry to `src/pages/projects/index.astro`; feature it on the homepage if appropriate.

### Replace the profile picture or project imagery

Files under `public/` are referenced by URL from the site. The About page portrait is `public/images/ali-ansar-profile.png`. Homepage and projects use previews under `public/projects/`. Replace an image while retaining its path, or update every corresponding `src`/data value in the relevant page.

### Change contact details

Update the links in `src/pages/contact.astro`. The phone/email details also appear in the homepage contact surface if that section is changed/reintroduced. Search the `src/` directory for the old value to avoid leaving stale links.

### Change site-wide header, footer, or basic metadata

Edit `src/layouts/Layout.astro`. The name/strapline in the header, navigation, footer, default title/description, favicon, and shared social metadata are defined there.

## 7. Project content and live status

- **NexVion Sportswear:** portfolio case study links to a live external business site: `https://nexvionsportswear.tech/`.
- **DubaiAd:** design is ready, but it is not live/published. The portfolio must not imply that visitors can use a deployed DubaiAd site.
- **Portfolio Website:** this website, presented as a project.
- **CampusNotify, Semesta, Flashcard Quiz, Asterloom:** Android project case studies, with screenshots available under their matching folders in `public/projects/`.

Keep claims, roles, technical stacks, outcomes, and launch statuses aligned with work that has actually been completed. Do not add invented client results, metrics, or technology usage.

## 8. SEO state and next work

### Already present

- Each main route sets a page-specific title and meta description through `Layout.astro` props.
- The shared layout emits basic Open Graph title/description/image and `twitter:card`.
- Pages use semantic HTML landmarks/headings, descriptive links, and image alt text in many places.
- Astro produces static HTML pages at build time, which is a suitable starting point for crawlable content.

### Not yet configured/verified

- No confirmed production domain for this portfolio is configured. The NexVion domain belongs to the separate NexVion website; **do not use it as this portfolio's canonical domain**.
- No canonical URL is emitted.
- No sitemap or explicit `robots.txt` is present.
- There is no structured data/JSON-LD yet.
- The shared social image is currently `/projects/portfolio-preview.png` on every route. It is a root-relative path rather than an absolute URL, and page-specific social cards have not been prepared.
- Search Console / Bing Webmaster Tools ownership and indexing have not been set up or verified.
- No analytics or consent configuration is included.
- SEO performance, keyword selection, regional targeting, and production metadata have not been audited against an actual domain/business brief.
- The résumé PDF is present at `public/resume.pdf`, but no current page links to it.

Before implementing domain-dependent SEO, provide the exact portfolio production URL, preferred canonical hostname (`www` or non-`www`), target countries/cities, audiences/services to prioritize, truthful business name/contact/location details, and hosting/deployment provider. Never claim a location, award, client, result, or service area that is not accurate.

## 9. Development commands

Requires Node.js `>=22.12.0`.

```sh
npm install
npm run dev
npm run build
npm run preview
```

- `npm run dev`: starts the local Astro development server.
- `npm run build`: type-checks/generates the static site into `dist/`.
- `npm run preview`: previews the built site locally.
- `npm run astro -- --help`: displays Astro CLI help.

The repository's developer guidance asks that a long-running dev server be started with `astro dev --background`; manage it with `astro dev status`, `astro dev logs`, and `astro dev stop`.

After route, content, or layout changes, run `npm run build`. This project currently has no test or lint script configured in `package.json`.

## 10. Context to give a future SEO assistant

Copy this along with `PROJECT_GUIDE.md`, the repository, and any missing business/domain information:

> I want to improve SEO for my existing Ali Ansar developer portfolio. Read `PROJECT_GUIDE.md` and inspect the actual source before proposing or editing anything. This is a static Astro website (not a React/Next.js app, not a backend/API, and not a database-driven site). The common HTML shell, navigation, default metadata and shared social preview are in `src/layouts/Layout.astro`; each page's title/description are passed from the corresponding `.astro` route in `src/pages/`. Routes, assets, existing SEO, and limitations are listed in the guide. First audit the current implementation and give me an evidence-based list of issues and recommendations. Ask me for the production domain/canonical host, target locations/audience, priority services, and truthful business details before adding domain-specific canonical URLs, sitemap/robots rules, local-business markup, or other claims. Keep all changes accurate, minimal, and compatible with Astro static output; verify with `npm run build`.
