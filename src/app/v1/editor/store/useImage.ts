import { ICldColors } from '@/app/api/upload/CldImageResponse.type'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type TUseImage = {
  src: string | null
  colors: ICldColors[]
  setSrc: (src: string | null) => void
  setColors: (colors: ICldColors[]) => void
}

const useImage = create(
  persist<TUseImage>(
    set => ({
      src: null,
      colors: [],
      setSrc: src => set({ src }),
      setColors: colors => set({ colors })
    }),
    { name: 'imageSrc' }
  )
)

export default useImage
