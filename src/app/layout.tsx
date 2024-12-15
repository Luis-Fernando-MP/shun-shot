import { monacoClassFont } from '@/shared/fonts/monaco-fonts'
import { exclamationFont, paragraphFont, titleFont } from '@/shared/fonts/page-fonts'
import '@sass/config/global.scss'
import type { Metadata } from 'next'
import type { JSX, ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'

import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'
import Providers from './providers'
import './style.scss'

interface IRootLayout {
  children?: Readonly<ReactNode[]> | null | Readonly<ReactNode>
}

export const metadata: Metadata = {
  title: 'code scape',
  description: 'Some...',
  icons: {
    icon: [{ url: '/simple-logo.svg', media: '(prefers-color-scheme: light)' }]
  }
}

const RootLayout = async ({ children }: IRootLayout): Promise<JSX.Element> => {
  return (
    <html lang='es'>
      <body
        className={`${titleFont.variable} ${paragraphFont.variable} ${exclamationFont.variable} ${monacoClassFont}`}
      >
        <Providers>
          <Header className='root-header' />
          {children}
          <Footer className='root-footer' />
        </Providers>
        <Toaster
          position='top-center'
          toastOptions={{
            className: 'toast',
            position: 'bottom-left',
            style: {
              background: 'rgb(var(--bg-primary))',
              color: 'rgb(var(--fnt-primary))'
            }
          }}
        />
      </body>
    </html>
  )
}

export default RootLayout
