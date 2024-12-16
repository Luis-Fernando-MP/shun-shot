'use client'

import { type JSX } from 'react'

import StackComponent from './StackComponent'
import './style.scss'

interface IEditorRightStyles {
  className: string
}

const EditorRightStyles = ({ className }: IEditorRightStyles): JSX.Element => {
  return (
    <section className={`${className} EditorRightStyles`}>
      <StackComponent />
    </section>
  )
}

export default EditorRightStyles
