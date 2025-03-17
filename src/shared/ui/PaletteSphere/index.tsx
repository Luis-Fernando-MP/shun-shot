import { acl } from '@/shared/acl'
import { Theme } from '@/shared/themes'
import type { ButtonHTMLAttributes, FC } from 'react'

import IconButton from '../IconButton'
import './style.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  theme: Pick<Theme, 'tn-primary' | 'tn-secondary' | 'bg-primary'>
  selected?: boolean
}

/**
 * @param {string} title - The title of the palette sphere.
 * @param {Theme} theme - The theme of the palette sphere, type of Theme.
 * @param {boolean} selected - Whether the palette sphere is selected.
 * @param {ButtonHTMLAttributes<HTMLButtonElement>} props - The props of the button palette sphere.
 */

const PaletteSphere: FC<Props> = ({ title, theme, className = '', selected = false, ...props }) => {
  if (!theme) return null

  const parseColor = (color: string | null) => {
    if (!color) return ''
    if (color?.includes('#')) return color
    return `rgb(${color})`
  }

  return (
    <IconButton className={`paletteSphere ${className} ${acl(selected, 'selected')}`} label={title} {...props}>
      <div className='paletteSphere-gradient' />
      <div className='paletteSphere-spheres'>
        <div className='paletteSphere-sphere' style={{ backgroundColor: parseColor(theme['tn-primary']) }} />
        <div className='paletteSphere-sphere' style={{ backgroundColor: parseColor(theme['tn-secondary']) }} />
        <div className='paletteSphere-sphere' style={{ backgroundColor: parseColor(theme['bg-primary']) }} />
      </div>

      <p className='paletteSphere-title'>{title}</p>
    </IconButton>
  )
}
export default PaletteSphere
