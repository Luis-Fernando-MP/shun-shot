import { blurStyles } from '@/shared/imageStyle'
import { create } from 'zustand'

type TUseShadowsImage = {
  keyBlur: string
  XYSize: [number, number, number]
  blur: number
  opacity: number
  setKeyBlur: (keyBlur: string) => void
  setXYSize: (XYSize: [number, number, number]) => void
  setBlur: (blur: number) => void
  setOpacity: (opacity: number) => void
}

// -11px 5px 20px     8px      black   0.8
//  x     y  blur  spread   color  opacity
const useShadowsImage = create<TUseShadowsImage>(set => ({
  keyBlur: 'MULTI',
  blur: blurStyles.MULTI.blur,
  opacity: 20,
  XYSize: [10, 10, 10],
  setKeyBlur: keyBlur => set({ keyBlur }),
  setBlur: blur => set({ blur }),
  setOpacity: opacity => set({ opacity }),
  setXYSize: XYSize => set({ XYSize })
}))
export default useShadowsImage
