import { blurStyles, borderStyles, stacksStyles } from '@/shared/imageStyle'
import { RotateCcwIcon } from 'lucide-react'
import 'next'
import { useRouter } from 'next/navigation'

import usePerspectivesImages from '../../store/perspectivesImages'
import useShadowsImage from '../../store/shadowImage.store'
import useStackImage from '../../store/stackImage.store'
import useStyleImage from '../../store/styleImage.store'
import usePositionImage from '../../store/usePositionImage'
import useViewNavImage from '../../store/viewNavImage'
import { LOCAL_CIRCLE_POSITION_KEY } from '../CirclesComponent/CirclePositionXY'
import { LOCAL_CIRCLE_SHADOW_KEY } from '../CirclesComponent/CircleShadowXYS'

const ResetTransform = (): JSX.Element => {
  const { setPosition, setScale } = usePositionImage()
  const { setBorder } = useStyleImage()
  const { setPerspective } = usePerspectivesImages()
  const { setView } = useViewNavImage()
  const { setKeyBlur, setBlur, setOpacity, setXYSize } = useShadowsImage()
  const { setAmount, setStackStyle } = useStackImage()
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
    router.refresh()
    setView('FRAME')
    setStackStyle(stacksStyles.NONE(1))
    setAmount(1)
  }

  return (
    <button className='editorImageTools-action btn-tooltip' onClick={handleClick}>
      <RotateCcwIcon />
      <p className='tooltip top'>Restablecer</p>
    </button>
  )
}

export default ResetTransform
