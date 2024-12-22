import { MAX_OVERLAYS, MIN_OVERLAY, generateOverlays } from '@/shared/imageStyle'
import type { JSX } from 'react'

import useOverlayImage from '../../../store/overlayImage.store'
import SmallBoxImages from '../../SmallBoxImages'
import OpacityController from './OpacityController'

const OverlayController = (): JSX.Element => {
  const { overlay, setOverlay, opacity, setOpacity } = useOverlayImage()

  return (
    <>
      <OpacityController opacity={opacity} setOpacity={setOpacity} />
      <SmallBoxImages
        generatorImages={generateOverlays}
        image={overlay}
        setImage={setOverlay}
        minValue={MIN_OVERLAY}
        maxValue={MAX_OVERLAYS}
      />
    </>
  )
}

export default OverlayController
