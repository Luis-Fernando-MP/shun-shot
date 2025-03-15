import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type TUseBackgroundFilterImage = {
  blur: number
  brightness: number
  opacity: number
  hueRotation: number
  sepia: number
  grayscale: number
  setBlur: (blur: number) => void
  setBrightness: (brightness: number) => void
  setOpacity: (opacity: number) => void
  setHueRotation: (hueRotation: number) => void
  setSepia: (sepia: number) => void
  setGrayscale: (grayscale: number) => void
}

const useBackgroundFilterImage = create(
  persist<TUseBackgroundFilterImage>(
    set => ({
      blur: 0,
      brightness: 100,
      opacity: 100,
      hueRotation: 360,
      sepia: 0,
      grayscale: 0,
      setBlur: blur => set({ blur }),
      setBrightness: brightness => set({ brightness }),
      setOpacity: opacity => set({ opacity }),
      setHueRotation: hueRotation => set({ hueRotation }),
      setSepia: sepia => set({ sepia }),
      setGrayscale: grayscale => set({ grayscale })
    }),
    { name: 'BackgroundFilterImage' }
  )
)

export default useBackgroundFilterImage
