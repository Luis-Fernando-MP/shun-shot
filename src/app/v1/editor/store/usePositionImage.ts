import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { IStylePosition } from '../components/CirclesComponent/useStyleController'

type TUsePositionImage = {
  scale: number
  position: IStylePosition
  setScale: (scale: number) => void
  setPosition: (position: IStylePosition) => void
}

const usePositionImage = create(
  persist<TUsePositionImage>(
    set => ({
      scale: 0.8,
      position: { x: 50, y: 50 },
      setScale: scale => set({ scale }),
      setPosition: position => set({ position })
    }),
    { name: 'positionImage' }
  )
)

export default usePositionImage
