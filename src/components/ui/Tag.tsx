import { cn } from '@/lib/utils'

interface TagProps {
  label: string
  variant?: 'default' | 'accent' | 'metric' | 'violet'
  className?: string
}

export default function Tag({ label, variant = 'default', className }: TagProps) {
  const variants = {
    default: 'border-border text-muted hover:border-accent hover:text-text',
    accent:  'border-accent/40 text-accent',
    metric:  'border-metric/40 text-metric',
    violet:  'border-violet/40 text-violet',
  }
  return (
    <span className={cn(
      'inline-block px-2 py-0.5 text-[10px] font-mono border tracking-wider transition-all duration-200 cursor-default uppercase bg-surface/50',
      variants[variant],
      className
    )}>
      {label}
    </span>
  )
}
