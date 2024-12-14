import {
  Anonymous_Pro,
  Azeret_Mono,
  DM_Mono,
  Fira_Code,
  Fragment_Mono,
  JetBrains_Mono,
  Sometype_Mono,
  Victor_Mono
} from 'next/font/google'

const sometype_Mono = Sometype_Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--monaco-sometype-mono'
})

const fragment_Mono = Fragment_Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--monaco-fragment-mono'
})

const jetBrains_Mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: '300',
  variable: '--monaco-jetbrains-mono'
})

const anonymous_Pro = Anonymous_Pro({
  subsets: ['latin'],
  weight: '400',
  variable: '--monaco-anonymous-pro'
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: '400',
  variable: '--monaco-fira-code'
})

const azeret_Mono = Azeret_Mono({
  subsets: ['latin'],
  weight: '300',
  variable: '--monaco-azeret-mono'
})

const dm_Mono = DM_Mono({
  subsets: ['latin'],
  weight: '300',
  variable: '--monaco-dm-mono'
})

const victor_Mono = Victor_Mono({
  subsets: ['latin'],
  weight: '300',
  variable: '--monaco-victor-mono'
})

export const monacoFonts = {
  monospace: {
    var: 'monospace'
  },
  victor_Mono: {
    var: 'var(--monaco-victor-mono)',
    font: victor_Mono
  },
  jetBrains_Mono: {
    var: 'var(--monaco-jetbrains-mono)',
    font: jetBrains_Mono
  },
  sometype_Mono: {
    var: 'var(--monaco-sometype-mono)',
    font: sometype_Mono
  },
  fragment_Mono: {
    var: 'var(--monaco-fragment-mono)',
    font: fragment_Mono
  },
  anonymous_Pro: {
    var: 'var(--monaco-anonymous-pro)',
    font: anonymous_Pro
  },

  firaCode: {
    var: 'var(--monaco-fira-code)',
    font: firaCode
  },
  azeret_Mono: {
    var: 'var(--monaco-azeret-mono)',
    font: azeret_Mono
  },
  dm_Mono: {
    var: 'var(--monaco-dm-mono)',
    font: dm_Mono
  }
}

export const monacoClassFont = `${monacoFonts.sometype_Mono?.font.variable} ${monacoFonts.fragment_Mono?.font.variable} ${monacoFonts.jetBrains_Mono?.font.variable} ${monacoFonts.anonymous_Pro?.font.variable} ${monacoFonts.firaCode?.font.variable} ${monacoFonts.azeret_Mono?.font.variable} ${monacoFonts.dm_Mono?.font.variable} ${monacoFonts.victor_Mono?.font.variable}
`
