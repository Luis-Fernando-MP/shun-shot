import { acl } from '@/shared/acl'
import type { FC, ReactNode } from 'react'

import LabelText from '../LabelText'
import './style.scss'

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children?: Readonly<ReactNode[]> | null | Readonly<ReactNode>
  label?: string
  position?: 'top' | 'bottom' | 'left' | 'right'
  outline?: boolean
  className?: string
  transparent?: boolean
  active?: boolean
}

/**
 * @param {ReactNode} children - The content of the button.
 * @param {string} label - The label of the button.
 * @param {string} position - The position of the label.
 * @param {boolean} outline - Whether the button is outlined.
 * @param {string} className - The class name of the button.
 * @param {boolean} transparent - Whether the button is transparent.
 * @param {boolean} active - Whether the button is active.
 */

const IconButton: FC<Props> = ({
  children,
  label,
  position = 'top',
  outline = false,
  className = '',
  transparent = false,
  active = false,
  ...props
}) => {
  const parsedClassName = `iconButton ${acl(outline, 'outline')} ${acl(transparent, 'transparent')} ${acl(active, 'active')} ${className}`

  return (
    <button className={parsedClassName} {...props}>
      <div className='iconButton-content'>{children}</div>
      {label && (
        <LabelText type='darken' className={`iconButton-label ${position}`}>
          {label}
        </LabelText>
      )}
    </button>
  )
}

export default IconButton
