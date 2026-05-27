# Portfolio Interaction & View Refinement Plan

## Summary
- Keep the rendered app centered on `src/components/PortfolioExperience.tsx`; no route rewrite or backend work.
- Before implementation, save this approved plan in `ml-portfolio/IMPLEMENTATION_PLAN.md`.
- Use `design/app-views-*.png` as the visual target, with current `design/versions/vanilla/*.png` as the before-state.
- Primary goals: tighter radial home, centered section stages, lower content density, sound feedback, stronger motion polish, and reliable desktop/mobile/projection layouts.

## Key Changes

- **Static Assets**
  - Copy `design/sounds/ui-hover-light.mp3` and `design/sounds/click.mp3` into `ml-portfolio/public/sounds/`.
  - Copy `data/profile-image.jpg` into `ml-portfolio/public/images/` and render it in About with CSS grayscale/contrast treatment rather than generating a new image.

- **Sound & Controls**
  - Add a small top-right mute toggle using Lucide `Volume2` / `VolumeX`, persisted in `localStorage`.
  - Add a lightweight audio helper in `PortfolioExperience.tsx` using preloaded `Audio` refs.
  - Play hover sound only on desktop radial section hover.
  - Play click sound for radial section selection, `Home` back navigation, `View Work`, and section rail/dock navigation.
  - Handle browser audio restrictions gracefully: unlock on first user interaction, catch rejected `play()` promises, never block navigation.

- **Home View**
  - Replace loose absolute node positions with a centered circular/polar layout using one clamped radius, so nodes form a tighter circle instead of a wide oval.
  - Clamp hero typography and statement width to fix mobile overflow seen in the current live screenshot.
  - Add restrained page-load choreography: staggered name, subtitle, CTA, orbit rings, and radial nodes.
  - Keep mobile home as a command grid, but tighten labels/buttons so they fit at ~390px width.

- **Section Shell**
  - Rework the section stage so content is vertically centered when it fits, and horizontally centered/right-balanced relative to the rail.
  - Remove the oversized "header then content" feeling; keep compact section intros closer to the reference.
  - Use section-specific max widths instead of one very wide `1420px` container.
  - Keep the desktop left rail and mobile bottom dock, with active/focus states and click sounds.

- **About**
  - Match `app-views-about.png`: compact intro, portrait/visual panel on the right, metrics row, tech highlights below.
  - Use the real profile image in monochrome with subtle sci-fi overlays.
  - Increase spacing between content groups and avoid the current dense paragraph block.
  - Keep accurate metrics from the data layer, including `7+` years.

- **Experience**
  - Convert to a single-open accordion/timeline.
  - Default state: all roles collapsed.
  - Collapsed rows show only quick-scan info: period, company, role, headline/subheader, key tags, and a down arrow.
  - Expanded rows reveal context, bullets, systems built, and evidence with Framer Motion height/opacity transitions.
  - Add `aria-expanded` / `aria-controls` and keyboard-safe button behavior.

- **Projects**
  - Match `app-views-projects.png`: centered 2x2 featured grid with more spacing and compact cards.
  - Show first 4 projects by default.
  - Add a `View all projects ->` button that expands to all projects; after expansion, offer a compact "Show featured projects" state.
  - Keep project outcomes visible but reduce long-card density.

- **Skills**
  - Replace the current large tag-card matrix with a centered, reference-like skills dashboard.
  - Use three compact columns such as AI/ML, Data/RAG, and Dev/Ops with high-signal skill bars.
  - Keep a core-strength chip row for technical depth without overwhelming the first view.
  - Reuse existing `skills` data where practical, adding only small display constants if needed.

- **Publications**
  - Center the view and reduce the current wide empty-space feeling.
  - Keep publications plus education/community, but style them as tighter research cards and a balanced side panel.
  - Avoid adding a separate design system or new route.

- **Contact**
  - Remove the form fields.
  - Use a clear `Send Message` mailto CTA that opens the visitor's default email app with a prefilled subject/body.
  - Keep email, location, open-to-remote, LinkedIn, GitHub, Hugging Face, and CV access visible.
  - No Vercel serverless function, no paid email provider, no backend configuration.

## Motion & Responsiveness
- Use Framer Motion for staged page/section/card reveals with existing cubic easing `[0.16, 1, 0.3, 1]`.
- Add hover micro-interactions: soft glow, small lift, icon pulse, border scanline.
- Avoid heavy scroll pinning/parallax; use progressive reveals only where content scrolls naturally.
- Honor `prefers-reduced-motion` for visual motion; sound remains user-controlled via the mute toggle.
- Validate layouts at mobile `390x844`, tablet, laptop `1440x1000`, and wide/projection `1920x1080`.

## Files Likely To Change
- `src/components/PortfolioExperience.tsx`: main layout, sound helper, accordions, toggles, section redesigns.
- `src/app/globals.css`: motion keyframes, responsive safeguards, shared field/card/sound-toggle styling cleanup.
- `public/sounds/*`: copied MP3 assets.
- `public/images/profile-image.jpg`: copied profile asset.
- `src/data/portfolio.ts`: only if small display metadata is needed; avoid major data restructuring.
- `README.md` only if we decide to document the new sound/contact behavior after implementation.

## Test Plan
- Run `npm run lint`.
- Run `npm run build`.
- Visually inspect home/about/experience/projects/skills/publications/contact locally.
- Capture/check screenshots at desktop, mobile, and wide/projection sizes.
- Verify no horizontal overflow, no text overlap, no clipped buttons, and no rail/content collision.
- Verify audio: hover sound on radial nodes, click sound on section changes/back/rail, mute toggle persists, blocked audio fails silently.
- Verify contact CTA opens a mailto URL and does not require any backend.
- Verify keyboard navigation, focus rings, `aria-expanded`, and reduced-motion behavior.

## MCP / Agent Notes
- Figma MCP is optional, not required for this iteration; use it only if you want a formal design pass before coding.
- Playwright or Chrome-headless visual checks are the most valuable dev aid here.
- If implementation is delegated later, split work into independent slices: sound/contact, home shell/responsiveness, section panels, and visual QA. Keep write scopes disjoint.
