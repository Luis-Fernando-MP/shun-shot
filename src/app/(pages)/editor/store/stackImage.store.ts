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
      amount: 4,
      stackStyle: 'NONE',
      setAmount: amount => set({ amount }),
      setStackStyle: style => set({ stackStyle: style })
    }),
    { name: 'stackImage' }
  )
)

export default useStackImage
