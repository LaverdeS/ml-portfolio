'use client'

import { useEffect, useState } from 'react'
import type { FormEvent, SVGProps } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Bot,
  Briefcase,
  Brain,
  Cloud,
  Code2,
  Database,
  Download,
  ExternalLink,
  Globe2,
  Layers,
  Mail,
  MapPin,
  Send,
  Settings,
  User,
  type LucideIcon,
} from 'lucide-react'
import { education, experience, meta, metrics, projects, publications, skills } from '@/data/portfolio'
import { cn } from '@/lib/utils'

type SectionId = 'about' | 'experience' | 'projects' | 'skills' | 'publications' | 'contact'

type SectionNode = {
  id: SectionId
  label: string
  number: string
  eyebrow: string
  title: string
  Icon: LucideIcon
  position: {
    top?: string
    bottom?: string
    left?: string
    right?: string
    transform?: string
  }
}

const sectionNodes: SectionNode[] = [
  {
    id: 'about',
    label: 'About',
    number: '01',
    eyebrow: 'About Me',
    title: 'Data and AI professional driven by impact.',
    Icon: User,
    position: { top: '5%', left: '50%', transform: 'translateX(-50%)' },
  },
  {
    id: 'experience',
    label: 'Experience',
    number: '02',
    eyebrow: 'Experience',
    title: 'Building solutions. Delivering value.',
    Icon: Briefcase,
    position: { top: '31%', left: '6%' },
  },
  {
    id: 'projects',
    label: 'Projects',
    number: '03',
    eyebrow: 'Projects',
    title: 'Selected work. Real impact.',
    Icon: Layers,
    position: { top: '31%', right: '6%' },
  },
  {
    id: 'skills',
    label: 'Skills',
    number: '04',
    eyebrow: 'Skills',
    title: 'Tools. Technologies. Expertise.',
    Icon: Code2,
    position: { bottom: '21%', left: '8%' },
  },
  {
    id: 'publications',
    label: 'Publications',
    number: '05',
    eyebrow: 'Publications',
    title: 'Research signal and technical writing.',
    Icon: BookOpen,
    position: { bottom: '21%', right: '8%' },
  },
  {
    id: 'contact',
    label: 'Contact',
    number: '06',
    eyebrow: 'Contact',
    title: "Let's build something meaningful.",
    Icon: Mail,
    position: { bottom: '4%', left: '50%', transform: 'translateX(-50%)' },
  },
]

const subtitles = ['AI & Data', 'Automation', 'LLM Systems']

const aboutParagraphs = [
  'Machine Learning Engineer with 7+ years across research, applied ML, and production AI systems, plus a broader data and consulting foundation from 2012.',
  'My work sits at the intersection of agentic AI, advanced RAG, LLM infrastructure, document intelligence, and production cloud systems.',
  'I have moved from academic NLP and computer vision research to production document intelligence at Unstructured, then to sole ownership of a complete multi-agent SaaS backend at Sapience AI.',
  'The through-line is practical systems design: translating complex business and scientific challenges into reliable, observable, scalable AI products.',
]

const techHighlights = [
  'Python',
  'LangGraph',
  'LangChain',
  'Qdrant',
  'Vertex AI',
  'FastAPI',
  'Docker',
  'GCP Cloud Run',
  'OpenTelemetry',
  'PyTorch',
  'SQL',
  'Pandas',
]

const profilePillars = [
  {
    label: 'Deep Focus',
    text: 'Agentic systems, advanced RAG, LLM infrastructure, and document intelligence.',
  },
  {
    label: 'Breadth',
    text: 'Data, training, fine-tuning, evaluation, deployment, observability, and BI automation.',
  },
  {
    label: 'Target Roles',
    text: 'Senior ML Engineer, Fullstack AI Engineer, Agentic Systems Lead, LLM Platform Engineer.',
  },
]

const skillIconMap: Record<string, LucideIcon> = {
  Bot,
  Database,
  Brain,
  Layers,
  Settings,
  Cloud,
}

