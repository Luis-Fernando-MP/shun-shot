import { themesData } from '@/shared/themes/loadStaticThemes'
import { create } from 'zustand'

type Store = {
  theme: any
  setTheme: (theme: any) => void
}

export const useThemeMonacoStore = create<Store>(set => ({
  theme: {
    ...themesData['vs-dark'],
    name: 'vs-dark'
  },
  setTheme: theme => set({ theme })
}))
