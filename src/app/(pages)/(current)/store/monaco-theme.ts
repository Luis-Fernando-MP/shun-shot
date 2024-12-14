import { create } from 'zustand'

import vsDark from '../components/themes/data/vs-dark.json'
import { ThemesMonaco } from '../components/themes/monaco-type'

type Store = {
  theme: ThemesMonaco | null
  setTheme: (theme: ThemesMonaco) => void
}

export const useThemeMonacoStore = create<Store>(set => ({
  theme: vsDark,
  setTheme: theme => set({ theme })
}))
