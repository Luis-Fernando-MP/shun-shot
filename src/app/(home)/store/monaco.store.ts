import { editor } from 'monaco-editor'
import { StateCreator, create } from 'zustand'

type Monaco = editor.IEditorOptions

interface Props {
  lineNumbers: Monaco['lineNumbers']
  minimap: Monaco['minimap']

  fontLigatures: Monaco['fontLigatures']
  wordWrap: Monaco['wordWrap']
  wordWrapColumn: Monaco['wordWrapColumn']

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

  overviewRulerLanes: Monaco['overviewRulerLanes']
  overviewRulerBorder: Monaco['overviewRulerBorder']
  roundedSelection: Monaco['roundedSelection']
  renderFinalNewline: Monaco['renderFinalNewline']
  renderControlCharacters: Monaco['renderControlCharacters']
  smoothScrolling: Monaco['smoothScrolling']

  setLineNumbers: (lineNumbers: Monaco['lineNumbers']) => void
  setMinimap: (minimap: Monaco['minimap']) => void
  setFontLigatures: (fontLigatures: Monaco['fontLigatures']) => void
  setWordWrap: (wordWrap: Monaco['wordWrap']) => void
  setWordWrapColumn: (wordWrapColumn: Monaco['wordWrapColumn']) => void
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

  setOverviewRulerLanes: (overviewRulerLanes: Monaco['overviewRulerLanes']) => void
  setOverviewRulerBorder: (overviewRulerBorder: Monaco['overviewRulerBorder']) => void
  setRoundedSelection: (roundedSelection: Monaco['roundedSelection']) => void
  setRenderFinalNewline: (renderFinalNewline: Monaco['renderFinalNewline']) => void
  setRenderControlCharacters: (renderControlCharacters: Monaco['renderControlCharacters']) => void
  setSmoothScrolling: (smoothScrolling: Monaco['smoothScrolling']) => void
}

const state: StateCreator<Props> = set => ({
  // Edición
  autoClosingBrackets: 'beforeWhitespace',
  autoClosingQuotes: 'beforeWhitespace',
  autoIndent: 'brackets',
  folding: true,
  formatOnPaste: true,
  formatOnType: true,
  matchBrackets: 'never',
  wordWrap: 'off',
  wordWrapColumn: 80,
  wrappingIndent: 'indent',

  // Tipografía
  lineNumbers: 'on',
  renderLineHighlight: 'none',
  renderWhitespace: 'none',
  selectionHighlight: false,
  letterSpacing: 0,

  // Visual
  fontLigatures: true,
  fontSize: 14,
  lineHeight: 22,
  overviewRulerLanes: 2, // carriles
  overviewRulerBorder: false, // Borde de la regla de vista general
  roundedSelection: true, // Selecciones con esquinas redondeadas
  renderFinalNewline: 'off', // Muestra la nueva línea final
  renderControlCharacters: false, // No muestra los caracteres de control

  // Minimap
  minimap: {
    enabled: false,
    autohide: false,
    side: 'right',
    size: 'proportional',
    showSlider: 'always',
    renderCharacters: true,
    maxColumn: 100,
    scale: 1
  },

  // Barras de Desplazamiento
  scrollbar: {
    vertical: 'hidden',
    horizontal: 'hidden',
    useShadows: false,
    handleMouseWheel: true,
    horizontalScrollbarSize: 10,
    verticalScrollbarSize: 10,
    ignoreHorizontalScrollbarInContentHeight: false
  },

  // Desplazamiento Pegajoso
  stickyScroll: {
    enabled: false,
    maxLineCount: 5,
    defaultModel: 'outlineModel',
    scrollWithEditor: true
  },

  // Cursor
  cursorBlinking: 'expand',
  mouseStyle: 'default',
  cursorStyle: 'line',

  // Indentación y Guías
  guides: {
    indentation: false,
    highlightActiveIndentation: false
  },

  // Plegado y Corchetes
  bracketPairColorization: {
    enabled: false
  },
  foldingStrategy: 'auto',

  // Avanzado
  // Margen y Validaciones
  smoothScrolling: true, // Desplazamiento suave

  glyphMargin: false,
  hideCursorInOverviewRuler: true,
  renderValidationDecorations: 'off',
  scrollBeyondLastLine: false,

  setLineNumbers: lineNumbers => set({ lineNumbers }),
  setMinimap: minimap => set({ minimap }),
  setFontLigatures: fontLigatures => set({ fontLigatures }),
  setWordWrap: wordWrap => set({ wordWrap }),
  setWordWrapColumn: wordWrapColumn => set({ wordWrapColumn }),
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
  setMatchBrackets: matchBrackets => set({ matchBrackets }),
  setOverviewRulerLanes: overviewRulerLanes => set({ overviewRulerLanes }),
  setOverviewRulerBorder: overviewRulerBorder => set({ overviewRulerBorder }),
  setRoundedSelection: roundedSelection => set({ roundedSelection }),
  setRenderFinalNewline: renderFinalNewline => set({ renderFinalNewline }),
  setRenderControlCharacters: renderControlCharacters => set({ renderControlCharacters }),
  setSmoothScrolling: smoothScrolling => set({ smoothScrolling })
})

const useMonacoStore = create(state)

export default useMonacoStore
