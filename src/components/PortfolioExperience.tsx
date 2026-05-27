'use client'

import Image from 'next/image'
import { useEffect, useMemo, useRef, useState } from 'react'
import type { CSSProperties, SVGProps } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Bot,
  Briefcase,
  Brain,
  ChevronDown,
  Code2,
  Database,
  Download,
  ExternalLink,
  Globe2,
  Layers,
  Mail,
  MapPin,
  Settings,
  User,
  Volume2,
  VolumeX,
  type LucideIcon,
} from 'lucide-react'
import { education, experience, meta, metrics, projects, publications } from '@/data/portfolio'
import { cn } from '@/lib/utils'

type SectionId = 'about' | 'experience' | 'projects' | 'skills' | 'publications' | 'contact'
type ViewId = SectionId | 'home'
type SoundName = 'hover' | 'click'

type SectionNode = {
  id: SectionId
  label: string
  number: string
  eyebrow: string
  title: string
  Icon: LucideIcon
  angle: number
}

type SoundControls = {
  onHoverSound: () => void
}

const sectionNodes: SectionNode[] = [
  {
    id: 'about',
    label: 'About',
    number: '01',
    eyebrow: 'About Me',
    title: 'Data and AI professional driven by impact.',
    Icon: User,
    angle: 0,
  },
  {
    id: 'projects',
    label: 'Projects',
    number: '03',
    eyebrow: 'Projects',
    title: 'Selected work. Real impact.',
    Icon: Layers,
    angle: 60,
  },
  {
    id: 'publications',
    label: 'Publications',
    number: '05',
    eyebrow: 'Publications',
    title: 'Research signal and technical writing.',
    Icon: BookOpen,
    angle: 120,
  },
  {
    id: 'contact',
    label: 'Contact',
    number: '06',
    eyebrow: 'Contact',
    title: "Let's build something meaningful.",
    Icon: Mail,
    angle: 180,
  },
  {
    id: 'skills',
    label: 'Skills',
    number: '04',
    eyebrow: 'Skills',
    title: 'Tools. Technologies. Expertise.',
    Icon: Code2,
    angle: 240,
  },
  {
    id: 'experience',
    label: 'Experience',
    number: '02',
    eyebrow: 'Experience',
    title: 'Building solutions. Delivering value.',
    Icon: Briefcase,
    angle: 300,
  },
]

const subtitles = ['LLM Systems', 'Agentic AI', 'Automation']

const aboutParagraphs = [
  'I design and build data, AI, and automation systems that turn complex problems into measurable outcomes.',
  'With a background in ML engineering and business intelligence, I bridge the gap between data and decisions.',
  'Recent work includes agentic AI, advanced RAG, LLM infrastructure, document intelligence, and production cloud systems.',
]

const techHighlights = [
  'Python',
  'SQL',
  'Pandas',
  'PyTorch',
  'LangChain',
  'Qdrant',
  'Docker',
  'GCP',
  'FastAPI',
]

const profilePillars = [
  {
    label: 'Deep Focus',
    text: 'Agentic systems, advanced RAG, LLM infrastructure, and document intelligence.',
  },
  {
    label: 'Production Range',
    text: 'Evaluation, deployment, observability, cloud services, and BI automation.',
  },
  {
    label: 'Target Roles',
    text: 'Senior ML Engineer, Fullstack AI Engineer, Agentic Systems Lead, LLM Platform Engineer.',
  },
]

const topStrengths = [
  'System Design',
  'Automation',
  'Data Storytelling',
  'Problem Solving',
  'Research',
  'MLOps',
]

const skillDashboard = [
  {
    label: 'AI / ML',
    Icon: Brain,
    skills: [
      { name: 'Python', level: 96 },
      { name: 'PyTorch', level: 90 },
      { name: 'Scikit-learn', level: 86 },
      { name: 'LangChain', level: 90 },
      { name: 'Transformers', level: 84 },
    ],
  },
  {
    label: 'Data / RAG',
    Icon: Database,
    skills: [
      { name: 'SQL', level: 92 },
      { name: 'Pandas', level: 90 },
      { name: 'Hybrid RAG', level: 92 },
      { name: 'Qdrant', level: 88 },
      { name: 'Power BI', level: 78 },
    ],
  },
  {
    label: 'Dev / Ops',
    Icon: Settings,
    skills: [
      { name: 'Docker', level: 90 },
      { name: 'GCP Cloud Run', level: 88 },
      { name: 'FastAPI', level: 90 },
      { name: 'Git', level: 86 },
      { name: 'Linux', level: 82 },
    ],
  },
]

