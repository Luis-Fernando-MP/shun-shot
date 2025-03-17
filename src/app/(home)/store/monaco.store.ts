import { monacoFonts } from '@/shared/fonts/monaco-fonts'
import { editor } from 'monaco-editor'
import { StateCreator, create } from 'zustand'

type Monaco = editor.IEditorOptions

interface Props {
  lineNumbers: Monaco['lineNumbers']
  minimap: Monaco['minimap']

  fontLigatures: Monaco['fontLigatures']
  wordWrap: Monaco['wordWrap']

  fontSize: Monaco['fontSize']
  lineHeight: Monaco['lineHeight']

  stickyScroll: Monaco['stickyScroll']

  cursorBlinking: Monaco['cursorBlinking']
  mouseStyle: Monaco['mouseStyle']
  cursorStyle: Monaco['cursorStyle']
  wrappingIndent: Monaco['wrappingIndent']
  folding: Monaco['folding']
  foldingStrategy: Monaco['foldingStrategy']
  letterSpacing: Monaco['letterSpacing']

  autoClosingBrackets: Monaco['autoClosingBrackets']
  autoClosingQuotes: Monaco['autoClosingQuotes']
  autoIndent: Monaco['autoIndent']
  accessibilitySupport: Monaco['accessibilitySupport']
  quickSuggestions: Monaco['quickSuggestions']
  parameterHints: Monaco['parameterHints']
  formatOnPaste: Monaco['formatOnPaste']
  formatOnType: Monaco['formatOnType']
  scrollBeyondLastLine: Monaco['scrollBeyondLastLine']
  renderLineHighlight: Monaco['renderLineHighlight']
  renderWhitespace: Monaco['renderWhitespace']

  scrollbar: Monaco['scrollbar']

  bracketPairColorization: Monaco['bracketPairColorization']
  guides: Monaco['guides']
  glyphMargin: Monaco['glyphMargin']

  renderValidationDecorations: Monaco['renderValidationDecorations']
  selectionHighlight: Monaco['selectionHighlight']
  hideCursorInOverviewRuler: Monaco['hideCursorInOverviewRuler']
  matchBrackets: Monaco['matchBrackets']

  setLineNumbers: (lineNumbers: Monaco['lineNumbers']) => void
  setMinimap: (minimap: Monaco['minimap']) => void
  setFontLigatures: (fontLigatures: Monaco['fontLigatures']) => void
  setWordWrap: (wordWrap: Monaco['wordWrap']) => void
  setFontSize: (fontSize: Monaco['fontSize']) => void
  setLineHeight: (lineHeight: Monaco['lineHeight']) => void
  setStickyScroll: (stickyScroll: Monaco['stickyScroll']) => void
  setCursorBlinking: (cursorBlinking: Monaco['cursorBlinking']) => void
  setMouseStyle: (mouseStyle: Monaco['mouseStyle']) => void
  setCursorStyle: (cursorStyle: Monaco['cursorStyle']) => void
  setWrappingIndent: (wrappingIndent: Monaco['wrappingIndent']) => void
  setFolding: (folding: Monaco['folding']) => void
  setFoldingStrategy: (foldingStrategy: Monaco['foldingStrategy']) => void
  setLetterSpacing: (letterSpacing: Monaco['letterSpacing']) => void
  setAutoClosingBrackets: (autoClosingBrackets: Monaco['autoClosingBrackets']) => void
  setAutoClosingQuotes: (autoClosingQuotes: Monaco['autoClosingQuotes']) => void
  setAutoIndent: (autoIndent: Monaco['autoIndent']) => void
  setAccessibilitySupport: (accessibilitySupport: Monaco['accessibilitySupport']) => void
  setQuickSuggestions: (quickSuggestions: Monaco['quickSuggestions']) => void
  setParameterHints: (parameterHints: Monaco['parameterHints']) => void
  setFormatOnPaste: (formatOnPaste: Monaco['formatOnPaste']) => void
  setFormatOnType: (formatOnType: Monaco['formatOnType']) => void
  setScrollBeyondLastLine: (scrollBeyondLastLine: Monaco['scrollBeyondLastLine']) => void
  setRenderLineHighlight: (renderLineHighlight: Monaco['renderLineHighlight']) => void
  setRenderWhitespace: (renderWhitespace: Monaco['renderWhitespace']) => void
  setScrollbar: (scrollbar: Monaco['scrollbar']) => void
  setBracketPairColorization: (bracketPairColorization: { enabled: boolean }) => void
  setGuides: (guides: { indentation: boolean; highlightActiveIndentation: boolean }) => void
  setGlyphMargin: (glyphMargin: boolean) => void
  setRenderValidationDecorations: (renderValidationDecorations: Monaco['renderValidationDecorations']) => void
  setSelectionHighlight: (selectionHighlight: Monaco['selectionHighlight']) => void
  setHideCursorInOverviewRuler: (hideCursorInOverviewRuler: Monaco['hideCursorInOverviewRuler']) => void
  setMatchBrackets: (matchBrackets: Monaco['matchBrackets']) => void
}

