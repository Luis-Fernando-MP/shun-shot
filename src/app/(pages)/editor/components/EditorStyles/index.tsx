'use client'

import { type JSX } from 'react'

import BorderComponent from './BorderComponent'
import PositionComponent from './PositionComponent'
import ShadowComponent from './ShadowComponent'
import './style.scss'

interface IEditorStyles {
  className: string
}

const EditorStyles = ({ className }: IEditorStyles): JSX.Element => {
  return (
    <section className={`${className} editorStyles`}>
      <BorderComponent />
      <ShadowComponent />
      <PositionComponent />
    </section>
  )
}

export default EditorStyles
