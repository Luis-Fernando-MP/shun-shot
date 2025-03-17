import { ThemeMonacoName, monacoThemes } from '@/shared/themes/monacoThemes'
import { Monaco, OnMount } from '@monaco-editor/react'
import { useCallback, useEffect, useState } from 'react'

import useMonacoThemeStore from '../store/monacoTheme.store'
import useReferenceMonacoStore from '../store/referenceMonaco'

const exampleCode = `
import { themes } from 'code-scape'

const platformName = 'Code Scape';
let userWelcomeMessage = \`👋 ¡Hola! Bienvenido a \${platformName}.\`;

function showWelcomeMessage() {
  console.log(userWelcomeMessage);
  console.log('✨ Funcionalidades principales:');
  console.log('➡️ Captura y ajusta tu código como imagen.');
  console.log('➡️ Personalización avanzada de temas y diseño.');
  console.log('➡️ Comparte y exporta tu código con estilo.');
}

function listAvailableThemes() {
  console.log('🎨 Temas disponibles:');
  themes.forEach((theme, index) => {
    console.log(\`🖌️ \${index + 1}. \${theme}\`);
  });
}

showWelcomeMessage();
listAvailableThemes();

  // ✨ Explora y diviértete`

interface Props {
  typography: string
}

const useMonacoEditor = ({ typography }: Props) => {
  const { $editor, setMonaco, setEditor } = useReferenceMonacoStore()
  const [moveBoard, setMoveBoard] = useState(false)
  const { themeName } = useMonacoThemeStore()

  const handleWheel = useCallback((e: WheelEvent) => {
    if (e.ctrlKey) setMoveBoard(true)
  }, [])

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Control') setMoveBoard(true)
  }, [])

  const handleKeyUp = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Control') setMoveBoard(false)
  }, [])

  const loadAllThemes = useCallback((monaco: Monaco) => {
    Object.keys(monacoThemes).forEach(themeName => {
      monaco.editor.defineTheme(themeName, monacoThemes[themeName as ThemeMonacoName] as any)
    })
  }, [])

  const handleBeforeMount = useCallback(
    (monaco: Monaco) => {
      setMonaco(monaco)
      loadAllThemes(monaco)
    },
    [setMonaco, loadAllThemes]
  )

  const handleMount: OnMount = useCallback(
    (editor, monaco) => {
      setEditor(editor)
      monaco.editor.setTheme(themeName)
    },
    [setEditor, themeName]
  )

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
  }, [$editor, handleWheel, handleKeyDown, handleKeyUp])

  useEffect(() => {
    if (!document.documentElement) return
    document.documentElement.style.setProperty('--monaco-font-family', typography)
  }, [typography])

  return {
    moveBoard,
    exampleCode,
    handleMount,
    handleBeforeMount,
    themeName,
    $editor
  }
}

export default useMonacoEditor
