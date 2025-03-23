import { StateCreator, create } from 'zustand'

interface IShadowPositionStore {
  x: number
  y: number
  setX: (x: number) => void
  setY: (y: number) => void
}

const state: StateCreator<IShadowPositionStore> = set => ({
  x: 0,
  y: 0,
  setX: x => set({ x }),
  setY: y => set({ y })
})

const ShadowPositionStore = create(state)

export default ShadowPositionStore
