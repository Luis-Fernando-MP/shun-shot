import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type IUseCodeImage = {
  image64: string
  setImage64: (image64: string) => void
}

export const defaultImage = ''

const useCodeImage = create(
  persist<IUseCodeImage>(
    set => ({
      image64: defaultImage,
      setImage64: image64 => set({ image64 })
    }),
    { name: 'ju-shot-code-iamge' }
  )
)

export default useCodeImage
