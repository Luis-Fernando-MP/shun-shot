'use client'

import Editor from '@monaco-editor/react'
import { useRef, useState } from 'react'

import { useMonacoStore } from '../../store/monaco-store'
import exampleCode from './exampleCode'
import './style.scss'

const minHeight = 200

const Monaco = () => {
  const { fontSize, setRefIde, language } = useMonacoStore()
  const $ide = useRef<HTMLElement>(null)

  const [editorHeight, setEditorHeight] = useState(minHeight)

  const handleMountIde = (editor: any) => {
    ;($ide as any).current = editor
    setRefIde(editor)
    const contentHeight = editor.getContentHeight() > 100 ? editor.getContentHeight() : minHeight
    setEditorHeight(contentHeight)
  }

  const handleChange = () => {
    const newHeight = ($ide?.current as any)?.getModel().getLineCount() * 19
    setEditorHeight(Math.max(newHeight, minHeight))
  }

  return (
    <section className='monaco'>
      <header className='monaco-header'>
        <div className='monaco-header__buttons'>
          <span className='red circle'></span>
          <span className='yellow circle'></span>
          <span className='green circle'></span>
        </div>
        <input type='text' value={'code-scape'} />
      </header>

      <Editor
        loading={<h5>Loading....</h5>}
        className='monaco-editor'
        height={editorHeight ?? 50}
        defaultLanguage={language}
        defaultValue={(exampleCode as any)[language]?.code ?? ''}
        theme='vs-dark'
        onMount={handleMountIde}
        onChange={handleChange}
        options={{
          automaticLayout: true,
          roundedSelection: true,
          fontSize,
          lineHeight: 19,
          scrollBeyondLastLine: false
        }}
      />
    </section>
  )
}

export default Monaco
