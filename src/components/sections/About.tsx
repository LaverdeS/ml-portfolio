'use client'
import { motion } from 'framer-motion'
import { about } from '@/data/portfolio'
import SectionLabel from '../ui/SectionLabel'

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-8 md:px-16 lg:px-24 py-32 scroll-mt-12 relative">
      <SectionLabel number="01" label="about" />
      
      <div className="mt-16 space-y-16">
        {/* Massive Editorial Header */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-text max-w-4xl"
        >
          I design systems with <span className="text-accent italic">mathematical precision</span> and clean signal.
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24"
        >
          {/* Main Narrative */}
          <div className="lg:col-span-8 space-y-8 text-lg md:text-xl text-muted leading-relaxed font-sans font-light">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="last:text-text/90 last:font-medium">{p}</p>
            ))}
          </div>
          
          {/* Side Info */}
          <div className="lg:col-span-4 space-y-12 pt-2 border-t lg:border-t-0 lg:border-l border-border/40 lg:pl-10">
            <div>
              <h3 className="font-mono text-[10px] tracking-widest text-accent uppercase mb-4">Focus Areas</h3>
              <ul className="space-y-3">
                {about.focus.map(f => (
                  <li key={f} className="text-sm font-sans font-medium text-text/80 flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-accent/60" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-[10px] tracking-widest text-accent uppercase mb-4">Target Roles</h3>
              <ul className="space-y-3">
                {['Senior ML Engineer', 'Agentic Systems Architect', 'LLM Platform Lead'].map(r => (
                  <li key={r} className="text-sm font-sans font-medium text-text/80 flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-accent/60" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
