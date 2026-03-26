import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'sage' | 'amber' | 'forest'
  className?: string
}

export function Badge({ children, variant = 'sage', className }: BadgeProps) {
  const variants = {
    sage: 'bg-sage-light text-forest',
    amber: 'bg-amber-light text-forest-dark',
    forest: 'bg-forest text-white',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
