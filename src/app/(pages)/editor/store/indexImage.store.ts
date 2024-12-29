import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type TUseIndexImage = {
  index: number
  setIndex: (index: number) => void
}

const useIndexImage = create(
  persist<TUseIndexImage>(
    set => ({
      // El valor esta declarado en el archivo de estilos del componente DrawingComponent
      index: 4,
      setIndex: index => set({ index })
    }),
    { name: 'indexImage' }
  )
)
export default useIndexImage
