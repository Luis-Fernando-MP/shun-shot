import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type TPatternImage = {
  blur: number
  opacity: number
  patternClass: string
  setBlur: (blur: number) => void
  setOpacity: (opacity: number) => void
  setPattern: (patternClass: string) => void
}

const usePatternImage = create(
  persist<TPatternImage>(
    set => ({
      opacity: 60,
      blur: 10,
      patternClass: '',
      setBlur: blur => set({ blur }),
      setOpacity: opacity => set({ opacity }),
      setPattern: patternClass => set({ patternClass })
    }),
    { name: 'patternImage' }
  )
)
export default usePatternImage
