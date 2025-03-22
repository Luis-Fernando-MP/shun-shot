import useBackgroundStore from '@/app/editor/store/background/background.store'
import UploadImageController from '@/shared/components/UploadImageController'
import type { FC } from 'react'

const BackgroundUploadController: FC = () => {
  const { background, setBackground } = useBackgroundStore()

  return (
    <section className='bgConfig-section'>
      <UploadImageController background={background} setBackground={setBackground} />
    </section>
  )
}

export default BackgroundUploadController
