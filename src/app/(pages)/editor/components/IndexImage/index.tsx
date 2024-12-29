import { acl } from '@/shared/acl'
import useIndexImage from '@editor-store/indexImage.store'
import type { JSX } from 'react'

import './style.scss'

interface IIndexImageComponent {
  indexImage: number
}
const IndexImageComponent = ({ indexImage }: IIndexImageComponent): JSX.Element => {
  const { index, setIndex } = useIndexImage()

  const isOverlappingIndex = index >= indexImage

  const handleClick = (): void => {
    if (isOverlappingIndex) return setIndex(1)
    setIndex(indexImage)
  }

  return (
    <button
      className={`indexImageAction ${acl(isOverlappingIndex, 'overlapping')}`}
      onClick={handleClick}
    >
      {isOverlappingIndex ? 'subyacer' : 'Superponer'} Imagen
    </button>
  )
}

export default IndexImageComponent
