import { type ReactNode } from 'react'
import { createPortal } from 'react-dom'

import './style.scss'
import usePopup, { PopupPositions } from './usePopup'

interface IPopup extends React.HTMLAttributes<HTMLElement> {
  children?: Readonly<ReactNode[]> | null | Readonly<ReactNode>
  isOpen: boolean
  title?: string
  clickPosition?: PopupPositions
  onClose: () => void
}

const PopupComponent = ({
  children,
  className = '',
  isOpen,
  onClose,
  title,
  clickPosition = { x: 0, y: 0 },
  ...props
}: IPopup) => {
  const { $popupRef, handleMouseDown, isDragging, position } = usePopup({ isOpen, clickPosition, onClose })

  if (!isOpen) return null

  const RenderPopup = (
    <article
      role='button'
      tabIndex={0}
      ref={$popupRef}
      className='popup border'
      id='popup'
      onMouseDown={handleMouseDown}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        opacity: isOpen ? 1 : 0
      }}
    >
      <header
        className='popup-header'
        id='popup-header'
        style={{
          cursor: isDragging ? 'grabbing' : 'grab'
        }}
      >
        <button className='popup-closeButton' onClick={onClose} />
        <p>{title}</p>
      </header>
      <section className={`popup-container ${className}`} {...props}>
        {children}
      </section>
    </article>
  )

  return createPortal(RenderPopup, document.body)
}

export default PopupComponent
