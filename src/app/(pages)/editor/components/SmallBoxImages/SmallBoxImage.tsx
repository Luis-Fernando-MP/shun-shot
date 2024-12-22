import { acl } from '@/shared/acl'
import { type HtmlHTMLAttributes, type JSX, memo } from 'react'

interface ISmallBoxImage extends HtmlHTMLAttributes<HTMLButtonElement> {
  image: string
  isActive: boolean
  setImage: (overlay: string) => void
}
const SmallBoxImage = ({ image, setImage, isActive, ...props }: ISmallBoxImage): JSX.Element => {
  const handleClick = (): void => {
    if (isActive) return
    setImage(image)
  }

  return (
    <button
      className={`smallBoxImages-item ${acl(isActive)} animate-fade-in-up`}
      onClick={handleClick}
      {...props}
    >
      <img className='smallBoxImages-item__image' src={image} alt='overlay' loading='lazy' />
    </button>
  )
}

export default memo(SmallBoxImage)
