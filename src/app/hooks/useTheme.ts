import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { IThemeState, type IThemes, themes } from '../components/Themes/themes'

type TUseTheme = {
  themeName: IThemes
  setTheme: (themeName: IThemes) => void
}

export const getTheme = (theme: IThemes): IThemeState => {
  return {
    name: theme,
    ...(themes[theme] ?? themes.vscodeDark)
  }
}

const useTheme = create(
  persist<TUseTheme>(
    set => ({
      themeName: 'vscodeDark',
      setTheme: themeName => set({ themeName })
    }),
    {
      name: 'ju-code-themes'
    }
  )
)

export default useTheme
