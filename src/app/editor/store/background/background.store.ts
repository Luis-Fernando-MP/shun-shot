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

  setBackgroundWidth: backgroundWidth => set({ backgroundWidth }),
  setBackgroundHeight: backgroundHeight => set({ backgroundHeight }),
  setBackground: background => {
    // TODO: Hacer que el fondo se aplique a todo el documento
    //  const body = document.body
    // if (body) {
    //   body.style.background = background
    // }
    set({ background })
  }
})

const useBackgroundStore = create(state)

export default useBackgroundStore
