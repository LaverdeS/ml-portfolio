'use client'
import { motion } from 'framer-motion'
import { skills } from '@/data/portfolio'
import SectionLabel from '../ui/SectionLabel'
import Tag from '../ui/Tag'
import { Bot, Database, Brain, Layers, Settings, Cloud } from 'lucide-react'

// Icon mapping helper
const IconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Bot: Bot,
  Database: Database,
  Brain: Brain,
  Layers: Layers,
  Settings: Settings,
  Cloud: Cloud,
}

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-24 scroll-mt-12">
      <SectionLabel number="04" label="skills" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((domain, index) => {
          const IconComponent = IconMap[domain.icon] || Brain

          return (
            <motion.div
              key={domain.domain}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
              className="bg-surface border border-border/80 p-6 rounded-sm hover:border-accent/20 transition-all duration-300 relative group"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6 select-none border-b border-border/30 pb-4">
                <div className="w-8 h-8 rounded-sm bg-accent/5 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent/10 transition-colors duration-300">
                  <IconComponent size={16} />
                </div>
                <h3 className="font-mono text-[11px] md:text-xs font-semibold uppercase tracking-widest text-text">
                  {domain.domain}
                </h3>
              </div>

              {/* Skills list */}
              <div className="flex flex-wrap gap-2">
                {domain.items.map(skill => (
                  <Tag
                    key={skill}
                    label={skill}
                    variant="default"
                    className="hover:scale-[1.03]"
                  />
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
