import { MouseEvent, useCallback, useEffect, useRef, useState } from 'react'

export type PopupPositions = { x: number; y: number }

interface IUsePopupHook {
  isOpen: boolean
  clickPosition?: PopupPositions
  onClose: () => void
}

const usePopup = ({ isOpen, clickPosition, onClose }: IUsePopupHook) => {
  const $popupRef = useRef<HTMLElement>(null)
  const $dragPosition = useRef<PopupPositions | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [position, setPosition] = useState<PopupPositions>({ x: 0, y: 0 })
  const bodyRect = document.documentElement.getBoundingClientRect()

  const handleMouseMove = useCallback(
    (e: globalThis.MouseEvent) => {
      requestAnimationFrame(() => {
        if (!isDragging || !$dragPosition.current || !$popupRef.current) return
        e.preventDefault()
        const rect = $popupRef.current.getBoundingClientRect()
        const deltaX = e.clientX - $dragPosition.current.x
        const deltaY = e.clientY - $dragPosition.current.y
        const minX = 0
        const minY = 0
        const maxX = bodyRect.width - rect.width
        const maxY = bodyRect.height - rect.height
        $dragPosition.current = { x: e.clientX, y: e.clientY }
        setPosition(prev => {
          let newX = prev.x + deltaX
          let newY = prev.y + deltaY
          newX = Math.max(minX, Math.min(newX, maxX))
          newY = Math.max(minY, Math.min(newY, maxY))
          return { x: newX, y: newY }
        })
      })
    },
    [bodyRect, isDragging]
  )

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleMouseDown = (e: MouseEvent) => {
    const moveOnHeader = (e.target as HTMLElement).closest('#popup-header')
    if (!$popupRef.current || (!moveOnHeader && !e.ctrlKey)) return
    setIsDragging(true)
    $dragPosition.current = { x: e.clientX, y: e.clientY }
  }

  const calculateInitialPosition = useCallback(
    (rect: DOMRect) => {
      if (!clickPosition) return

      $popupRef.current?.classList.add('animate')
      const { width: popupWidth, height: popupHeight } = rect
      const { width: innerWidth, height: innerHeight } = bodyRect
      let { x: newX, y: newY } = clickPosition
      if (newX === 0 && newY === 0) {
        newX = innerWidth / 2 - popupWidth / 2
        newY = innerHeight / 2 - popupHeight / 2
      }

      newX = Math.min(newX, innerWidth - popupWidth)
      newY = Math.min(newY, innerHeight - popupHeight)

      handleRemoveAnimatedClass()

      return { x: newX, y: newY }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [bodyRect]
  )

  const handleRemoveAnimatedClass = useCallback(() => {
    if (!$popupRef.current) return

    const removeClass = () => {
      $popupRef.current?.classList.remove('animate')
      $popupRef.current?.removeEventListener('animationend', removeClass)
    }

    $popupRef.current.addEventListener('animationend', removeClass)
  }, [])

  useEffect(() => {
    if (!$popupRef.current || !isOpen) return
    const rect = $popupRef.current.getBoundingClientRect()
    const newPosition = calculateInitialPosition(rect)
    if (!newPosition) return
    if (position.x !== newPosition.x || position.y !== newPosition.y) {
      setPosition(newPosition)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  useEffect(() => {
    if (!isOpen || !$popupRef.current) return
    const handleKeyEvent = (e: KeyboardEvent): void => {
      if (!(e.ctrlKey && (e.key === 'x' || e.key === 'Escape'))) return
      onClose()
    }
    $popupRef.current.addEventListener('keydown', handleKeyEvent)
    return () => {
      $popupRef.current?.removeEventListener('keydown', handleKeyEvent)
    }
  }, [isOpen, onClose])

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [handleMouseMove, handleMouseUp])

  return {
    $popupRef,
    position,
    handleMouseDown,
    isDragging
  }
}

export default usePopup
