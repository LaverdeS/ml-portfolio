# Sebastian Laverde - Machine Learning Portfolio

A bespoke portfolio for Sebastian Laverde Alfonso: machine learning engineer, agentic AI builder, and production-focused LLM systems practitioner.

The site presents 7+ years of work across applied ML, document intelligence, hybrid RAG, multi-agent systems, cloud delivery, research, and public-facing technical work. It is designed less like a generic personal page and more like a compact AI systems console: structured, high-contrast, interactive, and deliberately technical.

Live deployment: [sebastian-laverde-ml-portfolio.vercel.app](https://sebastian-laverde-ml-portfolio.vercel.app/)

## Overview

This is a Next.js App Router portfolio built as a single-page interactive experience. The interface combines a cinematic sci-fi atmosphere with an enterprise AI command-center layout: dark canvas, orbital navigation, crisp cyan accents, dashboard-style sections, collapsible career cards, scored skill groups, and compact project evidence.

The content is intentionally grounded in concrete proof points: shipped systems, measurable outcomes, GitHub projects, publications, thesis work, references, profiles, and a downloadable CV.

## Design Direction

The visual language aims for "terminal precision with editorial polish":

- **Dark-first system UI**: near-black backgrounds, low-noise surfaces, and thin cyan borders.
- **Command-center navigation**: a radial/orbital home menu leading into the main portfolio sections.
- **Technical density without clutter**: compact tags, dashboards, accordions, and proof-oriented cards.
- **Motion with restraint**: Framer Motion interactions, typewriter text, hover/click sound, and subtle transitions.
- **Recruiter-friendly structure**: fast access to roles, experience, projects, skills, academics, contact channels, CV, and references.

Main sections:

- About
- Experience
- Projects
- Skills
- Academics
- Contact

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) App Router
- **Runtime/UI**: React 19
- **Styling**: Tailwind CSS v4 with custom global styling in `src/app/globals.css`
- **Interaction**: Framer Motion
- **Icons**: Lucide React
- **Observability**: Vercel Analytics and Vercel Speed Insights
- **Deployment**: Vercel

## Project Structure

```text
ml-portfolio/
|-- public/
|   `-- cv/                         # Public CV document
|-- src/
|   |-- app/
|   |   |-- globals.css             # Main visual system and responsive styling
|   |   |-- layout.tsx              # Metadata, Analytics, Speed Insights
|   |   `-- page.tsx                # Renders the portfolio experience
|   |-- components/
|   |   `-- PortfolioExperience.tsx # Main single-page portfolio UI
|   `-- data/
|       `-- portfolio.ts            # Portfolio content and structured data
|-- next.config.ts
|-- package.json
`-- README.md
```

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality Checks

Run lint:

```bash
npm run lint
```

Run a production build:

```bash
npm run build
```

Start the production build locally:

```bash
npm run start
```

## Deployment

The app is deployed on Vercel from the connected GitHub repository. Pushing to `main` triggers a new Vercel deployment.

Production observability is handled through:

- `@vercel/analytics`
- `@vercel/speed-insights`

Both components are mounted in `src/app/layout.tsx`.

## Content Notes

Most visible portfolio content lives in `src/data/portfolio.ts`. The main rendered experience is in `src/components/PortfolioExperience.tsx`, with global styling in `src/app/globals.css`.

The repository also contains older section components under `src/components/sections/`; the active deployed experience is the consolidated `PortfolioExperience.tsx` flow rendered by `src/app/page.tsx`.
