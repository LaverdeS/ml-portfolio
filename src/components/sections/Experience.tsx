'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { experience } from '@/data/portfolio'
import SectionLabel from '../ui/SectionLabel'
import Tag from '../ui/Tag'
import { Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react'

export default function Experience() {
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    sapience: true, // Sapience AI open by default for maximum impact
  })

  const toggleExpand = (id: string) => {
    setExpandedIds(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-24 scroll-mt-12">
      <SectionLabel number="02" label="experience" />

      <div className="relative pl-6 md:pl-10 border-l border-border/80 space-y-12">
        {experience.map((exp, index) => {
          const isSapience = exp.id === 'sapience'
          const isExpanded = !!expandedIds[exp.id]

          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
              className={`relative p-6 border rounded-sm transition-all duration-300 ${
                isSapience
                  ? 'bg-surface border-accent/40 shadow-[0_0_30px_rgba(0,212,255,0.04)]'
                  : 'bg-transparent border-border/60 hover:border-border-muted hover:bg-surface/10'
              }`}
            >
              {/* Timeline marker node */}
              <div
                className={`absolute -left-[31px] md:-left-[47px] top-7 w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                  isSapience
                    ? 'bg-accent border-bg shadow-[0_0_10px_rgba(0,212,255,0.8)] scale-125'
                    : 'bg-bg border-border group-hover:border-accent'
                }`}
              />

              {/* Header row */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-lg md:text-xl font-bold text-text">
                    {exp.company}
                  </h3>
                  <span className="text-[10px] font-mono tracking-widest uppercase border border-border/80 px-2 py-0.5 text-muted/80 bg-surface/80 rounded-sm">
                    {exp.type}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-muted text-xs font-mono">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} className="text-muted/60" />
                    {exp.period}
                  </span>
                  <span className="hidden md:flex items-center gap-1.5">
                    <MapPin size={12} className="text-muted/60" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Role Title */}
              <div className="text-accent text-sm font-mono font-medium tracking-wide mb-4">
                {exp.role}
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {exp.tags.map(tag => (
                  <Tag key={tag} label={tag} variant={isSapience ? 'accent' : 'default'} />
                ))}
              </div>

              {/* Headline summary sentence */}
              <div className="text-text/90 font-sans text-sm md:text-base leading-relaxed mb-4 font-medium border-l border-border/80 pl-3 py-0.5">
                {exp.headline}
              </div>

              {/* Expandable details */}
              <div>
                <button
                  onClick={() => toggleExpand(exp.id)}
                  className="flex items-center gap-1.5 font-mono text-[11px] tracking-wider text-muted hover:text-accent uppercase transition-colors duration-200 select-none pb-2"
                >
                  {isExpanded ? (
                    <>
                      <ChevronUp size={14} /> Hide details
                    </>
                  ) : (
                    <>
                      <ChevronDown size={14} /> Show details
                    </>
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <ul className="list-none space-y-3 pl-3 pt-2 border-t border-border/20 font-sans text-xs md:text-sm text-muted leading-relaxed">
                        {exp.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="relative pl-4">
                            <span className="absolute left-0 top-2.5 w-1.5 h-[1px] bg-accent/60" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
