import UseImagesBorderStore from '@/app/editor/store/images/useImagesBorderStore'
import GradientsController from '@/shared/components/GradientsController'
import type { FC } from 'react'

const BorderGradientsController: FC = () => {
  const { gradient, setGradient, blendMode, setBlendMode, setType } = UseImagesBorderStore()

  return (
    <section className='borderConfig-section'>
      <GradientsController
        background={gradient}
        setBackground={bg => {
          console.log('setColor', bg)
          setGradient(bg)
          setType('gradient')
        }}
        blendMode={blendMode}
        setBlendMode={setBlendMode}
      />
    </section>
  )
}

export default BorderGradientsController
