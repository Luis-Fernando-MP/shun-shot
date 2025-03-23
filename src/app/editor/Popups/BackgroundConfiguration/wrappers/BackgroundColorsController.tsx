import useBackgroundStore from '@/app/editor/store/background/background.store'
import ColorsController from '@/shared/components/ColorsController'
import type { FC } from 'react'

const BackgroundColorsController: FC = () => {
  const { background, setBackground } = useBackgroundStore()

  return (
    <section className='bgConfig-section'>
      <h3 className='paragraph-highlight'># Colores:</h3>
      <ColorsController background={background} setBackground={setBackground} />
    </section>
  )
}

export default BackgroundColorsController
