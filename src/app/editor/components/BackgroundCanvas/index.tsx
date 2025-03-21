'use client'

import { type FC } from 'react'

import useBackgroundStore from '../../store/background/background.store'
import useBackgroundRadiusStore from '../../store/background/backgroundRadius.store'

const BackgroundCanvas: FC = () => {
  const { backgroundHeight, backgroundWidth, getBackground } = useBackgroundStore()

  const { getStyleBorderRadius } = useBackgroundRadiusStore()

  return (
    <div
      className='editor-background'
      style={{
        height: backgroundHeight,
        width: backgroundWidth,
        ...getStyleBorderRadius(),
        ...getBackground()
      }}
    />
  )
}

export default BackgroundCanvas
