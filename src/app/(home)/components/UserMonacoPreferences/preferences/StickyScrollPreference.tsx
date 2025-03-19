import { newKey } from '@/shared/key'
import IconButton from '@/shared/ui/IconButton'
import { editor } from 'monaco-editor'
import type { FC } from 'react'

type Monaco = editor.IEditorOptions

interface Props {
  stickyScroll: Monaco['stickyScroll']
  setStickyScroll: (stickyScroll: Monaco['stickyScroll']) => void
}

const StickyScrollPreference: FC<Props> = ({ stickyScroll, setStickyScroll }) => {
  if (!stickyScroll) return null

  const handleChangeStickyScroll = (newProps: Partial<Monaco['stickyScroll']>) => {
    setStickyScroll({ ...stickyScroll, ...newProps })
  }

  const { enabled, maxLineCount, defaultModel, scrollWithEditor } = stickyScroll

  return (
    <>
      <h3 className='paragraph-highlight'># Scroll pegajoso:</h3>

      <div className='monacoPreferences-switch'>
        {[true, false].map(state => (
          <IconButton key={newKey()} onClick={() => handleChangeStickyScroll({ enabled: state })} active={enabled === state}>
            {state ? 'On' : 'Off'}
          </IconButton>
        ))}
      </div>

      {enabled && (
        <div className='monacoPreferences-subsection'>
          <div className='monacoPreferences-section'>
            <h5 className='paragraph-emphasis'>Máximo de líneas</h5>
            <span className='paragraph-normal'>Máximo de líneas que se mostrarán en el scroll pegajoso.</span>
            <div className='monacoPreferences-switch'>
              {[1, 2, 3, 5, 7, 8, 9].map(state => {
                const normal = 5
                return (
                  <IconButton
                    key={newKey()}
                    onClick={() => handleChangeStickyScroll({ maxLineCount: state })}
                    active={maxLineCount === state}
                  >
                    {state === normal ? 'Normal' : state}
                  </IconButton>
                )
              })}
            </div>
          </div>

          <div className='monacoPreferences-section'>
            <h5 className='paragraph-emphasis'>Modelo</h5>
            <span className='paragraph-normal'>
              - outlineModel: Muestra la estructura general (clases, funciones, variables).
              <br />
              <br /> - foldingProviderModel: Usa la información de plegado para las secciones.
              <br />
              <br /> - indentationModel: Utiliza la indentación para guiar en la estructura visual.
            </span>
            <div className='monacoPreferences-switch'>
              {['outlineModel', 'foldingProviderModel', 'indentationModel'].map(state => (
                <IconButton
                  key={newKey()}
                  onClick={() => handleChangeStickyScroll({ defaultModel: state as any })}
                  active={defaultModel === state}
                >
                  {state}
                </IconButton>
              ))}
            </div>
          </div>

          <div className='monacoPreferences-section'>
            <h5 className='paragraph-emphasis'>Desplazamiento con el editor</h5>
            <span className='paragraph-normal'>
              El scroll pegajoso se moverá cuando se desplace el editor horizontalmente.{' '}
              <i className='paragraph-link'>Requiere que el scroll horizontal esté activo.</i>
            </span>
            <div className='monacoPreferences-switch'>
              {[true, false].map(state => (
                <IconButton
                  key={newKey()}
                  onClick={() => handleChangeStickyScroll({ scrollWithEditor: state })}
                  active={scrollWithEditor === state}
                >
                  {state ? 'On' : 'Off'}
                </IconButton>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default StickyScrollPreference
