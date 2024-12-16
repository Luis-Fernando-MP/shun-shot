import { borderStyles } from '@/shared/imageStyle'
import { create } from 'zustand'

type TUseStyleImage = {
  border: number
  setBorder: (border: number) => void
}

const useStyleImage = create<TUseStyleImage>(set => ({
  border: borderStyles.CURVE,
  setBorder: border => set({ border })
}))
export default useStyleImage
