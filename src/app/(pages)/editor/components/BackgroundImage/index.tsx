import type { JSX } from 'react'

import ColorImage from './ColorImage'
import NoiseController from './NoiseController'
import OverlayController from './OverlayController'
import './style.scss'

const BackgroundImage = (): JSX.Element => {
  return (
    <div className='backgroundImage animate-blurred-fade-in'>
      <OverlayController />
      <NoiseController />
      <ColorImage />
    </div>
  )
}

export default BackgroundImage
