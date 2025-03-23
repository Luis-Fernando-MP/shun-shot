import { acl } from '@/shared/acl'
import { CircleOffIcon } from 'lucide-react'
import type { FC, MouseEvent } from 'react'

import './style.scss'

interface Props {
  onClick: (e: MouseEvent) => void
  className?: string
  selected: boolean
}

/**
 * EmptyBlock component renders a button that displays an icon.
 *
 * @param {function} onClick - The function to call when the button is clicked.
 * @param {string} [className] - Optional additional class names for styling.
 * @param {boolean} selected - Indicates if the block is selected, which applies a specific style.
 */

const EmptyBlock: FC<Props> = ({ onClick, className = '', selected }) => {
  return (
    <button className={`emptyBlock ${className} ${acl(selected, 'selected')}`} onClick={onClick}>
      <div className='emptyBlock-wrapper'>
        <CircleOffIcon />
      </div>
    </button>
  )
}

export default EmptyBlock
