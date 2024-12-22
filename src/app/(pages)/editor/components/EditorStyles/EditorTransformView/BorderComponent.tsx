'use client'

import RangeSlider from '@/shared/components/RangeSlider'
import { borderStyles } from '@/shared/imageStyle'
import useStyleImage from '@editor-store/styleImage.store'
import { type JSX } from 'react'

import BorderCard from '../../StyleCard/BorderCard'

const BorderComponent = (): JSX.Element => {
  const { border, setBorder } = useStyleImage()

  return (
    <div className='editorStyles-section'>
      <h3 className='editorStyles-title'>Border radius</h3>
      <RangeSlider label='Radius' onChange={v => setBorder(v)} range={border} max={50} />
      <div className='editorStyles-section__items'>
        {Object.entries(borderStyles).map(border => {
          return <BorderCard key={border[0]} style={border} handleClick={setBorder} />
        })}
      </div>
    </div>
  )
}

export default BorderComponent
