'use client'

import { JSX } from 'react'

import './style.scss'
import useBoard from './useBoard'

type TPositions = { x: number; y: number }

interface BoardProps {
  children: (offset: TPositions, scale: number) => JSX.Element
  className?: string
  isCenter?: boolean
  minScale?: boolean
  normalScale?: boolean
}

const Board = ({ children, className = '', isCenter = true, minScale, normalScale }: BoardProps): JSX.Element => {
  const {
    $containerRef,
    $childrenRef,
    noExistRefs,
    isMoving,
    offset,
    scale,
    handleBoardDown,
    handleBoardMove,
    handleBoardUp,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd
  } = useBoard({ isCenter, minScale, normalScale })

  return (
    <article
      role='button'
      tabIndex={0}
      className='board-zone'
      ref={$containerRef}
      onMouseDown={handleBoardDown}
      onMouseMove={handleBoardMove}
      onMouseUp={handleBoardUp}
      onMouseLeave={handleBoardUp}
      onContextMenu={e => e.preventDefault()}
      // Mobile
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        opacity: noExistRefs ? 0 : 1,
        cursor: isMoving ? 'grabbing' : 'auto'
      }}
    >
      <div
        className={`${className} board-children`}
        ref={$childrenRef}
        style={{
          top: offset.y,
          left: offset.x,
          transform: `scale(${scale})`
        }}
      >
        {children(offset, scale)}
      </div>
    </article>
  )
}

export default Board
