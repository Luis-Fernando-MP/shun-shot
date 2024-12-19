'use client'

import '@sass/config/global.scss'
import type { ReactNode } from 'react'

import EditorImageTools from './components/EditorImageTools'
import EditorStyles from './components/EditorStyles'
import './style.scss'

interface IRootLayout {
  children?: Readonly<ReactNode[]> | null | Readonly<ReactNode>
}

const RootLayout = ({ children }: IRootLayout) => {
  return (
    <main className='root-main editorPage'>
      <EditorStyles className='editorPage-styles animate-blurred-fade-in' />
      {children}
      <EditorImageTools className='editorPage-tools animate-blurred-fade-in' />
      {children}
    </main>
  )
}

export default RootLayout
