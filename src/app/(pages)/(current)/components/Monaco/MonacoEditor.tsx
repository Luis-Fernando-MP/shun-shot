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

    // editor.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
    //   noSemanticValidation: true,
    //   noSyntaxValidation: true
    // })
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
      onValidate={p => {
        console.log(p)
      }}
      onMount={handleMountIde}
      beforeMount={bef => {
        console.log('bef', bef)
      }}
      options={{
        automaticLayout: true,
        fontFamily,
        fontSize,
        lineHeight: 19,
        overviewRulerLanes: 0,
        renderValidationDecorations: 'off',
        lineNumbers: 'on', // Sin números de línea
        minimap: { enabled: false }, // Desactiva el minimapa
        scrollbar: {
          vertical: 'hidden',
          horizontal: 'hidden'
        },
        folding: false, // Desactiva la funcionalidad de plegado
        renderLineHighlight: 'none', // Elimina el resaltado de líneas
        scrollBeyondLastLine: false, // Sin espacio adicional al final del archivo
        contextmenu: false, // Desactiva el menú contextual
        padding: { bottom: 10 },

        wordWrap: 'on',
        wordWrapColumn: 60,
        wrappingIndent: 'same'
      }}
    />
  )
}

export default memo(MonacoEditor)
