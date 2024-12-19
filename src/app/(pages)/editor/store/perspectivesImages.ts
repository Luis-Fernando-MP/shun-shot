import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type TUsePerspectivesImages = {
  perspective: string
  setPerspective: (perspective: string) => void
}

const usePerspectivesImages = create(
  persist<TUsePerspectivesImages>(
    set => ({
      perspective: '',
      setPerspective: perspective => set({ perspective })
    }),
    { name: 'perspectivesImages' }
  )
)

export default usePerspectivesImages
