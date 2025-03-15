import { useCallback, useEffect, useRef, useState } from 'react'

import useBoardStore, { MAX_SCALE, MIN_SCALE, Positions } from './board.store'

interface IUseBoardHook {
  isCenter: boolean
  minScale?: boolean
}

export interface BoardRef {
  nextChild: () => void
  prevChild: () => void
  moveToChild: (index: number) => void
  handleScale: (scale: number) => void
}

const useBoard = ({ isCenter, minScale = false }: IUseBoardHook) => {
  const { offset, scale, setOffset, setScale, setPrevChild, setNextChild, setMoveToChild, enableScroll } = useBoardStore()
  const $containerRef = useRef<HTMLDivElement>(null)
  const $childrenRef = useRef<HTMLDivElement>(null)

  const [isMoving, setIsMoving] = useState(false)
  const [lastMousePosition, setLastMousePosition] = useState<Positions | null>(null)
  const [childIndex, setChildIndex] = useState(0)

  const handleScale = (scale: number): void => {
    setScale(scale)
  }

  const noExistRefs = !$containerRef.current || !$childrenRef.current

  const getDynamicScale = (parent: DOMRect, children: DOMRect) => {
    const paAspect = parent.width / parent.height
    const chiAspect = children.width / children.height
    let scale: number
    if (paAspect > chiAspect) scale = parent.height / children.height
    else scale = parent.width / children.width
    const maxScale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, scale))
    const minScale = Math.min(MIN_SCALE, Math.min(MAX_SCALE, scale))
    return { scale, maxScale, minScale }
  }

  const centerAndFit = useCallback(() => {
    if (!$containerRef.current || !$childrenRef.current) return
    const paRect = $containerRef.current.getBoundingClientRect()
    const chiRect = $childrenRef.current.getBoundingClientRect()
    const { scale } = getDynamicScale(paRect, chiRect)
    const newOffsetX = (paRect.width - chiRect.width * scale) / 2
    const newOffsetY = (paRect.height - chiRect.height * scale) / 2
    setScale(scale)
    setOffset({ x: newOffsetX, y: newOffsetY })
  }, [setOffset, setScale])

  const moveToChild = useCallback(
    (index: number, extraScale: number = 1) => {
      if (!$childrenRef.current || !$containerRef.current) return
      const children = Array.from($childrenRef.current.children) as HTMLElement[]
      if (index < 0 || index >= children.length) return

      const paRect = $containerRef.current.getBoundingClientRect()
      const chiRect = children[index].getBoundingClientRect()
      const childrenRect = $childrenRef.current.getBoundingClientRect()

      const distance = chiRect.left - childrenRect.left
      const centerXSpace = paRect.width / 2 - (chiRect.width * extraScale) / 2
      const newOffsetY = (paRect.height - childrenRect.height * extraScale) / 2

      setOffset({ x: -distance + centerXSpace, y: newOffsetY })
      setChildIndex(index)
      if (extraScale === 1) $childrenRef.current.classList.add('animate')
      setTimeout(() => {
        $childrenRef.current?.classList.remove('animate')
      }, 300)
    },
    [setOffset]
  )

  const centerWithSpacing = useCallback(() => {
    if (!$containerRef.current || !$childrenRef.current) return
    const paRect = $containerRef.current.getBoundingClientRect()
    const childrenRect = $childrenRef.current.getBoundingClientRect()
    const { minScale: appMinScale, maxScale } = getDynamicScale(paRect, childrenRect)
    setScale(minScale ? appMinScale : maxScale)
    moveToChild(0, minScale ? appMinScale : maxScale)
  }, [moveToChild, setScale])

  const handleBoardDown = (e: React.MouseEvent) => {
    if (e.ctrlKey) {
      e.preventDefault()
      setIsMoving(true)
      setLastMousePosition({ x: e.clientX, y: e.clientY })
    }
  }

  const handleBoardMove = (e: React.MouseEvent) => {
    if (!isMoving || !lastMousePosition) return
    const deltaX = e.clientX - lastMousePosition.x
    const deltaY = e.clientY - lastMousePosition.y
    setOffset({
      x: offset.x + deltaX,
      y: offset.y + deltaY
    })
    setLastMousePosition({ x: e.clientX, y: e.clientY })
  }

  const handleBoardUp = () => {
    setIsMoving(false)
    setLastMousePosition(null)
  }

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      if (!e.ctrlKey) return
      e.preventDefault()
      const zoomFactor = 1.1
      const canvas = $containerRef.current
      if (!canvas) return
      const newScale = e.deltaY < 0 ? scale * zoomFactor : scale / zoomFactor
      const clampedScale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, newScale))
      const rect = canvas.getBoundingClientRect()
      const mouseX = (e.clientX - rect.left - offset.x) / scale
      const mouseY = (e.clientY - rect.top - offset.y) / scale
      setScale(clampedScale)
      setOffset({
        x: offset.x - mouseX * (clampedScale - scale),
        y: offset.y - mouseY * (clampedScale - scale)
      })
    },
    [offset, scale, setOffset, setScale]
  )

  const nextChild = useCallback(() => {
    moveToChild(childIndex + 1)
  }, [childIndex, moveToChild])

  const prevChild = useCallback(() => {
    moveToChild(childIndex - 1)
  }, [childIndex, moveToChild])

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0]
    handleBoardDown({ clientX: touch.clientX, clientY: touch.clientY } as React.MouseEvent)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    const touch = e.touches[0]
    handleBoardMove({ clientX: touch.clientX, clientY: touch.clientY } as React.MouseEvent)
  }

  const handleTouchEnd = () => {
    handleBoardUp()
  }

  useEffect(() => {
    const canvas = $containerRef.current
    if (canvas && !enableScroll) {
      canvas.addEventListener('wheel', handleWheel, { passive: false })
    }
    return () => {
      canvas?.removeEventListener('wheel', handleWheel)
    }
  }, [scale, offset, enableScroll, handleWheel])

  useEffect(() => {
    if (isCenter) return centerAndFit()
    centerWithSpacing()
  }, [centerAndFit, centerWithSpacing, isCenter])

  useEffect(() => {
    setPrevChild(prevChild)
    setNextChild(nextChild)
    setMoveToChild(moveToChild)
  }, [setPrevChild, setNextChild, setMoveToChild, prevChild, nextChild, moveToChild])

  return {
    $containerRef,
    $childrenRef,
    noExistRefs,
    isMoving,
    offset,
    scale,
    handleScale,
    handleBoardDown,
    handleBoardMove,
    handleBoardUp,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd
  }
}

export default useBoard
