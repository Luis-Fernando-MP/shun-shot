import type { FC, InputHTMLAttributes, JSX } from 'react'

import LabelText from '../LabelText'
import './style.scss'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  children?: string
  Icon?: JSX.Element
}

const LabeledInput: FC<Props> = ({ children, Icon, ...props }) => {
  return (
    <div className='labeledInput border'>
      <input className='labeledInput-input' autoComplete='off' {...props} />
      <div className='labeledInput-label'>
        <LabelText Icon={Icon}>{children ?? ''}</LabelText>
      </div>
    </div>
  )
}

export default LabeledInput
