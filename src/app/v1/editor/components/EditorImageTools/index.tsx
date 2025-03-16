'use client'

import { Share2Icon } from 'lucide-react'
import type { JSX } from 'react'

import EditorHistoryButtons from './EditorHistoryButtons'
import EditorPageImageTools from './EditorPageImageTools'
import ResetTransform from './ResetTransform'
import './style.scss'

interface IEditorTools {
  className: string
}

const EditorImageTools = ({ className }: IEditorTools): JSX.Element => {
  return (
    <div className={`${className} editorImageTools`}>
      <EditorHistoryButtons />
      <EditorPageImageTools />
      <div className='editorImageTools-section'>
        <ResetTransform />
        <button className='editorImageTools-action btn-tooltip editorImageTools-especial badge beta'>
          <Share2Icon />
          <h5>Compartir</h5>
          <p className='tooltip top'>Compartir imagen</p>
        </button>
      </div>
    </div>
  )
}

export default EditorImageTools
