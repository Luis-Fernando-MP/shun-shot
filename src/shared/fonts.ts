import { Exo_2, Inter, Poppins } from 'next/font/google'

export const GeologicaFont = Inter({
  subsets: ['latin'],
  weight: ['900', '800', '700'],
  variable: '--Geologica'
})

export const PoppinsFont = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--PoppinsFont'
})

export const Exo2Font = Exo_2({
  subsets: ['latin'],
  weight: ['200', '300', '400'],
  variable: '--Exo2Font'
})
