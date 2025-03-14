import { Exo_2, Oswald, Roboto } from 'next/font/google'

export const titleFont = Oswald({
  subsets: ['latin'],
  weight: ['700', '600', '500'],
  variable: '--familyTitle'
})

export const font1 = Roboto({
  subsets: ['latin'],
  weight: ['900', '700', '500', '400', '300'],
  variable: '--family1'
})

export const font2 = Exo_2({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '700'],
  variable: '--family2'
})

export const bodyFonts = `${titleFont.variable} ${font1.variable} ${font2.variable}`