const state: StateCreator<Props> = set => ({
  lineNumbers: 'on', // Activa los números de línea

  minimap: {
    enabled: false,
    showSlider: 'always', // Muestra el control deslizante del minimapa
    showFoldingControls: 'always', // Muestra los controles de plegado en el minimapa
    showLineNumbers: 'always', // Muestra los números de línea en el minimapa
    showTokens: 'always', // Muestra los tokens en el minimapa
    showWhitespace: 'always', // Muestra los espacios en blanco en el minimapa
    showUnused: 'always', // Muestra las áreas no utilizadas en el minimapa
    showActiveLineIndicator: 'always' // Muestra el indicador de línea activa en el minimapa
  },

  fontLigatures: true, // Activa las ligaduras de fuente para mejorar la legibilidad
  wordWrap: 'off', // Desactiva el ajuste de línea

  fontSize: 14, // Tamaño de la fuente
  lineHeight: 22, // Altura de la línea para mejorar la legibilidad

  stickyScroll: {
    enabled: false
  },

  cursorBlinking: 'expand', // Parpadeo del cursor
  mouseStyle: 'default', // Estilo del cursor del ratón
  cursorStyle: 'line', // Estilo de cursor predeterminado
  wrappingIndent: 'same', // Ajuste de línea sin sangría

  folding: true, // Activa el plegado de código
  foldingStrategy: 'auto', // Estrategia de plegado automática
  letterSpacing: 0, // Espaciado entre letras predeterminado

  autoClosingBrackets: 'beforeWhitespace', // Cierra automáticamente paréntesis, corchetes y llaves
  autoClosingQuotes: 'beforeWhitespace', // Cierra automáticamente comillas
  autoIndent: 'brackets', // Indentación automática para llaves

  accessibilitySupport: 'off', // Desactiva el soporte de accesibilidad

  // Colorización de pares de paréntesis
  bracketPairColorization: {
    enabled: false
  },

  guides: {
    indentation: false, // Desactiva las guías de indentación
    highlightActiveIndentation: false // Desactiva el resaltado de la indentación activa
  },

  // Desactiva los glifos en el margen izquierdo
  glyphMargin: false,

  quickSuggestions: {
    other: false, // Desactiva sugerencias rápidas para otros elementos
    comments: false, // Desactiva sugerencias rápidas en comentarios
    strings: false // Desactiva sugerencias rápidas en cadenas de texto
  },

  parameterHints: {
    enabled: false // Desactiva las sugerencias de parámetros para funciones y métodos
  },

  formatOnPaste: true, // Desactiva el formateo automático al pegar
  formatOnType: true, // Desactiva el formateo automático mientras se escribe

  scrollBeyondLastLine: false, // Desplazamiento más allá de la última línea

  renderLineHighlight: 'none', // No resalta la línea actual
  renderWhitespace: 'none', // No muestra los espacios en blanco

  scrollbar: {
    vertical: 'hidden', // Muestra la barra de desplazamiento vertical
    horizontal: 'hidden', // Muestra la barra de desplazamiento horizontal
    useShadows: false, // Activa las sombras en la barra de desplazamiento
    verticalScrollbarSize: 10, // Tamaño de la barra de desplazamiento vertical
    horizontalScrollbarSize: 10 // Tamaño de la barra de desplazamiento horizontal
  },

  renderValidationDecorations: 'off', // No muestra las decoraciones de validación
  selectionHighlight: false, // Desactiva el resaltado de la selección
  hideCursorInOverviewRuler: true, // Oculta el cursor en el rótulo de vista general
  matchBrackets: 'never', // No muestra el resaltado de los paréntesis coincidentes

  setLineNumbers: lineNumbers => set({ lineNumbers }),
  setMinimap: minimap => set({ minimap }),
  setFontLigatures: fontLigatures => set({ fontLigatures }),
  setWordWrap: wordWrap => set({ wordWrap }),
  setFontSize: fontSize => set({ fontSize }),
  setLineHeight: lineHeight => set({ lineHeight }),
  setStickyScroll: stickyScroll => set({ stickyScroll }),
  setCursorBlinking: cursorBlinking => set({ cursorBlinking }),
  setMouseStyle: mouseStyle => set({ mouseStyle }),
  setCursorStyle: cursorStyle => set({ cursorStyle }),
  setWrappingIndent: wrappingIndent => set({ wrappingIndent }),
  setFolding: folding => set({ folding }),
  setFoldingStrategy: foldingStrategy => set({ foldingStrategy }),
  setLetterSpacing: letterSpacing => set({ letterSpacing }),
  setAutoClosingBrackets: autoClosingBrackets => set({ autoClosingBrackets }),
  setAutoClosingQuotes: autoClosingQuotes => set({ autoClosingQuotes }),
  setAutoIndent: autoIndent => set({ autoIndent }),
  setAccessibilitySupport: accessibilitySupport => set({ accessibilitySupport }),
  setQuickSuggestions: quickSuggestions => set({ quickSuggestions }),
  setParameterHints: parameterHints => set({ parameterHints }),
  setFormatOnPaste: formatOnPaste => set({ formatOnPaste }),
  setFormatOnType: formatOnType => set({ formatOnType }),
  setScrollBeyondLastLine: scrollBeyondLastLine => set({ scrollBeyondLastLine }),
  setRenderLineHighlight: renderLineHighlight => set({ renderLineHighlight }),
  setRenderWhitespace: renderWhitespace => set({ renderWhitespace }),
  setScrollbar: scrollbar => set({ scrollbar }),
  setBracketPairColorization: bracketPairColorization => set({ bracketPairColorization }),
  setGuides: guides => set({ guides }),
  setGlyphMargin: glyphMargin => set({ glyphMargin }),
  setRenderValidationDecorations: renderValidationDecorations => set({ renderValidationDecorations }),
  setSelectionHighlight: selectionHighlight => set({ selectionHighlight }),
  setHideCursorInOverviewRuler: hideCursorInOverviewRuler => set({ hideCursorInOverviewRuler }),
  setMatchBrackets: matchBrackets => set({ matchBrackets })
})

const useMonacoStore = create(state)

export default useMonacoStore
