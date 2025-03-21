import BorderConfiguration from '@/shared/components/BorderConfiguration'
import Popup from '@/shared/components/Popup'
import { PopupPositions } from '@/shared/components/Popup/usePopup'
import SizeController from '@/shared/components/SizeController'
import IconButton from '@/shared/ui/IconButton'
import { BlendIcon } from 'lucide-react'
import { type FC, MouseEvent, useState } from 'react'

import useBackgroundStore from '../../store/background/background.store'
import useBackgroundRadiusStore from '../../store/background/backgroundRadius.store'
import './style.scss'

const BackgroundConfiguration: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [positions, setPositions] = useState<PopupPositions>()

  const { backgroundWidth, backgroundHeight, setBackgroundWidth, setBackgroundHeight } = useBackgroundStore()

  const handleOpenPopup = (e: MouseEvent) => {
    setIsOpen(!isOpen)
    setPositions({ x: e.clientX, y: e.clientY })
  }

  return (
    <>
      <IconButton label='Configuration del fondo' transparent onClick={handleOpenPopup}>
        <BlendIcon />
      </IconButton>
      <Popup
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        clickPosition={positions}
        title='Configuration del fondo'
        className='bgConfig-popup'
      >
        <RadiusController />

        <div className='bgConfig-section'>
          <h3 className='paragraph-highlight'># Tamaño:</h3>
          <SizeController
            width={backgroundWidth}
            height={backgroundHeight}
            setWidth={setBackgroundWidth}
            setHeight={setBackgroundHeight}
          />
        </div>
      </Popup>
    </>
  )
}

export default BackgroundConfiguration

const RadiusController: FC = () => {
  const borderStore = useBackgroundRadiusStore()
  return (
    <div className='bgConfig-section'>
      <h3 className='paragraph-highlight'># Redondeado:</h3>
      <BorderConfiguration borderState={borderStore} />
    </div>
  )
}