const sectionWidthClass: Record<SectionId, string> = {
  about: 'max-w-[1120px]',
  experience: 'max-w-[980px]',
  projects: 'max-w-[980px]',
  skills: 'max-w-[1040px]',
  publications: 'max-w-[1060px]',
  contact: 'max-w-[980px]',
}

const panelEase: [number, number, number, number] = [0.16, 1, 0.3, 1]

const panelVariants = {
  initial: { opacity: 1, scale: 1, y: 0 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.985, y: -18 },
}

const projectIcons = [Bot, Database, Layers, Brain, Code2, Settings]

const SOUND_MUTED_KEY = 'ml-portfolio-sound-muted'

export default function PortfolioExperience() {
  const [activeSection, setActiveSection] = useState<ViewId>('home')
  const [subtitleIndex, setSubtitleIndex] = useState(0)
  const [soundMuted, setSoundMuted] = useState(() => {
    if (typeof window === 'undefined') {
      return false
    }

    return window.localStorage.getItem(SOUND_MUTED_KEY) === 'true'
  })
  const hoverAudioRef = useRef<HTMLAudioElement | null>(null)
  const clickAudioRef = useRef<HTMLAudioElement | null>(null)
  const activeNode = useMemo(
    () => sectionNodes.find(section => section.id === activeSection),
    [activeSection],
  )

  useEffect(() => {
    const interval = window.setInterval(() => {
      setSubtitleIndex(index => (index + 1) % subtitles.length)
    }, 2600)

    return () => window.clearInterval(interval)
  }, [])

  useEffect(() => {
    hoverAudioRef.current = new Audio('/sounds/ui-hover-light.mp3')
    clickAudioRef.current = new Audio('/sounds/click.mp3')

    if (hoverAudioRef.current) {
      hoverAudioRef.current.preload = 'auto'
      hoverAudioRef.current.volume = 0.28
    }

    if (clickAudioRef.current) {
      clickAudioRef.current.preload = 'auto'
      clickAudioRef.current.volume = 0.34
    }

    return () => {
      hoverAudioRef.current = null
      clickAudioRef.current = null
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem(SOUND_MUTED_KEY, String(soundMuted))
  }, [soundMuted])

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

  function unlockAudio() {
    hoverAudioRef.current?.load()
    clickAudioRef.current?.load()
  }

  function playSound(sound: SoundName) {
    if (soundMuted) {
      return
    }

    const audio = sound === 'hover' ? hoverAudioRef.current : clickAudioRef.current
    if (!audio) {
      return
    }

    audio.currentTime = 0
    audio.play().catch(() => {
      // Browsers can block audio until a user gesture. Navigation should never wait for sound.
    })
  }

  function playHoverSound() {
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      playSound('hover')
    }
  }

  function handleSelect(section: ViewId) {
    playSound('click')
    setActiveSection(section)

    const url =
      section === 'home'
        ? window.location.pathname
        : `${window.location.pathname}#${section}`
    window.history.pushState(null, '', url)
  }

  function handleToggleSound() {
    if (!soundMuted) {
      playSound('click')
    }
    setSoundMuted(value => !value)
  }

  return (
    <main
      className="relative min-h-screen overflow-x-hidden bg-bg text-text"
      onPointerDownCapture={unlockAudio}
      onKeyDownCapture={unlockAudio}
    >
      <SceneBackdrop />
      <TopLinks soundMuted={soundMuted} onToggleSound={handleToggleSound} />

      <AnimatePresence mode="wait">
        {activeSection === 'home' ? (
          <HomeView
            key="home"
            subtitle={subtitles[subtitleIndex]}
            onSelect={handleSelect}
            onHoverSound={playHoverSound}
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_105%,rgba(0,212,255,0.2),transparent_28%),radial-gradient(circle_at_16%_20%,rgba(124,106,255,0.11),transparent_28%),linear-gradient(180deg,#05080c_0%,#071018_48%,#040609_100%)]" />
      <div className="absolute inset-0 opacity-[0.075] [background-image:linear-gradient(rgba(0,212,255,0.55)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.55)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.3)_0_1px,transparent_1px),radial-gradient(circle_at_84%_18%,rgba(0,212,255,0.42)_0_1px,transparent_1px),radial-gradient(circle_at_72%_70%,rgba(124,106,255,0.42)_0_1px,transparent_1px)] [background-size:240px_240px,360px_360px,300px_300px] opacity-30" />
      <div className="absolute -bottom-24 left-1/2 h-48 w-[78vw] -translate-x-1/2 rounded-[50%] border-t border-accent/30 bg-accent/10 blur-2xl" />
    </div>
  )
}

function TopLinks({
  soundMuted,
  onToggleSound,
}: {
  soundMuted: boolean
  onToggleSound: () => void
}) {
  const socials = [
    { label: 'LinkedIn', href: meta.linkedin, Icon: LinkedinIcon },
    { label: 'GitHub', href: meta.github, Icon: GithubIcon },
    { label: 'Email', href: `mailto:${meta.email}`, Icon: Mail },
  ]
  const SoundIcon = soundMuted ? VolumeX : Volume2

  return (
    <div className="fixed right-3 top-3 z-50 flex items-center gap-2 sm:right-8 sm:top-7 sm:gap-3">
      <button
        type="button"
        aria-label={soundMuted ? 'Enable interface sound' : 'Mute interface sound'}
        aria-pressed={!soundMuted}
        title={soundMuted ? 'Enable sound' : 'Mute sound'}
        onClick={onToggleSound}
        className="icon-button h-8 w-8 rounded-sm text-text/80 sm:h-9 sm:w-9"
      >
        <SoundIcon size={15} strokeWidth={1.9} />
      </button>

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
  onHoverSound,
}: {
  subtitle: string
  onSelect: (section: ViewId) => void
} & SoundControls) {
  return (
    <motion.section
      variants={panelVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.55, ease: panelEase }}
      className="relative z-10 flex min-h-screen items-center justify-center px-4 py-16 sm:px-5 sm:py-20"
    >
      <div className="home-orbit-stage relative flex min-h-[min(780px,calc(100vh-4rem))] w-full max-w-[1180px] flex-col items-center justify-center">
        <OrbitSystem />

        <div className="relative z-20 flex w-full max-w-[min(42rem,100%)] flex-col items-center text-center">
          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.45 }}
            className="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.35em] text-accent"
          >
            &lt; ml_engineer /&gt;
          </motion.p>

          <motion.h1
            initial={false}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.7, ease: panelEase }}
            className="w-full font-display text-[clamp(4.2rem,18vw,9.8rem)] font-bold leading-[0.84] tracking-normal text-text sm:text-[clamp(5.6rem,10vw,10rem)]"
          >
            <span className="block text-[0.58em] font-normal text-[#788399]">Sebastian</span>
            Laverde
          </motion.h1>

          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.45 }}
            className="mt-5 flex min-h-7 flex-wrap items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-text sm:text-sm sm:tracking-[0.24em]"
          >
            <span>AI & Data</span>
            <span className="text-accent">.</span>
            <span>{subtitle}</span>
          </motion.div>

          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.45 }}
            className="mt-5 w-full max-w-[34rem] border border-border/70 bg-surface/35 px-4 py-3 font-mono text-[10px] leading-6 text-muted shadow-[0_0_38px_rgba(0,212,255,0.05)] backdrop-blur sm:px-6 sm:text-[11px]"
          >
            Building intelligent systems at the intersection of data, models, and real-world impact.
            <span className="ml-1 inline-block h-4 w-px translate-y-1 bg-accent animate-blink" />
          </motion.p>

          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.48, duration: 0.45 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-3"
          >
            <button
              type="button"
              onClick={() => onSelect('projects')}
              className="group inline-flex h-10 items-center gap-2 rounded-sm border border-accent bg-accent px-4 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-bg shadow-[0_0_24px_rgba(0,212,255,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_0_36px_rgba(0,212,255,0.45)] sm:px-5 sm:tracking-[0.18em]"
            >
              View Work
              <ArrowRight size={13} className="transition group-hover:translate-x-0.5" />
            </button>
            <a
              href={meta.cvPath}
              download
              className="inline-flex h-10 items-center gap-2 rounded-sm border border-border bg-bg/50 px-4 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-text/80 transition hover:border-accent/70 hover:text-accent sm:px-5 sm:tracking-[0.18em]"
            >
              <Download size={13} />
              Download CV
            </a>
          </motion.div>
        </div>

        <nav aria-label="Portfolio sections" className="pointer-events-none absolute inset-0 hidden md:block">
          {sectionNodes.map((section, index) => (
            <button
              key={section.id}
              type="button"
              aria-label={`Open ${section.label}`}
              onClick={() => onSelect(section.id)}
              onMouseEnter={onHoverSound}
              className="radial-node group pointer-events-auto flex flex-col items-center gap-3 rounded-sm px-4 py-3 text-center"
              style={
                {
                  '--node-angle': `${section.angle}deg`,
                  '--node-delay': `${0.52 + index * 0.06}s`,
                } as CSSProperties
              }
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-accent/35 bg-bg/70 text-accent shadow-[0_0_22px_rgba(0,212,255,0.08)] backdrop-blur transition group-hover:border-accent group-hover:bg-accent/10 group-hover:shadow-[0_0_30px_rgba(0,212,255,0.34)]">
                <section.Icon size={18} />
              </span>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-text transition group-hover:text-accent">
                {section.label}
              </span>
            </button>
          ))}
        </nav>

        <nav aria-label="Portfolio sections" className="relative z-30 mt-10 grid w-full max-w-[560px] grid-cols-2 gap-2 md:hidden">
          {sectionNodes
            .slice()
            .sort((a, b) => Number(a.number) - Number(b.number))
            .map(section => (
              <button
                key={section.id}
                type="button"
                onClick={() => onSelect(section.id)}
                className="flex h-12 min-w-0 items-center justify-center gap-2 rounded-sm border border-border/80 bg-surface/70 px-2 font-mono text-[9px] uppercase tracking-[0.13em] text-text/85 backdrop-blur transition hover:border-accent/70 hover:text-accent"
              >
                <section.Icon size={14} />
                <span className="truncate">{section.label}</span>
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
      <motion.div
        initial={false}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.18, duration: 0.8, ease: panelEase }}
        className="absolute h-[var(--home-orbit-size)] w-[var(--home-orbit-size)] rounded-full border border-accent/10"
      />
      <motion.div
        initial={false}
        animate={{ opacity: 0.85, scale: 1 }}
        transition={{ delay: 0.25, duration: 0.8, ease: panelEase }}
        className="absolute h-[calc(var(--home-orbit-size)*0.84)] w-[calc(var(--home-orbit-size)*0.84)] rounded-full border border-accent/20 orbit-spin"
      />
      <motion.div
        initial={false}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.32, duration: 0.8, ease: panelEase }}
        className="absolute h-[calc(var(--home-orbit-size)*0.68)] w-[calc(var(--home-orbit-size)*0.68)] rounded-full border border-dashed border-violet/30 orbit-spin-slow"
      />
      <div className="absolute h-[calc(var(--home-orbit-size)*0.5)] w-[calc(var(--home-orbit-size)*0.5)] rounded-full border border-accent/15" />
      <div className="absolute h-px w-[min(72vw,900px)] bg-gradient-to-r from-transparent via-accent/25 to-transparent" />
      <div className="absolute h-[min(70vw,760px)] w-px bg-gradient-to-b from-transparent via-accent/18 to-transparent" />
      <div className="absolute h-[calc(var(--home-orbit-size)*0.72)] w-[calc(var(--home-orbit-size)*0.72)] rounded-full bg-[conic-gradient(from_90deg,transparent,rgba(0,212,255,0.16),transparent,rgba(124,106,255,0.18),transparent)] opacity-45 blur-sm" />
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
  onSelect: (section: ViewId) => void
}) {
  return (
    <motion.section
      variants={panelVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.48, ease: panelEase }}
      className="relative z-10 min-h-screen px-2 py-2 sm:px-4 sm:py-4"
    >
      <div className="min-h-[calc(100vh-1rem)] border border-border/90 bg-bg/76 shadow-[0_0_80px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:min-h-[calc(100vh-2rem)]">
        <div className="grid min-h-[calc(100vh-1rem)] grid-cols-1 sm:min-h-[calc(100vh-2rem)] lg:grid-cols-[68px_minmax(0,1fr)]">
          <ContextRail activeSection={activeSection} onSelect={onSelect} />

          <div className="relative min-w-0">
            <button
              type="button"
              onClick={() => onSelect('home')}
              className="absolute left-4 top-4 z-30 inline-flex items-center gap-2 rounded-sm px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted transition hover:bg-accent/10 hover:text-accent sm:left-6 sm:top-5"
            >
              <ArrowLeft size={13} />
              Home
            </button>

            <div className="section-stage flex min-h-[calc(100vh-1rem)] items-start justify-center sm:min-h-[calc(100vh-2rem)] lg:items-center">
              <div className={cn('w-full', sectionWidthClass[activeSection])}>
                {activeNode && <SectionHeading section={activeNode} />}

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSection}
                    initial={false}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.35, ease: panelEase }}
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
      </div>
    </motion.section>
  )
}

