import { newKey } from '@/shared/key'
import IconButton from '@/shared/ui/IconButton'
import type { FC } from 'react'

import useMonacoStore from '../../store/monaco.store'
import useMonacoBasicOptionsStore from '../../store/monacoBasicOptions.store'
import MinimapPreference from './preferences/MinimapPreference'
import ScrollPreference from './preferences/ScrollPreference'
import StickyScrollPreference from './preferences/StickyScrollPreference'

const SetterMonacoPreferences: FC = () => {
  const { showLanguageIcon, setShowLanguageIcon } = useMonacoBasicOptionsStore()
  const {
    lineNumbers,
    minimap,
    fontLigatures,
    wordWrap,
    wordWrapColumn,
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
    overviewRulerLanes,
    overviewRulerBorder,
    roundedSelection,
    renderFinalNewline,
    renderControlCharacters,
    smoothScrolling,
    setLineNumbers,
    setMinimap,
    setFontLigatures,
    setWordWrap,
    setWordWrapColumn,
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
    setMatchBrackets,
    setOverviewRulerLanes,
    setOverviewRulerBorder,
    setRoundedSelection,
    setRenderFinalNewline,
    setRenderControlCharacters,
    setSmoothScrolling
  } = useMonacoStore()

  return (
    <>
      <div className='paragraph'>
        <h3 className='paragraph-highlight'># Shum shot's:</h3>
      </div>

      <div className='monacoPreferences-section'>
        <h5 className='paragraph-emphasis'>Mostrar icono del lenguaje</h5>
        <div className='monacoPreferences-switch'>
          {[true, false].map(style => (
            <IconButton key={newKey()} onClick={() => setShowLanguageIcon(style)} active={showLanguageIcon === style}>
              {style ? 'On' : 'Off'}
            </IconButton>
          ))}
        </div>
      </div>

      {/* Visual */}

      <div className='paragraph'>
        <h3 className='paragraph-highlight'># Visual:</h3>
      </div>

      <div className='monacoPreferences-section'>
        <h5 className='paragraph-emphasis'>Margen de glyph</h5>
        <span className='paragraph-normal'>Mostrar iconos en el margen de glyph.</span>
        <div className='monacoPreferences-switch'>
          {[true, false].map(style => (
            <IconButton key={newKey()} onClick={() => setGlyphMargin(style)} active={glyphMargin === style}>
              {style ? 'On' : 'Off'}
            </IconButton>
          ))}
        </div>
      </div>

      <div className='monacoPreferences-section'>
        <h5 className='paragraph-emphasis'>Validación de código</h5>
        <span className='paragraph-normal'>
          Resalta los errores de sintaxis <i className='paragraph-link'>soportados por monaco.</i>
        </span>
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
        <h5 className='paragraph-emphasis'>Números de línea</h5>
        <div className='monacoPreferences-switch'>
          {['on', 'off', 'relative', 'interval'].map(style => (
            <IconButton key={newKey()} onClick={() => setLineNumbers(style as any)} active={lineNumbers === style}>
              {style}
            </IconButton>
          ))}
        </div>
      </div>

      <div className='monacoPreferences-section'>
        <h5 className='paragraph-emphasis'>Salto de línea</h5>
        <span className='paragraph-normal'>
          Permite ajustar el salto de línea de las palabras para mejorar la visualización del código.
          <br />
          - On: siempre
          <br />
          - Off: nunca
          <br />
          - WordWrapColumn: ajustar por columna
          <br />- Bounded: ajustar por columna y límite
        </span>
        <div className='monacoPreferences-switch'>
          {['on', 'off', 'wordWrapColumn', 'bounded'].map(style => (
            <IconButton key={newKey()} onClick={() => setWordWrap(style as any)} active={wordWrap === style}>
              {style}
            </IconButton>
          ))}
        </div>
      </div>

      <div className='monacoPreferences-section'>
        <h5 className='paragraph-emphasis'>Columna de salto de línea</h5>
        <span className='paragraph-normal'>
          Limita el ancho de las líneas para dar el salto de línea en el ancho especificado.{' '}
          <i className='paragraph-link'>Depende de la configuración de salto de línea.</i>
        </span>
        <div className='monacoPreferences-switch'>
          {[50, 60, 70, 80, 90, 100, 110, 120].map(style => {
            const normal = 80
            return (
              <IconButton key={newKey()} onClick={() => setWordWrapColumn(style)} active={wordWrapColumn === style}>
                {style === normal ? 'Normal' : style}
              </IconButton>
            )
          })}
        </div>
      </div>

      <div className='monacoPreferences-section'>
        <h5 className='paragraph-emphasis'>Ajuste de saltos</h5>
        <span className='paragraph-normal'>
          Ajusta el sangrado de las palabras cuando se da un salto de línea. None: ninguno,{' '}
          <i className='paragraph-link'>Depende de la configuración de salto de línea.</i>
          <br />
          <br />- none: ninguno,
          <br />- indent: sangrado
          <br />- deepIndent: sangrado profundo.
        </span>
        <div className='monacoPreferences-switch'>
          {['none', 'indent', 'deepIndent'].map(style => (
            <IconButton key={newKey()} onClick={() => setWrappingIndent(style as any)} active={wrappingIndent === style}>
              {style}
            </IconButton>
          ))}
        </div>
      </div>

      <div className='monacoPreferences-section'>
        <h5 className='paragraph-emphasis'>Resaltado de línea</h5>
        <span className='paragraph-normal'>
          Resalta la línea actual en la que se encuentra el cursor,{' '}
          <i className='paragraph-link'>dependiendo del tema puede ser mas pronunciado o no.</i>
          <br />
          <br />- None: ninguno
          <br />- Gutter: solo el gutter
          <br />- Line: toda la linea
          <br />- Full: todo
        </span>
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

      {/* Tipografía */}

      <div className='paragraph'>
        <h3 className='paragraph-highlight'># Tipografía:</h3>
      </div>

      <div className='monacoPreferences-section'>
        <h5 className='paragraph-emphasis'>Espaciado entre letras</h5>
        <div className='monacoPreferences-switch'>
          {[-1, -0.5, 0, 0.5, 1, 2, 3].map(style => {
            const normal = 0
            return (
              <IconButton key={newKey()} onClick={() => setLetterSpacing(style)} active={letterSpacing === style}>
                {style === normal ? 'Normal' : style}
              </IconButton>
            )
          })}
        </div>
      </div>

      <div className='monacoPreferences-section'>
        <h5 className='paragraph-emphasis'>Ligaduras</h5>
        <span className='paragraph-normal'>
          Activa o desactiva la combinación de caracteres para mejorar la legibilidad.{' '}
          <i className='paragraph-link'>Depende de la tipografía empleada.</i>
        </span>
        <div className='monacoPreferences-switch'>
          {[true, false].map(style => (
            <IconButton key={newKey()} onClick={() => setFontLigatures(style as any)} active={fontLigatures === style}>
              {style ? 'On' : 'Off'}
            </IconButton>
          ))}
        </div>
      </div>

      <div className='monacoPreferences-section'>
        <h5 className='paragraph-emphasis'>Altura de las líneas</h5>
        <div className='monacoPreferences-switch'>
          {[18, 20, 22, 24, 26, 28].map(style => {
            const normal = 22
            const factor = (style / normal).toFixed(1)
            return (
              <IconButton key={newKey()} onClick={() => setLineHeight(style)} active={lineHeight === style}>
                {style === normal ? 'Normal' : `x${factor}`}
              </IconButton>
            )
          })}
        </div>
      </div>

      {/* Minimap */}
      <div className='monacoPreferences-section'>
        <MinimapPreference minimap={minimap} setMinimap={setMinimap} />
      </div>

      {/* Scroll */}

      <div className='monacoPreferences-section'>
        <ScrollPreference scrollbar={scrollbar} setScrollbar={setScrollbar} />
      </div>

      {/* Scroll sticky */}

      <div className='monacoPreferences-section'>
        <StickyScrollPreference stickyScroll={stickyScroll} setStickyScroll={setStickyScroll} />
      </div>

      {/*  */}

      <div className='paragraph'>
        <h3 className='paragraph-highlight'># Cursor:</h3>
      </div>

      <div className='monacoPreferences-section'>
        <h5 className='paragraph-emphasis'>Estilo de parpadeo</h5>
        <div className='monacoPreferences-switch'>
          {['blink', 'smooth', 'phase', 'expand', 'solid'].map(style => (
            <IconButton key={newKey()} onClick={() => setCursorBlinking(style as any)} active={cursorBlinking === style}>
              {style}
            </IconButton>
          ))}
        </div>
      </div>

      <div className='monacoPreferences-section'>
        <h5 className='paragraph-emphasis'>Estilo del cursor</h5>
        <div className='monacoPreferences-switch'>
          {['block', 'block-outline', 'underline', 'underline-thin', 'line', 'line-thin'].map(style => (
            <IconButton key={newKey()} onClick={() => setCursorStyle(style as any)} active={cursorStyle === style}>
              {style}
            </IconButton>
          ))}
        </div>
      </div>

      <div className='monacoPreferences-section'>
        <h5 className='paragraph-emphasis'>Cursor hover</h5>
        <span className='paragraph-normal'>Estilo del cursor al pasar el mouse por el editor.</span>
        <div className='monacoPreferences-switch'>
          {['default', 'copy', 'text'].map(style => (
            <IconButton key={newKey()} onClick={() => setMouseStyle(style as any)} active={mouseStyle === style}>
              {style}
            </IconButton>
          ))}
        </div>
      </div>

      <div className='monacoPreferences-section'>
        <h5 className='paragraph-emphasis'>Rótulo de resumen</h5>
        <span className='paragraph-normal'>Oculta el cursor en el rótulo derecho de resumen.</span>
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

      <div className='paragraph'>
        <h3 className='paragraph-highlight'># Editor:</h3>
      </div>

      <div className='monacoPreferences-section'>
        <h5 className='paragraph-emphasis'>Plegado de código</h5>
        <span className='paragraph-normal'>Si está activo, el editor plegará el código automáticamente.</span>
        <div className='monacoPreferences-switch'>
          {[true, false].map(style => (
            <IconButton key={newKey()} onClick={() => setFolding(style)} active={folding === style}>
              {style ? 'On' : 'Off'}
            </IconButton>
          ))}
        </div>
      </div>

      <div className='monacoPreferences-section'>
        <h5 className='paragraph-emphasis'>Scroll adicional</h5>
        <span className='paragraph-normal'>Amplia el desplazamiento más allá de la última línea del código.</span>
        <div className='monacoPreferences-switch'>
          {[true, false].map(style => (
            <IconButton key={newKey()} onClick={() => setScrollBeyondLastLine(style)} active={scrollBeyondLastLine === style}>
              {style ? 'On' : 'Off'}
            </IconButton>
          ))}
        </div>
      </div>

      <div className='monacoPreferences-section'>
        <h5 className='paragraph-emphasis'>Formateo automático</h5>
        <span className='paragraph-normal'>Formatea el código automáticamente al pegar.</span>
        <div className='monacoPreferences-switch'>
          {[true, false].map(style => (
            <IconButton key={newKey()} onClick={() => setFormatOnPaste(style)} active={formatOnPaste === style}>
              {style ? 'On' : 'Off'}
            </IconButton>
          ))}
        </div>
      </div>

      <div className='monacoPreferences-section'>
        <h5 className='paragraph-emphasis'>Formateo automático</h5>
        <span className='paragraph-normal'>Formatea el código automáticamente mientras se escribe.</span>
        <div className='monacoPreferences-switch'>
          {[true, false].map(style => (
            <IconButton key={newKey()} onClick={() => setFormatOnType(style)} active={formatOnType === style}>
              {style ? 'On' : 'Off'}
            </IconButton>
          ))}
        </div>
      </div>

      <div className='monacoPreferences-section'>
        <h5 className='paragraph-emphasis'>Coincidencia de paréntesis</h5>
        <span className='paragraph-normal'>
          Agrega Coincidencias de paréntesis al código al lado derecho del editor.
          <br />- Never: nunca,
          <br />- Near: cerca,
          <br />- Always: siempre.
        </span>
        <div className='monacoPreferences-switch'>
          {['never', 'near', 'always'].map(style => (
            <IconButton key={newKey()} onClick={() => setMatchBrackets(style as any)} active={matchBrackets === style}>
              {style}
            </IconButton>
          ))}
        </div>
      </div>

      <div className='monacoPreferences-section'>
        <h5 className='paragraph-emphasis'>Cierre de paréntesis</h5>
        <span className='paragraph-normal'>
          Cierra automáticamente paréntesis, corchetes y llaves.
          <br />- Always: siempre,
          <br />- BeforeWhitespace: antes de los espacios,
          <br />- LanguageDefined: definido por el lenguaje,
          <br />- Never: nunca.
        </span>
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
        <h5 className='paragraph-emphasis'>Cierre de comillas</h5>
        <span className='paragraph-normal'>
          - Always: siempre,
          <br />- BeforeWhitespace: antes de los espacios,
          <br />- LanguageDefined: definido por el lenguaje,
          <br />- Never: nunca.
        </span>
        <div className='monacoPreferences-switch'>
          {['always', 'beforeWhitespace', 'languageDefined', 'never'].map(style => (
            <IconButton key={newKey()} onClick={() => setAutoClosingQuotes(style as any)} active={autoClosingQuotes === style}>
              {style}
            </IconButton>
          ))}
        </div>
      </div>
    </>
  )
}

export default SetterMonacoPreferences
