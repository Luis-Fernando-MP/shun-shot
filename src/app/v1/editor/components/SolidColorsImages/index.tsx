'use client'

import useBackgroundImage from '@editor-store/backgroundImage.store'
import type { JSX } from 'react'

import './style.scss'

const professionalColors = [
  '#FFFFFF',
  '#d3e6ff',
  '#acd4fd',
  '#7293b6',
  '#3c4a59',
  '#000000',
  //
  '#FF6666',
  '#FF9933',
  '#FFFF00',
  '#99CC33',
  '#33CC99',
  '#00FF99'
]

const SolidColorsImages = (): JSX.Element => {
  const { setBackground } = useBackgroundImage()

  return (
    <div className='SolidColorsImg editorStyles-section'>
      <h3 className='editorStyles-title'>Colores Sólidos</h3>
      <div className='bgStyles-palette'>
        {professionalColors.map(color => (
          <button
            key={`${color}-solid-colors`}
            style={{ backgroundColor: color }}
            onClick={() => setBackground(color)}
            className='SolidColorsImg-color'
          />
        ))}
      </div>
    </div>
  )
}

export default SolidColorsImages
