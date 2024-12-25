import { blurStyles, borderStyles } from '@/shared/imageStyle'
import useBackgroundImage from '@editor-store/backgroundImage.store'
import useNoiseImage from '@editor-store/noiseImage.store'
import useOverlayImage from '@editor-store/overlayImage.store'
import usePatternImage from '@editor-store/patternImage.store'
import usePerspectivesImages from '@editor-store/perspectivesImages'
import useShadowsImage from '@editor-store/shadowImage.store'
import useStackImage from '@editor-store/stackImage.store'
import useStyleImage from '@editor-store/styleImage.store'
import usePositionImage from '@editor-store/usePositionImage'
import useViewNavImage from '@editor-store/viewNavImage'
import { RotateCcwIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { LOCAL_CIRCLE_POSITION_KEY } from '../CirclesComponent/CirclePositionXY'
import { LOCAL_CIRCLE_SHADOW_KEY } from '../CirclesComponent/CircleShadowXYS'

const ResetTransform = (): JSX.Element => {
  const pos = usePositionImage()
  const bor = useStyleImage()
  const prs = usePerspectivesImages()
  const view = useViewNavImage()
  const sha = useShadowsImage()
  const stk = useStackImage()
  const ov = useOverlayImage()
  const pt = usePatternImage()
  const noi = useNoiseImage()
  const bg = useBackgroundImage()
  const router = useRouter()

  const handleClick = (): void => {
    const defaultPositions = { x: 50, y: 50 }
    localStorage.setItem(LOCAL_CIRCLE_SHADOW_KEY, JSON.stringify(defaultPositions))
    localStorage.setItem(LOCAL_CIRCLE_POSITION_KEY, JSON.stringify(defaultPositions))

    view.setView('BRUSH')

    pos.setPosition(defaultPositions)
    pos.setScale(0.8)

    bor.setBorder(borderStyles.CURVE)

    prs.setPerspective('')

    sha.setKeyBlur('SPREAD')
    sha.setBlur(blurStyles.SPREAD.blur)
    sha.setOpacity(10)
    sha.setXYSize([0, 0, 0])

    stk.setStackStyle('NONE')
    stk.setAmount(5)

    pt.setOpacity(60)
    pt.setBlur(10)
    pt.setPattern('')

    ov.setOpacity(50)
    ov.setOverlay('')

    noi.setBlur(10)
    noi.setOpacity(0)

    bg.setBackground(
      'linear-gradient(140deg, rgb(255 100 50) 12.8%, rgb(255 0 101) 43.52%, rgb(123 46 255) 84.34%)'
    )

    router.refresh()
  }

  return (
    <button className='editorImageTools-action btn-tooltip' onClick={handleClick}>
      <RotateCcwIcon className='animate-spin-counter-clockwise animate-iteration-count-infinite' />
      <p className='tooltip top'>Restablecer</p>
    </button>
  )
}

export default ResetTransform
