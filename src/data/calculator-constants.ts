export const CALCULATOR = {
  // Solar yield by region (kWh/kWp/year)
  solarYield: {
    south: 1000,
    middle: 950,
    north: 850,
  },

  // Direction factor (multiplier on yield)
  directionFactor: {
    south: 1.0,
    'south-west': 0.95,
    'south-east': 0.95,
    east: 0.8,
    west: 0.8,
    'east-west': 0.87,
  },

  // Panel specs
  panelWattPeak: 430,        // Wp per panel
  panelAreaM2: 1.92,         // m² per panel
  systemEfficiency: 0.85,    // Inverter + cable losses

  // Costs (SEK)
  costPerKwpVilla: 16000,
  costPerKwpBrf: 13000,
  batteryCostPerKwh: 7000,

  // Tax deductions
  gronTeknikDeduction: 0.15, // 15% green tech deduction (2026)

  // Electricity prices (SEK/kWh)
  electricityBuyPrice: 2.0,  // Total cost incl network + tax
  electricitySellPrice: 0.5, // Surplus sold back

  // Self-consumption ratios
  selfConsumptionVilla: 0.30,
  selfConsumptionVillaBattery: 0.60,
  selfConsumptionBrf: 0.70,

  // Projections
  annualPriceIncrease: 0.03,
  panelDegradation: 0.005,
  systemLifeYears: 25,

  // CO2
  co2PerKwh: 0.045,         // kg CO2/kWh Swedish grid

  // Monthly solar distribution (fraction of annual production)
  monthlyDistribution: [
    0.02, 0.04, 0.08, 0.12, 0.15, 0.16,
    0.15, 0.12, 0.08, 0.05, 0.02, 0.01,
  ],
} as const

export type Region = keyof typeof CALCULATOR.solarYield
export type Direction = keyof typeof CALCULATOR.directionFactor
