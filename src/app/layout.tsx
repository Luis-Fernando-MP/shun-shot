import { Exo2Font, GeologicaFont, PoppinsFont } from '@/shared/fonts'
import '@sass/config/global.scss'
import type { Metadata } from 'next'
import type { JSX, ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'

import Firefly from './components/Firefly'
import Options from './components/Options'
import Themes from './components/Themes'
import Providers from './providers'
import './style.scss'

interface IRootLayout {
  children?: Readonly<ReactNode[]> | null | Readonly<ReactNode>
}

export const metadata: Metadata = {
  title: 'Juli dev',
  description: 'Some...',
  icons: {
    icon: [
      { url: '/favicon.ico', media: '(prefers-color-scheme: light)' },
      { url: '/favicon-dark.ico', media: '(prefers-color-scheme: dark)' }
    ]
  }
}

const RootLayout = async ({ children }: IRootLayout): Promise<JSX.Element> => {
  return (
    <html lang='es'>
      <body
        className={`${GeologicaFont.variable} ${PoppinsFont.variable} ${Exo2Font.variable} grid`}
      >
        <Providers>
          <Options className='options item' />
          <main className='main item'>{children}</main>
          <Themes className='themes item' />
          <Firefly />
        </Providers>
        <Toaster
          position='top-center'
          toastOptions={{
            className: 'toast',
            position: 'bottom-left',
            style: {
              background: 'var(--bg-primary)',
              color: 'var(--fnt-primary)'
            }
          }}
        />
      </body>
    </html>
  )
}

export default RootLayout
