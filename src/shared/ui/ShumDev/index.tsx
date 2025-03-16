import ShumLogo from '@/shared/assets/ShumLogo'
import type { FC } from 'react'

import './style.scss'

interface Props {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  radius?: 'circle' | 'rounded' | 'none'
}

/**
 * @param {string} size - The size of the shum dev logo. xs, sm, md, lg, xl.
 * @param {string} radius - The radius of the shum dev logo. circle, rounded, none.
 */

const ShumDev: FC<Props> = ({ size = 'xs', radius = 'rounded' }) => {
  return (
    <section className={`shumDev ${size} ${radius}`}>
      <ShumLogo className='shumDev-logo' />
    </section>
  )
}

export default ShumDev
