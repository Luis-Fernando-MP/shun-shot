'use client'

import { memo } from 'react'

import { useThemeMonacoStore } from '../../store/themes-monaco.store'
import MonacoEditor from './MonacoEditor'
import MonacoFileName from './MonacoFileName'
import './style.scss'

const bg = (bg: string | undefined) => ({ style: { backgroundColor: bg } })

const Monaco = () => {
  const theme = useThemeMonacoStore(s => s.theme)

  return (
    <section className='monaco' {...bg(theme?.colors['editor.background'] ?? '')}>
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
