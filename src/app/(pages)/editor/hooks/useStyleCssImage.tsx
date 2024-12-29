import { generateShadow, generateStackShadow, stacksStyles } from '@/shared/imageStyle'

import useBackgroundImage from '../store/backgroundImage.store'
import useNoiseImage from '../store/noiseImage.store'
import useOverlayImage from '../store/overlayImage.store'
import usePatternImage from '../store/patternImage.store'
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

  const { opacity: opacityPattern, blur: blurPattern, patternClass } = usePatternImage()

  const { amount, stackStyle } = useStackImage()
  const { blur: blurNoise, opacity: opacityNoise } = useNoiseImage()

  const { background, blendMode } = useBackgroundImage()

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
    opacityNoise,
    opacityPattern,
    blurPattern,
    patternClass,
    background,
    blendMode,
    setPerspective,
    getStackStyles
  }
}

export default useStyleCssImage
