import { cn } from '@/lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  suffix?: string
}

export function Input({ label, suffix, className, id, ...props }: InputProps) {
  const inputId = id || label.toLowerCase().replace(/\s+/g, '-')
  return (
    <div className={cn('space-y-1.5', className)}>
      <label htmlFor={inputId} className="block text-sm font-medium text-ink">
        {label}
      </label>
      <div className="relative">
        <input
          id={inputId}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-ink transition-colors focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
          {...props}
        />
        {suffix && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-ink-light">
            {suffix}
          </span>
        )}
      </div>
    </div>
  )
}
