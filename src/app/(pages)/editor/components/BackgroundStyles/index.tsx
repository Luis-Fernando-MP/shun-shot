'use client'

import { delicateGradients, gradientsWithBlendMode, onlyGradients } from '@/shared/backgroundStyle'
import UnsplashComponent from '@/shared/components/UnsplashComponent'
import type { JSX } from 'react'

import useBackgroundImage from '../../store/backgroundImage.store'
import GradientColorsImages from '../GradientColorsImages'
import SolidColorsImages from '../SolidColorsImages'
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

      <SolidColorsImages />
      <GradientColorsImages title='Gradientes Oscuros' gradients={onlyGradients} />
      <GradientColorsImages title='Gradientes Delicados' gradients={delicateGradients} />
      <GradientColorsImages title='Gradientes&Formas' gradients={gradientsWithBlendMode} />
    </article>
  )
}

export default BackgroundStyles
