import useBoardStore from '@/shared/components/Board/board.store'
import { SHUM_DEV } from '@/shared/constants'
import { ThemeMonacoName, monacoThemes } from '@/shared/themes/monacoThemes'
import { Monaco, OnMount } from '@monaco-editor/react'
import { editor } from 'monaco-editor'
import { useCallback, useEffect, useState } from 'react'

import useMonacoThemeStore from '../store/monacoTheme.store'
import useReferenceMonacoStore from '../store/referenceMonaco'

const exampleCode = `
import { themes } from 'shum-shot';

const platformName = 'Shum Shot dfsf';
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

// ✨ Explora y diviértete
`
const hoverMessage = `Te invito a visitar mi sitio web 👋: [luis-mp](${SHUM_DEV})`
const acceptedList = [
  'shum-shot',
  'Shum Shot',
  'Shots',
  'shot',
  'luigfmp@gmail',
  'luis-mp',
  'LUIS',
  'SHOTS',
  'SHOT',
  'SHUM',
  'SHUM-SHOT',
  'SHUM-SHOTS'
]

interface Props {
  typography: string
}

let previousDecorations: string[] = []

const useMonacoEditor = ({ typography }: Props) => {
  const { $editor, setMonaco, setEditor } = useReferenceMonacoStore()
  const [moveBoard, setMoveBoard] = useState(false)
  const { themeName } = useMonacoThemeStore()
  const { scale } = useBoardStore()

  useEffect(() => {
    const editorSuggestions = document.querySelector('[widgetid="editor.contrib.resizableContentHoverWidget"]') as HTMLElement
    if (!editorSuggestions) return
    const newScale = Math.min(1 / scale + 0.3, 1)
    editorSuggestions.style.transform = `scale(${newScale})`
    editorSuggestions.style.transformOrigin = 'left bottom'
  }, [scale])

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

  const closureUpdateDecorations = (editorModel: editor.ITextModel) => {
    const newDecorations: editor.IModelDeltaDecoration[] = []
    acceptedList.forEach((item: string): void => {
      const matches = editorModel.findMatches(item, false, false, true, null, false)
      matches.forEach(match => {
        newDecorations.push({
          range: match.range,
          options: {
            stickiness: 1,
            isWholeLine: false,
            inlineClassName: 'user-monaco-highlight',
            shouldFillLineOnLineBreak: false,
            blockDoesNotCollapse: true,
            showIfCollapsed: true,
            hoverMessage: {
              value: hoverMessage,
              isTrusted: true
            },
            glyphMarginClassName: 'user-monaco-icon'
          }
        })
      })
    })

    previousDecorations = editorModel.deltaDecorations(previousDecorations, newDecorations)
  }

  const updateDecorations = (monaco: Monaco) => {
    const editorModel = monaco.editor.getModels()[0]

    closureUpdateDecorations(editorModel)
    editorModel.onDidChangeContent(() => {
      closureUpdateDecorations(editorModel)
    })
  }

  const handleMount: OnMount = useCallback(
    (editor, monaco) => {
      setEditor(editor)
      monaco.editor.setTheme(themeName)
      updateDecorations(monaco)
    },
    [setEditor, themeName]
  )

  useEffect(() => {
    if (!$editor) return
    $editor.onMouseDown(e => {
      if (!e.target.element?.classList.contains('user-monaco-highlight') || !window) return
      window.open(SHUM_DEV, '_blank')
    })
  }, [$editor])

  useEffect(() => {
    const domNode = $editor?.getDomNode()
    if (!$editor || !domNode) return
    domNode.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      if (domNode) domNode.removeEventListener('wheel', handleWheel)
      $editor.dispose()
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
