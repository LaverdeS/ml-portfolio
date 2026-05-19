'use client'
import { motion } from 'framer-motion'
import { meta } from '@/data/portfolio'
import SectionLabel from '../ui/SectionLabel'

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24 md:py-32 scroll-mt-12">
      <SectionLabel number="01" label="about" />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Terminal Block (Left Column) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 bg-surface border border-border/80 p-6 font-mono text-xs rounded-sm relative overflow-hidden group hover:border-accent/40 transition-colors duration-300"
        >
          {/* Faux terminal header */}
          <div className="flex items-center justify-between border-b border-border/40 pb-4 mb-4 select-none">
            <div className="flex gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-border" />
              <span className="w-2.5 h-2.5 rounded-full bg-border" />
              <span className="w-2.5 h-2.5 rounded-full bg-border" />
            </div>
            <span className="text-muted/60 text-[10px] tracking-wider uppercase">bash - profile.sh</span>
          </div>

          {/* Key-Value lines */}
          <div className="space-y-3">
            <div>
              <span className="text-accent">&gt; name:</span>{' '}
              <span className="text-text">"{meta.name}"</span>
            </div>
            <div>
              <span className="text-accent">&gt; role:</span>{' '}
              <span className="text-text">"{meta.title}"</span>
            </div>
            <div>
              <span className="text-accent">&gt; location:</span>{' '}
              <span className="text-text">"{meta.location}"</span>
            </div>
            <div>
              <span className="text-accent">&gt; languages:</span>{' '}
              <span className="text-text">["Spanish (Native)", "English (Fluent)", "German (B1+)"]</span>
            </div>
            <div>
              <span className="text-accent">&gt; yoe:</span>{' '}
              <span className="text-text">7+</span>
            </div>
            <div>
              <span className="text-accent">&gt; focus:</span>{' '}
              <span className="text-violet">['Agentic AI', 'RAG', 'DocIntel']</span>
            </div>
            <div className="pt-2 text-muted border-t border-border/20 mt-4 text-[10px] flex justify-between items-center select-none">
              <span>status: active_search</span>
              <span className="animate-pulse text-metric">● online</span>
            </div>
          </div>
        </motion.div>

        {/* Text Block (Right Column) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="lg:col-span-7 flex flex-col justify-between h-full"
        >
          <div className="font-sans text-muted leading-relaxed text-sm md:text-base space-y-6">
            <p>
              I am a Machine Learning Engineer with 7+ years of experience across the full AI lifecycle — from research and fine-tuning to production deployment, observability, and scale. I specialize in building deep learning systems for document intelligence, NLP, and multimodal AI, with a core focus on agentic architectures and LLM infrastructure.
            </p>
            <p>
              Most recently at Sapience AI, I served as the sole architect and technical owner of their complete multi-agent SaaS platform. I designed and deployed four production agents, an Agent-to-Agent (A2A) orchestration protocol, a hybrid RAG retrieval pipeline, and full GCP serverless infrastructure.
            </p>
            <p>
              My passion lies in translating complex research and business objectives into highly observable, type-safe, and scalable systems. Whether training computer vision layouts or engineering stateful orchestration loops, I design systems with mathematical precision and clean signal.
            </p>
          </div>

          {/* Highlight Badge */}
          <div className="mt-8 border-l-2 border-accent bg-accent-dim/20 p-4 font-mono text-xs text-accent">
            <span className="block font-bold mb-1 uppercase tracking-wider">Target roles:</span>
            <span>Senior ML Engineer · Agentic Systems Architect · LLM Platform Lead</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
