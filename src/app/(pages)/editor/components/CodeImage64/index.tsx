'use client'

import useCodeImage from '@/app/hooks/useCodeImage'
import useStyleCode from '@/app/hooks/useStyleCode'
import { type JSX } from 'react'

import './style.scss'

const CodeImage64 = (): JSX.Element => {
  const { border, transform } = useStyleCode()

  const image64 = useCodeImage(s => s.image64)
  return (
    <main className='main editor'>
      <section className='code-container animate-blurred-fade-in' id='code-container'>
        <img
          src={image64}
          className='code-image animate-blurred-fade-in'
          alt='CodeImage'
          style={{
            animationDelay: '1s',
            borderRadius: `${border}px`,
            transform
          }}
        />
      </section>
    </main>
  )
}

export default CodeImage64
