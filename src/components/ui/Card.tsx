import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-2xl p-6 shadow-sm border border-sage-light/30',
        hover && 'transition-all duration-300 hover:shadow-md hover:-translate-y-1',
        className,
      )}
    >
      {children}
    </div>
  )
}
