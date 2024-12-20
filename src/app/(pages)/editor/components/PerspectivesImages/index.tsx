import BoldText from '@/shared/components/BoldText'
import { perspectivesStyles } from '@/shared/imageStyle'
import type { JSX } from 'react'

import PerspectiveImage from './PerspectiveImage'
import './style.scss'

const PerspectivesImages = (): JSX.Element => {
  return (
    <section className='editorStyles-section animate-blurred-fade-in'>
      <h3 className='editorStyles-title'>Perspectivas/XYZ</h3>
      <div className='perspectivesImages'>
        {perspectivesStyles.map((perspective, i) => {
          const key = `${i}-perspective`
          return <PerspectiveImage key={key} transform={perspective} />
        })}
      </div>
    </section>
  )
}

export default PerspectivesImages
