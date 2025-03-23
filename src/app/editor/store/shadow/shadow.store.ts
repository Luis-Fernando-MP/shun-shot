import { StateCreator, create } from 'zustand'

export type ShadowType = 'none' | 'simple' | 'extended' | 'light'

type Positions = { x: number; y: number }

interface Props {
  position: Positions

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
  setPosition: (position: Positions) => void

  getShadowStyle: () => string
}

// -11px 5px 20px     8px      black   0.8
//  x     y  blur  spread   color  opacity
const state: StateCreator<Props> = (set, get) => ({
  opacity: 0,
  blur: 0,
  spread: 0,
  color: 'red',
  type: 'none',
  position: { x: 0, y: 0 },

  setOpacity: opacity => set({ opacity }),
  setBlur: blur => set({ blur }),
  setSpread: spread => set({ spread }),
  setColor: color => set({ color }),
  setShadowType: type => set({ type }),
  setPosition: (position: Positions) => set({ position }),

  getShadowStyle: () => {
    const { opacity, blur, spread, color, type, position } = get()
    if (type === 'none') return 'none'
    return `${position.x}px ${position.y}px ${blur}px ${spread}px rgba(0,0,0, ${opacity.toFixed(2)})`
  }
})

const useShadowStore = create(state)

export default useShadowStore
