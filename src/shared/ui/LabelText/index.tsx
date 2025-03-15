import type { FC, JSX } from 'react'

import './style.scss'

interface Props {
  children?: string
  Icon?: JSX.Element
  className?: string
  type?: 'luminosity' | 'darken'
}

const LabelText: FC<Props> = ({ children, Icon, type = 'luminosity', className = '' }) => {
  return (
    <div className={`label ${type} ${className}`}>
      {Icon}
      {children && <label>{children}</label>}
    </div>
  )
}

export default LabelText
