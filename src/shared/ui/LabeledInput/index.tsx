import { ChangeEvent, type FC, type InputHTMLAttributes, type JSX, useEffect, useState } from 'react'
import { useDebounceCallback } from 'usehooks-ts'

import LabelText from '../LabelText'
import './style.scss'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  children?: string
  Icon?: JSX.Element
  transparent?: boolean
  className?: string
  onDebounce?: (value: string) => void
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  debounceTime?: number
  value?: string | number
}

/**
 * @param {string} children - The children of the labeled input.
 * @param {JSX.Element} Icon - The icon of the labeled input is optional.
 * @param {boolean} transparent - Whether the labeled input is transparent.
 * @param {function} onDebounce - Callback function to be executed after debouncing with the input value.
 * @param {function} onChange - Standard onChange event handler.
 * @param {number} debounceTime - The debounce time in milliseconds (default: 500ms).
 * @param {string|number} value - The initial value of the input.
 */

const LabeledInput: FC<Props> = ({
  children,
  Icon,
  transparent,
  className,
  onDebounce,
  onChange,
  debounceTime = 500,
  value: controlledValue,
  ...props
}) => {
  const [internalValue, setInternalValue] = useState(controlledValue !== undefined ? String(controlledValue) : '')

  useEffect(() => {
    if (controlledValue !== undefined && String(controlledValue) !== internalValue) {
      setInternalValue(String(controlledValue))
    }
  }, [controlledValue])

  const debouncedOnDebounce = useDebounceCallback((value: string) => {
    if (onDebounce) {
      onDebounce(value)
    }
  }, debounceTime)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setInternalValue(newValue)
    if (onChange) onChange(e)
    debouncedOnDebounce(newValue)
  }

  return (
    <div className={`labeledInput border ${transparent ? 'transparent' : ''} ${className}`}>
      <input {...props} className='labeledInput-input' autoComplete='off' onChange={handleChange} value={internalValue} />
      <div className='labeledInput-label'>{children && <LabelText Icon={Icon}>{children}</LabelText>}</div>
    </div>
  )
}

export default LabeledInput
