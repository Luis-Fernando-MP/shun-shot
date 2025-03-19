import { acl } from '@/shared/acl'
import { type FC, type InputHTMLAttributes, type JSX } from 'react'

import LabelText from '../LabelText'
import './style.scss'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  value: string | number
  children?: string
  Icon?: JSX.Element
  transparent?: boolean
  className?: string
}

/**
 * @param {string | number} value - The value of the labeled input.
 * @param {string} children - The children of the labeled input.
 * @param {JSX.Element} Icon - The icon of the labeled input is optional.
 * @param {boolean} transparent - Whether the labeled input is transparent.
 */

const LabeledInput: FC<Props> = ({ children, Icon, transparent, className, ...props }) => {
  return (
    <div className={`labeledInput border ${acl(!!transparent, 'transparent')} ${className}`}>
      <input {...props} className='labeledInput-input' autoComplete='off' />
      <div className='labeledInput-label'>{children && <LabelText Icon={Icon}>{children}</LabelText>}</div>
    </div>
  )
}

export default LabeledInput
