import Logo from '@/shared/assets/Logo'
import type { FC } from 'react'

import './style.scss'

interface Props {
  type?: 'xs' | 'sm' | 'md' | 'lg'
  radius?: 'circle' | 'rounded'
}

const ShumShots: FC<Props> = ({ type = 'xs', radius = 'rounded' }) => {
  return (
    <section className={`shumShots ${type} ${radius}`}>
      <Logo className='shumShots-logo' />
    </section>
  )
}

export default ShumShots
