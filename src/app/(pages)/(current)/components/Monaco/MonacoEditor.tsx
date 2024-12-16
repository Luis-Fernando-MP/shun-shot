'use client'

import Editor from '@monaco-editor/react'
import { memo, useRef, useState } from 'react'

import { useMonacoStore } from '../../store/config-monaco.store'
import exampleCode from './exampleCode'

const minHeight = 200

const MonacoEditor = (): JSX.Element => {
  const { fontSize, setRefIde, language, fontFamily } = useMonacoStore()

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
    <Editor
      loading={<h5>Loading....</h5>}
      className='monaco-editor delay animate-blurred-fade-in'
      height={editorHeight ?? minHeight}
      defaultLanguage={language}
      onChange={handleChange}
      defaultValue={(exampleCode as any)[language]?.code ?? ''}
      theme={'vs-dark'}
      onMount={handleMountIde}
      options={{
        automaticLayout: true,
        fontFamily,
        fontSize,
        lineHeight: 19
      }}
    />
  )
}

export default memo(MonacoEditor)
