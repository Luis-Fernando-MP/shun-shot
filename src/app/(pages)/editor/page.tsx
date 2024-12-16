'use client'

import type { JSX } from 'react'

import useShadowsImage from './store/shadowImage.store'
import useStyleImage from './store/styleImage.store'
import usePositionImage from './store/usePositionImage'

const Page = (): JSX.Element => {
  const { border } = useStyleImage()
  const { XYSize, blur, opacity } = useShadowsImage()
  const { scale, position } = usePositionImage()

  const [x, y, spread] = XYSize

  const shadow1 = `${x}px ${y}px ${blur}px ${spread}px rgba(0, 0, 0, ${opacity / 100})` // Sombra base
  const shadow2 = `${x * 1.2}px ${y * 1.2}px ${blur * 1.1}px ${spread * 1.1}px rgba(0, 0, 0, ${(opacity * 0.9) / 100})` // Más intensa y sutilmente expandida
  const shadow3 = `${x * 0.8}px ${y * 0.8}px ${blur * 0.9}px ${spread * 0.9}px rgba(0, 0, 0, ${(opacity * 0.7) / 100})` // Más suave y compacta
  const shadow4 = `${x * 1.5}px ${y * 1.5}px ${blur * 1.2}px ${spread * 1.2}px rgba(0, 0, 0, ${(opacity * 1.1) / 100})` // Sombra más marcada y amplia
  const shadow5 = `${x * 0.5}px ${y * 0.5}px ${blur * 0.7}px ${spread * 0.7}px rgba(0, 0, 0, ${(opacity * 0.5) / 100})` // Sombra ligera y precisa

  // Combinar las sombras
  const shadowStyle = `${shadow1}, ${shadow2}, ${shadow3}, ${shadow4}, ${shadow5}`

  // if (spread <= 10) shadow = '0 0 30px 5px rgba(0, 0, 0, 0.5)'

  return (
    <div className='editorPage-main animate-blurred-fade-in'>
      <div className='editorMP-transformer relative' id='editorMP-transformer'>
        <img
          src='/code-scape.png'
          alt='example code image'
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
