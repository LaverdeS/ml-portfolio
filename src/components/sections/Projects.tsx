'use client'
import { motion } from 'framer-motion'
import { projects } from '@/data/portfolio'
import SectionLabel from '../ui/SectionLabel'
import Tag from '../ui/Tag'

export default function Projects() {
  // Helper to determine badge variants based on project type
  const getBadgeVariant = (type: string) => {
    const t = type.toLowerCase()
    if (t.includes('agentic')) return 'accent'
    if (t.includes('rag')) return 'violet'
    if (t.includes('infra') || t.includes('infrastructure')) return 'default'
    return 'metric'
  }

  return (
    <section id="projects" className="max-w-6xl mx-auto px-8 md:px-16 lg:px-24 py-32 scroll-mt-12">
      <SectionLabel number="03" label="projects" />

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        {projects.map((proj, index) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: index * 0.06 }}
            whileHover={{ y: -4 }}
            className="bg-surface border border-border/80 p-6 flex flex-col justify-between rounded-sm relative group hover:border-accent/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.04)]"
          >
            <div>
              {/* Card Header (type badge + company) */}
              <div className="flex items-center justify-between gap-2 mb-4 select-none">
                <Tag label={proj.type} variant={getBadgeVariant(proj.type)} />
                <span className="text-[10px] font-mono tracking-wider text-muted uppercase">
                  {proj.company}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display text-lg md:text-xl font-semibold text-text mb-3 leading-tight group-hover:text-accent transition-colors duration-200">
                {proj.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-muted text-xs md:text-sm leading-relaxed mb-6">
                {proj.description}
              </p>
            </div>

            <div>
              {/* Architecture tags */}
              <div className="flex flex-wrap gap-1.5 mb-4 border-t border-border/20 pt-4">
                {proj.architecture.map(tech => (
                  <span
                    key={tech}
                    className="text-[9px] font-mono text-muted/80 bg-bg/50 px-1.5 py-0.5 border border-border/40 uppercase"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Outcome line */}
              <div className="font-mono text-[10px] md:text-xs text-metric font-medium tracking-wide flex items-start gap-1 select-none">
                <span className="text-metric/70">-&gt;</span>
                <span>{proj.outcome}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
