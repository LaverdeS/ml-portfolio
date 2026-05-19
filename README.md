# Sebastian Laverde — Machine Learning Portfolio

A bespoke, high-contrast, production-grade portfolio showcasing 7+ years of machine learning engineering experience, with a focus on **Agentic AI systems**, **LLM infrastructure**, and **Document Intelligence**.

Live deployment: [ml-portfolio-swart.vercel.app](https://ml-portfolio-swart.vercel.app)

---

## 🎨 Design Aesthetic: "Terminal Precision meets Editorial Luxury"

This web application deviates from generic "AI portfolio" templates (like standard purple gradients and card-heavy layouts) to project a sense of system-level thinking and design taste:
- **Palette**: Dark-first near-black background (`#080b0f`) accented with high-contrast electric cyan (`#00d4ff`) and deep muted violet (`#7c6aff`).
- **Typography**: Display headings set in *Playfair Display* for editorial elegance; body text set in *IBM Plex Mono* and *IBM Plex Sans* to evoke terminal precision and scientific data streams.
- **Blueprint Grid**: The hero section uses a subtle background grid to represent structural precision.
- **Quantified Metrics**: A glowing statistics strip highlights core professional metrics.
- **Stateful Timeline**: Career experience features expandable bullets, prioritizing legibility and interactive discovery.

---

## 🛠️ Technology Stack

- **Core Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/) (Static Export / Zero Server Functions)

---

## 🚀 Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### 3. Build & Static Export
To compile the static pages and export them into the `out/` directory:
```bash
npm run build
```
Verify the static export locally:
```bash
npx serve out
```

---

## 📁 File Structure

```
ml-portfolio/
├── public/                 # Static assets (including CV document & robots.txt)
├── src/
│   ├── app/
│   │   ├── globals.css     # Global styles & Tailwind v4 theme definitions
│   │   ├── layout.tsx      # App wrapper with SEO metadata
│   │   └── page.tsx        # Single-page assembly
│   ├── components/
│   │   ├── Nav.tsx         # Sidebar/mobile navigation component
│   │   ├── ui/
│   │   │   ├── Tag.tsx     # Custom monospace tag/pill component
│   │   │   └── SectionLabel.tsx
│   │   └── sections/
│   │       ├── Hero.tsx
│   │       ├── Metrics.tsx
│   │       ├── About.tsx
│   │       ├── Experience.tsx
│   │       ├── Projects.tsx
│   │       ├── Skills.tsx
│   │       ├── Publications.tsx
│   │       └── Contact.tsx
│   ├── data/
│   │   └── portfolio.ts    # Canonical data layer (no APIs or databases)
│   └── lib/
│       └── utils.ts        # CN tailwind-merge helper
├── next.config.ts          # Next.js configuration (static export configured)
└── package.json
```
