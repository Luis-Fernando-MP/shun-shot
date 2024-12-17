import {
  MouseEvent,
  MutableRefObject,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react'

type IStylePosition = { x: number; y: number }

interface IStyleController {
  onMouseMove?: (positions: IStylePosition) => void
}

export interface IUseStyleController {
  containerRef: RefObject<HTMLDivElement>
  xy: IStylePosition
  isDraggingRef: MutableRefObject<boolean>
  handleGridClick: (i: number) => void
  handleDown: (e: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void
}

export const GRID_SIZE = 4
export const circles = Array.from({ length: GRID_SIZE * GRID_SIZE }).fill(0)

const useStyleController = ({ onMouseMove }: IStyleController): IUseStyleController => {
  const containerRef = useRef<HTMLDivElement>(null)
  // const [lightPosition, setLightPosition]
  const [xy, setXY] = useState<IStylePosition>({ x: 50, y: 50 })
  const isDraggingRef = useRef(false)

  const handleMouseMove = useCallback(
    (e: globalThis.MouseEvent) => {
      if (!isDraggingRef.current || !containerRef.current) return
      // Obtiene el área del contenedor
      const { left, top, width, height } = containerRef.current.getBoundingClientRect()
      // calcula las coordenadas relativas del puntero
      const x = ((e.clientX - left) / width) * 100
      const y = ((e.clientY - top) / height) * 100

      setXY({
        x: Math.max(0, Math.min(100, x)),
        y: Math.max(0, Math.min(100, y))
      })

      if (!onMouseMove) return
      onMouseMove({ x, y })
    },
    [onMouseMove]
  )

  const handleMouseUp = useCallback(() => {
    isDraggingRef.current = false
    console.log('-', isDraggingRef.current)
  }, [])

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [handleMouseMove, handleMouseUp])

  const handleGridClick = useCallback(
    (i: number) => {
      // Calcula las posiciones en la rejilla
      const x = i % GRID_SIZE
      const y = Math.floor(i / GRID_SIZE)
      const newX = ((x + 0.5) / GRID_SIZE) * 102
      const newY = ((y + 0.5) / GRID_SIZE) * 104
      setXY({ x: newX, y: newY })
      if (!onMouseMove) return
      onMouseMove({ x: newX, y: newY })
    },
    [onMouseMove]
  )

  const handleDown = useCallback(
    (e: MouseEvent<HTMLElement, globalThis.MouseEvent>): void => {
      e.preventDefault()
      if (e.target !== e.currentTarget) return
      isDraggingRef.current = true
      handleMouseMove(e as any)
    },
    [handleMouseMove]
  )

  return {
    containerRef,
    xy,
    isDraggingRef,
    handleGridClick,
    handleDown
  }
}

export default useStyleController
