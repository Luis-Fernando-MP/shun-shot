import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type TUseOverlayImage = {
  opacity: number
  overlay: string
  setOpacity: (opacity: number) => void
  setOverlay: (overlay: string) => void
}

const useOverlayImage = create(
  persist<TUseOverlayImage>(
    set => ({
      opacity: 40,
      overlay: '',
      setOpacity: opacity => set({ opacity }),
      setOverlay: overlay => set({ overlay })
    }),
    { name: 'overlayImage' }
  )
)
export default useOverlayImage
