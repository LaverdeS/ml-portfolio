'use client'
import { useState, useEffect } from 'react'
import { meta } from '@/data/portfolio'
import { Download } from 'lucide-react'

const sections = [
  { id: 'about', label: 'about' },
  { id: 'experience', label: 'experience' },
  { id: 'projects', label: 'projects' },
  { id: 'skills', label: 'skills' },
  { id: 'publications', label: 'publications' },
  { id: 'contact', label: 'contact' }
]

export default function Nav() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe hero as well
    const hero = document.getElementById('hero')
    if (hero) observer.observe(hero)

    sections.forEach(sec => {
      const el = document.getElementById(sec.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Mobile Top Bar */}
      <header className="fixed top-0 left-0 right-0 h-14 bg-bg/90 backdrop-blur-md border-b border-border/40 z-50 flex items-center justify-between px-6 md:hidden select-none">
        <a href="#hero" className="font-display text-lg font-bold tracking-widest text-text">
          SL.
        </a>
        <a
          href={meta.cvPath}
          download
          className="flex items-center gap-1.5 font-mono text-[10px] tracking-wider text-accent border border-accent/30 px-3 py-1.5 rounded-sm bg-accent-dim/10 hover:bg-accent-dim/20 transition-all duration-300"
        >
          <Download size={12} />
          CV
        </a>
      </header>

      {/* Desktop Solid Sidebar */}
      <aside className="hidden md:flex w-64 lg:w-[280px] fixed inset-y-0 left-0 bg-surface border-r border-border/40 z-50 flex-col justify-between py-12 px-8 shadow-2xl">
        {/* Logo area */}
        <div className="select-none">
          <a href="#hero" className="inline-block font-display text-4xl font-bold tracking-tight text-text hover:text-accent transition-colors duration-300">
            SL.
          </a>
          <p className="font-mono text-[10px] tracking-widest text-muted uppercase mt-4 border-l border-accent pl-3">
            ML Engineer
          </p>
        </div>

        {/* Links */}
        <nav className="flex flex-col gap-6 select-none">
          {sections.map(sec => {
            const isActive = activeSection === sec.id
            return (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className="group flex items-center gap-4 py-1"
              >
                {/* Animated Line Indicator */}
                <div
                  className={`h-[1px] transition-all duration-300 ${
                    isActive
                      ? 'bg-accent w-10 shadow-[0_0_8px_rgba(0,212,255,0.8)]'
                      : 'bg-border/80 w-4 group-hover:bg-accent/60 group-hover:w-8'
                  }`}
                />
                
                {/* Horizontal Text Label */}
                <span
                  className={`font-mono text-[10px] tracking-widest uppercase transition-all duration-300 ${
                    isActive
                      ? 'text-accent font-semibold'
                      : 'text-muted group-hover:text-text'
                  }`}
                >
                  {sec.label}
                </span>
              </a>
            )
          })}
        </nav>

        {/* Footer / CV */}
        <div className="select-none flex flex-col gap-4">
          <a
            href={meta.cvPath}
            download
            className="flex items-center justify-center gap-2 font-mono text-[10px] tracking-widest text-muted border border-border/60 py-3.5 hover:border-accent hover:text-accent transition-all duration-300 uppercase rounded-sm bg-bg/50"
          >
            <Download size={14} />
            Download CV
          </a>
        </div>
      </aside>
    </>
  )
}
