import { borderStyles } from '@/shared/imageStyle'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type TUseStyleImage = {
  border: number
  setBorder: (border: number) => void
}

const useStyleImage = create(
  persist<TUseStyleImage>(
    set => ({
      border: borderStyles.CURVE,
      setBorder: border => set({ border })
    }),
    { name: 'styleImage' }
  )
)
export default useStyleImage
