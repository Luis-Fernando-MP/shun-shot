'use server'

import '@sass/config/global.scss'
import type { JSX, ReactNode } from 'react'

import EditorRightStyles from './components/EditorRightStyles'
import EditorStyles from './components/EditorStyles'
import EditorTools from './components/EditorTools'
import './style.scss'

interface IRootLayout {
  children?: Readonly<ReactNode[]> | null | Readonly<ReactNode>
}

const RootLayout = async ({ children }: IRootLayout): Promise<JSX.Element> => {
  return (
    <main className='root-main editorPage'>
      <EditorStyles className='editorPage-styles animate-blurred-fade-in' />
      {children}
      <EditorTools className='editorPage-tools animate-blurred-fade-in' />
      <EditorRightStyles className='editorPage-rightStyles animate-blurred-fade-in' />
      {children}
    </main>
  )
}

export default RootLayout
