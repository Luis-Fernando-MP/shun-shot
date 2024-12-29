import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type TUseBackgroundImage = {
  background: string
  blendMode: string
  setBackground: (background: string) => void
  setBlendMode: (blendMode: string) => void
}

const useBackgroundImage = create(
  persist<TUseBackgroundImage>(
    set => ({
      background:
        'linear-gradient(135deg, rgb(215, 235, 235), rgb(244, 175, 233), rgb(114, 123, 251))',
      blendMode: 'normal',
      setBackground: background => set({ background }),
      setBlendMode: blendMode => set({ blendMode })
    }),
    { name: 'BackgroundImage' }
  )
)
export default useBackgroundImage

export function styleSetBackground(url: string) {
  return `no-repeat 50% 50% / cover url(${url})`
}
