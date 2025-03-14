import useBackgroundImage, { styleSetBackground } from '@/app/(pages)/editor/store/backgroundImage.store'
import { type JSX, memo } from 'react'

import { PhotosResult } from './unsplash.type'

interface IUnsplashImage {
  image: PhotosResult
}

const UnsplashImage = ({ image }: IUnsplashImage): JSX.Element => {
  const { setBackground } = useBackgroundImage()

  const handleClick = (): void => {
    const background = styleSetBackground(image.urls.full)
    setBackground(background)
  }

  return (
    <button className='unsplashCM-image animate-fade-in-up' onClick={handleClick}>
      <img src={image.urls.thumb} alt={image.slug} />
    </button>
  )
}

export default memo(UnsplashImage)
