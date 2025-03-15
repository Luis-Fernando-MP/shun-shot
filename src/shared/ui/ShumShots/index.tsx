import Logo from '@/shared/assets/Logo'
import type { FC } from 'react'

import './style.scss'

interface Props {
  type?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  radius?: 'circle' | 'rounded' | 'none'
}

/**
 * @param {string} type - The type of the size of the shumshots logo. xs, sm, md, lg, xl.
 * @param {string} radius - The radius of the shumshots logo. circle, rounded, none.
 */

const ShumShots: FC<Props> = ({ type = 'xs', radius = 'rounded' }) => {
  return (
    <section className={`shumShots ${type} ${radius}`}>
      <Logo className='shumShots-logo' />
    </section>
  )
}

export default ShumShots
