import { generateShadow, generateStackShadow, stacksStyles } from '@/shared/imageStyle'

import useNoiseImage from '../store/noiseImage.store'
import useOverlayImage from '../store/overlayImage.store'
import usePerspectivesImages from '../store/perspectivesImages'
import useShadowsImage from '../store/shadowImage.store'
import useStackImage from '../store/stackImage.store'
import useStyleImage from '../store/styleImage.store'
import usePositionImage from '../store/usePositionImage'

const useStyleCssImage = () => {
  const { border } = useStyleImage()
  const { XYSize, blur, opacity } = useShadowsImage()
  const { scale, position } = usePositionImage()
  const { perspective, setPerspective } = usePerspectivesImages()

  const { overlay, opacity: opacityOverlay } = useOverlayImage()

  const { amount, stackStyle } = useStackImage()
  const { blur: blurNoise, noise, opacity: opacityNoise } = useNoiseImage()

  const getStackStyles = (index: number) => {
    const functionStyle = (stacksStyles as any)[stackStyle]
    if (!functionStyle) return ''
    return functionStyle(index + 1)
  }

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
    overlay,
    opacityOverlay: opacityOverlay / 100,
    stacks: new Array(amount).fill(0),
    border,
    scale,
    position,
    shadowStyle,
    perspective,
    stackShadow,
    blurNoise,
    noise,
    opacityNoise,
    setPerspective,
    getStackStyles
  }
}

export default useStyleCssImage
