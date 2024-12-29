'use client'

import { default_image } from '@/shared/constants'
import type { JSX } from 'react'

import useStyleCssImage from '../../hooks/useStyleCssImage'
import './style.scss'

const DrawingComponent = (): JSX.Element => {
  const {
    imgBg,
    noise,
    pattern,
    overlay,
    filter,
    getBackgroundStyle,
    imgBorder,
    shadowStyle,
    imgPosition,
    imgPerspective,
    indexImage
  } = useStyleCssImage()

  const bg = getBackgroundStyle(imgBg.background)

  return (
    <>
      <span
        className='drawing-background'
        style={{
          ...bg,
          backgroundBlendMode: imgBg.blendMode,
          filter: `blur(${filter.blur}px) brightness(${filter.brightness}%) opacity(${filter.opacity}%) hue-rotate(${filter.hueRotation}deg) sepia(${filter.sepia}%) grayscale(${filter.grayscale}%)`
        }}
      />

      <div
        className='drawing-image'
        style={{
          position: 'absolute',
          borderRadius: `${imgBorder.border}px`,
          boxShadow: shadowStyle,
          left: `${imgPosition.position.x}%`,
          top: `${imgPosition.position.y}%`,
          transform: `${imgPerspective.perspective} scale(${imgPosition.scale}) translate(-50%, -50%)`,
          zIndex: indexImage.index
        }}
      >
        <div className='drawing-image__container'>
          <img
            src={default_image}
            alt='canvas editor style'
            style={{
              borderRadius: `${imgBorder.border}px`
            }}
            loading='lazy'
          />
        </div>
        {/* {stacks.map((_, i) => {
            const key = `${i}-editorMP-stack`
            return (
              <div
                key={key}
                className='drawing-stack'
                style={{
                  borderRadius: `${border}px`,
                  zIndex: -1 * i,
                  // boxShadow: stackShadow,
                  transform: getStackStyles(i),
                  filter: `brightness(${Math.max(0, 1 - i * 0.05)})`
                }}
              />
            )
          })} */}
      </div>
      <span
        className={`drawing-pattern ${pattern.patternClass}`}
        style={{
          filter: `opacity(${pattern.opacity}%) blur(${pattern.blur / 10}px)`
        }}
      />
      <span
        className='drawing-noise noise-7'
        style={{ filter: `opacity(${noise.opacity}%) blur(${noise.blur}px)` }}
      />
      <span
        className='drawing-overlay'
        style={{ backgroundImage: `url(${overlay.image})`, opacity: overlay.opacity }}
      />
    </>
  )
}

export default DrawingComponent
