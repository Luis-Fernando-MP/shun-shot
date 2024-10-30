import { type IThemeState, type IThemes, themes } from '@/app/components/Themes/themes'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { borderStyles, perspectivesStyles } from '../(pages)/editor/data'

type TUseStyleCode = {
  border: number
  transform: string
  setBorder: (border: number) => void
  setTransform: (border: string) => void
}

export const getTheme = (theme: IThemes): IThemeState => {
  return {
    name: theme,
    ...(themes[theme] ?? themes.vscodeDark)
  }
}

const useStyleCode = create(
  persist<TUseStyleCode>(
    set => ({
      border: borderStyles.CURVE,
      transform: perspectivesStyles[0].transform,
      setTransform: transform => set({ transform }),
      setBorder: border => set({ border })
    }),
    {
      name: 'ju-style-editor'
    }
  )
)

export default useStyleCode
