import { editor } from 'monaco-editor'
import { StateCreator, create } from 'zustand'

type Monaco = editor.IEditorOptions

interface Props {
  language: string
  typography: string

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
}

const state: StateCreator<Props> = set => ({
  language: 'javascript', // Lenguaje de programación predeterminado
  typography: 'monospace', // Tipografía utilizada en el editor

  lineNumbers: 'on', // Activa los números de línea (anteriormente desactivados para una apariencia más limpia)

  minimap: {
    enabled: true, // Activa el minimapa (anteriormente desactivado para una apariencia más limpia)
    // Otras opciones del minimapa pueden incluirse aquí
    showSlider: 'always',
    showFoldingControls: 'always',
    showLineNumbers: 'always',
    showTokens: 'always',
    showWhitespace: 'always',
    showUnused: 'always',
    showActiveLineIndicator: 'always'
  },

  fontLigatures: 'on', // Activa las ligaduras de fuente (anteriormente desactivadas para una apariencia más uniforme)
  wordWrap: 'off', // Desactiva el ajuste de línea (anteriormente activado para evitar el desplazamiento horizontal)

  fontSize: 14, // Tamaño de la fuente
  lineHeight: 22, // Altura de la línea para mejorar la legibilidad (anteriormente configurada para mejorar la legibilidad)

  stickyScroll: {
    enabled: true, // Activa el desplazamiento pegajoso (anteriormente desactivado para una experiencia más limpia)
    // Otras opciones de desplazamiento pegajoso pueden incluirse aquí
    scrollBeyondLastLine: true, // Activa el desplazamiento más allá de la última línea (anteriormente desactivado)
    renderLineHighlight: 'line', // Resalta la línea actual (anteriormente desactivado)
    renderWhitespace: 'boundary', // Resalta los espacios en blanco (anteriormente desactivado)
    scrollbar: {
      vertical: 'visible', // Muestra la barra de desplazamiento vertical (anteriormente oculta)
      horizontal: 'visible', // Muestra la barra de desplazamiento horizontal (anteriormente oculta)
      useShadows: true // Activa las sombras en la barra de desplazamiento (anteriormente desactivadas)
    }
  },

  cursorBlinking: 'blink', // Parpadeo del cursor (anteriormente configurado como suave)
  mouseStyle: 'default', // Estilo del cursor del ratón
  cursorStyle: 'line', // Estilo de cursor predeterminado (anteriormente configurado como más discreto)
  wrappingIndent: 'same', // Ajuste de línea sin sangría (anteriormente configurado con sangría)

  folding: true, // Activa el plegado de código (anteriormente desactivado)
  foldingStrategy: 'auto', // Estrategia de plegado automática (anteriormente basada en la indentación)
  letterSpacing: 0, // Espaciado entre letras predeterminado (anteriormente aumentado para mejorar la legibilidad)

  autoClosingBrackets: 'beforeWhitespace', // Cierra automáticamente paréntesis, corchetes y llaves (anteriormente siempre activado)
  autoClosingQuotes: 'beforeWhitespace', // Cierra automáticamente comillas (anteriormente siempre activado)
  autoIndent: 'brackets', // Indentación automática para llaves (anteriormente completa)

  accessibilitySupport: 'off', // Desactiva el soporte de accesibilidad (anteriormente activado para mejorar la experiencia de usuarios con discapacidades visuales)

  semanticHighlighting: {
    enabled: false // Desactiva el resaltado semántico (anteriormente activado para mejorar la legibilidad del código)
  },

  quickSuggestions: {
    other: false, // Desactiva sugerencias rápidas para otros elementos (anteriormente activadas)
    comments: false, // Desactiva sugerencias rápidas en comentarios (anteriormente activadas)
    strings: false // Desactiva sugerencias rápidas en cadenas de texto (anteriormente activadas)
  },

  parameterHints: {
    enabled: false // Desactiva las sugerencias de parámetros para funciones y métodos (anteriormente activadas)
  },

  formatOnPaste: false, // Desactiva el formateo automático al pegar (anteriormente activado)
  formatOnType: false, // Desactiva el formateo automático mientras se escribe (anteriormente activado)

  scrollBeyondLastLine: true, // Activa el desplazamiento más allá de la última línea (anteriormente desactivado)

  renderLineHighlight: 'none', // No resalta la línea actual (anteriormente configurado para mejorar la visibilidad)
  renderWhitespace: 'none', // No muestra los espacios en blanco (anteriormente configurado para una mejor comprensión del formato del código)

  scrollbar: {
    vertical: 'visible', // Muestra la barra de desplazamiento vertical (anteriormente oculta)
    horizontal: 'visible', // Muestra la barra de desplazamiento horizontal (anteriormente oculta)
    useShadows: true, // Activa las sombras en la barra de desplazamiento (anteriormente desactivadas)
    verticalScrollbarSize: 10, // Tamaño de la barra de desplazamiento vertical (anteriormente configurado como 0)
    horizontalScrollbarSize: 10 // Tamaño de la barra de desplazamiento horizontal (anteriormente configurado como 0)
  }
})

const useMonacoStore = create(state)

export default useMonacoStore
