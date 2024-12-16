'use client'

import BoldText from '@/shared/components/BoldText'
import { stacksStyles } from '@/shared/imageStyle'
import { type JSX } from 'react'

import useStackImage from '../../store/stackImage.store'
import RangeSlider from '../RangeSlider'
import StackCard from '../StyleCard/StackCard'
import './style.scss'

const StackComponent = (): JSX.Element => {
  const { amount, setAmount, setStackStyle } = useStackImage()
  return (
    <div className='editorStyles-section'>
      <BoldText text='Estilo de/Stack' />
      <RangeSlider label='Stacks' onChange={v => setAmount(v)} range={amount} max={8} />
      <div className='editorStyles-section__items'>
        {Object.entries(stacksStyles).map(stack => {
          return (
            <StackCard
              key={`${stack[0]}-stack-style`}
              stack={stack}
              index={amount}
              handleClick={setStackStyle}
            />
          )
        })}
      </div>
    </div>
  )
}

export default StackComponent
