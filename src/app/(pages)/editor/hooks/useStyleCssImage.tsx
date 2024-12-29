import { generateShadow, stacksStyles } from '@/shared/imageStyle'

import useBackgroundFilterImage from '../store/backgroundFilterImage.store'
import useBackgroundImage from '../store/backgroundImage.store'
import useIndexImage from '../store/indexImage.store'
import useNoiseImage from '../store/noiseImage.store'
import useOverlayImage from '../store/overlayImage.store'
import usePatternImage from '../store/patternImage.store'
import usePerspectivesImages from '../store/perspectivesImages'
import useShadowsImage from '../store/shadowImage.store'
import useStackImage from '../store/stackImage.store'
import useStyleImage from '../store/styleImage.store'
import usePositionImage from '../store/usePositionImage'

const useStyleCssImage = () => {
  const imgBorder = useStyleImage()
  const shadow = useShadowsImage()
  const imgPosition = usePositionImage()
  const imgPerspective = usePerspectivesImages()
  const filter = useBackgroundFilterImage()
  const overlay = useOverlayImage()
  const stacks = useStackImage()
  const pattern = usePatternImage()
  const noise = useNoiseImage()
  const indexImage = useIndexImage()

  const imgBg = useBackgroundImage()

  const getStackStyles = (index: number) => {
    const functionStyle = (stacksStyles as any)[stacks.stackStyle]
    if (!functionStyle) return ''
    return functionStyle(index + 1)
  }

  const getBackgroundStyle = (background: string): { [key: string]: string } => {
    if (background.includes('url')) return { background }
    if (background.includes('gradient'))
      return { backgroundImage: background, backgroundColor: '#000' }

    return { backgroundColor: background }
  }

  const [ShadowX, shadowY, shadowSpread] = shadow.XYSize

  const shadowStyle = generateShadow({
    x: ShadowX,
    y: shadowY,
    blur: shadow.blur,
    spread: shadowSpread,
    opacity: shadow.opacity
  })

  return {
    imgBorder,
    shadowStyle,
    imgPosition,
    imgPerspective,
    filter,
    overlay: {
      image: overlay.overlay,
      opacity: overlay.opacity / 100
    },
    stacks: new Array(stacks.amount).fill(0),
    getStackStyles,
    getBackgroundStyle,
    pattern,
    noise: {
      blur: noise.blur / 10,
      opacity: noise.opacity
    },
    imgBg,
    indexImage
  }
}

export default useStyleCssImage
