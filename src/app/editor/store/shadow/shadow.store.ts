import { StateCreator, create } from 'zustand'

export type ShadowType = 'none' | 'simple' | 'extended' | 'light'

interface Props {
  type: ShadowType
  opacity: number
  blur: number
  spread: number
  color: string

  setOpacity: (opacity: number) => void
  setBlur: (blur: number) => void
  setSpread: (spread: number) => void
  setColor: (color: string) => void
  setShadowType: (type: ShadowType) => void

  getShadowStyle: () => string
}

// -11px 5px 20px     8px      black   0.8
//  x     y  blur  spread   color  opacity
const state: StateCreator<Props> = (set, get) => ({
  opacity: 0,
  blur: 0,
  spread: 0,
  color: 'rgba(0, 0, 0, 0.5)',
  type: 'none',

  setOpacity: opacity => set({ opacity }),
  setBlur: blur => set({ blur }),
  setSpread: spread => set({ spread }),
  setColor: color => set({ color }),
  setShadowType: type => set({ type }),

  getShadowStyle: () => {
    const { opacity, blur, spread, color, type } = get()
    if (type === 'none') return 'none'
    return `${opacity}px ${blur}px ${spread}px ${color}`
  }
})

const useShadowStore = create(state)

export default useShadowStore
