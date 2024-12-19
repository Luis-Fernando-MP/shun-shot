'use client'

import type { JSX } from 'react'

import useStyleCssImage from './hooks/useStyleCssImage'
import './pageStyle.scss'

const Page = (): JSX.Element => {
  const { border, position, scale, shadowStyle, perspective } = useStyleCssImage()

  return (
    <div className='editorPage-main animate-blurred-fade-in'>
      <div className='editorMP-transformer relative' id='editorMP-transformer'>
        <div
          className='editorMP-transformer__container'
          style={{
            position: 'absolute',
            borderRadius: `${border}px`,
            boxShadow: shadowStyle,
            left: `${position.x}%`,
            top: `${position.y}%`,
            transform: `${perspective} scale(${scale}) translate(-50%, -50%)`
          }}
        >
          <img src='/code-scape.png' alt='canvas editor style' />
        </div>
      </div>
    </div>
  )
}

export default Page
