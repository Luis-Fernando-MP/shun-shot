import { acl } from '@/shared/acl'
import Editor, { Monaco, OnMount } from '@monaco-editor/react'
import { type FC, useEffect, useRef, useState } from 'react'

const useMonacoEditor = () => {
  const exampleCode = `
  const exampleCode = {
    javascript: {
      language: 'javascript',
      code: someJSCodeExample
    },
  }`

  const monacoRef = useRef<Monaco | null>(null)
  const [editor, setEditor] = useState<any>(null)
  const [moveBoard, setMoveBoard] = useState(false)

  const handleWheel = (e: WheelEvent) => {
    if (e.ctrlKey) {
      setMoveBoard(true)
    }
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Control') {
      setMoveBoard(true)
    }
  }

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.key === 'Control') {
      setMoveBoard(false)
    }
  }

  useEffect(() => {
    const $editor = editor
    if (!$editor) return

    const domNode = $editor.getDomNode()
    if (domNode) {
      domNode.addEventListener('wheel', handleWheel, { passive: false })
      window.addEventListener('keydown', handleKeyDown)
      window.addEventListener('keyup', handleKeyUp)
    }

    return () => {
      if (domNode) {
        domNode.removeEventListener('wheel', handleWheel)
      }
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [editor])

  function handleBeforeMount(monaco: Monaco) {
    monacoRef.current = monaco
  }

  const handleMount: OnMount = (editor, monaco) => {
    setEditor(editor)
    console.log('editor', editor, 'monaco', monaco)
  }

  return {
    moveBoard,
    exampleCode,
    handleMount,
    handleBeforeMount
  }
}

export default useMonacoEditor
