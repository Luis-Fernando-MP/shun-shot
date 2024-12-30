'use client'

import { themesData } from '@/shared/themes/loadStaticThemes'
import Editor, { useMonaco } from '@monaco-editor/react'
import { memo, useEffect, useRef, useState } from 'react'

import { useMonacoStore } from '../../store/config-monaco.store'
import exampleCode from './exampleCode'

const minHeight = 200
const themesArr = Object.entries(themesData)

interface IMonacoEditor {
  theme: any
}

const MonacoEditor = ({ theme }: IMonacoEditor): JSX.Element => {
  const { fontSize, setRefIde, language, fontFamily } = useMonacoStore()
  const monaco = useMonaco()

  const $ide = useRef<any>(null)
  const [editorHeight, setEditorHeight] = useState(minHeight)

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
  }, [monaco])

  useEffect(() => {
    if (!monaco?.editor || !theme) return
    monaco.editor.setTheme(theme.name)
  }, [theme, monaco])

  const handleChange = () => {
    const newHeight = $ide.current?.getModel().getLineCount() * 19
    setEditorHeight(Math.max(newHeight, minHeight))
  }

  return (
    <Editor
      loading={<h5>Loading....</h5>}
      className='monaco-editor delay animate-fade-in-up'
      height={editorHeight ?? minHeight}
      defaultLanguage={language}
      onChange={handleChange}
      defaultValue={(exampleCode as any)[language]?.code ?? ''}
      theme={theme} // Tema inicial
      onMount={handleMountIde}
      options={{
        automaticLayout: true,
        fontFamily,
        fontSize,
        lineHeight: 19,
        overviewRulerLanes: 0,
        renderValidationDecorations: 'off',
        lineNumbers: 'on', // Muestra números de línea
        minimap: { enabled: false }, // Desactiva el minimapa
        scrollbar: {
          vertical: 'hidden',
          horizontal: 'hidden'
        },
        folding: false, // Desactiva el plegado de código
        renderLineHighlight: 'none', // Elimina el resaltado de líneas
        scrollBeyondLastLine: false, // Sin espacio adicional al final del archivo
        contextmenu: false, // Desactiva el menú contextual
        padding: { bottom: 10 },
        wordWrap: 'on', // Ajusta líneas automáticamente
        wordWrapColumn: 60,
        wrappingIndent: 'same'
      }}
    />
  )
}

export default memo(MonacoEditor)
