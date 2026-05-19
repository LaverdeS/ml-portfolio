'use client'
import { useState, useEffect } from 'react'
import { meta } from '@/data/portfolio'

const subtitles = ['Agentic AI Systems', 'LLM Infrastructure', 'Document Intelligence']

export default function Hero() {
  const [subtitleIndex, setSubtitleIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setSubtitleIndex(i => (i + 1) % subtitles.length)
        setVisible(true)
      }, 400)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 overflow-hidden border-b border-border/20">
      {/* Blueprint grid overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none"
        style={{
          backgroundImage: `
            linear-gradient(var(--accent) 1px, transparent 1px),
            linear-gradient(90deg, var(--accent) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[120px] pointer-events-none select-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[250px] h-[250px] rounded-full bg-violet/5 blur-[100px] pointer-events-none select-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl">
        {/* Small label */}
        <p className="text-accent text-[11px] font-mono tracking-[0.3em] uppercase mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: '0ms', animationFillMode: 'forwards' }}>
          &lt; ml_engineer /&gt;
        </p>

        {/* Name */}
        <h1 className="font-display leading-none mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
          <span className="block text-4xl md:text-6xl text-muted font-normal tracking-tight">Sebastian</span>
          <span className="block text-6xl md:text-8xl text-text font-bold tracking-tight">Laverde</span>
        </h1>

        {/* Cycling subtitle */}
        <div className="h-8 mb-12 flex items-center opacity-0 animate-fade-up"
          style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
          <span className="text-accent text-sm md:text-base font-mono tracking-widest transition-opacity duration-300 uppercase"
            style={{ opacity: visible ? 1 : 0 }}>
            {subtitles[subtitleIndex]}
          </span>
          <span className="ml-1 text-accent animate-blink">_</span>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 opacity-0 animate-fade-up"
          style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
          <a href="#experience"
            className="px-6 py-3 border border-accent text-accent font-mono text-xs tracking-widest hover:bg-accent hover:text-bg transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.25)]">
            VIEW WORK
          </a>
          <a href={meta.cvPath} download
            className="px-6 py-3 border border-border text-muted font-mono text-xs tracking-widest hover:border-text hover:text-text transition-all duration-300">
            DOWNLOAD CV
          </a>
        </div>
      </div>

      {/* Social links */}
      <div className="absolute bottom-10 right-6 md:right-16 flex gap-6 opacity-0 animate-fade-up"
        style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
        {[
          { label: 'github', url: meta.github },
          { label: 'linkedin', url: meta.linkedin },
          { label: 'huggingface', url: meta.huggingface },
        ].map(link => (
          <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer"
            className="text-muted font-mono text-[11px] tracking-widest hover:text-accent transition-colors duration-200 uppercase">
            {link.label}
          </a>
        ))}
      </div>

      {/* Location tag */}
      <div className="absolute top-10 right-6 md:right-16 text-muted font-mono text-[10px] tracking-widest opacity-0 animate-fade-up uppercase"
        style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
        {meta.location}
      </div>
    </section>
  )
}
