import Editor from '@monaco-editor/react'
import { type FC } from 'react'

import useMonacoEditor from '../../hooks/useMonacoEditor'
import useMonacoStore from '../../store/monaco.store'
import './style.scss'

const EditorComponent: FC = () => {
  const { moveBoard, exampleCode, handleMount, handleBeforeMount } = useMonacoEditor()
  const {
    lineNumbers,
    minimap,
    fontLigatures,
    wordWrap,
    fontSize,
    lineHeight,
    stickyScroll,
    cursorBlinking,
    mouseStyle,
    cursorStyle,
    wrappingIndent,
    folding,
    foldingStrategy,
    letterSpacing,

    autoClosingBrackets,
    autoClosingQuotes,
    autoIndent,
    accessibilitySupport,
    quickSuggestions,
    parameterHints,
    formatOnPaste,
    formatOnType,
    scrollBeyondLastLine,
    renderLineHighlight,
    renderWhitespace,
    scrollbar
  } = useMonacoStore()

  return (
    <Editor
      loading={<h5>Cargando....</h5>}
      className={`editorComponent ${moveBoard ? 'zoom' : ''}`}
      height={400}
      options={{
        lineNumbers,
        minimap: { enabled: minimap?.enabled },
        fontLigatures,
        wordWrap,
        fontSize,
        lineHeight,
        stickyScroll: { enabled: stickyScroll?.enabled },
        cursorBlinking,
        mouseStyle,
        cursorStyle,
        wrappingIndent,
        folding,
        foldingStrategy,
        letterSpacing,
        autoClosingBrackets,
        autoClosingQuotes,
        autoIndent,
        accessibilitySupport,
        quickSuggestions,
        parameterHints,
        formatOnPaste,
        formatOnType,
        scrollBeyondLastLine,
        renderLineHighlight,
        renderWhitespace,
        scrollbar
      }}
      defaultLanguage='javascript'
      defaultValue={exampleCode}
      theme={'vs-dark'}
      onMount={handleMount}
      beforeMount={handleBeforeMount}
    />
  )
}

export default EditorComponent
