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
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Trigger active state when section is centered
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

    // Observe all sections
    sections.forEach(sec => {
      const el = document.getElementById(sec.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Sticky Mobile Nav Top Bar (height 48px, blurred backdrop) */}
      <header className="fixed top-0 left-0 right-0 h-12 bg-bg/70 backdrop-blur-md border-b border-border/30 z-50 flex items-center justify-between px-6 md:hidden select-none">
        <a href="#hero" className="font-mono text-xs font-bold tracking-widest text-accent hover:text-text transition-colors duration-200">
          &lt;SL /&gt;
        </a>
        <a
          href={meta.cvPath}
          download
          className="flex items-center gap-1.5 font-mono text-[9px] tracking-wider text-accent border border-accent/30 px-2.5 py-1 rounded-sm bg-accent-dim/10 hover:bg-accent-dim/20 transition-all duration-300"
        >
          <Download size={10} />
          CV
        </a>
      </header>

      {/* Fixed Sidebar Navigation (Desktop only, left side) */}
      <nav className="fixed left-6 lg:left-10 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-6 select-none">
        {/* Decorative top line segment */}
        <div className="w-px h-16 bg-border/40 mb-2" />

        {sections.map(sec => {
          const isActive = activeSection === sec.id
          return (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              className="group flex flex-col items-center gap-2 py-1.5 transition-all duration-300"
            >
              {/* Dot */}
              <div
                className={`w-1.5 h-1.5 rounded-full border transition-all duration-300 ${
                  isActive
                    ? 'bg-accent border-accent scale-125 shadow-[0_0_8px_rgba(0,212,255,0.7)]'
                    : 'bg-transparent border-border/80 group-hover:border-accent'
                }`}
              />
              
              {/* Sideways Text Label */}
              <span
                className={`font-mono text-[9px] tracking-[0.2em] uppercase transition-all duration-300 [writing-mode:vertical-rl] rotate-180 ${
                  isActive
                    ? 'text-accent font-medium'
                    : 'text-muted/50 group-hover:text-text'
                }`}
              >
                {sec.label}
              </span>
            </a>
          )
        })}

        {/* Decorative bottom line segment */}
        <div className="w-px h-16 bg-border/40 mt-2" />
      </nav>
    </>
  )
}
