import { blurStyles, borderStyles, stacksStyles } from '@/shared/imageStyle'
import usePerspectivesImages from '@editor-store/perspectivesImages'
import useShadowsImage from '@editor-store/shadowImage.store'
import useStackImage from '@editor-store/stackImage.store'
import useStyleImage from '@editor-store/styleImage.store'
import usePositionImage from '@editor-store/usePositionImage'
import useViewNavImage from '@editor-store/viewNavImage'
import { RotateCcwIcon } from 'lucide-react'
import 'next'
import { useRouter } from 'next/navigation'

import useNoiseImage from '../../store/noiseImage.store'
import useOverlayImage from '../../store/overlayImage.store'
import usePatternImage from '../../store/patternImage.store'
import { LOCAL_CIRCLE_POSITION_KEY } from '../CirclesComponent/CirclePositionXY'
import { LOCAL_CIRCLE_SHADOW_KEY } from '../CirclesComponent/CircleShadowXYS'

const ResetTransform = (): JSX.Element => {
  const { setPosition, setScale } = usePositionImage()
  const { setBorder } = useStyleImage()
  const { setPerspective } = usePerspectivesImages()
  const { setView } = useViewNavImage()
  const { setKeyBlur, setBlur, setOpacity, setXYSize } = useShadowsImage()
  const { setAmount, setStackStyle } = useStackImage()
  const ov = useOverlayImage()
  const pt = usePatternImage()
  const noi = useNoiseImage()
  const router = useRouter()

  const handleClick = (): void => {
    const defaultPositions = { x: 50, y: 50 }
    localStorage.setItem(LOCAL_CIRCLE_SHADOW_KEY, JSON.stringify(defaultPositions))
    localStorage.setItem(LOCAL_CIRCLE_POSITION_KEY, JSON.stringify(defaultPositions))
    setPosition(defaultPositions)
    setScale(0.8)
    setBorder(borderStyles.CURVE)
    setKeyBlur('SPREAD')
    setBlur(blurStyles.SPREAD.blur)
    setOpacity(10)
    setXYSize([0, 0, 0])
    setPerspective('')
    setView('FRAME')
    setStackStyle(stacksStyles.NONE(1))
    setAmount(1)

    pt.setOpacity(60)
    pt.setBlur(10)
    pt.setPattern('')

    ov.setOpacity(50)
    ov.setOverlay('')

    noi.setBlur(10)
    noi.setOpacity(0)

    router.refresh()
  }

  return (
    <button className='editorImageTools-action btn-tooltip' onClick={handleClick}>
      <RotateCcwIcon />
      <p className='tooltip top'>Restablecer</p>
    </button>
  )
}

export default ResetTransform
