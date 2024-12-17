'use client'

import { generateShadow } from '@/shared/imageStyle'
import type { JSX } from 'react'

import './pageStyle.scss'
import useShadowsImage from './store/shadowImage.store'
import useStyleImage from './store/styleImage.store'
import usePositionImage from './store/usePositionImage'

const Page = (): JSX.Element => {
  const { border } = useStyleImage()
  const { XYSize, blur, opacity } = useShadowsImage()
  const { scale, position } = usePositionImage()

  const [x, y, spread] = XYSize

  const shadowStyle = generateShadow({
    x,
    y,
    blur,
    spread,
    opacity
  })

  return (
    <div className='editorPage-main animate-blurred-fade-in'>
      <div className='editorMP-transformer relative' id='editorMP-transformer'>
        <img
          src='/code-scape.png'
          alt='canvas editor style'
          style={{
            position: 'absolute',
            borderRadius: `${border}px`,
            boxShadow: shadowStyle,
            left: `${position.x}%`,
            top: `${position.y}%`,
            transform: `translate(-50%, -50%) scale(${scale})`
          }}
        />
      </div>
    </div>
  )
}

export default Page
