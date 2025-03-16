'use client'

import LabelText from '@/shared/ui/LabelText'
import LabeledInput from '@/shared/ui/LabeledInput'
import dynamic from 'next/dynamic'
import type { FC } from 'react'
import { Input } from 'react-field-sizing-content'

import useMonacoThemeStore from '../../store/monacoTheme.store'
import './style.scss'

const EditorComponent = dynamic(() => import('../EditorComponent'), { ssr: false })

const MonacoEditor: FC = () => {
  const { getCurrentTheme } = useMonacoThemeStore()

  const theme = getCurrentTheme()

  return (
    <article className='monacoEditor' style={{ backgroundColor: theme?.colors['editor.background'] }}>
      <header className='monacoEditor-header'>
        <div className='monacoEditor-spheres'>
          <span className='monacoEditor-sphere red' />
          <span className='monacoEditor-sphere yellow' />
          <span className='monacoEditor-sphere green' />
        </div>

        <div className='monacoEditor-field'>
          {/* <input
            defaultValue='Shum-shots'
            style={{ color: theme?.colors['editor.foreground'] }}
            aria-label='Nombre del archivo a descargar'
            autoComplete='off'
            spellCheck='false'
          /> */}
          <Input fieldSizing='content' defaultValue='Shum-shots' style={{ color: theme?.colors['editor.foreground'] }} />
          <p className='monacoEditor-extension'>.ts</p>
        </div>
      </header>
      <section className='monacoEditor-body'>
        <EditorComponent />
      </section>
    </article>
  )
}

export default MonacoEditor
