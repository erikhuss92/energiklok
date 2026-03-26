export interface Installer {
  id: string
  name: string
  city: string
  postnummer: string
  lat: number
  lng: number
  services: Service[]
  website: string
  phone: string
  description: string
  certifications: string[]
}

export type Service = 'solceller' | 'batteri' | 'laddbox' | 'varmepump'

export const SERVICE_LABELS: Record<Service, string> = {
  solceller: 'Solceller',
  batteri: 'Batterilager',
  laddbox: 'Laddbox',
  varmepump: 'Värmepump',
}

export const installers: Installer[] = [
  {
    id: 'svea-solar-stockholm',
    name: 'Svea Solar',
    city: 'Stockholm',
    postnummer: '111 22',
    lat: 59.3293,
    lng: 18.0686,
    services: ['solceller', 'batteri', 'laddbox'],
    website: 'https://sveasolar.se',
    phone: '08-123 45 67',
    description: 'En av Sveriges största solcellsinstallatörer med bred erfarenhet av BRF-installationer.',
    certifications: ['Certifierad solcellsinstallatör', 'Auktoriserad elinstallatör'],
  },
  {
    id: 'soltech-energy-malmo',
    name: 'Soltech Energy',
    city: 'Malmö',
    postnummer: '211 39',
    lat: 55.6049,
    lng: 13.0038,
    services: ['solceller', 'batteri'],
    website: 'https://soltechenergy.se',
    phone: '040-123 45 67',
    description: 'Specialiserade på stora solcellsinstallationer för BRF:er och kommersiella fastigheter.',
    certifications: ['Certifierad solcellsinstallatör'],
  },
  {
    id: 'elways-goteborg',
    name: 'Elways Energi',
    city: 'Göteborg',
    postnummer: '411 06',
    lat: 57.7089,
    lng: 11.9746,
    services: ['solceller', 'batteri', 'laddbox', 'varmepump'],
    website: 'https://elways.se',
    phone: '031-123 45 67',
    description: 'Helhetslösningar för energi — från solceller till värmepump och elbilsladdning.',
    certifications: ['Certifierad solcellsinstallatör', 'F-gasinstallatör'],
  },
  {
    id: 'solar-supply-uppsala',
    name: 'Solar Supply',
    city: 'Uppsala',
    postnummer: '753 09',
    lat: 59.8586,
    lng: 17.6389,
    services: ['solceller', 'batteri'],
    website: 'https://solarsupply.se',
    phone: '018-123 45 67',
    description: 'Lokal installatör med fokus på kvalitet och personlig service i Mälardalen.',
    certifications: ['Certifierad solcellsinstallatör'],
  },
  {
    id: 'kraftpojkarna-linkoping',
    name: 'Kraftpojkarna',
    city: 'Linköping',
    postnummer: '582 23',
    lat: 58.4108,
    lng: 15.6214,
    services: ['solceller', 'laddbox'],
    website: 'https://kraftpojkarna.se',
    phone: '013-123 45 67',
    description: 'Erfaren installatör i Östergötland med många BRF-referensprojekt.',
    certifications: ['Certifierad solcellsinstallatör', 'Auktoriserad elinstallatör'],
  },
  {
    id: 'greenely-sundsvall',
    name: 'Norrlands Sol & Energi',
    city: 'Sundsvall',
    postnummer: '852 30',
    lat: 62.3908,
    lng: 17.3069,
    services: ['solceller', 'batteri', 'varmepump'],
    website: 'https://norrlandssol.se',
    phone: '060-123 45 67',
    description: 'Specialiserade på solenergi i norrländska förhållanden. Expert på snölast och kyla.',
    certifications: ['Certifierad solcellsinstallatör', 'F-gasinstallatör'],
  },
  {
    id: 'heliox-lund',
    name: 'Heliox Solar',
    city: 'Lund',
    postnummer: '222 37',
    lat: 55.7047,
    lng: 13.1910,
    services: ['solceller', 'batteri', 'laddbox'],
    website: 'https://helioxsolar.se',
    phone: '046-123 45 67',
    description: 'Forskningsnära solcellsföretag med koppling till Lunds universitet.',
    certifications: ['Certifierad solcellsinstallatör'],
  },
  {
    id: 'voltum-orebro',
    name: 'Voltum Energi',
    city: 'Örebro',
    postnummer: '702 12',
    lat: 59.2753,
    lng: 15.2134,
    services: ['solceller', 'batteri', 'laddbox', 'varmepump'],
    website: 'https://voltum.se',
    phone: '019-123 45 67',
    description: 'Komplett energilösningar för villa och BRF i Mälardalen och Bergslagen.',
    certifications: ['Certifierad solcellsinstallatör', 'Auktoriserad elinstallatör', 'F-gasinstallatör'],
  },
]
