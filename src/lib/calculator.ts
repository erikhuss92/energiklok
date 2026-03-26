import { CALCULATOR, type Region, type Direction } from '@/data/calculator-constants'

export interface VillaInput {
  roofArea: number
  direction: Direction
  region: Region
  annualConsumption: number
  withBattery: boolean
  batteryKwh: number
}

export interface BrfInput {
  roofArea: number
  direction: Direction
  region: Region
  numberOfApartments: number
  commonElectricity: number
}

export interface CalculationResult {
  systemSizeKwp: number
  numberOfPanels: number
  annualProduction: number
  selfConsumedKwh: number
  surplusSoldKwh: number
  annualSavings: number
  installationCost: number
  installationCostAfterDeduction: number
  paybackYears: number
  co2SavedKgPerYear: number
  totalSavings25Years: number
  cumulativeSavings: number[]
  monthlyProductionKwh: number[]
}

function calculateCore(
  roofArea: number,
  direction: Direction,
  region: Region,
  selfConsumptionRatio: number,
  costPerKwp: number,
  batteryCost: number = 0,
): CalculationResult {
  const C = CALCULATOR

  // System sizing
  const maxPanels = Math.floor(roofArea / C.panelAreaM2)
  const numberOfPanels = maxPanels
  const systemSizeKwp = (numberOfPanels * C.panelWattPeak) / 1000

  // Annual production
  const dirFactor = C.directionFactor[direction]
  const baseYield = C.solarYield[region]
  const annualProduction = systemSizeKwp * baseYield * C.systemEfficiency * dirFactor

  // Self-consumption split
  const selfConsumedKwh = annualProduction * selfConsumptionRatio
  const surplusSoldKwh = annualProduction - selfConsumedKwh

  // Annual savings (year 1)
  const annualSavings =
    selfConsumedKwh * C.electricityBuyPrice + surplusSoldKwh * C.electricitySellPrice

  // Installation cost
  const installationCost = systemSizeKwp * costPerKwp + batteryCost
  const installationCostAfterDeduction = installationCost * (1 - C.gronTeknikDeduction)

  // 25-year cumulative savings
  const cumulativeSavings: number[] = []
  let cumulative = -installationCostAfterDeduction
  for (let year = 1; year <= C.systemLifeYears; year++) {
    const degradation = Math.pow(1 - C.panelDegradation, year)
    const priceIncrease = Math.pow(1 + C.annualPriceIncrease, year)
    const yearProduction = annualProduction * degradation
    const yearSelfConsumed = yearProduction * selfConsumptionRatio
    const yearSurplus = yearProduction - yearSelfConsumed
    const yearSavings =
      yearSelfConsumed * C.electricityBuyPrice * priceIncrease +
      yearSurplus * C.electricitySellPrice * priceIncrease
    cumulative += yearSavings
    cumulativeSavings.push(Math.round(cumulative))
  }

  // Payback period
  const paybackYears = cumulativeSavings.findIndex((v) => v >= 0) + 1 || C.systemLifeYears

  // Monthly production
  const monthlyProductionKwh = C.monthlyDistribution.map((frac) =>
    Math.round(annualProduction * frac),
  )

  // CO2 savings
  const co2SavedKgPerYear = annualProduction * C.co2PerKwh

  return {
    systemSizeKwp: Math.round(systemSizeKwp * 10) / 10,
    numberOfPanels,
    annualProduction: Math.round(annualProduction),
    selfConsumedKwh: Math.round(selfConsumedKwh),
    surplusSoldKwh: Math.round(surplusSoldKwh),
    annualSavings: Math.round(annualSavings),
    installationCost: Math.round(installationCost),
    installationCostAfterDeduction: Math.round(installationCostAfterDeduction),
    paybackYears,
    co2SavedKgPerYear: Math.round(co2SavedKgPerYear),
    totalSavings25Years: cumulativeSavings[cumulativeSavings.length - 1],
    cumulativeSavings,
    monthlyProductionKwh,
  }
}

export function calculateVilla(input: VillaInput): CalculationResult {
  const selfConsumption = input.withBattery
    ? CALCULATOR.selfConsumptionVillaBattery
    : CALCULATOR.selfConsumptionVilla
  const batteryCost = input.withBattery ? input.batteryKwh * CALCULATOR.batteryCostPerKwh : 0
  return calculateCore(
    input.roofArea,
    input.direction,
    input.region,
    selfConsumption,
    CALCULATOR.costPerKwpVilla,
    batteryCost,
  )
}

export function calculateBrf(input: BrfInput): CalculationResult {
  return calculateCore(
    input.roofArea,
    input.direction,
    input.region,
    CALCULATOR.selfConsumptionBrf,
    CALCULATOR.costPerKwpBrf,
  )
}
