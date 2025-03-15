'use server'

import Footer from '@/app/components/Footer'
import FooterTools from '@/app/components/FooterTools'
import Header from '@/app/components/Header'
import '@sass/config/global.scss'
import type { JSX, ReactNode } from 'react'

interface IRootLayout {
  children?: Readonly<ReactNode[]> | null | Readonly<ReactNode>
}

const RootLayout = async ({ children }: IRootLayout): Promise<JSX.Element> => {
  return (
    <main className='root-main codePage'>
      <Header className='root-header' />
      {children}
      <FooterTools className='codePage-tools' />
      <Footer className='root-footer' />
    </main>
  )
}

export default RootLayout
