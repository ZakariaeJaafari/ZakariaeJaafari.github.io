# zakariaejaafari.github.io

Personal site for [Zakariae Jaafari](https://zakariaejaafari.github.io/) — Full-Stack Engineer, Rabat.

This is the source of the public portfolio. It is built from the CV and from the three public GitHub repositories. Nothing on the site is invented.

**Live:** [https://zakariaejaafari.github.io/](https://zakariaejaafari.github.io/)

## What it contains

- Hero, about, experience, skills, featured projects, education, certifications, contact
- Dedicated pages for [ChantiePro](/projects/chantiepro), the [NYC taxi pipeline](/projects/nyc-taxi-ingestion-pipeline) and the [face-detection app](/projects/face-detection-react)
- A downloadable copy of the CV (`public/cv/CV_Zakariae_Jaafari.pdf`)
- Semantic HTML, JSON-LD (`Person`, `WebSite`, `SoftwareSourceCode`), Open Graph, sitemap, `robots.txt`

## Stack

| | |
|---|---|
| Framework | [Astro](https://astro.build) 7, TypeScript, static output |
| Styles | Tailwind CSS 4 |
| Fonts | Source Serif 4, IBM Plex Sans, IBM Plex Mono (self-hosted) |
| Hosting | GitHub Pages |
| CI | GitHub Actions (`withastro/action` → `actions/deploy-pages`) |

Astro was chosen because the site is content, not an application. Pages ship as HTML. That is better for SEO, accessibility and Lighthouse than a client-rendered React or Angular shell, and it deploys cleanly to GitHub Pages.

The repository is named `ZakariaeJaafari.github.io`, so there is no `base` path. The site is served at the root of `https://zakariaejaafari.github.io/`.

## Local development

Requires Node.js 22.12 or newer (CI uses Node 24).

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

The production build writes to `dist/`. GitHub Pages serves that directory.

## Content rules

Copy lives in `src/data/`. If a fact is not on the CV or in a public repository, it does not go on the site.

- Employer stack lines match the CV’s “environnement technique”
- Kafka, Redis, JWT and GitHub Actions are attributed to ChantiePro where they are not also on the CV
- Client work (Mendix applications behind a private GitLab) is described as employment, never shown as code

## Licence

MIT. The portrait and the CV PDF remain the author’s.
