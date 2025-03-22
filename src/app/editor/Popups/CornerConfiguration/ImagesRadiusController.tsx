import BorderConfiguration from '@/shared/components/BorderConfiguration'
import type { FC } from 'react'

import useImagesRadiusStore from '../../store/images/imagesRadius.store'

const ImagesRadiusController: FC = () => {
  const borderStore = useImagesRadiusStore()
  return (
    <div className='bgConfig-section'>
      <h3 className='paragraph-highlight'># Redondeado:</h3>
      <BorderConfiguration borderState={borderStore} />
    </div>
  )
}

export default ImagesRadiusController
