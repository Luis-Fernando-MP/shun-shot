import Hydration from '@/shared/components/Hydration'
import Offline from '@/shared/components/Offline'
import { monacoClassFonts } from '@/shared/fonts/monaco-fonts'
import { bodyFonts } from '@/shared/fonts/page-fonts'
import '@sass/config/global.scss'
import NextTopLoader from 'nextjs-toploader'
import type { JSX, ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'

import DetailBar from './components/DetailBar'
import HeaderBar from './components/HeaderBar'
import MainBar from './components/MainBar'
import './globals.css'
import { metadata, viewport } from './metadata'
import Providers from './providers'
import './style.scss'

interface IRootLayout {
  children?: Readonly<ReactNode[]> | null | Readonly<ReactNode>
}

const RootLayout = async ({ children }: IRootLayout): Promise<JSX.Element> => {
  return (
    <html lang='es'>
      <body className={`${bodyFonts} app antialiased`}>
        <NextTopLoader color='rgb(var(--tn-primary))' showSpinner={false} />
        <Offline />
        <Providers>
          <Hydration>
            <HeaderBar className='app-headerBar' />
            <DetailBar className='app-detail' />
            <MainBar className='app-mainBar' />
            <div className='app-gradient' />
            {children}
          </Hydration>
        </Providers>
        <Toaster position='top-center' toastOptions={{ className: 'toast' }} />
      </body>
    </html>
  )
}

export default RootLayout
export { metadata, viewport }
