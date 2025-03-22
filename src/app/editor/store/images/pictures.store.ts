import { StateCreator, create } from 'zustand'

interface Picture {
  selected?: boolean
  url: string
}

interface IPicturesStore {
  pictures: Picture[]
  addPicture: (picture: Picture) => void
  addPictures: (pictures: Picture[]) => void
  getCurrentPicture: () => Picture | null
}

const state: StateCreator<IPicturesStore> = (set, get) => ({
  pictures: [],
  addPicture: picture => {
    const prev = get().pictures
    const newPictures = [...prev, picture]
    set({ pictures: newPictures })
  },
  addPictures: pictures => {
    const prev = get().pictures
    const newPictures = [...prev, ...pictures]
    set({ pictures: newPictures })
  },
  getCurrentPicture: () => {
    const pictures = get().pictures
    if (pictures.length === 0) return null
    const currentSelected = pictures.find(path => path.selected)
    if (!currentSelected) return pictures[0]
    return currentSelected
  }
})

const usePicturesStore = create(state)

export default usePicturesStore