const panelVariants = {
  initial: { opacity: 0, scale: 0.98, y: 24 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.98, y: -20 },
}

export default function PortfolioExperience() {
  const [activeSection, setActiveSection] = useState<SectionId | 'home'>('home')
  const [subtitleIndex, setSubtitleIndex] = useState(0)
  const activeNode = sectionNodes.find(section => section.id === activeSection)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setSubtitleIndex(index => (index + 1) % subtitles.length)
    }, 2600)

    return () => window.clearInterval(interval)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [activeSection])

  useEffect(() => {
    function syncHash() {
      const hash = window.location.hash.replace('#', '')
      const view = new URLSearchParams(window.location.search).get('view') || ''
      setActiveSection(isSectionId(hash) ? hash : isSectionId(view) ? view : 'home')
    }

    syncHash()
    window.addEventListener('hashchange', syncHash)
    window.addEventListener('popstate', syncHash)

    return () => {
      window.removeEventListener('hashchange', syncHash)
      window.removeEventListener('popstate', syncHash)
    }
  }, [])

  function handleSelect(section: SectionId | 'home') {
    setActiveSection(section)
    const url =
      section === 'home'
        ? window.location.pathname
        : `${window.location.pathname}#${section}`
    window.history.pushState(null, '', url)
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-bg text-text">
      <SceneBackdrop />
      <TopLinks />

      <AnimatePresence mode="wait" initial={false}>
        {activeSection === 'home' ? (
          <HomeView
            key="home"
            subtitle={subtitles[subtitleIndex]}
            onSelect={handleSelect}
          />
        ) : (
          <SectionShell
            key={activeSection}
            activeSection={activeSection}
            activeNode={activeNode}
            onSelect={handleSelect}
          />
        )}
      </AnimatePresence>
    </main>
  )
}

function isSectionId(value: string): value is SectionId {
  return sectionNodes.some(section => section.id === value)
}

function SceneBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_105%,rgba(0,212,255,0.2),transparent_28%),radial-gradient(circle_at_15%_22%,rgba(124,106,255,0.12),transparent_28%),linear-gradient(180deg,#05080c_0%,#071018_48%,#040609_100%)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(0,212,255,0.55)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.55)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.3)_0_1px,transparent_1px),radial-gradient(circle_at_84%_18%,rgba(0,212,255,0.45)_0_1px,transparent_1px),radial-gradient(circle_at_72%_70%,rgba(124,106,255,0.45)_0_1px,transparent_1px)] [background-size:240px_240px,360px_360px,300px_300px] opacity-30" />
      <div className="absolute -bottom-24 left-1/2 h-48 w-[78vw] -translate-x-1/2 rounded-[50%] border-t border-accent/30 bg-accent/10 blur-2xl" />
    </div>
  )
}

function TopLinks() {
  const socials = [
    { label: 'LinkedIn', href: meta.linkedin, Icon: LinkedinIcon },
    { label: 'GitHub', href: meta.github, Icon: GithubIcon },
    { label: 'Email', href: `mailto:${meta.email}`, Icon: Mail },
  ]

  return (
    <div className="fixed right-5 top-5 z-50 flex items-center gap-3 sm:right-8 sm:top-7">
      {socials.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target={label === 'Email' ? undefined : '_blank'}
          rel={label === 'Email' ? undefined : 'noopener noreferrer'}
          aria-label={label}
          title={label}
          className="rounded-sm p-1.5 text-text/80 transition hover:bg-accent/10 hover:text-accent"
        >
          <Icon size={17} strokeWidth={1.9} />
        </a>
      ))}
    </div>
  )
}

