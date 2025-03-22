import { CSSProperties } from 'react'
import { StateCreator, create } from 'zustand'

export type BorderType = 'solid' | 'gradient' | 'none'
export interface BorderConfigurationState {
  idBorderSelected: number
  color: string
  size: number
  gradient: string | null
  type: BorderType

  setColor: (color: string) => void
  setSize: (size: number) => void
  setGradient: (gradient: string) => void
  setType: (type: BorderType) => void

  getBorderStyle: () => CSSProperties | null
  setIdBorderSelected: (idBorderSelected: number) => void
}

const state: StateCreator<BorderConfigurationState> = (set, get) => ({
  idBorderSelected: 0,
  color: 'rgb(var(--tn-primary))',
  size: 5,
  type: 'none',
  gradient: null,

  setColor: color => set({ color }),
  setSize: size => set({ size }),
  setGradient: gradient => set({ gradient }),
  setType: type => set({ type }),
  setIdBorderSelected: idBorderSelected => set({ idBorderSelected }),

  getBorderStyle: () => {
    const { color, size, type } = get()
    if (type === 'none') return { border: 'none', background: 'none' }

    const newBorder: CSSProperties = { border: `${size}px solid ${color}`, background: 'none' }
    if (type === 'solid') return newBorder

    return {
      background: get().gradient ?? `linear-gradient(to bottom right, ${color}, ${color}) border-box`,
      border: `${size}px solid transparent`
    }
  }
})

const UseImagesBorderStoreStore = create(state)

export default UseImagesBorderStoreStore
