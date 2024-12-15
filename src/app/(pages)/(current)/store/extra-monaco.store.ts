import { create } from 'zustand'

type Store = {
  fileName: string
  setFileName: (fileName: any) => void
}

export const useExtraMonacoStore = create<Store>(set => ({
  fileName: 'code-scape',
  setFileName: fileName => set({ fileName })
}))
