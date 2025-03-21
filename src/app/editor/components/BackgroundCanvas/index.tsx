'use client'

import { getDefaultCssVariable, observeCSSVariables } from '@/shared/elementCssVariables'
import { type FC, useEffect, useRef, useState } from 'react'

import useBackgroundStore from '../../store/background/background.store'
import useBackgroundRadiusStore from '../../store/background/backgroundRadius.store'

const BackgroundCanvas: FC = () => {
  const $canvasRef = useRef<HTMLCanvasElement>(null)
  const { background, backgroundHeight, backgroundWidth } = useBackgroundStore()
  const [defaultBackground, setDefaultBackground] = useState('')

  const { getStyleBorderRadius } = useBackgroundRadiusStore()

  useEffect(() => {
    if (!$canvasRef.current) return
    const ctx = $canvasRef.current.getContext('2d')
    if (!ctx) return

    ctx.clearRect(0, 0, backgroundWidth, backgroundHeight)

    ctx.fillStyle = background ?? defaultBackground
    ctx.fillRect(0, 0, backgroundWidth, backgroundHeight)
  }, [background, backgroundHeight, backgroundWidth, defaultBackground])

  useEffect(() => {
    let observer: MutationObserver | null
    observer = observeCSSVariables(document.documentElement, style => {
      const newBackground = style.getPropertyValue('--tn-primary')
      setDefaultBackground(`rgb(${newBackground})`)
    })
    setDefaultBackground(getDefaultCssVariable('--tn-primary'))
    return () => observer?.disconnect()
  }, [setDefaultBackground])

  return (
    <canvas
      ref={$canvasRef}
      width={backgroundWidth}
      height={backgroundHeight}
      className='editor-background cmvBackground'
      style={{ height: backgroundHeight, width: backgroundWidth, ...getStyleBorderRadius() }}
    />
  )
}

export default BackgroundCanvas