function HomeView({
  subtitle,
  onSelect,
}: {
  subtitle: string
  onSelect: (section: SectionId) => void
}) {
  return (
    <motion.section
      variants={panelVariants}
      initial={false}
      animate="animate"
      exit="exit"
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-10 flex min-h-screen items-center justify-center px-5 py-24"
    >
      <div className="relative flex min-h-[min(880px,calc(100vh-7rem))] w-full max-w-[1500px] items-center justify-center">
        <OrbitSystem />

        <div className="relative z-20 flex max-w-xl flex-col items-center text-center">
          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.5 }}
            className="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.35em] text-accent"
          >
            &lt; ml_engineer /&gt;
          </motion.p>

          <motion.h1
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(5rem,12vw,11.5rem)] font-bold leading-[0.82] tracking-normal text-text"
          >
            <span className="block text-[0.58em] font-normal text-[#788399]">Sebastian</span>
            Laverde
          </motion.h1>

          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.45 }}
            className="mt-6 flex min-h-7 items-center gap-2 font-mono text-xs uppercase tracking-[0.24em] text-text sm:text-sm"
          >
            <span>AI & Data</span>
            <span className="text-accent">.</span>
            <span>{subtitle}</span>
          </motion.div>

          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.45 }}
            className="mt-6 max-w-lg border border-border/70 bg-surface/35 px-6 py-3 font-mono text-[11px] leading-6 text-muted shadow-[0_0_38px_rgba(0,212,255,0.05)] backdrop-blur"
          >
            Building intelligent systems at the intersection of data, models, and real-world impact.
            <span className="ml-1 inline-block h-4 w-px translate-y-1 bg-accent animate-blink" />
          </motion.p>

          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.36, duration: 0.45 }}
            className="mt-7 flex flex-wrap items-center justify-center gap-3"
          >
            <button
              type="button"
              onClick={() => onSelect('projects')}
              className="group inline-flex h-10 items-center gap-2 rounded-sm border border-accent bg-accent px-5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-bg shadow-[0_0_24px_rgba(0,212,255,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_0_36px_rgba(0,212,255,0.45)]"
            >
              View Work
              <ArrowRight size={13} className="transition group-hover:translate-x-0.5" />
            </button>
            <a
              href={meta.cvPath}
              download
              className="inline-flex h-10 items-center gap-2 rounded-sm border border-border bg-bg/50 px-5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-text/80 transition hover:border-accent/70 hover:text-accent"
            >
              <Download size={13} />
              Download CV
            </a>
          </motion.div>
        </div>

        <nav aria-label="Portfolio sections" className="pointer-events-none absolute inset-0 hidden md:block">
          {sectionNodes.map((section, index) => (
            <motion.button
              key={section.id}
              type="button"
              aria-label={`Open ${section.label}`}
              onClick={() => onSelect(section.id)}
              initial={false}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.22 + index * 0.05, duration: 0.45 }}
              className="group pointer-events-auto absolute flex -translate-y-1/2 flex-col items-center gap-3 rounded-sm px-4 py-3 text-center transition hover:-translate-y-[54%]"
              style={section.position}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 bg-bg/70 text-accent shadow-[0_0_22px_rgba(0,212,255,0.08)] backdrop-blur transition group-hover:border-accent group-hover:bg-accent/10 group-hover:shadow-[0_0_26px_rgba(0,212,255,0.32)]">
                <section.Icon size={18} />
              </span>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-text transition group-hover:text-accent">
                {section.label}
              </span>
            </motion.button>
          ))}
        </nav>

        <nav aria-label="Portfolio sections" className="absolute bottom-0 z-30 grid w-full grid-cols-2 gap-2 px-1 md:hidden">
          {sectionNodes.map(section => (
            <button
              key={section.id}
              type="button"
              onClick={() => onSelect(section.id)}
              className="flex h-12 items-center justify-center gap-2 rounded-sm border border-border/80 bg-surface/70 px-3 font-mono text-[10px] uppercase tracking-[0.16em] text-text/85 backdrop-blur transition hover:border-accent/70 hover:text-accent"
            >
              <section.Icon size={14} />
              {section.label}
            </button>
          ))}
        </nav>
      </div>
    </motion.section>
  )
}

