'use client'

import { Sun, Wallet, Clock, Leaf, Zap, TrendingUp } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { formatSEK, formatNumber } from '@/lib/utils'
import type { CalculationResult } from '@/lib/calculator'
import { SavingsChart } from './SavingsChart'

interface Props {
  result: CalculationResult
  mode: 'villa' | 'brf'
}

export function CalculatorResults({ result, mode }: Props) {
  const stats = [
    {
      icon: Sun,
      label: 'Systemstorlek',
      value: `${result.systemSizeKwp} kWp`,
      sub: `${result.numberOfPanels} paneler`,
    },
    {
      icon: Zap,
      label: 'Årlig produktion',
      value: `${formatNumber(result.annualProduction)} kWh`,
      sub: 'Uppskattad',
    },
    {
      icon: Wallet,
      label: 'Årlig besparing',
      value: formatSEK(result.annualSavings),
      sub: 'Första året',
      highlight: true,
    },
    {
      icon: TrendingUp,
      label: 'Investeringskostnad',
      value: formatSEK(result.installationCostAfterDeduction),
      sub: `Efter grönt teknik-avdrag`,
    },
    {
      icon: Clock,
      label: 'Återbetalningstid',
      value: `~${result.paybackYears} år`,
      sub: 'Uppskattad',
    },
    {
      icon: Leaf,
      label: 'CO₂-besparing',
      value: `${formatNumber(result.co2SavedKgPerYear)} kg/år`,
      sub: 'Koldioxid',
    },
  ]

  return (
    <div>
      <h2 className="font-heading text-2xl text-forest mb-6">Ditt resultat</h2>

      {/* Stats grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
        {stats.map((stat) => (
          <Card
            key={stat.label}
            className={stat.highlight ? 'border-amber bg-amber/5' : ''}
          >
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-sage-light/30 flex items-center justify-center flex-shrink-0">
                <stat.icon className="w-4 h-4 text-forest" />
              </div>
              <div>
                <p className="text-xs text-ink-light">{stat.label}</p>
                <p className="font-mono text-lg font-bold text-forest">{stat.value}</p>
                <p className="text-xs text-ink-light">{stat.sub}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* 25-year chart */}
      <Card className="mb-8">
        <h3 className="font-heading text-xl text-forest mb-1">Kumulativ besparing över 25 år</h3>
        <p className="text-sm text-ink-light mb-4">
          Total besparing efter {25} år:{' '}
          <span className="font-mono font-bold text-forest">
            {formatSEK(result.totalSavings25Years)}
          </span>
        </p>
        <SavingsChart data={result.cumulativeSavings} />
      </Card>

      {/* Disclaimer */}
      <div className="bg-cream-dark rounded-xl p-4 text-sm text-ink-light">
        <p>
          <strong>Obs:</strong> Denna kalkyl är en uppskattning baserad på genomsnittliga
          marknadspriser och solförhållanden. Faktiska resultat kan variera beroende på
          specifika förutsättningar. Kontakta en certifierad installatör för en exakt offert.
        </p>
      </div>
    </div>
  )
}
