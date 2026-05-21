# Portfolio Redesign Implementation Plan

## Goal

Rebuild the live Next.js portfolio so it matches the `design/app-views.png` direction: a cinematic dark AI/ML command surface with a centered radial home menu, no persistent left sidebar on the home view, compact contextual navigation inside section views, and content presented as focused panels instead of a long resume document.

## Current Findings

- The app is a small Next.js App Router project using React, Tailwind CSS v4, Framer Motion, and Lucide icons.
- The live deployment at `https://ml-portfolio-swart.vercel.app/` responded successfully with HTTP 200.
- The existing visual system already has useful pieces: dark grid, Playfair display type, mono UI type, cyan accent, and portfolio data in `src/data/portfolio.ts`.
- The main blockers to the desired design are structural, not platform-related: the left sidebar, the long scroll document layout, dense section blocks, and limited transitional motion.
- No Next.js or Vercel limitation prevents the target design. This can remain a static/client-rendered portfolio deployed on Vercel.

## Implementation Steps

1. Replace the page composition with a single immersive portfolio experience component.
2. Remove the homepage sidebar pattern and build a centered radial navigation home view.
3. Add animated section transitions with contextual "Home" navigation and a compact icon rail for content views.
4. Redesign About, Experience, Projects, Skills, Publications, and Contact as compact cinematic panels that preserve recruiter usability.
5. Refresh global styles: background grid, star/noise depth, controlled serif/mono/sans typography, buttons, cards, and reduced-motion handling.
6. Clean obvious text encoding artifacts in metadata/content where they affect display.
7. Verify locally with lint/build and visual screenshots.
8. Commit and push the changes so the Vercel deployment can update.

## Design Notes

- The homepage should communicate identity in under 30 seconds: name, ML/AI positioning, impact statement, view work, and CV download.
- Projects and experience should emphasize outcomes and architecture without becoming dense.
- Motion should be fluid and restrained: fades, slight scale, orbital pulses, staggered cards, and hover glow.
- Mobile should keep the same identity but switch radial nodes into a compact command grid for reliable usability.
