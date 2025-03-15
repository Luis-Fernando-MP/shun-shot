import { acl } from '@/shared/acl'
import { CircleSlash2Icon, RefreshCwIcon } from 'lucide-react'
import { memo } from 'react'

import SmallBoxImage from './SmallBoxImage'
import './style.scss'
import useSmallBoxImages from './useSmallBoxImages'

interface ISmallBoxImages {
  image: string
  generatorImages: (start: number, amount: number) => string[]
  minValue: number
  maxValue: number
  setImage: (image: string) => void
}

const SmallBoxImages = ({ image, setImage, generatorImages, minValue, maxValue }: ISmallBoxImages): JSX.Element => {
  const { resetInRange, boxImages, handleAdd, handleReset, handleToggleAll } = useSmallBoxImages({
    generatorImages,
    minValue,
    maxValue
  })

  return (
    <section className='smallBoxImages-items'>
      <button className={`smallBoxImages-action none ${acl(image === '')}`} onClick={() => setImage('')}>
        <CircleSlash2Icon />
      </button>

      {boxImages.map(img => (
        <SmallBoxImage key={img} isActive={image === img} image={img} setImage={setImage} />
      ))}

      {boxImages.length < maxValue && (
        <button className='smallBoxImages-action' onClick={() => handleAdd(10)}>
          <h3>10+</h3>
        </button>
      )}

      {resetInRange && (
        <button className='smallBoxImages-action' onClick={handleReset}>
          <RefreshCwIcon />
        </button>
      )}

      <button className='smallBoxImages-action' onClick={handleToggleAll}>
        {boxImages.length === maxValue ? (
          <RefreshCwIcon />
        ) : (
          <h4>
            {boxImages.length}/{maxValue}
          </h4>
        )}
      </button>
    </section>
  )
}

export default memo(SmallBoxImages)
