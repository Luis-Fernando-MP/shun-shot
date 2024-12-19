import { perspectivesStyles } from '@/shared/imageStyle'
import type { JSX } from 'react'

import PerspectiveImage from './PerspectiveImage'
import './style.scss'

const PerspectivesImages = (): JSX.Element => {
  return (
    <section className='editorStyles-section'>
      <h3 className='editorStyles-title'>Perspectivas</h3>

      <div className='perspectivesImages'>
        {perspectivesStyles.map((perspective, i) => {
          const key = `${i}.perspective`
          return <PerspectiveImage key={key} transform={perspective} i={i} />
        })}
      </div>
    </section>
  )
}

export default PerspectivesImages
