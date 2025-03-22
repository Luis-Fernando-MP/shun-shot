import useImagesRadiusStore from '@/app/editor/store/images/imagesRadius.store'
import BorderConfiguration from '@/shared/components/BorderConfiguration'
import type { FC } from 'react'

const ImagesRadiusController: FC = () => {
  const borderStore = useImagesRadiusStore()
  return (
    <div className='borderConfig-section'>
      <h3 className='paragraph-highlight'># Redondeado:</h3>
      <BorderConfiguration borderState={borderStore} />
    </div>
  )
}

export default ImagesRadiusController
