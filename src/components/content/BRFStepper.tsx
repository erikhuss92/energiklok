'use client'

import { useState } from 'react'
import { ChevronDown, Lightbulb, CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { BrfStep } from '@/data/brf-steps'

interface BRFStepperProps {
  steps: BrfStep[]
}

export function BRFStepper({ steps }: BRFStepperProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="space-y-3">
      {steps.map((step, index) => {
        const isOpen = openIndex === index
        return (
          <div
            key={index}
            className={cn(
              'bg-white rounded-xl border transition-all duration-200',
              isOpen ? 'border-forest shadow-sm' : 'border-sage-light/30',
            )}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center gap-4 p-5 text-left"
              aria-expanded={isOpen}
            >
              <div
                className={cn(
                  'w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors',
                  isOpen ? 'bg-forest text-white' : 'bg-sage-light/50 text-forest',
                )}
              >
                <span className="text-sm font-bold">{index + 1}</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-forest">{step.title}</h3>
                <p className="text-sm text-ink-light mt-0.5">{step.description}</p>
              </div>
              <ChevronDown
                className={cn(
                  'w-5 h-5 text-ink-light transition-transform flex-shrink-0',
                  isOpen && 'rotate-180',
                )}
              />
            </button>

            {isOpen && (
              <div className="px-5 pb-5 pt-0">
                <div className="border-t border-sage-light/30 pt-4 ml-12">
                  <ul className="space-y-3">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex gap-3 text-ink-light">
                        <CheckCircle2 className="w-5 h-5 text-sage-dark flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  {step.tip && (
                    <div className="mt-4 bg-amber/10 rounded-lg p-4 flex gap-3">
                      <Lightbulb className="w-5 h-5 text-amber flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-ink-light">
                        <span className="font-medium text-ink">Tips: </span>
                        {step.tip}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
