import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://code-scape.vercel.app'),
  title: "Shum shot's",
  description:
    'Pon a prueba y mejora tu velocidad de escritura con Key Flare, un clon de Monkeytype creado para fines educativos. ¡Compite contra ti mismo y domina el teclado!',
  keywords: [
    'Code Scape',
    'monkeytype',
    'test de velocidad de escritura',
    'mecanografía',
    'práctica de escritura',
    'teclado',
    'wpm',
    'cpm',
    'mejorar velocidad',
    'juegos de escritura'
  ],
  authors: [{ name: 'Luis MP', url: 'luisjp.vercel.app' }],
  creator: 'Luis MP',
  publisher: 'SHUN',
  icons: {
    icon: '/logo.webp'
  },
  openGraph: {
    title: 'Key Flare - Mejora tu velocidad de escritura',
    description:
      'Pon a prueba y mejora tu velocidad de escritura con Key Flare, un clon de Monkeytype creado para fines educativos. ¡Compite contra ti mismo y domina el teclado!',
    url: 'https://key-flare.vercel.app',
    siteName: 'Key Flare',
    images: [
      {
        url: '/opengraph.png',
        alt: 'Key Flare Logo',
        width: 1200,
        height: 630
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Key Flare - Mejora tu velocidad de escritura',
    description:
      'Pon a prueba y mejora tu velocidad de escritura con Key Flare, un clon de Monkeytype creado para fines educativos. ¡Compite contra ti mismo y domina el teclado!',
    images: [
      {
        url: '/opengraph.png',
        alt: 'Key Flare Logo'
      }
    ]
  }
}

export const viewport = {
  width: 'device-width',
  initialScale: 1
}
