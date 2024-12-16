import { stacksStyles } from '@/shared/imageStyle'
import { create } from 'zustand'

type TUseStackImage = {
  amount: number
  stackStyle: string
  stackKey: string
  setAmount: (amount: number) => void
  setStackStyle: (style: string) => void
  setStackKey: (key: string) => void
}

const useStackImage = create<TUseStackImage>(set => ({
  amount: 2,
  stackStyle: stacksStyles.OFFSET(2),
  stackKey: 'OFFSET',

  setAmount: amount => set({ amount }),
  setStackStyle: style => set({ stackStyle: style }),
  setStackKey: key => set({ stackKey: key })
}))

export default useStackImage
