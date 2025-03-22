import useBackgroundStore from '@/app/editor/store/background/background.store'
import SizeController from '@/shared/components/SizeController'
import type { FC } from 'react'

const BackgroundSizeController: FC = () => {
  const { backgroundWidth, backgroundHeight, setBackgroundWidth, setBackgroundHeight } = useBackgroundStore()

  return (
    <section className='bgConfig-section'>
      <h3 className='paragraph-highlight'># Tamaño:</h3>
      <SizeController
        width={backgroundWidth}
        height={backgroundHeight}
        setWidth={setBackgroundWidth}
        setHeight={setBackgroundHeight}
      />
    </section>
  )
}

export default BackgroundSizeController
