'use client'
import { motion } from 'framer-motion'
import { experience } from '@/data/portfolio'
import SectionLabel from '../ui/SectionLabel'
import Tag from '../ui/Tag'

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-8 md:px-16 lg:px-24 py-32 scroll-mt-12">
      <SectionLabel number="02" label="experience" />

      <div className="mt-20 space-y-32">
        {experience.map((exp) => {
          const isSapience = exp.id === 'sapience'

          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 border-b border-border/30 pb-8">
                <div>
                  <h3 className="font-display text-4xl md:text-5xl font-bold text-text group-hover:text-accent transition-colors duration-500 tracking-tight">
                    {exp.company}
                  </h3>
                  <div className="font-mono text-sm md:text-base tracking-wide text-accent mt-4">
                    {exp.role}
                  </div>
                </div>
                <div className="text-left lg:text-right font-mono text-[11px] text-muted/80 uppercase tracking-widest">
                  <div className="text-text/80 font-medium mb-1">{exp.period}</div>
                  <div>{exp.location}</div>
                </div>
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                {/* Main Bullets */}
                <div className="lg:col-span-8">
                  <p className="text-xl md:text-2xl text-text/90 font-light mb-10 leading-relaxed font-sans">
                    {exp.headline}
                  </p>
                  <ul className="space-y-6">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-5 text-muted">
                        <div className={`mt-2.5 w-1.5 h-1.5 rounded-full shrink-0 ${isSapience ? 'bg-accent' : 'bg-border/80 group-hover:bg-accent/50'} transition-colors duration-500`} />
                        <span className="leading-relaxed text-base md:text-lg font-light">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags Sidebar */}
                <div className="lg:col-span-4 lg:pl-10 lg:border-l border-border/30 pt-4 lg:pt-0">
                  <h4 className="font-mono text-[10px] tracking-widest text-muted uppercase mb-6">Technologies</h4>
                  <div className="flex flex-wrap gap-2.5">
                    {exp.tags.map(tag => (
                      <Tag key={tag} label={tag} variant={isSapience ? 'accent' : 'default'} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
