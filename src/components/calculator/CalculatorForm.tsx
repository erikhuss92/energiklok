'use client'

import { useState } from 'react'
import { Building2, Home, Calculator, Info } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { calculateVilla, calculateBrf, type CalculationResult } from '@/lib/calculator'
import type { Region, Direction } from '@/data/calculator-constants'
import { CalculatorResults } from './CalculatorResults'

const regions: { value: Region; label: string }[] = [
  { value: 'south', label: 'Södra Sverige (Skåne, Halland, Blekinge)' },
  { value: 'middle', label: 'Mellersta Sverige (Stockholm, Mälardalen)' },
  { value: 'north', label: 'Norra Sverige (Norrland)' },
]

const directions: { value: Direction; label: string }[] = [
  { value: 'south', label: 'Söder' },
  { value: 'south-east', label: 'Sydost' },
  { value: 'south-west', label: 'Sydväst' },
  { value: 'east-west', label: 'Öst-Väst' },
  { value: 'east', label: 'Öst' },
  { value: 'west', label: 'Väst' },
]

type Mode = 'villa' | 'brf'

export function CalculatorForm({ initialMode }: { initialMode?: Mode }) {
  const [mode, setMode] = useState<Mode>(initialMode || 'villa')
  const [result, setResult] = useState<CalculationResult | null>(null)

  // Villa fields
  const [roofArea, setRoofArea] = useState(50)
  const [direction, setDirection] = useState<Direction>('south')
  const [region, setRegion] = useState<Region>('middle')
  const [consumption, setConsumption] = useState(15000)
  const [withBattery, setWithBattery] = useState(false)
  const [batteryKwh, setBatteryKwh] = useState(10)

  // BRF fields
  const [brfRoofArea, setBrfRoofArea] = useState(300)
  const [brfDirection, setBrfDirection] = useState<Direction>('south')
  const [brfRegion, setBrfRegion] = useState<Region>('middle')
  const [apartments, setApartments] = useState(20)
  const [commonElectricity, setCommonElectricity] = useState(50000)

  function handleCalculate() {
    if (mode === 'villa') {
      setResult(
        calculateVilla({
          roofArea,
          direction,
          region,
          annualConsumption: consumption,
          withBattery,
          batteryKwh,
        }),
      )
    } else {
      setResult(
        calculateBrf({
          roofArea: brfRoofArea,
          direction: brfDirection,
          region: brfRegion,
          numberOfApartments: apartments,
          commonElectricity,
        }),
      )
    }
  }

  return (
    <div>
      {/* Mode toggle */}
      <div className="flex bg-white rounded-xl p-1.5 mb-8 border border-sage-light/30 max-w-md">
        <button
          onClick={() => { setMode('villa'); setResult(null) }}
          className={cn(
            'flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-medium transition-all',
            mode === 'villa'
              ? 'bg-forest text-white shadow-sm'
              : 'text-ink-light hover:text-forest',
          )}
        >
          <Home className="w-4 h-4" />
          Villaägare
        </button>
        <button
          onClick={() => { setMode('brf'); setResult(null) }}
          className={cn(
            'flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-medium transition-all',
            mode === 'brf'
              ? 'bg-forest text-white shadow-sm'
              : 'text-ink-light hover:text-forest',
          )}
        >
          <Building2 className="w-4 h-4" />
          BRF-förening
        </button>
      </div>

      {/* Form */}
      <div className="bg-white rounded-2xl border border-sage-light/30 p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-6">
          {mode === 'villa' ? (
            <>
              <Input
                label="Takyta tillgänglig för sol"
                type="number"
                value={roofArea}
                onChange={(e) => setRoofArea(Number(e.target.value))}
                suffix="m²"
                min={10}
                max={500}
              />
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-ink">Takriktning</label>
                <select
                  value={direction}
                  onChange={(e) => setDirection(e.target.value as Direction)}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-ink focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
                >
                  {directions.map((d) => (
                    <option key={d.value} value={d.value}>{d.label}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-ink">Region</label>
                <select
                  value={region}
                  onChange={(e) => setRegion(e.target.value as Region)}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-ink focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
                >
                  {regions.map((r) => (
                    <option key={r.value} value={r.value}>{r.label}</option>
                  ))}
                </select>
              </div>
              <Input
                label="Årlig elförbrukning"
                type="number"
                value={consumption}
                onChange={(e) => setConsumption(Number(e.target.value))}
                suffix="kWh"
                min={1000}
                max={100000}
              />
              <div className="md:col-span-2 space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={withBattery}
                    onChange={(e) => setWithBattery(e.target.checked)}
                    className="w-5 h-5 rounded border-gray-300 text-forest focus:ring-forest"
                  />
                  <span className="text-sm font-medium text-ink">Inkludera batterilager</span>
                </label>
                {withBattery && (
                  <Input
                    label="Batteristorlek"
                    type="number"
                    value={batteryKwh}
                    onChange={(e) => setBatteryKwh(Number(e.target.value))}
                    suffix="kWh"
                    min={5}
                    max={30}
                    className="max-w-xs"
                  />
                )}
              </div>
            </>
          ) : (
            <>
              <Input
                label="Tillgänglig takyta"
                type="number"
                value={brfRoofArea}
                onChange={(e) => setBrfRoofArea(Number(e.target.value))}
                suffix="m²"
                min={50}
                max={5000}
              />
              <Input
                label="Antal lägenheter"
                type="number"
                value={apartments}
                onChange={(e) => setApartments(Number(e.target.value))}
                min={2}
                max={500}
              />
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-ink">Takriktning</label>
                <select
                  value={brfDirection}
                  onChange={(e) => setBrfDirection(e.target.value as Direction)}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-ink focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
                >
                  {directions.map((d) => (
                    <option key={d.value} value={d.value}>{d.label}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-ink">Region</label>
                <select
                  value={brfRegion}
                  onChange={(e) => setBrfRegion(e.target.value as Region)}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-ink focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
                >
                  {regions.map((r) => (
                    <option key={r.value} value={r.value}>{r.label}</option>
                  ))}
                </select>
              </div>
              <Input
                label="Gemensam elförbrukning"
                type="number"
                value={commonElectricity}
                onChange={(e) => setCommonElectricity(Number(e.target.value))}
                suffix="kWh/år"
                min={5000}
                max={500000}
                className="md:col-span-2"
              />
            </>
          )}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <Button onClick={handleCalculate} variant="accent" size="lg">
            <Calculator className="w-5 h-5 mr-2" />
            Beräkna besparing
          </Button>
          <p className="flex items-center gap-1 text-xs text-ink-light">
            <Info className="w-3 h-3" />
            Uppskattning baserad på genomsnittliga värden
          </p>
        </div>
      </div>

      {/* Results */}
      {result && (
        <div className="mt-10">
          <CalculatorResults result={result} mode={mode} />
        </div>
      )}
    </div>
  )
}
