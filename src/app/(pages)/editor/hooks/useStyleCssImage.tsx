import { generateShadow } from '@/shared/imageStyle'

import usePerspectivesImages from '../store/perspectivesImages'
import useShadowsImage from '../store/shadowImage.store'
import useStyleImage from '../store/styleImage.store'
import usePositionImage from '../store/usePositionImage'

const useStyleCssImage = () => {
  const { border } = useStyleImage()
  const { XYSize, blur, opacity } = useShadowsImage()
  const { scale, position } = usePositionImage()
  const { perspective, setPerspective } = usePerspectivesImages()

  const [x, y, spread] = XYSize

  const shadowStyle = generateShadow({
    x,
    y,
    blur,
    spread,
    opacity
  })

  return {
    border,
    scale,
    position,
    shadowStyle,
    perspective,
    setPerspective
  }
}

export default useStyleCssImage
