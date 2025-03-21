import { StateCreator, create } from 'zustand'

interface IBackgroundStore {
  background: string | null
  backgroundWidth: number
  backgroundHeight: number

  setBackground: (background: string) => void
  setBackgroundWidth: (backgroundWidth: number) => void
  setBackgroundHeight: (backgroundHeight: number) => void
}

const state: StateCreator<IBackgroundStore> = set => ({
  activeIndividualBorder: false,
  borderLTRadius: 20,
  borderRTRadius: 20,
  borderLBRadius: 20,
  borderRBRadius: 20,
  borderRadius: 20,

  background: null,
  backgroundWidth: 900,
  backgroundHeight: 600,

  setBackground: background => set({ background }),
  setBackgroundWidth: backgroundWidth => set({ backgroundWidth }),
  setBackgroundHeight: backgroundHeight => set({ backgroundHeight })
})

const useBackgroundStore = create(state)

export default useBackgroundStore
