'use client'

import dynamic from 'next/dynamic'
import { memo } from 'react'

import { useThemeMonacoStore } from '../../store/themes-monaco.store'
import MonacoFileName from './MonacoFileName'
import './style.scss'

const bg = (bg: string | undefined) => ({ style: { backgroundColor: bg } })

const MonacoEditor = dynamic(() => import('./MonacoEditor'), {
  ssr: false,
  loading() {
    return <p>loading</p>
  }
})
const Monaco = () => {
  const theme = useThemeMonacoStore(s => s.theme)

  return (
    <section className='monaco' {...bg(theme?.colors['editor.background'] ?? '')} id='monacoEditor'>
      <header className='monaco-header'>
        <div className='monaco-header__buttons'>
          <span className='red circle'></span>
          <span className='yellow circle'></span>
          <span className='green circle'></span>
        </div>
        <MonacoFileName />
      </header>
      <MonacoEditor theme={theme} />
    </section>
  )
}

export default memo(Monaco)
