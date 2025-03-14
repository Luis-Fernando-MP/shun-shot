'use client'

import RangeSlider from '@/shared/components/RangeSlider'
import usePositionImage from '@editor/store/usePositionImage'
import dynamic from 'next/dynamic'
import { type JSX, useCallback } from 'react'

import { IStylePosition } from '../../CirclesComponent/useStyleController'

const CirclePositionXY = dynamic(() => import('../../CirclesComponent/CirclePositionXY'), {
  ssr: false
})

const PositionComponent = (): JSX.Element | null => {
  const { scale, setPosition, setScale } = usePositionImage()

  const handlePositionChange = useCallback(
    ({ x, y }: IStylePosition) => {
      const editoContainer = document.querySelector('#editorMP-transformer') as HTMLElement
      if (!editoContainer || !(editoContainer instanceof HTMLElement)) return null
      const imageElement = editoContainer.querySelector('img') as HTMLElement

      const containerWidth = editoContainer.offsetWidth
      const containerHeight = editoContainer.offsetHeight
      const squareSizeWidth = imageElement ? imageElement.offsetWidth : 0
      const squareSizeHeight = imageElement ? imageElement.offsetHeight : 0

      // Ajustar el máximo de desplazamiento ara ambos ejes
      const maxOverflowX = squareSizeWidth / 4
      const maxOverflowY = squareSizeHeight / 4

      const minX = (maxOverflowX / containerWidth) * 100
      const maxX = 100 - minX
      const minY = (maxOverflowY / containerHeight) * 100
      const maxY = 100 - minY

      const clampedX = Math.max(minX, Math.min(maxX, x))
      const clampedY = Math.max(minY, Math.min(maxY, y))
      setPosition({ x: clampedX, y: clampedY })
    },
    [setPosition]
  )

  return (
    <div className='editorStyles-section'>
      <h3 className='editorStyles-title'>Size & Position</h3>
      <RangeSlider label='Scale' onChange={v => setScale(0.5 + v / 100)} range={Math.round((scale - 0.5) * 100)} />
      <CirclePositionXY onPositionChange={handlePositionChange} />
    </div>
  )
}

export default PositionComponent
