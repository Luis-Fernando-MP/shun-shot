import { JSX, memo } from 'react'
import type { DebouncedState } from 'usehooks-ts'

import UnsplashImage from './UnsplashImage'
import { Photos } from './unsplash.type'

interface IUnsplashImages {
  images: Photos['results']
  setQuery: DebouncedState<(value: string) => void>
}

const recommendations = {
  Abstractos: 'Abstract',
  Geométricos: 'Geometric',
  Minimalistico: 'Minimalistic',
  Naturaleza: 'Nature',
  'Paisajes urbanos': 'Urban landscapes',
  Retratos: 'Portraits',
  Macro: 'Macro',
  'Arte conceptual': 'Conceptual art',
  Vintage: 'Vintage',
  'Matte oscuro': 'Dark matte'
}

const UnsplashImages = ({ images, setQuery }: IUnsplashImages): JSX.Element => {
  const RecommendedImages = () => {
    return (
      <section className='unsplashCM-subSection'>
        <h4>Opciones Recomendadas</h4>
        <div className='unsplashCM-recommended'>
          {Object.entries(recommendations).map(rec => {
            const [key, value] = rec
            return (
              <button
                key={key}
                className='unsplashCM-recommended__option'
                onClick={() => setQuery(value)}
              >
                {key}
              </button>
            )
          })}
        </div>
      </section>
    )
  }

  const ListOfImages = () => {
    return (
      <section className='unsplashCM-images'>
        <div>
          {images.map(image => {
            const key = image.id + Date.now()
            return <UnsplashImage key={key} image={image} />
          })}
        </div>
      </section>
    )
  }

  return images?.length >= 1 ? <ListOfImages /> : <RecommendedImages />
}

export default memo(UnsplashImages)
