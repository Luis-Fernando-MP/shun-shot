import { acl } from '@/shared/acl'
import { default_image } from '@/shared/constants'
import type { JSX } from 'react'

import useStyleCssImage from '../../../hooks/useStyleCssImage'

interface IPerspectiveImage {
  transform: string
}

const PerspectiveImage = ({ transform }: IPerspectiveImage): JSX.Element => {
  const { border, shadowStyle, setPerspective, perspective } = useStyleCssImage()

  const handleClick = (): void => {
    setPerspective(transform)
  }

  return (
    <button className={`perspectiveImage ${acl(perspective === transform)}`} onClick={handleClick}>
      <div
        className='perspectiveImage-styles'
        style={{
          borderRadius: `${border}px`,
          boxShadow: shadowStyle,
          transform: `${transform} translate(-50%, -50%)`
        }}
      >
        <div className='perspectiveImage-container'>
          <img src={default_image} alt='perspective background' className='perspectiveImage-card' />
        </div>
      </div>
    </button>
  )
}

export default PerspectiveImage
