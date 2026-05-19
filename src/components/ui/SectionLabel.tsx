interface SectionLabelProps {
  number: string   // e.g. "01"
  label: string    // e.g. "about"
}

export default function SectionLabel({ number, label }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-4 mb-12 select-none">
      <span className="text-accent text-xs font-mono tracking-widest opacity-60">// {number}_</span>
      <span className="text-muted text-xs font-mono tracking-[0.3em] uppercase">{label}</span>
      <div className="flex-1 h-px bg-border/50" />
    </div>
  )
}
