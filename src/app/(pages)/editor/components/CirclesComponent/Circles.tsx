'use client'

import { useCallback, useEffect } from 'react'
import type { JSX } from 'react'

import useShadowsImage from '../../store/shadowImage.store'
import StyleCirclesController from './StyleCirclesController'
import useStyleController from './useStyleController'

const SHADOW_DISPERSION = 50

type ILightPosition = { x: number; y: number }

const CircleShadowXYS = (): JSX.Element => {
  const { setXYSize } = useShadowsImage()

  const styleController = useStyleController({})

  const calculateShadow = useCallback(
    (l: ILightPosition) => {
      const { x, y } = l
      // Convierte las coordenadas a valores relativos (-1 a 1)
      const relX = (x / 100) * 2 - 1
      const relY = (y / 100) * 2 - 1
      // Calcula la posición de las sombras
      const shadowX = -relX * 21
      const shadowY = -relY * 21
      // Calcula el rango de dispersión de la sombra
      const spread = Math.sqrt(relX ** 2 + relY ** 2) * SHADOW_DISPERSION
      setXYSize([shadowX * 2, shadowY * 2, spread * 0.5])
    },
    [setXYSize]
  )

  useEffect(() => {
    calculateShadow(styleController.xy)
  }, [calculateShadow, styleController.xy])

  return <StyleCirclesController {...styleController} />
}

interface ICirclePositionXY {
  onPositionChange: (position: ILightPosition) => void
}

const CirclePositionXY = ({ onPositionChange }: ICirclePositionXY): JSX.Element => {
  const styleController = useStyleController({ onMouseMove: onPositionChange })

  return <StyleCirclesController {...styleController} circleRadius={10} />
}

export { CircleShadowXYS, CirclePositionXY }
