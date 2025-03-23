import useImagesRadiusStore from '@/app/editor/store/images/imagesRadius.store'
import BorderRadiusConfiguration from '@/shared/components/BorderRadiusConfiguration'
import type { FC } from 'react'

const ImagesRadiusController: FC = () => {
  const borderStore = useImagesRadiusStore()
  return (
    <div className='borderConfig-section'>
      <h3 className='paragraph-highlight'># Redondeado:</h3>
      <BorderRadiusConfiguration borderState={borderStore} />
    </div>
  )
}

export default ImagesRadiusController
