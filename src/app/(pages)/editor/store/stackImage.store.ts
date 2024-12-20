import { stacksStyles } from '@/shared/imageStyle'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type TUseStackImage = {
  amount: number
  stackStyle: string
  setAmount: (amount: number) => void
  setStackStyle: (style: string) => void
}

const useStackImage = create(
  persist<TUseStackImage>(
    set => ({
      amount: 1,
      stackStyle: stacksStyles.NONE(1),
      setAmount: amount => set({ amount }),
      setStackStyle: style => set({ stackStyle: style })
    }),
    { name: 'stackImage' }
  )
)

export default useStackImage
