import { Theme } from '@/shared/themes'
import type { ButtonHTMLAttributes, FC } from 'react'

import './style.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  theme: Theme
  selected?: boolean
}

const PaletteSphere: FC<Props> = ({ title, theme, className, selected = false, ...props }) => {
  if (!theme) return null
  return (
    <button className={`paletteSphere ${className} ${selected ? 'selected' : ''}`} {...props}>
      <div className='paletteSphere-spheres'>
        <div className='paletteSphere-sphere' style={{ backgroundColor: `rgb(${theme['tn-primary']})` }} />
        <div className='paletteSphere-sphere' style={{ backgroundColor: `rgb(${theme['tn-secondary']})` }} />
        <div className='paletteSphere-sphere' style={{ backgroundColor: `rgb(${theme['bg-primary']})` }} />
      </div>

      <h5>{title}</h5>
    </button>
  )
}
export default PaletteSphere
