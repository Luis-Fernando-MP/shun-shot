'use client'

import BoldText from '@/shared/components/BoldText'
import { borderStyles } from '@/shared/imageStyle'
import { type JSX } from 'react'

import useStyleImage from '../../store/styleImage.store'
import RangeSlider from '../RangeSlider'
import BorderCard from '../StyleCard/BorderCard'
import './style.scss'

const BorderComponent = (): JSX.Element => {
  const { border, setBorder } = useStyleImage()

  return (
    <div className='editorStyles-section'>
      <BoldText text='Estilo de/Borde' />
      <RangeSlider label='Radius' onChange={v => setBorder(v)} range={border} />
      <div className='editorStyles-section__items'>
        {Object.entries(borderStyles).map(border => {
          return <BorderCard key={border[0]} style={border} handleClick={setBorder} />
        })}
      </div>
    </div>
  )
}

export default BorderComponent
