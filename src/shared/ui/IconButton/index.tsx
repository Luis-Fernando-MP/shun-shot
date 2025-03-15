import type { FC, ReactNode } from 'react'

import Label from '../Label'
import './style.scss'

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children?: Readonly<ReactNode[]> | null | Readonly<ReactNode>
  label?: string
  position?: 'top' | 'bottom' | 'left' | 'right'
  outline?: boolean
  className?: string
  transparent?: boolean
}

const Index: FC<Props> = ({
  children,
  label,
  position = 'top',
  outline = false,
  className = '',
  transparent = false,
  ...props
}) => {
  return (
    <button className={`iconButton ${outline ? 'outline' : ''} ${transparent ? 'transparent' : ''} ${className}`} {...props}>
      <span className='iconButton-content'>{children}</span>
      {label && (
        <Label type='darken' className={`iconButton-label ${position}`}>
          {label}
        </Label>
      )}
    </button>
  )
}

export default Index
