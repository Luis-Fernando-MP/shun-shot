import { ThemeMonacoName, monacoThemes } from '@/shared/themes/monacoThemes'
import { ThemeMonaco } from '@/shared/themes/monacoThemes.type'
import { StateCreator, create } from 'zustand'

interface IMonacoThemeStore {
  themeName: ThemeMonacoName
  setThemeName: (themeName: ThemeMonacoName) => void
  getCurrentTheme: () => ThemeMonaco
}

const state: StateCreator<IMonacoThemeStore> = (set, get) => ({
  themeName: 'vs-light',
  setThemeName: themeName => set({ themeName }),
  getCurrentTheme: () => {
    const { themeName } = get()
    return monacoThemes[themeName] as any as ThemeMonaco
  }
})

const useMonacoThemeStore = create(state)

export default useMonacoThemeStore
