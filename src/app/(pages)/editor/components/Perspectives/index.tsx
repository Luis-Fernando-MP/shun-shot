'use client'

import useCodeImage from '@/app/hooks/useCodeImage'
import useStyleCode from '@/app/hooks/useStyleCode'
import type { HtmlHTMLAttributes, JSX, ReactNode } from 'react'

import { perspectivesStyles } from '../../data'
import './style.scss'

interface IPerspectives extends HtmlHTMLAttributes<HTMLElement> {
  children?: Readonly<ReactNode[]> | null
}

const Perspectives = ({ className }: IPerspectives): JSX.Element => {
  const { border, setTransform } = useStyleCode()
  const image64 = useCodeImage(s => s.image64)

  function handleTransform(trf: string) {
    setTransform(trf)
  }

  return (
    <section className={`${className} perspectives`}>
      {perspectivesStyles.map(({ transform }) => {
        return (
          <button
            key={transform}
            className='perspectives-item'
            onClick={() => handleTransform(transform)}
          >
            <img
              src={image64}
              alt='image transform'
              className='perspectives-transform'
              style={{ transform, borderRadius: `${border}px` }}
            />
          </button>
        )
      })}
    </section>
  )
}

export default Perspectives
