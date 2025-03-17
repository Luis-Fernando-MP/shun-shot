'use client'

import dynamic from 'next/dynamic'
import type { FC } from 'react'

import useMonacoThemeStore from '../../store/monacoTheme.store'
import ShotFileName from './ShotFileName'
import './style.scss'

const EditorComponent = dynamic(() => import('../EditorComponent'), { ssr: false })

const MonacoEditor: FC = () => {
  const { getCurrentTheme } = useMonacoThemeStore()

  const theme = getCurrentTheme()

  return (
    <article className='monacoEditor' style={{ backgroundColor: theme?.colors['editor.background'] }} id='monacoEditor'>
      <header className='monacoEditor-header'>
        <div className='monacoEditor-spheres'>
          <span className='monacoEditor-sphere red' />
          <span className='monacoEditor-sphere yellow' />
          <span className='monacoEditor-sphere green' />
        </div>

        <div className='monacoEditor-field'>
          <ShotFileName foreground={theme?.colors['editor.foreground']} />
        </div>
      </header>
      <EditorComponent />
    </article>
  )
}

export default MonacoEditor
