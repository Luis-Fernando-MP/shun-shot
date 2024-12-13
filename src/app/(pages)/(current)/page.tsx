'use server'

import type { JSX } from 'react'

import Monaco from './components/Monaco'
import './style.scss'

const Page = (): JSX.Element => {
  return (
    <article className='h-code'>
      <Monaco />
    </article>
  )
}

export default Page
