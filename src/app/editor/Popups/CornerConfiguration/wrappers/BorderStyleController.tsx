import UseImagesBorderStore from '@/app/editor/store/images/useImagesBorderStore'
import BorderConfiguration from '@/shared/components/BorderConfiguration'
import type { FC } from 'react'

const BorderStyleController: FC = () => {
  const borderState = UseImagesBorderStore()

  return (
    <div className='borderConfig-section'>
      <h3 className='paragraph-highlight'># Estilo de borde:</h3>
      <BorderConfiguration borderState={borderState} />
    </div>
  )
}

export default BorderStyleController
