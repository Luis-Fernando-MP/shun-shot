'use client'

import BoldText from '@/shared/components/BoldText'
import { blurStyles } from '@/shared/imageStyle'
import { type JSX } from 'react'

import useShadowsImage from '../../store/shadowImage.store'
import { CircleShadowXYS } from '../CirclesComponent/Circles'
import RangeSlider from '../RangeSlider'
import BlurCard from '../StyleCard/BlurCard'
import './style.scss'

const ShadowComponent = (): JSX.Element => {
  const { setBlur, opacity, setOpacity } = useShadowsImage()

  return (
    <div className='editorStyles-section'>
      <BoldText text='Estilo de/Borde' />
      <RangeSlider label='Opacity' onChange={v => setOpacity(v)} range={opacity} max={80} />
      <div className='editorStyles-section__items'>
        {Object.entries(blurStyles).map(border => {
          return <BlurCard key={border[0]} style={border} handleClick={setBlur} />
        })}
      </div>
      <CircleShadowXYS />
    </div>
  )
}

export default ShadowComponent
