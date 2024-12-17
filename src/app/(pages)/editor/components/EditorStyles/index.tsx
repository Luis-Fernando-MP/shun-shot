'use client'

import { type JSX } from 'react'

import useViewNavImage from '../../store/viewNavImage'
import EditorFrameView from './EditorFrameView'
import EditorTransformView from './EditorTransformView'
import './style.scss'

interface IEditorStyles {
  className: string
}

const EditorStyles = ({ className }: IEditorStyles): JSX.Element => {
  const view = useViewNavImage(s => s.view)

  return (
    <section className={`${className} editorStyles`}>
      {view === 'TRANSFORM' && <EditorTransformView />}
      {view === 'FRAME' && <EditorFrameView />}
    </section>
  )
}

export default EditorStyles