function OrbitSystem() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden items-center justify-center md:flex">
      <div className="absolute h-[min(72vw,820px)] w-[min(72vw,820px)] rounded-full border border-accent/10" />
      <div className="absolute h-[min(60vw,690px)] w-[min(60vw,690px)] rounded-full border border-accent/20 opacity-80 orbit-spin" />
      <div className="absolute h-[min(48vw,560px)] w-[min(48vw,560px)] rounded-full border border-dashed border-violet/30 orbit-spin-slow" />
      <div className="absolute h-[min(36vw,420px)] w-[min(36vw,420px)] rounded-full border border-accent/15" />
      <div className="absolute h-px w-[min(86vw,1040px)] bg-gradient-to-r from-transparent via-accent/25 to-transparent" />
      <div className="absolute h-[min(78vw,880px)] w-px bg-gradient-to-b from-transparent via-accent/18 to-transparent" />
      <div className="absolute h-[min(62vw,720px)] w-[min(62vw,720px)] rounded-full bg-[conic-gradient(from_90deg,transparent,rgba(0,212,255,0.16),transparent,rgba(124,106,255,0.18),transparent)] opacity-45 blur-sm" />
    </div>
  )
}

function SectionShell({
  activeSection,
  activeNode,
  onSelect,
}: {
  activeSection: SectionId
  activeNode?: SectionNode
  onSelect: (section: SectionId | 'home') => void
}) {
  return (
    <motion.section
      variants={panelVariants}
      initial={false}
      animate="animate"
      exit="exit"
      transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-10 min-h-screen px-3 py-3 sm:px-5 sm:py-5"
    >
      <div className="min-h-[calc(100vh-1.5rem)] border border-border/90 bg-bg/76 shadow-[0_0_80px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:min-h-[calc(100vh-2.5rem)]">
        <div className="grid min-h-[calc(100vh-1.5rem)] grid-cols-1 sm:min-h-[calc(100vh-2.5rem)] lg:grid-cols-[76px_minmax(0,1fr)]">
        <ContextRail activeSection={activeSection} onSelect={onSelect} />

          <div className="min-w-0 px-5 pb-24 pt-16 sm:px-8 sm:pt-20 lg:px-12 lg:pb-16 xl:px-16">
            <div className="mx-auto w-full max-w-[1420px]">
              <button
                type="button"
                onClick={() => onSelect('home')}
                className="mb-8 inline-flex items-center gap-2 rounded-sm px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted transition hover:bg-accent/10 hover:text-accent"
              >
                <ArrowLeft size={13} />
                Home
              </button>

            {activeNode && (
              <div className="mb-8 border-b border-border/70 pb-7">
                <div className="flex max-w-5xl items-start gap-4">
                  <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/50 bg-accent/10 text-accent shadow-[0_0_24px_rgba(0,212,255,0.16)]">
                    <activeNode.Icon size={17} />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-accent">
                      {activeNode.eyebrow}
                    </p>
                    <h2 className="mt-2 max-w-4xl text-balance font-display text-3xl font-normal leading-[1.08] text-text sm:text-4xl lg:text-5xl">
                      {activeNode.title}
                    </h2>
                  </div>
                </div>
              </div>
            )}

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeSection}
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                {activeSection === 'about' && <AboutPanel />}
                {activeSection === 'experience' && <ExperiencePanel />}
                {activeSection === 'projects' && <ProjectsPanel />}
                {activeSection === 'skills' && <SkillsPanel />}
                {activeSection === 'publications' && <PublicationsPanel />}
                {activeSection === 'contact' && <ContactPanel />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        </div>
      </div>
    </motion.section>
  )
}

