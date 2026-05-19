'use client'
import { motion } from 'framer-motion'
import { metrics } from '@/data/portfolio'

export default function Metrics() {
  return (
    <section id="metrics" className="border-y border-border bg-surface select-none relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-5 gap-px bg-border/20">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center justify-center py-6 px-4 group hover:bg-[rgba(0,212,255,0.03)] transition-colors duration-300 cursor-default bg-bg/40"
          >
            <span className="font-display text-4xl md:text-5xl font-bold text-metric mb-1 drop-shadow-[0_0_15px_rgba(0,229,160,0.15)] group-hover:scale-105 transition-transform duration-300">
              {m.value}
            </span>
            <span className="text-muted text-[10px] font-mono tracking-widest text-center uppercase mt-1">
              {m.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
