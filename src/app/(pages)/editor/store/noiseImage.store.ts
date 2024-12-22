import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type TUseNoiseImage = {
  opacity: number
  noise: string
  blur: number
  setOpacity: (opacity: number) => void
  setNoise: (noise: string) => void
  setBlur: (blur: number) => void
}

const useNoiseImage = create(
  persist<TUseNoiseImage>(
    set => ({
      opacity: 0,
      noise: '',
      blur: 0,
      setOpacity: opacity => set({ opacity }),
      setNoise: noise => set({ noise }),
      setBlur: blur => set({ blur })
    }),
    { name: 'noiseImage' }
  )
)
export default useNoiseImage
