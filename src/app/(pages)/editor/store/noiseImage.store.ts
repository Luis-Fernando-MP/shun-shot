import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type TUseNoiseImage = {
  opacity: number
  blur: number
  setOpacity: (opacity: number) => void
  setBlur: (blur: number) => void
}

const useNoiseImage = create(
  persist<TUseNoiseImage>(
    set => ({
      opacity: 0,
      blur: 0,
      setOpacity: opacity => set({ opacity }),
      setBlur: blur => set({ blur })
    }),
    { name: 'noiseImage' }
  )
)
export default useNoiseImage
