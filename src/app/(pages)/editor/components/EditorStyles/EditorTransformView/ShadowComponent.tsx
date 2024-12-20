'use client'

import { blurStyles } from '@/shared/imageStyle'
import dynamic from 'next/dynamic'
import { type JSX } from 'react'

import useShadowsImage from '../../../store/shadowImage.store'
import RangeSlider from '../../RangeSlider'
import BlurCard from '../../StyleCard/BlurCard'

const CircleShadowXYS = dynamic(() => import('../../CirclesComponent/CircleShadowXYS'), {
  ssr: false
})

const ShadowComponent = (): JSX.Element => {
  const { setBlur, opacity, setOpacity, keyBlur, setKeyBlur } = useShadowsImage()

  const handleBlur = (b: number, k: string): void => {
    setBlur(b)
    setKeyBlur(k)
  }

  return (
    <div className='editorStyles-section'>
      <h3 className='editorStyles-title'>Box Shadow</h3>
      <RangeSlider label='Opacity' onChange={v => setOpacity(v)} range={opacity} max={50} />
      <div className='editorStyles-section__items'>
        {Object.entries(blurStyles).map(border => {
          return (
            <BlurCard
              key={border[0]}
              active={border[0] === keyBlur}
              style={border}
              handleClick={handleBlur}
            />
          )
        })}
      </div>
      <CircleShadowXYS />
    </div>
  )
}

export default ShadowComponent
