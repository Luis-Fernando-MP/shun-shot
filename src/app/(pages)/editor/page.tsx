'use client'

import { default_image } from '@/shared/constants'
import { stacksStyles } from '@/shared/imageStyle'
import type { JSX } from 'react'

import useStyleCssImage from './hooks/useStyleCssImage'
import './pageStyle.scss'
import useStackImage from './store/stackImage.store'

const Page = (): JSX.Element => {
  const { border, position, scale, shadowStyle, perspective, stackShadow } = useStyleCssImage()

  const { amount, stackStyle } = useStackImage()
  const stacks = new Array(amount).fill(0)

  const getStackStyles = (index: number) => {
    const functionStyle = (stacksStyles as any)[stackStyle]
    if (!functionStyle) return ''
    return functionStyle(index + 1)
  }

  return (
    <div className='editorPage-main animate-blurred-fade-in'>
      <div className='editorMP-transformer relative' id='editorMP-transformer'>
        <div
          className='editorMP-transformer__styles'
          style={{
            position: 'absolute',
            borderRadius: `${border}px`,
            boxShadow: shadowStyle,
            left: `${position.x}%`,
            top: `${position.y}%`,
            transform: `${perspective} scale(${scale}) translate(-50%, -50%)`
          }}
        >
          <div className='editorMP-transformer__container'>
            <img
              src={default_image}
              alt='canvas editor style'
              style={{
                borderRadius: `${border}px`
              }}
            />
          </div>
          {stacks.map((_, i) => {
            const key = `${i}-editorMP-stack`
            return (
              <div
                key={key}
                className='editorMP-transformer__stack'
                style={{
                  borderRadius: `${border}px`,
                  zIndex: -1 * i,
                  boxShadow: stackShadow,
                  transform: getStackStyles(i),
                  filter: `brightness(${Math.max(0, 1 - i * 0.05)})`
                }}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Page
