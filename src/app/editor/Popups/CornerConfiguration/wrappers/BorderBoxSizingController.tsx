import UseImagesBorderStore from '@/app/editor/store/images/useImagesBorderStore'
import BoxSizingConfiguration from '@/shared/components/BoxSizingConfiguration'
import type { FC } from 'react'

const BorderBoxSizingController: FC = () => {
  const { boxSizing, setBoxSizing } = UseImagesBorderStore()

  return (
    <section className='borderConfig-section'>
      <h3 className='paragraph-highlight'># Border box:</h3>
      <BoxSizingConfiguration boxSizing={boxSizing} setBoxSizing={setBoxSizing} />
    </section>
  )
}

export default BorderBoxSizingController
