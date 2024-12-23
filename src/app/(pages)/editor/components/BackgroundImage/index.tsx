import type { JSX } from 'react'

import NoiseController from './NoiseController'
import OverlayController from './OverlayController'
import PatternsController from './PatternsController'
import './style.scss'

const BackgroundImage = (): JSX.Element => {
  return (
    <div className='backgroundImage animate-blurred-fade-in'>
      <NoiseController />
      <OverlayController />
      <PatternsController />
    </div>
  )
}

export default BackgroundImage