function SectionHeading({ section }: { section: SectionNode }) {
  const Icon = section.Icon

  return (
    <div className="mb-9 flex items-start gap-4 sm:mb-11">
      <span className="mt-1 hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/45 bg-accent/10 text-accent shadow-[0_0_24px_rgba(0,212,255,0.16)] sm:flex lg:hidden">
        <Icon size={17} />
      </span>
      <div className="min-w-0">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-accent">
          {section.eyebrow}
        </p>
        <h2 className="mt-3 max-w-3xl text-balance font-display text-3xl font-normal leading-[1.08] text-text sm:text-4xl lg:text-[2.65rem]">
          {section.title}
        </h2>
      </div>
    </div>
  )
}

function ContextRail({
  activeSection,
  onSelect,
}: {
  activeSection: SectionId
  onSelect: (section: ViewId) => void
}) {
  return (
    <>
      <nav
        aria-label="Section navigation"
        className="hidden border-r border-border/70 bg-bg/36 lg:flex lg:items-center lg:justify-center"
      >
        <div className="sticky top-16 flex flex-col items-center gap-3">
          <div className="h-14 w-px bg-gradient-to-b from-transparent via-border to-border" />
          {sectionNodes
            .slice()
            .sort((a, b) => Number(a.number) - Number(b.number))
            .map(section => {
              const isActive = activeSection === section.id
              return (
                <button
                  key={section.id}
                  type="button"
                  aria-label={`Open ${section.label}`}
                  title={section.label}
                  onClick={() => onSelect(section.id)}
                  className={cn(
                    'group flex h-10 w-10 items-center justify-center rounded-full border text-muted transition',
                    isActive
                      ? 'border-accent bg-accent/10 text-accent shadow-[0_0_24px_rgba(0,212,255,0.22)]'
                      : 'border-transparent hover:border-accent/40 hover:bg-accent/5 hover:text-text',
                  )}
                >
                  <section.Icon size={15} className="transition group-hover:scale-110" />
                </button>
              )
            })}
          <div className="h-14 w-px bg-gradient-to-b from-border via-border to-transparent" />
        </div>
      </nav>

      <nav
        aria-label="Section navigation"
        className="fixed bottom-4 left-1/2 z-40 flex -translate-x-1/2 items-center gap-2 rounded-full border border-border/80 bg-bg/90 p-2 shadow-[0_0_28px_rgba(0,0,0,0.35)] backdrop-blur lg:hidden"
      >
        {sectionNodes
          .slice()
          .sort((a, b) => Number(a.number) - Number(b.number))
          .map(section => {
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
                  isActive ? 'border-accent bg-accent/10 text-accent' : 'border-transparent hover:text-text',
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
    <div className="space-y-8">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(320px,0.72fr)] lg:items-center">
        <div className="space-y-5">
          <p className="max-w-xl font-sans text-base leading-7 text-text/90 sm:text-lg">
            {aboutParagraphs[0]}
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            {aboutParagraphs.slice(1).map(paragraph => (
              <p key={paragraph} className="font-sans text-sm leading-7 text-muted">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {profilePillars.map(pillar => (
              <div key={pillar.label} className="border-l border-accent/35 pl-4">
                <h3 className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-text">
                  {pillar.label}
                </h3>
                <p className="mt-2 font-sans text-sm leading-6 text-muted">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>

        <ProfilePortrait />
      </div>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {metrics.slice(0, 4).map(metric => (
          <div
            key={metric.label}
            className="rounded-sm border border-accent/35 bg-surface/45 px-4 py-5 text-center shadow-[0_0_24px_rgba(0,212,255,0.05)]"
          >
            <div className="font-mono text-2xl font-semibold text-accent sm:text-3xl">{metric.value}</div>
            <div className="mt-2 min-h-8 font-mono text-[10px] uppercase leading-4 tracking-[0.12em] text-text/80">
              {metric.label}
            </div>
          </div>
        ))}
      </div>

      <div>
        <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">
          Tech stack highlights
        </p>
        <div className="flex flex-wrap gap-2">
          {techHighlights.map(tech => (
            <SignalTag key={tech}>{tech}</SignalTag>
          ))}
        </div>
      </div>
    </div>
  )
}

function ProfilePortrait() {
  return (
    <div className="profile-portrait relative min-h-[280px] overflow-hidden rounded-sm border border-border/75 bg-surface/35 sm:min-h-[340px]">
      <Image
        src="/images/profile-image.jpg"
        alt="Sebastian Laverde"
        fill
        sizes="(max-width: 1024px) 100vw, 420px"
        className="object-cover object-center grayscale contrast-125 opacity-50 mix-blend-luminosity"
        priority
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_34%,rgba(0,212,255,0.2),transparent_31%),linear-gradient(90deg,rgba(4,7,11,0.78),rgba(4,7,11,0.12)_45%,rgba(4,7,11,0.64))]" />
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(0,212,255,0.45)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.45)_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="absolute inset-x-5 bottom-5 flex items-center justify-between border-t border-border/70 pt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
        <span>Human Signal</span>
        <span className="text-accent">Impact Driven</span>
      </div>
    </div>
  )
}

function ExperiencePanel() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <div className="relative">
      <div className="absolute bottom-4 left-[18px] top-4 hidden w-px bg-gradient-to-b from-accent/55 via-accent/28 to-transparent sm:block" />
      <div className="space-y-4">
        {experience.map((item, index) => {
          const isOpen = openId === item.id
          const contentId = `experience-panel-${item.id}`

          return (
            <article
              key={item.id}
              className="relative overflow-hidden rounded-sm border border-border/75 bg-surface/40 transition hover:border-accent/40 hover:bg-surface/60 sm:ml-11"
            >
              <span className="absolute -left-[31px] top-7 hidden h-3 w-3 rounded-full border border-accent bg-bg shadow-[0_0_16px_rgba(0,212,255,0.7)] sm:block" />
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={contentId}
                onClick={() => setOpenId(current => (current === item.id ? null : item.id))}
                className="group w-full p-4 text-left sm:p-5"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="min-w-0">
                    <div className="mb-3 flex flex-wrap items-center gap-3">
                      <span className="rounded-sm border border-accent/45 bg-accent/10 px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                        {item.type}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                        {item.period}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-semibold leading-tight text-text transition group-hover:text-accent sm:text-3xl">
                      {item.company}
                    </h3>
                    <p className="mt-2 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
                      {item.role}
                    </p>
                    <p className="mt-3 max-w-3xl font-sans text-sm leading-6 text-muted">
                      {item.headline}
                    </p>
                  </div>

                  <div className="flex shrink-0 items-start justify-between gap-5 lg:block lg:text-right">
                    <div className="font-mono text-[10px] uppercase leading-5 tracking-[0.16em] text-muted">
                      <div>{item.location}</div>
                      <div className="mt-2 flex flex-wrap gap-2 lg:max-w-[220px] lg:justify-end">
                        {item.tags.slice(0, 4).map(tag => (
                          <SignalTag key={tag}>{tag}</SignalTag>
                        ))}
                      </div>
                    </div>
                    <ChevronDown
                      size={18}
                      className={cn(
                        'mt-1 text-accent transition group-hover:translate-y-0.5',
                        isOpen && 'rotate-180',
                      )}
                    />
                  </div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={contentId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease: panelEase }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-border/70 px-4 pb-5 pt-5 sm:px-5">
                      <p className="max-w-4xl font-sans text-sm leading-7 text-muted">
                        {item.context}
                      </p>

                      <div className="mt-5 grid gap-3 md:grid-cols-2">
                        {item.bullets.map(bullet => (
                          <div key={bullet} className="flex gap-3 font-sans text-sm leading-6 text-muted">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/80 shadow-[0_0_12px_rgba(0,212,255,0.7)]" />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>

                      {item.systems.length > 0 && (
                        <div className="mt-6">
                          <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">
                            Systems built
                          </p>
                          <div className="grid gap-3 md:grid-cols-2">
                            {item.systems.map(system => (
                              <div key={system.title} className="rounded-sm border border-border/70 bg-bg/35 p-4">
                                <h4 className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-text">
                                  {system.title}
                                </h4>
                                <p className="mt-2 font-sans text-sm leading-6 text-muted">{system.detail}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {item.achievements.length > 0 && (
                        <div className="mt-6">
                          <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">
                            Evidence
                          </p>
                          <div className="grid gap-2 md:grid-cols-2">
                            {item.achievements.map(achievement => (
                              <div
                                key={achievement}
                                className="rounded-sm border border-metric/25 bg-metric/5 px-3 py-2 font-mono text-[11px] leading-5 text-metric"
                              >
                                -&gt; {achievement}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </article>
          )
        })}
      </div>
    </div>
  )
}

function ProjectsPanel() {
  const [showAll, setShowAll] = useState(false)
  const visibleProjects = showAll ? projects : projects.slice(0, 4)

  return (
    <div className="space-y-7">
      <div className="grid gap-5 md:grid-cols-2">
        {visibleProjects.map((project, index) => {
          const ProjectIcon = projectIcons[index % projectIcons.length]

          return (
            <motion.article
              key={project.id}
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04, duration: 0.35, ease: panelEase }}
              className="group relative overflow-hidden rounded-sm border border-border/70 bg-surface/45 p-5 transition hover:-translate-y-1 hover:border-accent/45 hover:bg-surface/70"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-accent/70 via-transparent to-violet/60 opacity-0 transition group-hover:opacity-100" />
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/35 bg-accent/10 text-accent">
                  <ProjectIcon size={15} />
                </span>
                <span className="rounded-sm border border-accent/40 bg-accent/10 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-accent">
                  {project.type}
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold leading-tight text-text transition group-hover:text-accent sm:text-2xl">
                {project.title}
              </h3>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                {project.company}
              </p>
              <p className="project-card-copy mt-3 font-sans text-sm leading-6 text-muted">
                {project.description}
              </p>
              <div className="mt-5 border-t border-border/50 pt-4">
                <div className="flex flex-wrap gap-2">
                  {project.architecture.slice(0, 4).map(tech => (
                    <SignalTag key={tech}>{tech}</SignalTag>
                  ))}
                </div>
                <p className="mt-4 font-mono text-xs leading-5 text-metric">
                  <span className="text-metric/70">-&gt;</span> {project.outcome}
                </p>
              </div>
            </motion.article>
          )
        })}
      </div>

      <div className="flex justify-center">
        <button
          type="button"
          onClick={() => setShowAll(value => !value)}
          className="group inline-flex items-center gap-2 rounded-sm px-3 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-accent transition hover:bg-accent/10"
        >
          {showAll ? 'Show featured projects' : 'View all projects'}
          <ArrowRight size={13} className={cn('transition group-hover:translate-x-0.5', showAll && 'rotate-180')} />
        </button>
      </div>
    </div>
  )
}

function SkillsPanel() {
  return (
    <div className="space-y-8">
      <div className="grid gap-7 lg:grid-cols-3">
        {skillDashboard.map(column => (
          <article key={column.label} className="rounded-sm border border-border/70 bg-surface/40 p-5">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-accent/35 bg-accent/10 text-accent">
                <column.Icon size={15} />
              </span>
              <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                {column.label}
              </h3>
            </div>
            <div className="space-y-4">
              {column.skills.map(skill => (
                <div key={skill.name}>
                  <div className="mb-2 flex items-center justify-between gap-3 font-mono text-[11px] text-text/85">
                    <span>{skill.name}</span>
                    <span className="text-muted">{skill.level}</span>
                  </div>
                  <div className="h-px w-full bg-border">
                    <div
                      className="skill-bar h-px bg-accent shadow-[0_0_12px_rgba(0,212,255,0.7)]"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div>
        <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">
          Core strengths
        </p>
        <div className="flex flex-wrap gap-2">
          {topStrengths.map(strength => (
            <SignalTag key={strength}>{strength}</SignalTag>
          ))}
        </div>
      </div>
    </div>
  )
}

function PublicationsPanel() {
  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
      <div className="space-y-3">
        {publications.map(publication => (
          <article
            key={publication.title}
            className="group rounded-sm border border-border/70 bg-surface/45 p-5 transition hover:border-accent/35 hover:bg-surface/60"
          >
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
              <div className="flex gap-4">
                <BookOpen className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <p className="font-sans text-xs leading-5 text-muted">
                    {publication.authors} ({publication.year})
                  </p>
                  <h3 className="mt-2 font-display text-xl font-medium leading-tight text-text transition group-hover:text-accent">
                    {publication.title}
                  </h3>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                    {publication.venue}
                  </p>
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
        <p className="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">
          Education & learning
        </p>
        <div className="space-y-4">
          {education.map(item => (
            <div key={`${item.degree}-${item.year}`} className="border-l border-accent/35 pl-4">
              <h3 className="font-display text-lg font-semibold leading-tight text-text">{item.degree}</h3>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                {item.year}
              </p>
              <p className="mt-2 font-sans text-sm leading-6 text-muted">{item.institution}</p>
              <p className="mt-2 font-sans text-sm leading-6 text-muted">{item.focus}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 border-t border-border/70 pt-5">
          <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">
            Community
          </p>
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
  const subject = encodeURIComponent('Portfolio inquiry')
  const body = encodeURIComponent(
    "Hi Sebastian,\n\nI saw your portfolio and would like to connect about an AI/ML opportunity.\n\nBest,\n",
  )
  const mailto = `mailto:${meta.email}?subject=${subject}&body=${body}`

  return (
    <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-center">
      <div className="space-y-5">
        <ContactLine Icon={Mail} label={meta.email} href={`mailto:${meta.email}`} />
        <ContactLine Icon={MapPin} label={meta.location} />
        <ContactLine Icon={Globe2} label="Open to remote opportunities" />
        <div className="flex flex-wrap gap-3 pt-4">
          <a href={meta.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="icon-button">
            <LinkedinIcon size={17} />
          </a>
          <a href={meta.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="icon-button">
            <GithubIcon size={17} />
          </a>
          <a href={meta.huggingface} target="_blank" rel="noopener noreferrer" aria-label="Hugging Face" className="icon-button">
            <Globe2 size={17} />
          </a>
          <a href={meta.cvPath} download aria-label="Download CV" className="icon-button">
            <Download size={17} />
          </a>
        </div>
      </div>

      <div className="rounded-sm border border-border/75 bg-surface/40 p-5 sm:p-6">
        <p className="max-w-lg font-sans text-lg leading-8 text-text/90">
          For senior ML, agentic AI, and LLM infrastructure conversations, open a draft in your preferred email app.
        </p>
        <a
          href={mailto}
          className="mt-6 inline-flex h-11 items-center gap-2 rounded-sm border border-accent bg-accent px-5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-bg transition hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(0,212,255,0.35)]"
        >
          Send Message
          <ArrowRight size={13} />
        </a>
      </div>
    </div>
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
    <span className="inline-flex min-w-0 items-center gap-3 font-sans text-sm text-text/85">
      <Icon size={15} className="shrink-0 text-accent" />
      <span className="break-words">{label}</span>
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
