'use client'

import useBackgroundImage from '@editor-store/backgroundImage.store'
import { EllipsisIcon } from 'lucide-react'
import { type JSX, memo, useState } from 'react'

import './style.scss'

interface IGradientBackground {
  gradients: { gradient: string; blendMode?: string }[]
  title: string
}
const GradientColorsImages = ({ gradients, title }: IGradientBackground): JSX.Element => {
  const { setBackground, setBlendMode } = useBackgroundImage()
  const [showAll, setShowAll] = useState(false)

  const toggleGradients = () => setShowAll(!showAll)

  const gradientsToShow = showAll ? gradients : gradients.slice(0, 5)

  return (
    <div className='GradientColorsImg editorStyles-section'>
      <h3 className='editorStyles-title'>{title}</h3>
      <div className='bgStyles-palette'>
        {gradientsToShow.map(({ gradient, blendMode }) => (
          <button
            key={`${gradient}-gradient-colors`}
            style={{ backgroundImage: gradient, backgroundBlendMode: blendMode }}
            onClick={() => {
              setBackground(gradient)
              setBlendMode(blendMode ?? 'normal')
            }}
            className='GradientColorsImg-color'
          />
        ))}
        <button onClick={toggleGradients} className='GradientColorsImg-toggle'>
          <EllipsisIcon />
        </button>
      </div>
    </div>
  )
}

export default memo(GradientColorsImages)
