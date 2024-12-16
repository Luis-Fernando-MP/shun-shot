import { create } from 'zustand'

type TUsePositionImage = {
  scale: number
  position: { x: number; y: number }
  setScale: (scale: number) => void
  setPosition: (position: { x: number; y: number }) => void
}

const usePositionImage = create<TUsePositionImage>(set => ({
  scale: 1,
  position: { x: 50, y: 50 },
  setScale: scale => set({ scale }),
  setPosition: position => set({ position })
}))

export default usePositionImage
