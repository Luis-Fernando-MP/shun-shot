'use client'

import {
  circleGradients,
  darkGradients,
  gradientsWithBlendMode,
  onlyGradients
} from '@/shared/backgroundStyle'
import UnsplashComponent from '@/shared/components/UnsplashComponent'
import type { JSX } from 'react'

import useBackgroundImage from '../../store/backgroundImage.store'
import GradientColorsImages from '../GradientColorsImages'
import SolidColorsImages from '../SolidColorsImages'
import BackgroundFilterImages from './BackgroundFilterImages'
import SimpleBackground from './SimpleBackground'
import './style.scss'

interface IBackgroundStyle {
  className?: string
}

const BackgroundStyles = ({ className }: IBackgroundStyle): JSX.Element => {
  const { background, setBackground } = useBackgroundImage()
  return (
    <article className={`editorStyles-view ${className} bgStyles`}>
      <div className='editorStyles-section'>
        <SimpleBackground background={background} setBackground={setBackground} />
        <UnsplashComponent />
      </div>
      <BackgroundFilterImages />
      <SolidColorsImages />
      <GradientColorsImages title='Gradientes' gradients={onlyGradients} />
      <GradientColorsImages title='Gradientes Circulares' gradients={circleGradients} />
      <GradientColorsImages title='Gradientes Oscuros' gradients={darkGradients} />
      <GradientColorsImages title='Gradientes & Formas' gradients={gradientsWithBlendMode} />
    </article>
  )
}

export default BackgroundStyles
