import { Montserrat, Open_Sans, Raleway } from 'next/font/google'

export const family1 = Montserrat({
  subsets: ['latin'],
  weight: ['700', '600', '500'],
  variable: '--family1'
})

export const family2 = Open_Sans({
  subsets: ['latin'],
  weight: ['500', '400'],
  variable: '--family2'
})

export const family3 = Raleway({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--family3'
})

export const bodyFonts = `${family1.variable} ${family2.variable} ${family3.variable}`
