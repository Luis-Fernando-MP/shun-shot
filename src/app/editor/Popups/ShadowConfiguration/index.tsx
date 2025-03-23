import Popup from '@/shared/components/Popup'
import { PopupPositions } from '@/shared/components/Popup/usePopup'
import IconButton from '@/shared/ui/IconButton'
import { CloudSunIcon } from 'lucide-react'
import { type FC, MouseEvent, useState } from 'react'

import './style.scss'
import ShadowBlurSpreadWrapper from './wrappers/ShadowBlurSpreadWrapper'
import ShadowColorsWrapper from './wrappers/ShadowColorsWrapper'
import ShadowOpacityWrapper from './wrappers/ShadowOpacityWrapper'
import ShadowPositionWrapper from './wrappers/ShadowPositionWrapper'

const ShadowConfiguration: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [positions, setPositions] = useState<PopupPositions>()

  const handleOpenPopup = (e: MouseEvent) => {
    setIsOpen(!isOpen)
    setPositions({ x: e.clientX, y: e.clientY })
  }

  return (
    <>
      <IconButton label='Sombras' transparent onClick={handleOpenPopup}>
        <CloudSunIcon />
      </IconButton>

      <Popup
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        clickPosition={positions}
        title='Imágenes - Sombras'
        className='shadowConfig-popup'
      >
        <ShadowOpacityWrapper />
        <ShadowBlurSpreadWrapper />
        <ShadowPositionWrapper />
        <ShadowColorsWrapper />
      </Popup>
    </>
  )
}

export default ShadowConfiguration
