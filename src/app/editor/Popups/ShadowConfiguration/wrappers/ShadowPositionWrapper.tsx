import FocusConfiguration from '@/shared/components/FocusConfiguration'
import type { FC } from 'react'

const ShadowPositionWrapper: FC = () => {
  return (
    <section className='shadowConfig-section'>
      <h3 className='paragraph-highlight'># Foco:</h3>
      <FocusConfiguration />
    </section>
  )
}

export default ShadowPositionWrapper
