'use client'

import UnsplashComponent from '@/shared/components/UnsplashComponent'
import type { JSX } from 'react'

import useBackgroundImage from '../../store/backgroundImage.store'
import SimpleBackground from './SimpleBackground'
import './style.scss'

interface IBackgroundStyle {
  className?: string
}

const BackgroundStyles = ({ className }: IBackgroundStyle): JSX.Element => {
  const { background, setBackground } = useBackgroundImage()
  return (
    <article className={`${className} bgStyles`}>
      <div className='editorStyles-section'>
        <SimpleBackground background={background} setBackground={setBackground} />
        <UnsplashComponent />
      </div>
    </article>
  )
}

export default BackgroundStyles
