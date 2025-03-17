import { monacoFonts } from '@/shared/fonts/monaco-fonts'
import { StateCreator, create } from 'zustand'

interface IMonacoBasicOptionsStore {
  language: string
  typography: string

  setLanguage: (language: string) => void
  setTypography: (typography: string) => void
}

const state: StateCreator<IMonacoBasicOptionsStore> = set => ({
  language: 'typescript', // Lenguaje de programación predeterminado
  typography: monacoFonts.monospace.style.fontFamily, // Tipografía utilizada en el editor

  setLanguage: language => set({ language }),
  setTypography: typography => set({ typography })
})

const useMonacoBasicOptionsStore = create(state)

export default useMonacoBasicOptionsStore
