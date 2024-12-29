'use server'

import type { JSX } from 'react'

import DrawingComponent from './components/DrawingComponent'
import './pageStyle.scss'

const Page = (): JSX.Element => {
  return (
    <div className='editorPage-main animate-blurred-fade-in'>
      <section className='editorMP-transformer relative' id='editorMP-transformer'>
        <DrawingComponent />
      </section>
    </div>
  )
}

export default Page
