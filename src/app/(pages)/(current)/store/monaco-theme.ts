import { themesData } from '@/shared/themes/loadStaticThemes'
import { create } from 'zustand'

import { ThemesMonaco } from '../components/themes/monaco-type'

type Store = {
  theme: ThemesMonaco | null
  setTheme: (theme: ThemesMonaco) => void
}

export const useThemeMonacoStore = create<Store>(set => ({
  theme: {
    ...themesData['vs-dark'],
    name: 'vs-dark'
  },
  setTheme: theme => set({ theme })
}))
