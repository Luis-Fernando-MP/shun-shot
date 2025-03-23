import { acl } from '@/shared/acl'
import { defaultBorders } from '@/shared/components/BorderConfiguration'
import type { FC, MouseEvent } from 'react'

import './style.scss'

type Props = (typeof defaultBorders)[0] & { isActive: boolean; onClick: (e: MouseEvent) => void }

const BorderStyle: FC<Props> = ({ color, gradient, isActive, onClick }) => {
  return (
    <button className={`borderStyle ${acl(isActive, 'selected')}`} onClick={onClick}>
      <div className='borderStyle-wrapper'>
        <div className='borderStyle-viewer' style={{ background: color ?? gradient }} />
      </div>
    </button>
  )
}

export default BorderStyle
