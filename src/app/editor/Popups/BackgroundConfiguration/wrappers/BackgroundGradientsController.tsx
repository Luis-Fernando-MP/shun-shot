import useBackgroundStore from '@/app/editor/store/background/background.store'
import GradientsController from '@/shared/components/GradientsController'
import type { FC } from 'react'

const BackgroundGradientsController: FC = () => {
  const { background, setBackground, blendMode, setBlendMode } = useBackgroundStore()

  return (
    <section className='bgConfig-section'>
      <GradientsController
        background={background}
        setBackground={setBackground}
        blendMode={blendMode}
        setBlendMode={setBlendMode}
      />
    </section>
  )
}

export default BackgroundGradientsController
