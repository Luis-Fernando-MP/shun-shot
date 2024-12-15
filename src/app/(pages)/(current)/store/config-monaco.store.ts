import { monacoFonts } from '@/shared/fonts/monaco-fonts'
import { create } from 'zustand'

type LineNumbersOption = 'on' | 'off' | 'relative' | 'interval'
type CursorStyle = 'block' | 'line' | 'underline' | 'phase'
type wordWrap = 'off' | 'on' | 'bounded' | 'wordWrapColumn'
type AutoIndent = 'none' | 'keep' | 'brackets' | 'advanced' | 'full'

type Store = {
  language: string
  fontSize: number
  fontFamily: string
  tabSize: number
  lineNumbers: LineNumbersOption
  minimap: boolean
  cursorStyle: CursorStyle
  wordWrap: wordWrap
  // Nivel de indentación automática
  autoIndent: AutoIndent
  refIde: any
  fileName: string

  setLanguage: (language: string) => void
  setFontSize: (fontSize: number) => void
  setTabSize: (tabSize: number) => void
  setFontFamily: (fontFamily: string) => void
  setLineNumbers: (lineNumbers: LineNumbersOption) => void
  setMinimap: (minimap: boolean) => void
  setCursorStyle: (cursorStyle: CursorStyle) => void
  setWordWrap: (wordWrap: wordWrap) => void
  setAutoIndent: (autoIndent: AutoIndent) => void
  setRefIde: (refIde: any) => void
  setFileName: (fileName: any) => void
}

export const useMonacoStore = create<Store>(set => ({
  language: 'javascript',
  fontSize: 16,
  tabSize: 2,
  fontFamily: monacoFonts.monospace.var,
  lineNumbers: 'relative',
  minimap: false,
  cursorStyle: 'line',
  wordWrap: 'off',
  autoIndent: 'advanced',
  refIde: null,
  fileName: 'code-scape',

  // Métodos para actualizar el estado
  setLanguage: language => set({ language }),
  setFontSize: fontSize => set({ fontSize }),
  setTabSize: tabSize => set({ tabSize }),
  setFontFamily: fontFamily => set({ fontFamily }),
  setLineNumbers: lineNumbers => set({ lineNumbers }),
  setMinimap: minimap => set({ minimap }),
  setCursorStyle: cursorStyle => set({ cursorStyle }),
  setWordWrap: wordWrap => set({ wordWrap }),
  setAutoIndent: autoIndent => set({ autoIndent }),
  setRefIde: refIde => set({ refIde }),
  setFileName: fileName => set({ fileName })
}))
