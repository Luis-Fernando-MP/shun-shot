import Popup from '@/shared/components/Popup'
import { PopupPositions } from '@/shared/components/Popup/usePopup'
import IconButton from '@/shared/ui/IconButton'
import { SquareRoundCornerIcon } from 'lucide-react'
import { type FC, MouseEvent, useState } from 'react'

import ImagesRadiusController from './ImagesRadiusController'
import './style.scss'

const CornerConfiguration: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [positions, setPositions] = useState<PopupPositions>()

  const handleOpenPopup = (e: MouseEvent) => {
    setIsOpen(!isOpen)
    setPositions({ x: e.clientX, y: e.clientY })
  }

  return (
    <>
      <IconButton label='Estilo de borde' transparent onClick={handleOpenPopup}>
        <SquareRoundCornerIcon />
      </IconButton>
      <Popup
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        clickPosition={positions}
        title='Imágenes - Border'
        className='borderConfig-popup'
      >
        <ImagesRadiusController />

        <div className='borderConfig-section'>
          <h3 className='paragraph-highlight'># Tamaño:</h3>
        </div>
      </Popup>
    </>
  )
}

export default CornerConfiguration