function ContextRail({
  activeSection,
  onSelect,
}: {
  activeSection: SectionId
  onSelect: (section: SectionId) => void
}) {
  return (
    <>
      <nav
        aria-label="Section navigation"
        className="hidden border-r border-border/70 bg-bg/36 lg:flex lg:items-center lg:justify-center"
      >
        <div className="sticky top-20 flex flex-col items-center gap-3">
          <div className="h-16 w-px bg-gradient-to-b from-transparent via-border to-border" />
          {sectionNodes.map(section => {
            const isActive = activeSection === section.id
            return (
              <button
                key={section.id}
                type="button"
                aria-label={`Open ${section.label}`}
                title={section.label}
                onClick={() => onSelect(section.id)}
                className={cn(
                  'flex h-10 w-10 items-center justify-center rounded-full border text-muted transition',
                  isActive
                    ? 'border-accent bg-accent/10 text-accent shadow-[0_0_24px_rgba(0,212,255,0.22)]'
                    : 'border-transparent hover:border-accent/40 hover:bg-accent/5 hover:text-text',
                )}
              >
                <section.Icon size={15} />
              </button>
            )
          })}
          <div className="h-16 w-px bg-gradient-to-b from-border via-border to-transparent" />
        </div>
      </nav>

      <nav
        aria-label="Section navigation"
        className="fixed bottom-4 left-1/2 z-40 flex -translate-x-1/2 items-center gap-2 rounded-full border border-border/80 bg-bg/90 p-2 shadow-[0_0_28px_rgba(0,0,0,0.35)] backdrop-blur lg:hidden"
      >
        {sectionNodes.map(section => {
          const isActive = activeSection === section.id
          return (
            <button
              key={section.id}
              type="button"
              aria-label={`Open ${section.label}`}
              title={section.label}
              onClick={() => onSelect(section.id)}
              className={cn(
                'flex h-9 w-9 items-center justify-center rounded-full border text-muted transition',
                isActive ? 'border-accent bg-accent/10 text-accent' : 'border-transparent',
              )}
            >
              <section.Icon size={15} />
            </button>
          )
        })}
      </nav>
    </>
  )
}

