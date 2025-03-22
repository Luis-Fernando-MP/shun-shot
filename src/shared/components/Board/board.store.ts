import { StateCreator, create } from 'zustand'

export type Positions = { x: number; y: number }

interface IBoardStore {
  scale: number
  offset: Positions
  enableScroll: boolean
  nextChild: () => void
  prevChild: () => void
  moveToChild: (index: number) => void

  setNextChild: (fn: IBoardStore['nextChild']) => void
  setPrevChild: (fn: IBoardStore['prevChild']) => void
  setMoveToChild: (fn: IBoardStore['moveToChild']) => void

  setScale: (scale: number) => void
  setEnableScroll: (enableScroll: boolean) => void
  setOffset: (offset: Positions) => void
}

export const MIN_SCALE = 0.5
export const MAX_SCALE = 3
export const INITIAL_SCALE = 1

const state: StateCreator<IBoardStore> = set => ({
  scale: INITIAL_SCALE,
  offset: { x: 0, y: 0 },
  enableScroll: false,
  nextChild: () => {},
  prevChild: () => {},
  moveToChild: () => {},

  setEnableScroll: enableScroll => set({ enableScroll }),
  setScale: scale => set({ scale: Math.max(MIN_SCALE, Math.min(MAX_SCALE, scale)) }),
  setOffset: offset => set({ offset }),
  setNextChild: nextChild => set({ nextChild }),
  setPrevChild: prevChild => set({ prevChild }),
  setMoveToChild: moveToChild => set({ moveToChild })
})

const useBoardStore = create(state)

export default useBoardStore
