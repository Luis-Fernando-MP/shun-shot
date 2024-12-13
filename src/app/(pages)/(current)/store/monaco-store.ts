import { create } from 'zustand'

type LineNumbersOption = 'on' | 'off' | 'relative' | 'interval'
type CursorStyle = 'block' | 'line' | 'underline' | 'phase'
type wordWrap = 'off' | 'on' | 'bounded' | 'wordWrapColumn'
type AutoIndent = 'none' | 'keep' | 'brackets' | 'advanced' | 'full'

type Store = {
  language: string
  theme: string
  fontSize: number
  tabSize: number
  lineNumbers: LineNumbersOption
  minimap: boolean
  cursorStyle: CursorStyle
  wordWrap: wordWrap
  // Nivel de indentación automática
  autoIndent: AutoIndent
  refIde: any

  setLanguage: (language: string) => void
  setTheme: (theme: string) => void
  setFontSize: (fontSize: number) => void
  setTabSize: (tabSize: number) => void
  setLineNumbers: (lineNumbers: LineNumbersOption) => void
  setMinimap: (minimap: boolean) => void
  setCursorStyle: (cursorStyle: CursorStyle) => void
  setWordWrap: (wordWrap: wordWrap) => void
  setAutoIndent: (autoIndent: AutoIndent) => void
  setRefIde: (refIde: any) => void
}

export const useMonacoStore = create<Store>(set => ({
  language: 'javascript',
  theme: 'vs-dark',
  fontSize: 16,
  tabSize: 2,
  lineNumbers: 'relative',
  minimap: false,
  cursorStyle: 'line',
  wordWrap: 'off',
  autoIndent: 'advanced',
  refIde: null,

  // Métodos para actualizar el estado
  setLanguage: language => set({ language }),
  setTheme: theme => set({ theme }),
  setFontSize: fontSize => set({ fontSize }),
  setTabSize: tabSize => set({ tabSize }),
  setLineNumbers: lineNumbers => set({ lineNumbers }),
  setMinimap: minimap => set({ minimap }),
  setCursorStyle: cursorStyle => set({ cursorStyle }),
  setWordWrap: wordWrap => set({ wordWrap }),
  setAutoIndent: autoIndent => set({ autoIndent }),
  setRefIde: refIde => set({ refIde })
}))
