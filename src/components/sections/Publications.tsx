'use client'
import { motion } from 'framer-motion'
import { publications } from '@/data/portfolio'
import SectionLabel from '../ui/SectionLabel'
import { BookOpen, ExternalLink } from 'lucide-react'

export default function Publications() {
  return (
    <section id="publications" className="max-w-6xl mx-auto px-6 py-24 scroll-mt-12">
      <SectionLabel number="05" label="publications" />

      <div className="space-y-8">
        {publications.map((pub, index) => {
          return (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
              className="bg-surface border border-border/80 p-6 rounded-sm hover:border-accent/20 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex gap-4 items-start">
                  <div className="mt-1 w-6 h-6 flex items-center justify-center text-muted group-hover:text-accent transition-colors duration-200">
                    <BookOpen size={16} />
                  </div>
                  <div>
                    {/* Authors */}
                    <p className="font-sans text-xs text-muted mb-2 tracking-wide">
                      {pub.authors} ({pub.year})
                    </p>
                    
                    {/* Title */}
                    <h4 className="font-display text-base md:text-lg font-medium text-text mb-3 leading-snug group-hover:text-accent transition-colors duration-200">
                      {pub.title}
                    </h4>
                    
                    {/* Venue / Source */}
                    <p className="font-mono text-[10px] md:text-xs text-muted/80 uppercase tracking-widest">
                      {pub.venue}
                    </p>
                  </div>
                </div>

                {pub.url && (
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 font-mono text-[10px] text-accent tracking-widest uppercase hover:underline border border-accent/20 px-3 py-1.5 bg-accent-dim/10 rounded-sm w-fit self-end md:self-start"
                  >
                    View Paper <ExternalLink size={10} />
                  </a>
                )}
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
