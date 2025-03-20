import { acl } from '@/shared/acl'
import type { FC, MouseEvent } from 'react'

import './style.scss'

interface Props {
  value: number
  label: string
  selected: boolean
  onClick: (e: MouseEvent) => void
}

/**
 * @description Represents an individual border that can be selected.
 * @param value - The value that determines the style of the border radius.
 * @param label - The label displayed on the button.
 * @param selected - Indicates whether this border is selected.
 * @param onClick - Function that is executed when the button is clicked.
 */

const IndividualDefaultBorder: FC<Props> = ({ value, onClick, label, selected }) => {
  return (
    <button className={`individualDefaultBorder border ${acl(selected, 'selected')}`} onClick={onClick}>
      <div className='individualDefaultBorder-wrapper'>
        <div className='individualDefaultBorder-square' />
        <div className='individualDefaultBorder-squareRotate' style={{ borderBottomLeftRadius: value }} />
      </div>
      <h4 className='individualDefaultBorder-label'>{label}</h4>
    </button>
  )
}

export default IndividualDefaultBorder
