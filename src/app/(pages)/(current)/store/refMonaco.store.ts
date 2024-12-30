import { create } from 'zustand'

interface IRefMonacoStore {
  refIde: any
  setRefIde: (refIde: any) => void
}

export const useRefMonacoStore = create<IRefMonacoStore>(set => ({
  refIde: null,
  setRefIde: refIde => set({ refIde })
}))
