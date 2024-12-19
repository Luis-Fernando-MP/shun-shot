'use client'

import { type JSX, useCallback, useEffect } from 'react'

import useShadowsImage from '../../store/shadowImage.store'
import StyleCirclesController from './StyleCirclesController'
import useStyleController, { IStylePosition } from './useStyleController'

const SHADOW_DISPERSION = 50

export const LOCAL_CIRCLE_SHADOW_KEY = 'LocalCircleKeyShadowXYS'
const CircleShadowXYS = (): JSX.Element => {
  const { setXYSize } = useShadowsImage()
  const styleController = useStyleController({
    localKey: LOCAL_CIRCLE_SHADOW_KEY
  })

  const calculateShadow = useCallback(
    ({ x, y }: IStylePosition) => {
      // Convierte las coordenadas a valores relativos (-1 a 1)
      const relX = (x / 100) * 2 - 1
      const relY = (y / 100) * 2 - 1
      // Calcula la posición de las sombras
      const shadowX = -relX * 40
      const shadowY = -relY * 40
      // Calcula el rango de dispersión de la sombra
      const spread = Math.sqrt(relX ** 2 + relY ** 2) * SHADOW_DISPERSION
      setXYSize([shadowX * 2.5, shadowY * 2.5, spread])
    },
    [setXYSize]
  )

  useEffect(() => {
    calculateShadow(styleController.xy)
  }, [calculateShadow, styleController.xy])

  return <StyleCirclesController {...styleController} />
}

export default CircleShadowXYS
