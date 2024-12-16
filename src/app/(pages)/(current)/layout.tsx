'use server'

import FooterTools from '@/app/components/FooterTools'
import '@sass/config/global.scss'
import type { JSX, ReactNode } from 'react'

interface IRootLayout {
  children?: Readonly<ReactNode[]> | null | Readonly<ReactNode>
}

const RootLayout = async ({ children }: IRootLayout): Promise<JSX.Element> => {
  return (
    <main className='root-main codePage'>
      {children}
      <FooterTools className='codePage-tools' />
    </main>
  )
}

export default RootLayout
