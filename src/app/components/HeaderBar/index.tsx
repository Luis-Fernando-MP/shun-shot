import ThemeController from '@/shared/components/ThemeController'
import { type FC } from 'react'

import FullScreen from './FullScreen'
import ZoomController from './ZoomController'
import './style.scss'

interface Props {
  className?: string
}

const HeaderBar: FC<Props> = ({ className }) => {
  return (
    <section className={`headerBar ${className}`}>
      <ThemeController />
      <FullScreen />
      <div className='separator' />
      <ZoomController />
    </section>
  )
}

export default HeaderBar
