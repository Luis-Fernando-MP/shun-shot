import { generateShadow, generateStackShadow } from '@/shared/imageStyle'

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

  const propsShadow = {
    x,
    y,
    blur,
    spread,
    opacity
  }

  const shadowStyle = generateShadow(propsShadow)

  const stackShadow = generateStackShadow(propsShadow)

  return {
    border,
    scale,
    position,
    shadowStyle,
    perspective,
    stackShadow,
    setPerspective
  }
}

export default useStyleCssImage