function AboutPanel() {
  return (
    <div className="grid gap-8 xl:grid-cols-[minmax(0,0.92fr)_minmax(380px,0.68fr)] xl:items-start">
      <div className="space-y-6">
        <div className="rounded-sm border border-border/70 bg-surface/40 p-5 sm:p-6">
          <p className="font-sans text-lg leading-8 text-text sm:text-xl">
            {meta.summary}
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {aboutParagraphs.map(paragraph => (
              <p key={paragraph} className="font-sans text-sm leading-7 text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {metrics.slice(0, 4).map(metric => (
            <div
              key={metric.label}
              className="rounded-sm border border-accent/35 bg-surface/55 px-4 py-5 text-center shadow-[0_0_24px_rgba(0,212,255,0.05)]"
            >
              <div className="font-mono text-2xl font-semibold text-accent sm:text-3xl">{metric.value}</div>
              <div className="mt-2 min-h-8 font-mono text-[10px] uppercase leading-4 tracking-[0.12em] text-text/80">{metric.label}</div>
            </div>
          ))}
        </div>

        <div className="rounded-sm border border-border/70 bg-surface/35 p-5">
          <p className="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">Profile map</p>
          <div className="grid gap-4 md:grid-cols-3">
            {profilePillars.map(pillar => (
              <div key={pillar.label} className="border-l border-accent/40 pl-4">
                <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-text">{pillar.label}</h3>
                <p className="mt-2 font-sans text-sm leading-6 text-muted">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-sm border border-border/70 bg-surface/35 p-5">
          <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">Tech stack highlights</p>
          <div className="flex flex-wrap gap-2">
            {techHighlights.map(tech => (
              <SignalTag key={tech}>{tech}</SignalTag>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-5">
        <div className="relative min-h-[360px] overflow-hidden rounded-sm border border-border/70 bg-surface/35">
          <HumanSignalGraphic />
        </div>
        <div className="rounded-sm border border-border/70 bg-surface/35 p-5">
          <p className="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">Languages</p>
          <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
            {['Spanish - Native', 'English - Fluent', 'German - B1+'].map(language => (
              <div key={language} className="rounded-sm border border-border/70 bg-bg/35 px-3 py-2 font-mono text-xs text-text/85">
                {language}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function HumanSignalGraphic() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_63%_32%,rgba(0,212,255,0.18),transparent_30%),radial-gradient(circle_at_25%_70%,rgba(124,106,255,0.13),transparent_34%)]" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 560 380" aria-hidden="true">
        <defs>
          <linearGradient id="faceLine" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#7c6aff" stopOpacity="0.45" />
          </linearGradient>
        </defs>
        <path d="M324 71c-43 9-70 45-69 91 1 36 18 72 45 93 4 4 6 10 5 16l-10 54h89l-7-52c-1-7 2-14 8-18 32-21 49-60 44-102-6-55-45-92-105-82Z" fill="none" stroke="url(#faceLine)" strokeWidth="1.6" />
        <path d="M298 135c24 4 50 4 80-1M297 162c18 2 39 3 65 0M301 190c18 4 42 4 62 0M318 116c-4 32-4 75 2 118" fill="none" stroke="#00d4ff" strokeOpacity="0.38" strokeWidth="1" />
        {Array.from({ length: 64 }).map((_, index) => {
          const x = 52 + ((index * 37) % 450)
          const y = 42 + ((index * 67) % 280)
          return <circle key={index} cx={x} cy={y} r={index % 5 === 0 ? 1.8 : 1.1} fill="#00d4ff" opacity={index % 3 === 0 ? 0.65 : 0.28} />
        })}
        <path d="M74 196c88-28 145-18 211 20 70 40 121 43 202 10M63 105c116 45 177 42 250-3 54-33 97-37 164-20" fill="none" stroke="#00d4ff" strokeOpacity="0.17" strokeWidth="1" />
      </svg>
      <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between border-t border-border/70 pt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
        <span>Signal Map</span>
        <span className="text-accent">Impact Driven</span>
      </div>
    </div>
  )
}

function ExperiencePanel() {
  return (
    <div className="space-y-6">
      {experience.map((item, index) => (
        <article
          key={item.id}
          className="relative overflow-hidden rounded-sm border border-border/75 bg-surface/42 transition hover:border-accent/35 hover:bg-surface/62"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-accent/70 via-transparent to-violet/50" />
          <div className="grid gap-0 xl:grid-cols-[minmax(0,1fr)_320px]">
            <div className="p-5 sm:p-6">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="min-w-0">
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <span className="rounded-sm border border-accent/45 bg-accent/10 px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">{item.type}</span>
                  </div>
                  <h3 className="font-display text-3xl font-semibold leading-tight text-text lg:text-4xl">{item.company}</h3>
                  <p className="mt-2 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">{item.role}</p>
                </div>
                <div className="shrink-0 font-mono text-[10px] uppercase leading-5 tracking-[0.16em] text-muted lg:text-right">
                  <div className="text-text/80">{item.period}</div>
                  <div>{item.location}</div>
                </div>
              </div>

              <p className="mt-5 max-w-5xl font-sans text-lg leading-8 text-text/90">{item.headline}</p>
              <p className="mt-4 max-w-5xl font-sans text-sm leading-7 text-muted">{item.context}</p>

              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                {item.bullets.map(bullet => (
                  <div key={bullet} className="flex gap-3 font-sans text-sm leading-6 text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/80 shadow-[0_0_12px_rgba(0,212,255,0.7)]" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {item.systems.length > 0 && (
                <div className="mt-6">
                  <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">Systems built</p>
                  <div className="grid gap-3 md:grid-cols-2">
                    {item.systems.map(system => (
                      <div key={system.title} className="rounded-sm border border-border/70 bg-bg/35 p-4">
                        <h4 className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-text">{system.title}</h4>
                        <p className="mt-2 font-sans text-sm leading-6 text-muted">{system.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <aside className="border-t border-border/70 bg-bg/32 p-5 sm:p-6 xl:border-l xl:border-t-0">
              <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">Technology</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map(tag => (
                  <SignalTag key={tag}>{tag}</SignalTag>
                ))}
              </div>

              {item.achievements.length > 0 && (
                <div className="mt-6">
                  <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">Evidence</p>
                  <div className="space-y-3">
                    {item.achievements.map(achievement => (
                      <div key={achievement} className="rounded-sm border border-metric/25 bg-metric/5 px-3 py-2 font-mono text-[11px] leading-5 text-metric">
                        -&gt; {achievement}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </article>
      ))}
    </div>
  )
}

function ProjectsPanel() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {projects.map((project, index) => (
        <motion.article
          key={project.id}
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.04, duration: 0.35 }}
          className="group relative overflow-hidden rounded-sm border border-border/70 bg-surface/45 p-5 transition hover:-translate-y-1 hover:border-accent/45 hover:bg-surface/70"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-accent/70 via-transparent to-violet/60 opacity-0 transition group-hover:opacity-100" />
          <div className="flex items-center justify-between gap-4">
            <span className="rounded-sm border border-accent/40 bg-accent/10 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-accent">
              {project.type}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">{project.company}</span>
          </div>
          <h3 className="mt-4 font-display text-2xl font-semibold leading-tight text-text transition group-hover:text-accent">{project.title}</h3>
          <p className="mt-3 font-sans text-sm leading-6 text-muted">{project.description}</p>
          <div className="mt-5 border-t border-border/50 pt-4">
            <div className="flex flex-wrap gap-2">
              {project.architecture.map(tech => (
                <SignalTag key={tech}>{tech}</SignalTag>
              ))}
            </div>
            <p className="mt-4 font-mono text-xs leading-5 text-metric">
              <span className="text-metric/70">-&gt;</span> {project.outcome}
            </p>
          </div>
        </motion.article>
      ))}
    </div>
  )
}

function SkillsPanel() {
  const topStrengths = [
    'Agentic AI & Multi-agent Systems',
    'Advanced RAG & Hybrid Retrieval',
    'LLM Infrastructure & Observability',
    'Document Intelligence',
    'GCP Production Deployment',
    'Privacy-preserving ML',
  ]

  return (
    <div className="space-y-6">
      <div className="rounded-sm border border-border/70 bg-surface/40 p-5">
        <p className="font-sans text-lg leading-8 text-text/90">
          T-shaped profile: deep production experience in agentic systems and retrieval, with broad coverage across data, training, evaluation, deployment, monitoring, and cloud infrastructure.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {topStrengths.map(strength => (
            <SignalTag key={strength}>{strength}</SignalTag>
          ))}
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {skills.map((domain) => {
          const Icon = skillIconMap[domain.icon] || Brain
          return (
            <article key={domain.domain} className="rounded-sm border border-border/70 bg-surface/42 p-5 transition hover:border-accent/35 hover:bg-surface/62">
              <div className="mb-5 flex items-center gap-3 border-b border-border/60 pb-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent/35 bg-accent/10 text-accent">
                  <Icon size={15} />
                </span>
                <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-text">{domain.domain}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {domain.items.map(item => (
                  <SignalTag key={item}>{item}</SignalTag>
                ))}
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}

function PublicationsPanel() {
  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_420px]">
      <div className="space-y-3">
        {publications.map(publication => (
          <article key={publication.title} className="group rounded-sm border border-border/70 bg-surface/45 p-5 transition hover:border-accent/35">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
              <div className="flex gap-4">
                <BookOpen className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <p className="font-sans text-xs leading-5 text-muted">{publication.authors} ({publication.year})</p>
                  <h3 className="mt-2 font-display text-xl font-medium leading-tight text-text transition group-hover:text-accent">{publication.title}</h3>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">{publication.venue}</p>
                </div>
              </div>

              {publication.url && (
                <a
                  href={publication.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-8 shrink-0 items-center gap-2 rounded-sm border border-accent/40 bg-accent/10 px-3 font-mono text-[10px] uppercase tracking-[0.16em] text-accent transition hover:bg-accent hover:text-bg"
                >
                  View Paper
                  <ExternalLink size={12} />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      <aside className="rounded-sm border border-border/70 bg-surface/42 p-5">
        <p className="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">Education & learning</p>
        <div className="space-y-4">
          {education.map(item => (
            <div key={`${item.degree}-${item.year}`} className="border-l border-accent/35 pl-4">
              <h3 className="font-display text-xl font-semibold leading-tight text-text">{item.degree}</h3>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-accent">{item.year}</p>
              <p className="mt-2 font-sans text-sm leading-6 text-muted">{item.institution}</p>
              <p className="mt-2 font-sans text-sm leading-6 text-muted">{item.focus}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 border-t border-border/70 pt-5">
          <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">Community</p>
          <div className="space-y-3 font-sans text-sm leading-6 text-muted">
            <p>Mentored the Python4AI webinar series as part of the Renewable Africa academy program.</p>
            <p>Participated as ML Engineer in three AI-for-good projects delivering working prototypes for social challenges.</p>
          </div>
        </div>
      </aside>
    </div>
  )
}

function ContactPanel() {
  return (
    <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
      <div className="space-y-5">
        <ContactLine Icon={Mail} label={meta.email} href={`mailto:${meta.email}`} />
        <ContactLine Icon={MapPin} label={meta.location} />
        <ContactLine Icon={Globe2} label="Open to remote opportunities" />
        <div className="flex gap-3 pt-4">
          <a href={meta.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="icon-button"><LinkedinIcon size={17} /></a>
          <a href={meta.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="icon-button"><GithubIcon size={17} /></a>
          <a href={meta.huggingface} target="_blank" rel="noopener noreferrer" aria-label="Hugging Face" className="icon-button"><Globe2 size={17} /></a>
        </div>
      </div>

      <ContactForm />
    </div>
  )
}

function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const name = String(formData.get('name') || '')
    const email = String(formData.get('email') || '')
    const subject = String(formData.get('subject') || 'Portfolio inquiry')
    const message = String(formData.get('message') || '')
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:${meta.email}?subject=${encodeURIComponent(subject)}&body=${body}`
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <input className="field" name="name" placeholder="Your Name" aria-label="Your name" />
        <input className="field" name="email" type="email" placeholder="Your Email" aria-label="Your email" />
      </div>
      <input className="field" name="subject" placeholder="Subject" aria-label="Subject" />
      <textarea className="field min-h-36 resize-none" name="message" placeholder="Message" aria-label="Message" />
      <button
        type="submit"
        className="mt-2 inline-flex h-10 w-fit items-center gap-2 rounded-sm border border-accent bg-accent px-5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-bg transition hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(0,212,255,0.35)]"
      >
        Send Message
        <Send size={13} />
      </button>
    </form>
  )
}

function ContactLine({
  Icon,
  label,
  href,
}: {
  Icon: LucideIcon
  label: string
  href?: string
}) {
  const content = (
    <span className="inline-flex items-center gap-3 font-sans text-sm text-text/85">
      <Icon size={15} className="text-accent" />
      {label}
    </span>
  )

  if (href) {
    return (
      <a href={href} className="block transition hover:text-accent">
        {content}
      </a>
    )
  }

  return <div>{content}</div>
}

function SignalTag({ children }: { children: string }) {
  return (
    <span className="inline-flex rounded-sm border border-border/80 bg-bg/40 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-muted transition hover:border-accent/40 hover:text-text">
      {children}
    </span>
  )
}

type BrandIconProps = SVGProps<SVGSVGElement> & {
  size?: number
  strokeWidth?: number
}

function GithubIcon({ size = 18, strokeWidth = 2, ...props }: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.5 2-5-2-7-2" />
    </svg>
  )
}

function LinkedinIcon({ size = 18, strokeWidth = 2, ...props }: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}
