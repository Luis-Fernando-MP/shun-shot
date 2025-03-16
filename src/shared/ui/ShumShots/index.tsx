import { acl } from '@/shared/acl'
import Logo from '@/shared/assets/Logo'
import type { FC } from 'react'

import './style.scss'

interface Props {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  radius?: 'circle' | 'rounded' | 'none'
  transparent?: boolean
}

/**
 * @param {string} size - The size of the shum shot's logo. xs, sm, md, lg, xl.
 * @param {string} radius - The radius of the shum shot's logo. circle, rounded, none.
 * @param {boolean} transparent - Whether the shum shot's logo is transparent.
 */

const ShumShots: FC<Props> = ({ size = 'xs', radius = 'rounded', transparent = false }) => {
  return (
    <section className={`shumShots ${size} ${radius} ${acl(transparent, 'transparent')}`}>
      <Logo className='shumShots-logo' />
    </section>
  )
}

export default ShumShots
