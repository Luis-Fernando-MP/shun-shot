import useBackgroundRadiusStore from '@/app/editor/store/background/backgroundRadius.store'
import BorderRadiusConfiguration from '@/shared/components/BorderRadiusConfiguration'
import { FC } from 'react'

const RadiusController: FC = () => {
  const borderStore = useBackgroundRadiusStore()
  return (
    <div className='bgConfig-section'>
      <h3 className='paragraph-highlight'># Redondeado:</h3>
      <BorderRadiusConfiguration borderState={borderStore} />
    </div>
  )
}

export default RadiusController
