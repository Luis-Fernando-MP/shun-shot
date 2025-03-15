import type { FC, JSX } from 'react'

import './style.scss'

interface Props {
  children: string
  Icon?: JSX.Element
  className?: string
  type?: 'luminosity' | 'darken'
}

const Index: FC<Props> = ({ children, Icon, type = 'luminosity', className = '' }) => {
  return (
    <div className={`label ${type} ${className}`}>
      {Icon}
      <label>{children}</label>
    </div>
  )
}

export default Index
