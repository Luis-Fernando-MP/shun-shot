import { StateCreator, create } from 'zustand'

interface IBackgroundStore {
  borderRadius: number
  background: string | null
  backgroundWidth: number
  backgroundHeight: number

  setBorderRadius: (borderRadius: number) => void
  setBackground: (background: string) => void
  setBackgroundWidth: (backgroundWidth: number) => void
  setBackgroundHeight: (backgroundHeight: number) => void
}

const state: StateCreator<IBackgroundStore> = set => ({
  borderRadius: 20,
  background: null,
  backgroundWidth: 900,
  backgroundHeight: 600,

  setBorderRadius: borderRadius => set({ borderRadius }),
  setBackground: background => set({ background }),
  setBackgroundWidth: backgroundWidth => set({ backgroundWidth }),
  setBackgroundHeight: backgroundHeight => set({ backgroundHeight })
})

const useBackgroundStore = create(state)

export default useBackgroundStore
