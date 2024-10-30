'use client'

import { ChangeEvent, type JSX } from 'react'

import './style.scss'

interface IRangeSlider {
  label: string
  range: number
  max?: number | undefined
  onChange: (value: number) => void
}

const RangeSlider = ({ label, range, onChange, max = 50 }: IRangeSlider): JSX.Element => {
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const value = Number(target.value)
    onChange(value)
  }

  return (
    <section className='ranger'>
      <input
        type='range'
        className='ranger-level'
        min='0'
        max={String(max)}
        value={range}
        onChange={handleChange}
      />
      <div className='ranger-info'>
        <h5>{label}</h5>
        <p>{range}</p>
      </div>
    </section>
  )
}

export default RangeSlider
