'use client'

import BoldText from '@/shared/components/BoldText'
import { stacksStyles } from '@/shared/imageStyle'
import { type JSX } from 'react'

import useStackImage from '../../store/stackImage.store'
import RangeSlider from '../RangeSlider'
import StackCard from './StackCard'
import './style.scss'

const StacksImages = (): JSX.Element => {
  const { amount, setAmount, setStackStyle, stackStyle } = useStackImage()
  return (
    <div className='stacksImages'>
      <BoldText text='Estilo de/Stack' />
      <RangeSlider
        className='stacksImages-range'
        label='Stacks'
        onChange={v => setAmount(v)}
        range={amount}
        max={8}
      />
      <div className='stacksImages-items'>
        {Object.entries(stacksStyles).map(stack => {
          return (
            <StackCard
              key={`${stack[0]}-stack-style`}
              isActive={stack[0] === stackStyle}
              stack={stack}
              amount={amount}
              handleClick={setStackStyle}
            />
          )
        })}
      </div>
    </div>
  )
}

export default StacksImages
