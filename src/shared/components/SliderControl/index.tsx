'use client'

import { ChangeEvent, InputHTMLAttributes, type JSX, memo } from 'react'

import './style.scss'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  containerClassName?: string
  label?: string
  value: number
  onChangeRange: (value: number) => void
}

/**
 * @description SliderControl component allows users to select a value from a range.
 * @param containerClassName - Optional class name for the container.
 * @param label - Optional label for the slider.
 * @param value - The current value of the slider.
 * @param onChangeRange - Callback function to handle value changes.
 * @param className - Optional class name for the input element.
 * @param max - Maximum value for the slider (default is 100).
 */

const SliderControl = ({
  containerClassName,
  label = '',
  value,
  onChangeRange,
  className,
  max = 100,
  ...props
}: Props): JSX.Element => {
  const relativeRadius = ((value / Number(max)) * 100).toFixed(0)

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const value = Number(target.value)
    onChangeRange(value)
  }

  return (
    <section className={`sliderControl border ${containerClassName ?? ''}`}>
      <input
        {...props}
        type='range'
        className={`sliderControl-range ${className ?? ''}`}
        value={value}
        onChange={handleChange}
        max={max}
      />
      <div className='sliderControl-info'>
        <h4 className='sliderControl-label'>{label}</h4>
        <p className='sliderControl-value'>{relativeRadius}%</p>
      </div>
    </section>
  )
}

export default memo(SliderControl)
