import { MAX_OVERLAYS, MIN_OVERLAY, generateOverlays } from '@/shared/imageStyle'
import useOverlayImage from '@editor-store/overlayImage.store'
import type { JSX } from 'react'

import SmallBoxImages from '../../SmallBoxImages'
import OpacityController from './OpacityController'

const OverlayController = (): JSX.Element => {
  const { overlay, setOverlay, opacity, setOpacity } = useOverlayImage()

  return (
    <div className='editorStyles-section'>
      <OpacityController opacity={opacity} setOpacity={setOpacity} />
      <SmallBoxImages
        generatorImages={generateOverlays}
        image={overlay}
        setImage={setOverlay}
        minValue={MIN_OVERLAY}
        maxValue={MAX_OVERLAYS}
      />
    </div>
  )
}

export default OverlayController
