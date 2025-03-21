import { circularGradients, gradients } from '@/shared/backgroundStyle'
import type { FC } from 'react'

import SliceContainer from '../SliceContainer'
import './style.scss'

interface Props {
  background: string | null
  blendMode: string
  setBlendMode: (blendMode: string) => void
  setBackground: (background: string) => void
}

const GradientsController: FC<Props> = ({ background, setBackground, blendMode, setBlendMode }) => {
  const handleSelectBackground = (gradient: string, blendMode?: string) => {
    setBackground(gradient)
    setBlendMode(blendMode ?? 'normal')
  }
  return (
    <article className='gradientsController'>
      <div className='gradientsController-section'>
        <h3 className='paragraph-highlight'># Gradientes:</h3>
        <SliceContainer maxHeight={105} className='gradientsController-colors'>
          {gradients.map(item => {
            const { gradient, blendMode } = item
            return (
              <button
                className='gradientsController-color'
                style={{ background: gradient, backgroundBlendMode: blendMode }}
                key={gradient}
                onClick={() => handleSelectBackground(gradient, blendMode)}
              />
            )
          })}
        </SliceContainer>
      </div>

      <div className='gradientsController-section'>
        <h3 className='paragraph-highlight'># Gradientes Circulares:</h3>
        <SliceContainer maxHeight={105} className='gradientsController-colors'>
          {circularGradients.map(item => {
            const { gradient } = item
            return (
              <button
                className='gradientsController-color'
                style={{ background: gradient }}
                key={gradient}
                onClick={() => handleSelectBackground(gradient)}
              />
            )
          })}
        </SliceContainer>
      </div>
    </article>
  )
}

export default GradientsController
