import React, { forwardRef } from 'react'

import './style.scss'
import { IUseStyleController, circles } from './useStyleController'

type TStyleCirclesController = IUseStyleController & {
  circleRadius?: number
}

const StyleCirclesController = forwardRef<HTMLDivElement, TStyleCirclesController>(
  ({ xy, containerRef, handleDown, isDraggingRef, handleGridClick, circleRadius = 50 }, ref) => {
    return (
      <article className='circleStyle' ref={ref}>
        <div ref={containerRef} className='circleStyle-container' onMouseDown={handleDown}>
          <section className='circleStyle-circles'>
            {circles.map((_, i) => {
              const key = `${i}-circleStyle`
              return (
                <button
                  className='circleStyle-circle'
                  style={{
                    borderRadius: `${circleRadius}px`
                  }}
                  key={key}
                  onClick={e => {
                    e.stopPropagation()
                    handleGridClick(i)
                  }}
                />
              )
            })}
          </section>

          <div
            className='circleStyle-pointer'
            id='circlePointer'
            style={{
              borderRadius: `${circleRadius}%`,
              left: `${xy.x}%`,
              top: `${xy.y}%`,
              transform: `translate(-54%, -54%)`
            }}
            onMouseDown={e => {
              e.stopPropagation()
              e.preventDefault()
              isDraggingRef.current = true
            }}
          />
        </div>
      </article>
    )
  }
)

StyleCirclesController.displayName = 'StyleCirclesController'

export default StyleCirclesController
