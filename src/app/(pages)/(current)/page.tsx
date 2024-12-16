'use server'

import type { JSX } from 'react'

import Monaco from './components/Monaco'
import './style.scss'

const Page = (): JSX.Element => {
  return (
    <div className='codePage-container'>
      <article className='codePage-monaco delay animate-fade-in-up' id='monacoParent'>
        <Monaco />
      </article>
    </div>
  )
}

export default Page
