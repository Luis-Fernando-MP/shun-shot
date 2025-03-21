import { StateCreator, create } from 'zustand'

interface IImagesStore {
  paths: string[]
  setPaths: (paths: string[]) => void
}

const state: StateCreator<IImagesStore> = set => ({
  paths: [],
  setPaths: (paths: string[]) => set({ paths: paths })
})

const useImagesStore = create(state)

export default useImagesStore
