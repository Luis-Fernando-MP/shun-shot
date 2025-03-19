import { newKey } from '@/shared/key'
import IconButton from '@/shared/ui/IconButton'
import { editor } from 'monaco-editor'
import { type FC } from 'react'

type Monaco = editor.IEditorOptions

interface Props {
  minimap: Monaco['minimap']
  setMinimap: (minimap: Monaco['minimap']) => void
}

const MinimapPreference: FC<Props> = ({ minimap, setMinimap }) => {
  if (!minimap) return null

  const handleChangeMinimap = (newProps: Partial<Monaco['minimap']>) => {
    setMinimap({ ...minimap, ...newProps })
  }

  const { enabled, autohide, side, size, showSlider, renderCharacters, maxColumn, scale } = minimap

  return (
    <>
      <h3 className='paragraph-highlight'># Minimapa:</h3>

      <div className='monacoPreferences-switch'>
        {[true, false].map(state => (
          <IconButton key={newKey()} onClick={() => handleChangeMinimap({ enabled: state })} active={enabled === state}>
            {state ? 'On' : 'Off'}
          </IconButton>
        ))}
      </div>

      {minimap?.enabled && (
        <div className='monacoPreferences-subsection'>
          <div className='monacoPreferences-section'>
            <h5 className='paragraph-emphasis'>Ocultar minimapa</h5>
            <span className='paragraph-normal'>Si está activo, el minimapa se oculta cuando el mouse está sobre el editor.</span>
            <div className='monacoPreferences-switch'>
              {[true, false].map(state => (
                <IconButton key={newKey()} onClick={() => handleChangeMinimap({ autohide: state })} active={autohide === state}>
                  {state ? 'On' : 'Off'}
                </IconButton>
              ))}
            </div>
          </div>

          <div className='monacoPreferences-section'>
            <h5 className='paragraph-emphasis'>Posición del minimapa</h5>
            <span className='paragraph-normal'>Muestra el minimapa en el lado izquierdo o derecho del editor.</span>
            <div className='monacoPreferences-switch'>
              {['left', 'right'].map(state => (
                <IconButton key={newKey()} onClick={() => handleChangeMinimap({ side: state as any })} active={side === state}>
                  {state}
                </IconButton>
              ))}
            </div>
          </div>

          <div className='monacoPreferences-section'>
            <h5 className='paragraph-emphasis'>Modo de renderizado</h5>
            <span className='paragraph-normal'>
              Proporcional: el minimapa se ajusta al tamaño del editor. Fill: el minimapa ocupa todo el alto del editor.
            </span>
            <div className='monacoPreferences-switch'>
              {['proportional', 'fill'].map(state => (
                <IconButton key={newKey()} onClick={() => handleChangeMinimap({ size: state as any })} active={size === state}>
                  {state}
                </IconButton>
              ))}
            </div>
          </div>

          <div className='monacoPreferences-section'>
            <h5 className='paragraph-emphasis'>Control deslizante</h5>
            <span className='paragraph-normal'>
              Always: muestra el control deslizante en todo momento. Mouseover: muestra el control deslizante solo cuando el mouse
              está sobre el editor.
            </span>
            <div className='monacoPreferences-switch'>
              {['always', 'mouseover'].map(style => (
                <IconButton
                  key={newKey()}
                  onClick={() => handleChangeMinimap({ showSlider: style as any })}
                  active={showSlider === style}
                >
                  {style}
                </IconButton>
              ))}
            </div>
          </div>

          <div className='monacoPreferences-section'>
            <h5 className='paragraph-emphasis'>Representar caracteres</h5>
            <span className='paragraph-normal'>Representa el texto real en una línea (en lugar de bloques de color).</span>
            <div className='monacoPreferences-switch'>
              {[true, false].map(state => (
                <IconButton
                  key={newKey()}
                  onClick={() => handleChangeMinimap({ renderCharacters: state })}
                  active={renderCharacters === state}
                >
                  {state ? 'On' : 'Off'}
                </IconButton>
              ))}
            </div>
          </div>

          <div className='monacoPreferences-section'>
            <h5 className='paragraph-emphasis'>Columnas máximas</h5>
            <span className='paragraph-normal'>Limita el ancho del minimapa para representar un máximo de columnas.</span>
            <div className='monacoPreferences-switch'>
              {[50, 75, 100, 125, 150, 175, 200].map(state => {
                const normal = 100
                const factor = (state / normal).toFixed(1)
                return (
                  <IconButton
                    key={newKey()}
                    onClick={() => handleChangeMinimap({ maxColumn: state })}
                    active={maxColumn === state}
                  >
                    {state == normal ? 'normal' : `x${factor}`}
                  </IconButton>
                )
              })}
            </div>
          </div>

          <div className='monacoPreferences-section'>
            <h5 className='paragraph-emphasis'>Escala</h5>
            <span className='paragraph-normal'>Ajusta el tamaño del minimapa.</span>
            <div className='monacoPreferences-switch'>
              {[1, 2, 3].map(state => {
                const normal = 1
                const factor = (state / normal).toFixed(1)
                return (
                  <IconButton key={newKey()} onClick={() => handleChangeMinimap({ scale: state })} active={scale === state}>
                    {state == normal ? 'normal' : `x${factor}`}
                  </IconButton>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default MinimapPreference
