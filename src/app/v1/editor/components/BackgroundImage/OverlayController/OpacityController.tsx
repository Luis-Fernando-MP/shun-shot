'use client'

import RangeSlider from '@/shared/components/RangeSlider'
import { type JSX, memo } from 'react'

interface IOpacityController {
  opacity: number
  setOpacity: (overlay: number) => void
}

const OpacityController = ({ opacity, setOpacity }: IOpacityController): JSX.Element => {
  return (
    <>
      <h3 className='editorStyles-title'>Superposición de sombras</h3>
      <RangeSlider range={opacity} onChange={o => setOpacity(o)} label='Opacity2' max={80} />
    </>
  )
}

export default memo(OpacityController)
