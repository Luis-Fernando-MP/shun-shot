'use client'

import { type JSX, useRef } from 'react'

import StyleCirclesController from './StyleCirclesController'
import useStyleController, { IStylePosition } from './useStyleController'

interface ICirclePositionXY {
  onPositionChange: (position: IStylePosition) => void
}
export const LOCAL_CIRCLE_POSITION_KEY = 'localKeyCirclesController'

const CirclePositionXY = ({ onPositionChange }: ICirclePositionXY): JSX.Element => {
  const $circlesRef = useRef<HTMLDivElement | null>(null)
  const styleController = useStyleController({
    onMouseMove: onPositionChange,
    localKey: LOCAL_CIRCLE_POSITION_KEY
  })

  return <StyleCirclesController {...styleController} circleRadius={10} ref={$circlesRef} />
}

export default CirclePositionXY
