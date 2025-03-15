'use client'

import { getBackgroundStyle } from '@editor-store/backgroundImage.store'
import type { JSX } from 'react'

import useBackgroundImage from '../editor/store/backgroundImage.store'
import Monaco from './components/Monaco'
import './style.scss'

const Page = (): JSX.Element => {
  const { background, blendMode } = useBackgroundImage()
  const bg = getBackgroundStyle(background)

  return (
    <div className='codePage-container'>
      <article
        className='codePage-monaco delay animate-fade-in-up'
        id='monacoParent'
        style={{
          ...bg,
          backgroundBlendMode: blendMode
        }}
      >
        <Monaco />
      </article>
    </div>
  )
}

export default Page
