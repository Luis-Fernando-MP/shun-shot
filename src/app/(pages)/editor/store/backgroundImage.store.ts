import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type TUseBackgroundImage = {
  background: string
  setBackground: (background: string) => void
}

const useBackgroundImage = create(
  persist<TUseBackgroundImage>(
    set => ({
      background: '',
      setBackground: background => set({ background })
    }),
    { name: 'BackgroundImage' }
  )
)
export default useBackgroundImage

export function styleSetBackground(url: string) {
  return `no-repeat 50% 50% / cover url(${url})`
}
