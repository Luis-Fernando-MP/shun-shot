import type { FC, JSX } from 'react'

import './style.scss'

interface Props {
  children?: string
  Icon?: JSX.Element
  className?: string
  type?: 'luminosity' | 'darken'
}

/**
 * @param {string} children - The children of the label text, accepts a string or a React node.
 * @param {JSX.Element} Icon - The icon of the label text is optional.
 * @param {string} type - The type of the label text, accepts 'luminosity' or 'darken'.
 */

const LabelText: FC<Props> = ({ children, Icon, type = 'luminosity', className = '' }) => {
  return (
    <div className={`label ${type} ${className}`}>
      {Icon}
      {children && <label>{children}</label>}
    </div>
  )
}

export default LabelText
