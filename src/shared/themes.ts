export interface Theme {
  'bg-primary': string
  'bg-secondary': string
  'bg-tertiary': string
  'fnt-primary': string
  'fnt-secondary': string
  'fnt-active': string
  'tn-primary': string
  'tn-secondary': string
}

export type ThemeKeys = keyof typeof THEMES

export const THEMES: Record<string, Theme> = {
  DeepOcean: {
    'bg-primary': '10, 30, 50',
    'bg-secondary': '30, 60, 90',
    'bg-tertiary': '50, 90, 120',
    'fnt-primary': '220, 230, 240',
    'fnt-secondary': '180, 200, 220',
    'fnt-active': '100, 180, 220',
    'tn-primary': '80, 150, 180',
    'tn-secondary': '150, 200, 230'
  },
  AshMountains: {
    'bg-primary': '40, 40, 45',
    'bg-secondary': '60, 60, 65',
    'bg-tertiary': '80, 80, 85',
    'fnt-primary': '230, 230, 235',
    'fnt-secondary': '190, 190, 195',
    'fnt-active': '140, 140, 160',
    'tn-primary': '110, 110, 130',
    'tn-secondary': '180, 180, 200'
  },
  StarryNight: {
    'bg-primary': '10, 10, 20',
    'bg-secondary': '20, 20, 30',
    'bg-tertiary': '30, 30, 40',
    'fnt-primary': '240, 240, 250',
    'fnt-secondary': '128 128 147',
    'fnt-active': '0, 0, 0',
    'tn-primary': '150, 150, 190',
    'tn-secondary': '200, 200, 230'
  },
  // Claros
  'Aurora Day': {
    'bg-primary': '245, 245, 250',
    'bg-secondary': '230, 235, 250',
    'bg-tertiary': '210, 220, 240',
    'fnt-primary': '20, 20, 40',
    'fnt-secondary': '60, 90, 130',
    'fnt-active': '255, 255, 255',
    'tn-primary': '255, 100, 150',
    'tn-secondary': '200, 150, 180'
  },
  'Pastel Horizon': {
    'bg-primary': '250, 245, 255',
    'bg-secondary': '235, 225, 245',
    'bg-tertiary': '220, 210, 235',
    'fnt-primary': '40, 40, 70',
    'fnt-secondary': '80, 100, 150',
    'fnt-active': '255, 255, 255',
    'tn-primary': '250, 150, 200',
    'tn-secondary': '220, 120, 180'
  },
  Cloud: {
    'bg-primary': '240, 248, 255',
    'bg-secondary': '224, 224, 255',
    'bg-tertiary': '200, 220, 255',
    'fnt-primary': '10, 10, 25',
    'fnt-secondary': '50, 50, 100',
    'fnt-active': '255, 255, 255',
    'tn-primary': '0, 122, 204',
    'tn-secondary': '0, 100, 180'
  },
  Pearl: {
    'bg-primary': '255, 250, 250',
    'bg-secondary': '245, 240, 240',
    'bg-tertiary': '235, 230, 230',
    'fnt-primary': '40, 40, 40',
    'fnt-secondary': '90, 90, 90',
    'fnt-active': '255, 255, 255',
    'tn-primary': '255, 120, 130',
    'tn-secondary': '230, 100, 110'
  },
  Candy: {
    'bg-primary': '255, 200, 200',
    'bg-secondary': '255, 180, 220',
    'bg-tertiary': '240, 160, 210',
    'fnt-primary': '50, 20, 50',
    'fnt-secondary': '100, 40, 100',
    'fnt-active': '255, 255, 255',
    'tn-primary': '255, 90, 90',
    'tn-secondary': '255, 105, 180'
  },
  'Cotton Candy': {
    'bg-primary': '255, 200, 240',
    'bg-secondary': '255, 180, 220',
    'bg-tertiary': '255, 160, 200',
    'fnt-primary': '50, 30, 50',
    'fnt-secondary': '80, 50, 80',
    'fnt-active': '255, 255, 255',
    'tn-primary': '235, 130, 180',
    'tn-secondary': '220, 130, 180'
  },
  'Rose Quartz': {
    'bg-primary': '255, 192, 203',
    'bg-secondary': '255, 160, 180',
    'bg-tertiary': '255, 128, 150',
    'fnt-primary': '50, 30, 40',
    'fnt-secondary': '100, 60, 80',
    'fnt-active': '255, 255, 255',
    'tn-primary': '255, 100, 120',
    'tn-secondary': '255, 80, 100'
  },
  Lavender: {
    'bg-primary': '240, 230, 255',
    'bg-secondary': '220, 210, 245',
    'bg-tertiary': '200, 190, 235',
    'fnt-primary': '50, 30, 70',
    'fnt-secondary': '100, 80, 120',
    'fnt-active': '255, 255, 255',
    'tn-primary': '150, 100, 200',
    'tn-secondary': '200, 150, 230'
  },
  'Lavender Gray': {
    'bg-primary': '230, 230, 250',
    'bg-secondary': '210, 210, 230',
    'bg-tertiary': '190, 190, 210',
    'fnt-primary': '50, 30, 70',
    'fnt-secondary': '80, 60, 100',
    'fnt-active': '0, 0, 0',
    'tn-primary': '200, 180, 255',
    'tn-secondary': '180, 160, 220'
  },
  'Nebula Light': {
    'bg-primary': '255, 240, 255',
    'bg-secondary': '245, 220, 245',
    'bg-tertiary': '235, 200, 235',
    'fnt-primary': '30, 30, 50',
    'fnt-secondary': '60, 60, 80',
    'fnt-active': '255, 255, 255',
    'tn-primary': '200, 143, 200',
    'tn-secondary': '235, 135, 235'
  },
  'Soft Pink': {
    'bg-primary': '255, 200, 200',
    'bg-secondary': '255, 180, 180',
    'bg-tertiary': '255, 160, 160',
    'fnt-primary': '50, 30, 30',
    'fnt-secondary': '80, 50, 50',
    'fnt-active': '255, 255, 255',
    'tn-primary': '255, 150, 150',
    'tn-secondary': '220, 120, 120'
  },
  'Pastel Pink': {
    'bg-primary': '255, 230, 230',
    'bg-secondary': '250, 200, 200',
    'bg-tertiary': '240, 170, 170',
    'fnt-primary': '50, 30, 30',
    'fnt-secondary': '80, 50, 50',
    'fnt-active': '255, 255, 255',
    'tn-primary': '235, 160, 160',
    'tn-secondary': '220, 150, 150'
  },
  Almond: {
    'bg-primary': '255, 235, 205',
    'bg-secondary': '245, 225, 195',
    'bg-tertiary': '235, 215, 185',
    'fnt-primary': '80, 60, 40',
    'fnt-secondary': '120, 80, 60',
    'fnt-active': '255, 255, 255',
    'tn-primary': '210, 150, 100',
    'tn-secondary': '190, 140, 90'
  },
  Citrus: {
    'bg-primary': '250, 250, 200',
    'bg-secondary': '255, 200, 150',
    'bg-tertiary': '240, 150, 100',
    'fnt-primary': '50, 50, 50',
    'fnt-secondary': '100, 50, 0',
    'fnt-active': '255, 255, 255',
    'tn-primary': '200, 100, 0',
    'tn-secondary': '255, 165, 0'
  },
  'Sunny Meadow': {
    'bg-primary': '245, 255, 240',
    'bg-secondary': '230, 245, 220',
    'bg-tertiary': '210, 235, 200',
    'fnt-primary': '30, 40, 30',
    'fnt-secondary': '80, 100, 60',
    'fnt-active': '255, 255, 255',
    'tn-primary': '240, 170, 50',
    'tn-secondary': '180, 220, 90'
  },
  Emerald: {
    'bg-primary': '150, 220, 180',
    'bg-secondary': '120, 190, 150',
    'bg-tertiary': '90, 160, 120',
    'fnt-primary': '20, 50, 30',
    'fnt-secondary': '40, 80, 60',
    'fnt-active': '255, 255, 255',
    'tn-primary': '0, 150, 80',
    'tn-secondary': '0, 200, 120'
  },
  'Passionate Red': {
    'bg-primary': '255, 105, 180',
    'bg-secondary': '255, 85, 160',
    'bg-tertiary': '255, 65, 140',
    'fnt-primary': '50, 30, 50',
    'fnt-secondary': '80, 50, 80',
    'fnt-active': '255, 255, 255',
    'tn-primary': '255, 50, 100',
    'tn-secondary': '220, 40, 80'
  },
  'Sunrise Glow': {
    'bg-primary': '255, 200, 150',
    'bg-secondary': '255, 180, 120',
    'bg-tertiary': '255, 160, 90',
    'fnt-primary': '50, 30, 10',
    'fnt-secondary': '80, 50, 20',
    'fnt-active': '255, 255, 255',
    'tn-primary': '255, 100, 50',
    'tn-secondary': '220, 80, 40'
  },
  'Icy Blue': {
    'bg-primary': '180, 220, 255',
    'bg-secondary': '160, 200, 245',
    'bg-tertiary': '140, 180, 235',
    'fnt-primary': '20, 30, 50',
    'fnt-secondary': '40, 50, 70',
    'fnt-active': '255, 255, 255',
    'tn-primary': '0, 120, 240',
    'tn-secondary': '0, 100, 200'
  },
  'Marble White': {
    'bg-primary': '240, 240, 240',
    'bg-secondary': '230, 230, 230',
    'bg-tertiary': '220, 220, 220',
    'fnt-primary': '30, 30, 50',
    'fnt-secondary': '60, 60, 80',
    'fnt-active': '255, 255, 255',
    'tn-primary': '0, 0, 0',
    'tn-secondary': '80, 80, 80'
  },
  'Obsidian Black': {
    'bg-primary': '30, 30, 30',
    'bg-secondary': '20, 20, 20',
    'bg-tertiary': '10, 10, 10',
    'fnt-primary': '255, 255, 255',
    'fnt-secondary': '170, 170, 170',
    'fnt-active': '0, 0, 0',
    'tn-primary': '255, 255, 255',
    'tn-secondary': '200, 200, 200'
  },
  'Ebony Elegance': {
    'bg-primary': '50, 40, 30',
    'bg-secondary': '40, 30, 20',
    'bg-tertiary': '30, 20, 10',
    'fnt-primary': '255, 255, 255',
    'fnt-secondary': '170, 170, 170',
    'fnt-active': '0, 0, 0',
    'tn-primary': '250, 240, 230',
    'tn-secondary': '150, 140, 130'
  },
  // Oscuros
  'Twilight Purple': {
    'bg-primary': '25, 25, 35',
    'bg-secondary': '40, 40, 55',
    'bg-tertiary': '60, 60, 80',
    'fnt-primary': '230, 230, 240',
    'fnt-secondary': '160, 160, 180',
    'fnt-active': '255, 255, 255',
    'tn-primary': '140, 50, 240',
    'tn-secondary': '180, 100, 250'
  },
  'Dark Slate': {
    'bg-primary': '40, 40, 40',
    'bg-secondary': '50, 50, 50',
    'bg-tertiary': '60, 60, 60',
    'fnt-primary': '255, 255, 255',
    'fnt-secondary': '180, 180, 180',
    'fnt-active': '255, 255, 255',
    'tn-primary': '0, 120, 240',
    'tn-secondary': '0, 100, 200'
  },
  Carbon: {
    'bg-primary': '12, 12, 12',
    'bg-secondary': '22, 22, 22',
    'bg-tertiary': '32, 32, 32',
    'fnt-primary': '245, 245, 245',
    'fnt-secondary': '160, 160, 160',
    'fnt-active': '0, 0, 0',
    'tn-primary': '50, 230, 130',
    'tn-secondary': '40, 220, 130'
  },
  Circuit: {
    'bg-primary': '10, 15, 25',
    'bg-secondary': '20, 30, 40',
    'bg-tertiary': '45, 50, 65',
    'fnt-primary': '255, 20, 147',
    'fnt-secondary': '0, 255, 255',
    'fnt-active': '0, 0, 0',
    'tn-primary': '0, 255, 0',
    'tn-secondary': '0, 200, 0'
  },
  'Synth wave 84': {
    'bg-primary': '10, 10, 30',
    'bg-secondary': '20, 20, 40',
    'bg-tertiary': '30, 30, 50',
    'fnt-primary': '255, 0, 255',
    'fnt-secondary': '0, 240, 255',
    'fnt-active': '0, 0, 0',
    'tn-primary': '255, 135, 210',
    'tn-secondary': '220, 90, 160'
  },
  Nebula: {
    'bg-primary': '20, 20, 40',
    'bg-secondary': '30, 30, 60',
    'bg-tertiary': '40, 40, 80',
    'fnt-primary': '255, 220, 255',
    'fnt-secondary': '200, 100, 255',
    'fnt-active': '255, 255, 255',
    'tn-primary': '255, 0, 128',
    'tn-secondary': '220, 0, 110'
  },
  Eclipse: {
    'bg-primary': '5, 5, 5',
    'bg-secondary': '15, 15, 15',
    'bg-tertiary': '25, 25, 25',
    'fnt-primary': '230, 230, 230',
    'fnt-secondary': '160, 160, 160',
    'fnt-active': '0, 0, 0',
    'tn-primary': '255, 150, 50',
    'tn-secondary': '230, 130, 40'
  },
  'Forest Dawn': {
    'bg-primary': '25, 35, 25',
    'bg-secondary': '35, 45, 35',
    'bg-tertiary': '45, 55, 45',
    'fnt-primary': '190, 210, 160',
    'fnt-secondary': '140, 170, 110',
    'fnt-active': '0, 0, 0',
    'tn-primary': '230, 150, 50',
    'tn-secondary': '180, 130, 70'
  },
  'Forest Twilight': {
    'bg-primary': '30, 40, 30',
    'bg-secondary': '40, 60, 40',
    'bg-tertiary': '50, 80, 50',
    'fnt-primary': '210, 230, 210',
    'fnt-secondary': '150, 180, 150',
    'fnt-active': '0, 0, 0',
    'tn-primary': '0, 150, 50',
    'tn-secondary': '0, 200, 100'
  },
  Neon: {
    'bg-primary': '10, 10, 10',
    'bg-secondary': '20, 20, 20',
    'bg-tertiary': '30, 30, 30',
    'fnt-primary': '0, 255, 0',
    'fnt-secondary': '0, 200, 255',
    'fnt-active': '0, 0, 0',
    'tn-primary': '255, 255, 0',
    'tn-secondary': '0, 128, 255'
  },
  Aurora: {
    'bg-primary': '10, 20, 20',
    'bg-secondary': '20, 30, 30',
    'bg-tertiary': '30, 40, 40',
    'fnt-primary': '0, 255, 128',
    'fnt-secondary': '0, 192, 255',
    'fnt-active': '0, 0, 0',
    'tn-primary': '255, 0, 128',
    'tn-secondary': '0, 255, 200'
  },
  'Twilight Pink': {
    'bg-primary': '50, 10, 30',
    'bg-secondary': '70, 20, 40',
    'bg-tertiary': '90, 30, 50',
    'fnt-primary': '255, 255, 255',
    'fnt-secondary': '200, 200, 200',
    'fnt-active': '0, 0, 0',
    'tn-primary': '255, 100, 150',
    'tn-secondary': '220, 80, 120'
  },
  Velvet: {
    'bg-primary': '20, 10, 30',
    'bg-secondary': '30, 20, 40',
    'bg-tertiary': '40, 30, 50',
    'fnt-primary': '220, 180, 255',
    'fnt-secondary': '180, 140, 220',
    'fnt-active': '0, 0, 0',
    'tn-primary': '255, 105, 180',
    'tn-secondary': '255, 20, 147'
  },
  'Volcanic Magma': {
    'bg-primary': '55, 15, 15',
    'bg-secondary': '75, 25, 25',
    'bg-tertiary': '95, 35, 35',
    'fnt-primary': '230, 190, 110',
    'fnt-secondary': '210, 150, 70',
    'fnt-active': '0, 0, 0',
    'tn-primary': '230, 150, 50',
    'tn-secondary': '200, 100, 40'
  },
  Midnight: {
    'bg-primary': '10, 25, 50',
    'bg-secondary': '20, 40, 70',
    'bg-tertiary': '30, 60, 90',
    'fnt-primary': '180, 200, 255',
    'fnt-secondary': '150, 180, 230',
    'fnt-active': '255, 255, 255',
    'tn-primary': '50, 100, 255',
    'tn-secondary': '40, 80, 220'
  }
}
