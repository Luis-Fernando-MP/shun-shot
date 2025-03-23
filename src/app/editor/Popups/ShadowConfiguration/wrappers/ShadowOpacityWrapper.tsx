import useShadowStore from '@/app/editor/store/shadow/shadow.store'
import SliderControl from '@/shared/components/SliderControl'
import type { FC } from 'react'

const ShadowOpacityWrapper: FC = () => {
  const { opacity, setOpacity } = useShadowStore()
  return (
    <section className='shadowConfig-section'>
      <h3 className='paragraph-highlight'># Opacidad:</h3>
      <SliderControl onChangeRange={setOpacity} value={opacity} step={10} width={200} />
    </section>
  )
}

export default ShadowOpacityWrapper
