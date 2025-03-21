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
  background: null,
  backgroundWidth: 900,
  backgroundHeight: 600,

  setBackground: background => set({ background }),
  setBackgroundWidth: backgroundWidth => set({ backgroundWidth }),
  setBackgroundHeight: backgroundHeight => set({ backgroundHeight })
})

const useBackgroundStore = create(state)

export default useBackgroundStore
