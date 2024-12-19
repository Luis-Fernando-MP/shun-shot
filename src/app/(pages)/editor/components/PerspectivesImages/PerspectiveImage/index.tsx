import { acl } from '@/shared/acl'
import type { JSX } from 'react'

import useStyleCssImage from '../../../hooks/useStyleCssImage'

interface IPerspectiveImage {
  transform: string
}

const PerspectiveImage = ({ transform, i }: IPerspectiveImage): JSX.Element => {
  const { border, shadowStyle, setPerspective, perspective } = useStyleCssImage()

  const handleClick = (): void => {
    setPerspective(transform)
  }
  console.log('sha', shadowStyle)

  return (
    <button className={`perspectiveImage ${acl(perspective === transform)}`} onClick={handleClick}>
      <img
        src='/code-scape.png'
        alt='perspective background'
        className='perspectiveImage-card'
        style={{
          borderRadius: `${border}px`,
          boxShadow: shadowStyle,
          transform
        }}
      />
      <h3 className='editorStyles-title'>{i + 1}</h3>
    </button>
  )
}

export default PerspectiveImage
