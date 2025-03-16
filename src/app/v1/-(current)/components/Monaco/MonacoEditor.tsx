'use client'

import { themesData } from '@/shared/themes/loadStaticThemes'
import { useMonacoStore } from '@code-store/config-monaco.store'
import { useRefMonacoStore } from '@code-store/refMonaco.store'
import Editor, { useMonaco } from '@monaco-editor/react'
import { memo, useEffect, useRef, useState } from 'react'

import exampleCode from './exampleCode'

const minHeight = 200
const themesArr = Object.entries(themesData)

interface IMonacoEditor {
  theme: any
}

const MonacoEditor = ({ theme }: IMonacoEditor) => {
  const { fontSize, language, fontFamily } = useMonacoStore()
  const { setRefIde } = useRefMonacoStore()
  const monaco = useMonaco()

  const $ide = useRef<any>(null)
  const [editorHeight, setEditorHeight] = useState(minHeight) // Inicialización segura

  const handleMountIde = (editor: any) => {
    $ide.current = editor
    setRefIde(editor)
    const initialHeight = Math.max(editor.getContentHeight(), minHeight)
    setEditorHeight(initialHeight)

    editor.onDidContentSizeChange(() => {
      const newHeight = Math.max(editor.getContentHeight(), minHeight)
      setEditorHeight(newHeight)
    })
  }

  useEffect(() => {
    if (!monaco?.editor) return

    themesArr.forEach(([themeName, themeData]) => {
      monaco.editor.defineTheme(themeName, themeData as any)
    })
  }, [monaco]) // Dependencia simplificada

  useEffect(() => {
    if (!monaco?.editor || !theme) return
    monaco.editor.setTheme(theme.name)
  }, [theme, monaco])

  const handleChange = () => {
    if (!$ide.current) return // Verificación adicional
    const newHeight = $ide.current.getModel().getLineCount() * 19
    setEditorHeight(Math.max(newHeight, minHeight))
  }

  return (
    <Editor
      loading={<h5>Cargando....</h5>}
      className='monaco-editor delay animate-fade-in-up'
      height={editorHeight}
      defaultLanguage={language}
      onChange={handleChange}
      defaultValue={(exampleCode as any)[language]?.code ?? ''}
      theme={theme.name}
      onMount={handleMountIde}
      options={{
        automaticLayout: true,
        fontFamily,
        fontSize,
        lineHeight: 19,
        overviewRulerLanes: 0,
        renderValidationDecorations: 'off',
        lineNumbers: 'on',
        minimap: { enabled: false },
        scrollbar: {
          vertical: 'hidden',
          horizontal: 'hidden'
        },
        folding: false,
        renderLineHighlight: 'none',
        scrollBeyondLastLine: false,
        contextmenu: false,
        padding: { bottom: 10 },
        wordWrap: 'on',
        wordWrapColumn: 60,
        wrappingIndent: 'same'
      }}
    />
  )
}

export default memo(MonacoEditor)
