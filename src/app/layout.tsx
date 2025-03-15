import Hydration from '@/shared/components/Hydration'
import Offline from '@/shared/components/Offline'
import { bodyFonts } from '@/shared/fonts/page-fonts'
import '@sass/config/global.scss'
import NextTopLoader from 'nextjs-toploader'
import type { JSX, ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'

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
      <body className={`${bodyFonts} antialiased`}>
        <NextTopLoader color='rgb(var(--tn-primary))' showSpinner={false} />
        <Offline />
        <Providers>
          <Hydration>{children}</Hydration>
        </Providers>
        <Toaster
          position='top-center'
          toastOptions={{
            className: 'toast',
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
export { metadata, viewport }
