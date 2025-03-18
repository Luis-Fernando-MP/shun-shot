import { newKey } from '@/shared/key'
import IconButton from '@/shared/ui/IconButton'
import type { FC } from 'react'

import useMonacoStore from '../../store/monaco.store'
import useMonacoBasicOptionsStore from '../../store/monacoBasicOptions.store'
import MinimapPreference from './preferences/MinimapPreference'

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

      <div className='paragraph'>
        <h3 className='paragraph-highlight'># Editor:</h3>
      </div>

      <div className='monacoPreferences-section'>
        <h5 className='paragraph-emphasis'>Cierre de paréntesis</h5>
        <span className='paragraph-normal'>
          Cierra automáticamente paréntesis, corchetes y llaves. Always: siempre, BeforeWhitespace: antes de los espacios,
          LanguageDefined: definido por el lenguaje, Never: nunca.
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
          Always: siempre, BeforeWhitespace: antes de los espacios, LanguageDefined: definido por el lenguaje, Never: nunca.
        </span>
        <div className='monacoPreferences-switch'>
          {['always', 'beforeWhitespace', 'languageDefined', 'never'].map(style => (
            <IconButton key={newKey()} onClick={() => setAutoClosingQuotes(style as any)} active={autoClosingQuotes === style}>
              {style}
            </IconButton>
          ))}
        </div>
      </div>

      {/*  */}

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

      {/*  */}
      <div className='monacoPreferences-section'>
        <MinimapPreference minimap={minimap} setMinimap={setMinimap} />
      </div>

      {/* SCROLL */}

      <div className='monacoPreferences-section'>
        <h5 className='paragraph-emphasis'>🔍 Barra de scroll</h5>
        <span className='paragraph-normal'>Muestra u oculta las barras de scroll vertical y horizontal en el editor.</span>
        <div className='monacoPreferences-switch'>
          <IconButton
            key={newKey()}
            onClick={() =>
              setScrollbar({
                vertical: scrollbar?.vertical === 'hidden' ? 'visible' : 'hidden',
                horizontal: scrollbar?.horizontal === 'hidden' ? 'visible' : 'hidden'
              })
            }
            active={scrollbar?.vertical === 'visible'}
          >
            {scrollbar?.vertical === 'visible' ? 'On' : 'Off'}
          </IconButton>
        </div>
        {scrollbar?.vertical === 'visible' && (
          <div className='monacoPreferences-subsection'>
            <h6 className='paragraph-emphasis'>Configuración de la Barra de Scroll</h6>
            <div className='monacoPreferences-switch'>
              <span className='paragraph-normal'>Usar sombras</span>
              <IconButton
                key={newKey()}
                onClick={() => setScrollbar({ ...scrollbar, useShadows: !scrollbar.useShadows })}
                active={scrollbar?.useShadows}
              >
                {scrollbar?.useShadows ? 'On' : 'Off'}
              </IconButton>
            </div>
            <div className='monacoPreferences-switch'>
              <span className='paragraph-normal'>Tamaño de la barra vertical</span>
              <input
                type='range'
                min='0'
                max='20'
                value={scrollbar?.verticalScrollbarSize}
                onChange={e => setScrollbar({ ...scrollbar, verticalScrollbarSize: parseInt(e.target.value) })}
              />
              {scrollbar?.verticalScrollbarSize}
            </div>
            <div className='monacoPreferences-switch'>
              <span className='paragraph-normal'>Tamaño de la barra horizontal</span>
              <input
                type='range'
                min='0'
                max='20'
                value={scrollbar?.horizontalScrollbarSize}
                onChange={e => setScrollbar({ ...scrollbar, horizontalScrollbarSize: parseInt(e.target.value) })}
              />
              {scrollbar?.horizontalScrollbarSize}
            </div>
          </div>
        )}
      </div>

      {/*  */}

      <div className='monacoPreferences-section'>
        <h5 className='paragraph-emphasis'>🔍 Scroll sticky</h5>
        <span className='paragraph-normal'>Mantiene el scroll pegajoso, lo que facilita la navegación por el código.</span>
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

      {/*  */}

      <div className='paragraph'>
        <h3 className='paragraph-highlight'>Guías:</h3>
      </div>

      <div className='monacoPreferences-section'>
        <h5 className='paragraph-emphasis'>📏 Guides</h5>
        <span className='paragraph-normal'>
          Muestra las guías de indentación, lo que puede ayudar a mantener el código organizado y legible.
        </span>
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

      {/*  */}

      <div className='paragraph'>
        <h3 className='paragraph-highlight'># Plegado y Corchetes:</h3>
      </div>

      <div className='monacoPreferences-section'>
        <h5 className='paragraph-emphasis'>🌈 Colorización de pares de paréntesis</h5>
        <span className='paragraph-normal'>
          Coloriza los pares de paréntesis, lo que puede ayudar a identificar bloques de código anidados.
        </span>
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
        <h5 className='paragraph-emphasis'>📑 Estrategia de plegado</h5>
        <span className='paragraph-normal'>
          Define la estrategia de plegado, que puede ser automática o basada en la indentación.
        </span>
        <div className='monacoPreferences-switch'>
          {['auto', 'indentation'].map(style => (
            <IconButton key={newKey()} onClick={() => setFoldingStrategy(style as any)} active={foldingStrategy === style}>
              {style}
            </IconButton>
          ))}
        </div>
      </div>

      {/*  */}

      <div className='paragraph'>
        <h3 className='paragraph-highlight'># Avanzado:</h3>
      </div>

      <div className='monacoPreferences-section'>
        <h5 className='paragraph-emphasis'>📐 Margen de glyph</h5>
        <span className='paragraph-normal'>
          Muestra el margen de glyph, que puede ser útil para identificar errores y advertencias en el código.
        </span>
        <div className='monacoPreferences-switch'>
          {[true, false].map(style => (
            <IconButton key={newKey()} onClick={() => setGlyphMargin(style)} active={glyphMargin === style}>
              {style ? 'On' : 'Off'}
            </IconButton>
          ))}
        </div>
      </div>

      <div className='monacoPreferences-section'>
        <h5 className='paragraph-emphasis'>🔍 Ocultar el cursor en el rótulo de resumen</h5>
        <span className='paragraph-normal'>
          Oculta el cursor en el rótulo de resumen, lo que puede ser útil para reducir distracciones.
        </span>
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
        <h5 className='paragraph-emphasis'>🔍 Resaltado de validación</h5>
        <span className='paragraph-normal'>
          Resalta las decoraciones de validación, lo que puede ayudar a identificar errores en el código.
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
        <h5 className='paragraph-emphasis'>🔍 Desplazamiento más allá de la última línea</h5>
        <span className='paragraph-normal'>
          Permite desplazarse más allá de la última línea del código, lo que puede ser útil para una mejor navegación.
        </span>
        <div className='monacoPreferences-switch'>
          {[true, false].map(style => (
            <IconButton key={newKey()} onClick={() => setScrollBeyondLastLine(style)} active={scrollBeyondLastLine === style}>
              {style ? 'On' : 'Off'}
            </IconButton>
          ))}
        </div>
      </div>
    </>
  )
}

export default SetterMonacoPreferences
