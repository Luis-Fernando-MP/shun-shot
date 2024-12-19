import { blurStyles } from '@/shared/imageStyle'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

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
const useShadowsImage = create(
  persist<TUseShadowsImage>(
    set => ({
      keyBlur: 'SPREAD',
      blur: blurStyles.SPREAD.blur,
      opacity: 10,
      XYSize: [0, 0, 0],
      setKeyBlur: keyBlur => set({ keyBlur }),
      setBlur: blur => set({ blur }),
      setOpacity: opacity => set({ opacity }),
      setXYSize: XYSize => set({ XYSize })
    }),
    { name: 'shadowsImageXYS' }
  )
)
export default useShadowsImage
