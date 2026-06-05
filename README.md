# Sebastian Laverde - ML Portfolio

A cinematic, command-center style portfolio for Sebastian Laverde Alfonso, focused on machine learning engineering, agentic AI systems, LLM infrastructure, hybrid RAG, document intelligence, and production AI delivery.

Live deployment: [sebastian-laverde-ml-portfolio.vercel.app](https://sebastian-laverde-ml-portfolio.vercel.app/)

## Overview

This is a Next.js App Router portfolio built as a single rich interactive experience. The current design direction is minimal cyberpunk / enterprise AI command center: dark interface, orbital navigation, crisp cyan accents, structured dashboards, collapsible experience and skill sections, and compact project cards.

Main sections:

- About
- Experience
- Projects
- Skills
- Academics
- Contact

## Tech Stack

- [Next.js](https://nextjs.org/) App Router
- React 19
- Tailwind CSS v4
- Framer Motion
- Lucide React
- Vercel Analytics
- Vercel Speed Insights
- Vercel deployment

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

Analytics are handled through:

- `@vercel/analytics`
- `@vercel/speed-insights`

Both components are mounted in `src/app/layout.tsx`.

## Content Notes

Most visible portfolio content lives in `src/data/portfolio.ts`. The main rendered experience is in `src/components/PortfolioExperience.tsx`, with global styling in `src/app/globals.css`.
