import { monacoFonts } from '@/shared/fonts/monaco-fonts'
import monacoLanguagesIcons, { MonacoLanguage } from '@/shared/monaco-languages'
import { StateCreator, create } from 'zustand'

interface IShumOptionsStore {
  language: MonacoLanguage
  typography: string
  showLanguageIcon: boolean
  shadowLanguage: boolean
  borderRadius: number

  containerWidth: number
  containerHeight: number
  containerPadding: number
  containerBorderRadius: number

  setLanguage: (language: MonacoLanguage) => void
  setTypography: (typography: string) => void
  setShowLanguageIcon: (showLanguageIcon: boolean) => void

  setShadowLanguage: (shadowLanguage: boolean) => void
  setBorderRadius: (borderRadius: number) => void
  setContainerWidth: (containerWidth: number) => void
  setContainerHeight: (containerHeight: number) => void
  setContainerPadding: (containerPadding: number) => void
  setContainerBorderRadius: (containerBorderRadius: number) => void
}

const state: StateCreator<IShumOptionsStore> = set => ({
  language: monacoLanguagesIcons['Frontend Web'].typescript,
  typography: monacoFonts.monospace.style.fontFamily,
  showLanguageIcon: true,

  shadowLanguage: true,
  borderRadius: 0,
  containerWidth: 0,
  containerHeight: 0,
  containerPadding: 0,
  containerBorderRadius: 0,

  setLanguage: language => set({ language }),
  setTypography: typography => set({ typography }),
  setShowLanguageIcon: showLanguageIcon => set({ showLanguageIcon }),

  setShadowLanguage: shadowLanguage => set({ shadowLanguage }),
  setBorderRadius: borderRadius => set({ borderRadius }),
  setContainerWidth: containerWidth => set({ containerWidth }),
  setContainerHeight: containerHeight => set({ containerHeight }),
  setContainerPadding: containerPadding => set({ containerPadding }),
  setContainerBorderRadius: containerBorderRadius => set({ containerBorderRadius })
})

const useShumOptionsStore = create(state)

export default useShumOptionsStore
