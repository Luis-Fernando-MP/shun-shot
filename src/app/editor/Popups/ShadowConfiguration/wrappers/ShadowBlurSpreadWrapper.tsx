import useShadowStore from '@/app/editor/store/shadow/shadow.store'
import ShadowBlurSpreadConfiguration from '@/shared/components/ShadowBlurSpreadConfiguration'
import type { FC } from 'react'

const ShadowBlurSpreadWrapper: FC = () => {
  const { type, setShadowType } = useShadowStore()
  return (
    <section className='shadowConfig-section'>
      <h3 className='paragraph-highlight'># Blur y Spread:</h3>
      <ShadowBlurSpreadConfiguration type={type} setType={setShadowType} />
    </section>
  )
}

export default ShadowBlurSpreadWrapper
