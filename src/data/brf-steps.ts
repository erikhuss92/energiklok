export interface BrfStep {
  title: string
  description: string
  details: string[]
  tip?: string
}

export const brfSteps: BrfStep[] = [
  {
    title: '1. Kartlägg föreningens energianvändning',
    description: 'Börja med att förstå hur mycket energi föreningen använder och vad den kostar.',
    details: [
      'Samla in elräkningar för gemensam el de senaste 12 månaderna',
      'Notera förbrukning per månad (kWh) och total kostnad',
      'Identifiera de största energiförbrukarna (tvättstuga, garage, belysning)',
      'Kontrollera om föreningen har en aktuell energideklaration',
    ],
    tip: 'Kontakta er elleverantör — de kan ofta ta fram detaljerad förbrukningsdata.',
  },
  {
    title: '2. Inhämta offerter',
    description: 'Begär in offerter från minst tre certifierade installatörer.',
    details: [
      'Kontakta minst 3 installatörer med certifiering för solcellsinstallation',
      'Be om platsbesök och skugganalys av taket',
      'Jämför: systemstorlek, panelmärke, garanti, pris och uppskattad produktion',
      'Fråga om referensprojekt hos andra BRF:er',
    ],
    tip: 'Använd vår kalkylator för att få en uppskattning innan du begär offerter.',
  },
  {
    title: '3. Förankra i styrelsen',
    description: 'Presentera beslutsunderlag för styrelsen med tydlig ekonomisk kalkyl.',
    details: [
      'Sammanställ offertjämförelse i en tydlig tabell',
      'Beräkna återbetalningstid och årlig besparing',
      'Redovisa miljönytta (CO₂-besparing)',
      'Föreslå finansieringsalternativ (eget kapital, lån, leasing)',
    ],
  },
  {
    title: '4. Informera medlemmarna',
    description: 'Kommunicera planerna till föreningens medlemmar i god tid.',
    details: [
      'Skicka informationsbrev med sammanfattning av projektet',
      'Bjud in till informationsmöte eller frågestund',
      'Besvara vanliga frågor: kostnad per lägenhet, påverkan på avgiften',
      'Visa på långsiktiga besparingar och värdeökning av fastigheten',
    ],
  },
  {
    title: '5. Stämmobeslut',
    description: 'Solceller på taket kräver vanligtvis beslut på föreningsstämma.',
    details: [
      'Solcellsinstallation räknas normalt som väsentlig förändring (enkel majoritet räcker ofta)',
      'Formulera tydligt beslutsförslag med budget och tidsplan',
      'Inkludera offertjämförelse och ekonomisk kalkyl i handlingarna',
      'Protokollför beslutet noggrant',
    ],
    tip: 'Kontrollera era stadgar — vissa föreningar kräver kvalificerad majoritet för större investeringar.',
  },
  {
    title: '6. Välj installatör',
    description: 'Välj den installatör som bäst matchar föreningens behov och budget.',
    details: [
      'Utvärdera offerterna baserat på pris, kvalitet och garantivillkor',
      'Kontrollera att installatören har F-skattsedel och ansvarsförsäkring',
      'Säkerställ att de söker grön teknik-avdraget åt er',
      'Skriv avtal med tydlig tidsplan och betalningsvillkor',
    ],
  },
  {
    title: '7. Installation och besiktning',
    description: 'Under installationen — håll koll på att allt går enligt plan.',
    details: [
      'Installation tar vanligtvis 1–3 veckor beroende på systemstorlek',
      'Installatören anmäler anslutning till elnätsbolaget',
      'Begär besiktningsprotokoll och driftsinstruktioner',
      'Säkerställ att garanti och försäkring är på plats',
    ],
  },
  {
    title: '8. Uppföljning och optimering',
    description: 'Följ upp produktionen och optimera föreningens energianvändning.',
    details: [
      'Övervaka produktionen via installatörens app eller webbportal',
      'Jämför faktisk produktion med uppskattad — avvikelser kan tyda på problem',
      'Optimera elanvändningen: kör tvättmaskiner och andra stora laster dagtid',
      'Utvärdera efter 12 månader och rapportera till medlemmarna',
    ],
    tip: 'Många installatörer erbjuder övervakningssystem som skickar larm vid avvikelser.',
  },
]
