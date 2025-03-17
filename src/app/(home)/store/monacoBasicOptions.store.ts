import { monacoFonts } from '@/shared/fonts/monaco-fonts'
import monacoLanguagesIcons, { MonacoLanguage } from '@/shared/monaco-languages'
import { StateCreator, create } from 'zustand'

interface IMonacoBasicOptionsStore {
  language: MonacoLanguage
  typography: string

  setLanguage: (language: MonacoLanguage) => void
  setTypography: (typography: string) => void
}

const state: StateCreator<IMonacoBasicOptionsStore> = set => ({
  language: monacoLanguagesIcons['Frontend Web'].typescript,
  typography: monacoFonts.monospace.style.fontFamily,

  setLanguage: language => set({ language }),
  setTypography: typography => set({ typography })
})

const useMonacoBasicOptionsStore = create(state)

export default useMonacoBasicOptionsStore
