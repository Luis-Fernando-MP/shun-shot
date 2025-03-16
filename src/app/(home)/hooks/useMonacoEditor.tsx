import { ThemeMonacoName, monacoThemes } from '@/shared/themes/monacoThemes'
import { Monaco, OnMount } from '@monaco-editor/react'
import { useEffect, useState } from 'react'

import useMonacoThemeStore from '../store/monacoTheme.store'
import useReferenceMonacoStore from '../store/referenceMonaco'

const exampleCode = `
const exampleCode = {
  javascript: {
    language: 'javascript',
    code: someJSCodeExample
  },
}`

const useMonacoEditor = () => {
  const { $editor, setMonaco, setEditor } = useReferenceMonacoStore()
  const [moveBoard, setMoveBoard] = useState(false)
  const { themeName } = useMonacoThemeStore()

  const handleWheel = (e: WheelEvent) => {
    if (e.ctrlKey) setMoveBoard(true)
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Control') setMoveBoard(true)
  }

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.key === 'Control') setMoveBoard(false)
  }

  useEffect(() => {
    const domNode = $editor?.getDomNode()
    if (!$editor || !domNode) return
    domNode.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      if (domNode) domNode.removeEventListener('wheel', handleWheel)
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [$editor])

  function loadAllThemes(monaco: Monaco) {
    Object.keys(monacoThemes).forEach(themeName => {
      monaco.editor.defineTheme(themeName, monacoThemes[themeName as ThemeMonacoName] as any)
    })
  }

  function handleBeforeMount(monaco: Monaco) {
    setMonaco(monaco)
    loadAllThemes(monaco)
  }

  const handleMount: OnMount = (editor, monaco) => {
    setEditor(editor)
    monaco.editor.setTheme(themeName)
  }

  return {
    moveBoard,
    exampleCode,
    handleMount,
    handleBeforeMount,
    themeName
  }
}

export default useMonacoEditor
