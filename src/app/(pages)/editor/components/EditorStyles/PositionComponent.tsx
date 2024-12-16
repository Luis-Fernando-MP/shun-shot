'use client'

import BoldText from '@/shared/components/BoldText'
import { type JSX } from 'react'

import usePositionImage from '../../store/usePositionImage'
import { CirclePositionXY } from '../CirclesComponent/Circles'
import RangeSlider from '../RangeSlider'
import './style.scss'

const PositionComponent = (): JSX.Element | null => {
  const { scale, setPosition, setScale } = usePositionImage()

  const handlePositionChange = ({ x, y }: { x: number; y: number }) => {
    const editoContainer = document.querySelector('#editorMP-transformer') as HTMLElement
    if (!editoContainer || !(editoContainer instanceof HTMLElement)) return null
    const imageElement = editoContainer.querySelector('img') as HTMLElement

    const containerWidth = editoContainer.offsetWidth
    const containerHeight = editoContainer.offsetHeight
    const squareSizeWidth = imageElement ? imageElement.offsetWidth : 0
    const squareSizeHeight = imageElement ? imageElement.offsetHeight : 0

    // Ajustar el máximo de desplazamiento ara ambos ejes
    const maxOverflowX = squareSizeWidth / 2.5
    const maxOverflowY = squareSizeHeight / 2.5

    const minX = (maxOverflowX / containerWidth) * 100
    const maxX = 100 - minX
    const minY = (maxOverflowY / containerHeight) * 100
    const maxY = 100 - minY

    const clampedX = Math.max(minX, Math.min(maxX, x))
    const clampedY = Math.max(minY, Math.min(maxY, y))

    setPosition({ x: clampedX, y: clampedY })
  }

  return (
    <div className='editorStyles-section'>
      <BoldText text='Size &/Position' />
      <RangeSlider
        label='Scale'
        onChange={v => setScale(0.7 + v / 100)}
        range={Math.round((scale - 0.7) * 100)}
      />
      <CirclePositionXY onPositionChange={handlePositionChange} />
    </div>
  )
}

export default PositionComponent
