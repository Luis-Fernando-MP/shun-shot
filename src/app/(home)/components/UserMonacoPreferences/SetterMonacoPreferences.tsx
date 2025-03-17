import { newKey } from '@/shared/key'
import IconButton from '@/shared/ui/IconButton'
import type { FC } from 'react'

import useMonacoStore from '../../store/monaco.store'

const SetterMonacoPreferences: FC = () => {
  const {
    lineNumbers,
    minimap,

    fontLigatures,
    wordWrap,

    fontSize,
    lineHeight,

    stickyScroll,

    cursorBlinking,
    mouseStyle,
    cursorStyle,
    wrappingIndent,
    folding,
    foldingStrategy,
    letterSpacing,

    autoClosingBrackets,
    autoClosingQuotes,
    autoIndent,
    accessibilitySupport,
    quickSuggestions,
    parameterHints,
    formatOnPaste,
    formatOnType,
    scrollBeyondLastLine,
    renderLineHighlight,
    renderWhitespace,

    scrollbar,

    bracketPairColorization,
    guides,
    glyphMargin,

    renderValidationDecorations,
    selectionHighlight,
    hideCursorInOverviewRuler,
    matchBrackets,

    setLineNumbers,
    setMinimap,
    setFontLigatures,
    setWordWrap,
    setFontSize,
    setLineHeight,
    setStickyScroll,
    setCursorBlinking,
    setMouseStyle,
    setCursorStyle,
    setWrappingIndent,
    setFolding,
    setFoldingStrategy,
    setLetterSpacing,
    setAutoClosingBrackets,
    setAutoClosingQuotes,
    setAutoIndent,
    setAccessibilitySupport,
    setQuickSuggestions,
    setParameterHints,
    setFormatOnPaste,
    setFormatOnType,
    setScrollBeyondLastLine,
    setRenderLineHighlight,
    setRenderWhitespace,
    setScrollbar,
    setBracketPairColorization,
    setGuides,
    setGlyphMargin,
    setRenderValidationDecorations,
    setSelectionHighlight,
    setHideCursorInOverviewRuler,
    setMatchBrackets
  } = useMonacoStore()

  return (
    <>
      <div className='paragraph'>
        <h4 className='paragraph-highlight'># Editor:</h4>
      </div>
      <div className='monacoPreferences-section'>
        <h4 className='paragraph-normal'>Números de linea</h4>
        <div className='monacoPreferences-switch'>
          {['on', 'off', 'relative', 'interval'].map(style => (
            <IconButton key={newKey()} onClick={() => setLineNumbers(style as any)} active={lineNumbers === style}>
              {style}
            </IconButton>
          ))}
        </div>
      </div>

      <div className='monacoPreferences-section'>
        <h4 className='paragraph-normal'>Minimap</h4>
        <div className='monacoPreferences-switch'>
          {[true, false].map(style => (
            <IconButton key={newKey()} onClick={() => setMinimap({ enabled: style })} active={minimap?.enabled === style}>
              {style ? 'On' : 'Off'}
            </IconButton>
          ))}
        </div>
      </div>

      <div className='monacoPreferences-section'>
        <h4 className='paragraph-normal'>Ligaduras</h4>
        <span className='paragraph-normal'>Muestra las ligaduras de las fuentes</span>
        <div className='monacoPreferences-switch'>
          {[true, false].map(style => (
            <IconButton key={newKey()} onClick={() => setFontLigatures(style as any)} active={fontLigatures === style}>
              {style ? 'On' : 'Off'}
            </IconButton>
          ))}
        </div>
      </div>

      <div className='monacoPreferences-section'>
        <h4 className='paragraph-normal'>Ajuste de palabras</h4>
        <span className='paragraph-normal'>Ajuste del salto de linea de las palabras</span>
        <div className='monacoPreferences-switch'>
          {['on', 'off', 'wordWrapColumn', 'bounded'].map(style => (
            <IconButton key={newKey()} onClick={() => setWordWrap(style as any)} active={wordWrap === style}>
              {style}
            </IconButton>
          ))}
        </div>
      </div>

      <div className='monacoPreferences-section'>
        <h4 className='paragraph-normal'>Espaciado entre letras</h4>
        <div className='monacoPreferences-switch'>
          {[0, 1, 2, 3].map(style => (
            <IconButton key={newKey()} onClick={() => setLetterSpacing(style)} active={letterSpacing === style}>
              {style}
            </IconButton>
          ))}
        </div>
      </div>

      <div className='monacoPreferences-section'>
        <h4 className='paragraph-normal'>Altura de las lineas</h4>
        <div className='monacoPreferences-switch'>
          {[22, 24, 26, 28, 3].map(style => (
            <IconButton key={newKey()} onClick={() => setLineHeight(style)} active={lineHeight === style}>
              {style}
            </IconButton>
          ))}
        </div>
      </div>

      <div className='monacoPreferences-section'>
        <h4 className='paragraph-normal'>Scroll sticky</h4>
        <span className='paragraph-normal'>Mantiene el scroll pegajoso</span>
        <div className='monacoPreferences-switch'>
          {[true, false].map(style => (
            <IconButton
              key={newKey()}
              onClick={() => setStickyScroll({ enabled: style })}
              active={stickyScroll?.enabled === style}
            >
              {style ? 'On' : 'Off'}
            </IconButton>
          ))}
        </div>
      </div>

      <div className='monacoPreferences-section'>
        <h4 className='paragraph-normal'>Cursor</h4>
        <span className='paragraph-normal'>Estilo del Parpadeo del cursor</span>
        <div className='monacoPreferences-switch'>
          {['blink', 'smooth', 'phase', 'expand', 'solid'].map(style => (
            <IconButton key={newKey()} onClick={() => setCursorBlinking(style as any)} active={cursorBlinking === style}>
              {style}
            </IconButton>
          ))}
        </div>
      </div>

      <div className='monacoPreferences-section'>
        <h4 className='paragraph-normal'>Estilo del mouse</h4>
        <div className='monacoPreferences-switch'>
          {['default', 'copy', 'text'].map(style => (
            <IconButton key={newKey()} onClick={() => setMouseStyle(style as any)} active={mouseStyle === style}>
              {style}
            </IconButton>
          ))}
        </div>
      </div>

      <div className='monacoPreferences-section'>
        <h4 className='paragraph-normal'>Estilo del cursor</h4>
        <div className='monacoPreferences-switch'>
          {['block', 'block-outline', 'underline', 'underline-thin', 'line', 'line-thin'].map(style => (
            <IconButton key={newKey()} onClick={() => setCursorStyle(style as any)} active={cursorStyle === style}>
              {style}
            </IconButton>
          ))}
        </div>
      </div>

      <div className='monacoPreferences-section'>
        <h4 className='paragraph-normal'>Ajuste de palabras</h4>
        <span className='paragraph-normal'>Ajusta el sangrado de las palabras cuando se ajusta la linea</span>
        <div className='monacoPreferences-switch'>
          {['none', 'same', 'indent', 'deepIndent'].map(style => (
            <IconButton key={newKey()} onClick={() => setWrappingIndent(style as any)} active={wrappingIndent === style}>
              {style}
            </IconButton>
          ))}
        </div>
      </div>

      <div className='monacoPreferences-section'>
        <h4 className='paragraph-normal'>Folding</h4>
        <span className='paragraph-normal'>Ajusta el sangrado de las palabras cuando se ajusta la linea</span>
        <div className='monacoPreferences-switch'>
          {[true, false].map(style => (
            <IconButton key={newKey()} onClick={() => setFolding(style)} active={folding === style}>
              {style ? 'On' : 'Off'}
            </IconButton>
          ))}
        </div>
      </div>

      <div className='monacoPreferences-section'>
        <h4 className='paragraph-normal'>Estrategia de plegado</h4>
        <span className='paragraph-normal'>Ajusta la estrategia de plegado</span>
        <div className='monacoPreferences-switch'>
          {['auto', 'indentation'].map(style => (
            <IconButton key={newKey()} onClick={() => setFoldingStrategy(style as any)} active={foldingStrategy === style}>
              {style}
            </IconButton>
          ))}
        </div>
      </div>

      <div className='monacoPreferences-section'>
        <h4 className='paragraph-normal'>Cierre de paréntesis</h4>
        <span className='paragraph-normal'>Cierra automáticamente paréntesis, corchetes y llaves</span>
        <div className='monacoPreferences-switch'>
          {['always', 'beforeWhitespace', 'languageDefined', 'never'].map(style => (
            <IconButton
              key={newKey()}
              onClick={() => setAutoClosingBrackets(style as any)}
              active={autoClosingBrackets === style}
            >
              {style}
            </IconButton>
          ))}
        </div>
      </div>

      <div className='monacoPreferences-section'>
        <h4 className='paragraph-normal'>Cierre de comillas</h4>
        <span className='paragraph-normal'>Cierra automáticamente comillas</span>
        <div className='monacoPreferences-switch'>
          {['always', 'beforeWhitespace', 'languageDefined', 'never'].map(style => (
            <IconButton key={newKey()} onClick={() => setAutoClosingQuotes(style as any)} active={autoClosingQuotes === style}>
              {style}
            </IconButton>
          ))}
        </div>
      </div>

      <div className='monacoPreferences-section'>
        <h4 className='paragraph-normal'>Sangrado automático</h4>
        <span className='paragraph-normal'>Sangra automáticamente el código</span>
        <div className='monacoPreferences-switch'>
          {['none', 'keep', 'brackets', 'advanced', 'full'].map(style => (
            <IconButton key={newKey()} onClick={() => setAutoIndent(style as any)} active={autoIndent === style}>
              {style}
            </IconButton>
          ))}
        </div>
      </div>

      <div className='monacoPreferences-section'>
        <h4 className='paragraph-normal'>Soporte de accesibilidad</h4>
        <span className='paragraph-normal'>Soporte de accesibilidad</span>
        <div className='monacoPreferences-switch'>
          {['auto', 'off', 'on'].map(style => (
            <IconButton
              key={newKey()}
              onClick={() => setAccessibilitySupport(style as any)}
              active={accessibilitySupport === style}
            >
              {style}
            </IconButton>
          ))}
        </div>
      </div>

      <div className='monacoPreferences-section'>
        <h4 className='paragraph-normal'>Formateo automático</h4>
        <span className='paragraph-normal'>Formatea el código al pegar</span>
        <div className='monacoPreferences-switch'>
          {[true, false].map(style => (
            <IconButton key={newKey()} onClick={() => setFormatOnPaste(style)} active={formatOnPaste === style}>
              {style ? 'On' : 'Off'}
            </IconButton>
          ))}
        </div>
      </div>

      <div className='monacoPreferences-section'>
        <h4 className='paragraph-normal'>Formateo automático</h4>
        <span className='paragraph-normal'>Formatea el código mientras se escribe</span>
        <div className='monacoPreferences-switch'>
          {[true, false].map(style => (
            <IconButton key={newKey()} onClick={() => setFormatOnType(style)} active={formatOnType === style}>
              {style ? 'On' : 'Off'}
            </IconButton>
          ))}
        </div>
      </div>

      <div className='monacoPreferences-section'>
        <h4 className='paragraph-normal'>Desplazamiento más allá de la última línea</h4>
        <span className='paragraph-normal'>Activa el desplazamiento más allá de la última línea</span>
        <div className='monacoPreferences-switch'>
          {[true, false].map(style => (
            <IconButton key={newKey()} onClick={() => setScrollBeyondLastLine(style)} active={scrollBeyondLastLine === style}>
              {style ? 'On' : 'Off'}
            </IconButton>
          ))}
        </div>
      </div>

      <div className='monacoPreferences-section'>
        <h4 className='paragraph-normal'>Resaltado de línea</h4>
        <span className='paragraph-normal'>Resalta la línea actual</span>
        <div className='monacoPreferences-switch'>
          {['none', 'gutter', 'line', 'full'].map(style => (
            <IconButton
              key={newKey()}
              onClick={() => setRenderLineHighlight(style as any)}
              active={renderLineHighlight === style}
            >
              {style}
            </IconButton>
          ))}
        </div>
      </div>

      <div className='monacoPreferences-section'>
        <h4 className='paragraph-normal'>Espacios en blanco</h4>
        <span className='paragraph-normal'>Resalta los espacios en blanco</span>
        <div className='monacoPreferences-switch'>
          {['none', 'boundary', 'selection', 'trailing', 'all'].map(style => (
            <IconButton key={newKey()} onClick={() => setRenderWhitespace(style as any)} active={renderWhitespace === style}>
              {style}
            </IconButton>
          ))}
        </div>
      </div>

      <div className='monacoPreferences-section'>
        <h4 className='paragraph-normal'>Barra de scroll</h4>
        <span className='paragraph-normal'>Mostrar las barras de scroll</span>
        <div className='monacoPreferences-switch'>
          {['auto', 'hidden', 'visible'].map(style => (
            <IconButton
              key={newKey()}
              onClick={() => setScrollbar({ vertical: style as any, horizontal: style as any })}
              active={scrollbar?.vertical === style && scrollbar?.horizontal === style}
            >
              {style}
            </IconButton>
          ))}
        </div>
      </div>

      <div className='monacoPreferences-section'>
        <h4 className='paragraph-normal'>Colorización de pares de paréntesis</h4>
        <span className='paragraph-normal'>Coloriza los pares de paréntesis</span>
        <div className='monacoPreferences-switch'>
          {[true, false].map(style => (
            <IconButton
              key={newKey()}
              onClick={() => setBracketPairColorization({ enabled: style })}
              active={bracketPairColorization?.enabled === style}
            >
              {style ? 'On' : 'Off'}
            </IconButton>
          ))}
        </div>
      </div>

      <div className='monacoPreferences-section'>
        <h4 className='paragraph-normal'>Guides</h4>
        <span className='paragraph-normal'>Muestra las guías</span>
        <div className='monacoPreferences-switch'>
          {[true, false].map(style => (
            <IconButton
              key={newKey()}
              onClick={() => setGuides({ indentation: style, highlightActiveIndentation: style })}
              active={guides?.indentation === style && guides?.highlightActiveIndentation === style}
            >
              {style ? 'On' : 'Off'}
            </IconButton>
          ))}
        </div>
      </div>

      <div className='monacoPreferences-section'>
        <h4 className='paragraph-normal'>Margen de glyph</h4>
        <span className='paragraph-normal'>Muestra el margen de glyph</span>
        <div className='monacoPreferences-switch'>
          {[true, false].map(style => (
            <IconButton key={newKey()} onClick={() => setGlyphMargin(style)} active={glyphMargin === style}>
              {style ? 'On' : 'Off'}
            </IconButton>
          ))}
        </div>
      </div>

      <div className='monacoPreferences-section'>
        <h4 className='paragraph-normal'>Resaltado de validación</h4>
        <span className='paragraph-normal'>Resalta la validación</span>
        <div className='monacoPreferences-switch'>
          {['editable', 'on', 'off'].map(style => (
            <IconButton
              key={newKey()}
              onClick={() => setRenderValidationDecorations(style as any)}
              active={renderValidationDecorations === style}
            >
              {style}
            </IconButton>
          ))}
        </div>
      </div>

      <div className='monacoPreferences-section'>
        <h4 className='paragraph-normal'>Resaltado de selección</h4>
        <span className='paragraph-normal'>Resalta la selección</span>
        <div className='monacoPreferences-switch'>
          {[true, false].map(style => (
            <IconButton key={newKey()} onClick={() => setSelectionHighlight(style)} active={selectionHighlight === style}>
              {style ? 'On' : 'Off'}
            </IconButton>
          ))}
        </div>
      </div>

      <div className='monacoPreferences-section'>
        <h4 className='paragraph-normal'>Ocultar el cursor en el rótulo de resumen</h4>
        <span className='paragraph-normal'>Ocultar el cursor en el rótulo de resumen</span>
        <div className='monacoPreferences-switch'>
          {[true, false].map(style => (
            <IconButton
              key={newKey()}
              onClick={() => setHideCursorInOverviewRuler(style)}
              active={hideCursorInOverviewRuler === style}
            >
              {style ? 'On' : 'Off'}
            </IconButton>
          ))}
        </div>
      </div>

      <div className='monacoPreferences-section'>
        <h4 className='paragraph-normal'>Coincidencia de paréntesis</h4>
        <span className='paragraph-normal'>Coincide los paréntesis</span>
        <div className='monacoPreferences-switch'>
          {['never', 'near', 'always'].map(style => (
            <IconButton key={newKey()} onClick={() => setMatchBrackets(style as any)} active={matchBrackets === style}>
              {style}
            </IconButton>
          ))}
        </div>
      </div>
    </>
  )
}

export default SetterMonacoPreferences
