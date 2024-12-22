'use client'

import { default_image } from '@/shared/constants'
import type { JSX } from 'react'

import useStyleCssImage from './hooks/useStyleCssImage'
import './pageStyle.scss'

const Page = (): JSX.Element => {
  const {
    border,
    position,
    scale,
    shadowStyle,
    perspective,
    getStackStyles,
    overlay,
    opacityOverlay,
    stacks,
    blurNoise,
    opacityNoise
  } = useStyleCssImage()

  return (
    <div className='editorPage-main animate-blurred-fade-in'>
      <section className='editorMP-transformer relative' id='editorMP-transformer'>
        <div
          className='editorMP-transformer__overlay'
          style={{ backgroundImage: `url(${overlay})`, opacity: opacityOverlay }}
        />

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
              loading='lazy'
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
                  // boxShadow: stackShadow,
                  transform: getStackStyles(i),
                  filter: `brightness(${Math.max(0, 1 - i * 0.05)})`
                }}
              />
            )
          })}
        </div>

        <div
          className='editorMP-transformer__noise noise-7'
          style={{ filter: `opacity(${opacityNoise}%) blur(${blurNoise / 10}px)` }}
        />
        {/* <div
          className='editorMP-transformer__pattern pattern-7'
          style={{
            filter: `opacity(${opacityNoise}%) blur(${blurNoise / 10}px)`
            // backdropFilter: `blur(${blurNoise}px)`
          }}
        /> */}
      </section>
    </div>
  )
}

export default Page
