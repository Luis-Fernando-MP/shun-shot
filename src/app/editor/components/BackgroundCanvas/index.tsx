'use client'

import { getDefaultCssVariable, observeCSSVariables } from '@/shared/elementCssVariables'
import { type FC, useEffect, useRef, useState } from 'react'

import useBackgroundStore from '../../store/background.store'

const BackgroundCanvas: FC = () => {
  const $canvasRef = useRef<HTMLCanvasElement>(null)
  const { background, backgroundHeight, backgroundWidth, borderRadius } = useBackgroundStore()
  const [defaultBackground, setDefaultBackground] = useState('')

  useEffect(() => {
    if (!$canvasRef.current) return
    const ctx = $canvasRef.current.getContext('2d')
    if (!ctx) return

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
      className='editor-canvas cmvBackground'
      style={{ height: backgroundHeight, width: backgroundWidth, borderRadius }}
    />
  )
}

export default BackgroundCanvas
