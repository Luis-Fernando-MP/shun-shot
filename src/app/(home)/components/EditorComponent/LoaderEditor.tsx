import ShumShots from '@/shared/ui/ShumShots'
import type { FC } from 'react'
import { LoaderIcon } from 'react-hot-toast'

const LoaderEditor: FC = () => {
  return (
    <section className='loaderEditor'>
      <ShumShots size='lg' radius='none' transparent />
      <div className='loaderEditor-wrapper'>
        <LoaderIcon />
        <h3 className='loaderEditor-title xl'>Cargando</h3>
      </div>
    </section>
  )
}

export default LoaderEditor
