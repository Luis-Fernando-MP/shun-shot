import { basicColors } from '@/app/defaults/colors'
import IconButton from '@/shared/ui/IconButton'
import { PipetteIcon } from 'lucide-react'
import type { FC } from 'react'

import './style.scss'

interface Props {
  background: string | null
  setBackground: (background: string) => void
}

/**
 * ColorsController component allows users to select a color from a predefined set of basic colors.
 *
 * @param {string | null} background - The current background color.
 * @param {(background: string) => void} setBackground - Function to update the background color.
 */
const ColorsController: FC<Props> = ({ background, setBackground }) => {
  return (
    <section className='colorsController'>
      <div className='colorsController-section'>
        <h5>Default</h5>
        <div className='colorsController-colors'>
          {basicColors.map(color => {
            return (
              <button
                className='colorsController-color'
                style={{ backgroundColor: color }}
                key={color}
                onClick={() => setBackground(color)}
              />
            )
          })}
        </div>
      </div>
      {/* TODO: Agregar los colores adaptativos de las imágenes cargadas */}
      <IconButton>
        <PipetteIcon />
        <h4>Picar nuevo color</h4>
      </IconButton>
    </section>
  )
}

export default ColorsController
