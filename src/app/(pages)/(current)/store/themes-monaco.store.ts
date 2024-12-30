import { themesData } from '@/shared/themes/loadStaticThemes'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface IThemeMonacoStore {
  theme: any
  setTheme: (theme: any) => void
}

export const useThemeMonacoStore = create(
  persist<IThemeMonacoStore>(
    set => ({
      theme: {
        ...themesData['vs-dark'],
        name: 'vs-dark'
      },
      setTheme: theme => set({ theme })
    }),
    { name: 'monacoThemeStore' }
  )
)
