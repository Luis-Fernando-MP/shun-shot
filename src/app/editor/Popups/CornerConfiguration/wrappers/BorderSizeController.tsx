import UseImagesBorderStore from '@/app/editor/store/images/useImagesBorderStore'
import SliderControl from '@/shared/components/SliderControl'
import IconButton from '@/shared/ui/IconButton'
import { RotateCcwIcon } from 'lucide-react'
import type { FC } from 'react'

const BorderSizeController: FC = () => {
  const { setSize, size } = UseImagesBorderStore()

  return (
    <section className='borderConfig-section'>
      <h3 className='paragraph-highlight'># Tamaño de borde:</h3>
      <p className='paragraph-normal'>Depende de la selección de un borde seleccionado</p>
      <IconButton onClick={() => setSize(5)}>
        <RotateCcwIcon />
        <h5>Restablecer</h5>
      </IconButton>
      <SliderControl
        value={size}
        width={200}
        label='Tamaño'
        onChangeRange={v => {
          setSize(v)
        }}
        min={2}
        max={20}
        step={1}
      />
    </section>
  )
}

export default BorderSizeController
