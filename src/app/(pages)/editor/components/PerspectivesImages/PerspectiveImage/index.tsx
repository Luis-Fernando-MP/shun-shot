import { acl } from '@/shared/acl'
import { default_image } from '@/shared/constants'
import type { JSX } from 'react'

import useStyleCssImage from '../../../hooks/useStyleCssImage'

interface IPerspectiveImage {
  transform: string
}

const PerspectiveImage = ({ transform }: IPerspectiveImage): JSX.Element => {
  const { imgBorder, shadowStyle, imgPerspective } = useStyleCssImage()

  const handleClick = (): void => {
    imgPerspective.setPerspective(transform)
  }

  return (
    <button className={`perspectiveImage ${acl(imgPerspective.perspective === transform)}`} onClick={handleClick}>
      <div
        className='perspectiveImage-styles'
        style={{
          borderRadius: `${imgBorder.border}px`,
          boxShadow: shadowStyle,
          transform: `${transform} translate(-50%, -50%)`
        }}
      >
        <div className='perspectiveImage-container'>
          <img src={default_image} alt='perspective background' className='perspectiveImage-card' loading='lazy' />
        </div>
      </div>
    </button>
  )
}

export default PerspectiveImage
