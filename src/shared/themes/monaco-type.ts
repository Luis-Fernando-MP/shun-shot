type ThemeRule = {
  background?: string
  foreground?: string
  fontStyle?: 'italic' | 'bold' | 'underline'
  token: string
}

type ThemeColors = {
  'editor.foreground': string
  'editor.background': string
  'editor.selectionBackground': string
  'editor.lineHighlightBackground': string
  'editorCursor.foreground': string
  'editorWhitespace.foreground': string
}

type Theme = {
  base: string
  inherit: boolean
  rules: ThemeRule[]
  colors: ThemeColors
}

export type ThemesMonaco = {
  base: string
  inherit: boolean
  rules: ThemeRule[]
  colors: ThemeColors
  default: Theme
}
