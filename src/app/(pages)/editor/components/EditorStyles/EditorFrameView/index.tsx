import { acl } from '@/shared/acl'
import { Layers, Spline } from 'lucide-react'
import { useState } from 'react'

import DownloadTransformImage from '../../DownloadTransformImage'
import PerspectivesImages from '../../PerspectivesImages'
import StacksImages from '../../StacksImages'
import './style.scss'

type TEditorFrameView = 'PERSPECTIVE' | 'STACKS'
const EditorFrameView = (): JSX.Element => {
  const [view, setView] = useState<TEditorFrameView>('PERSPECTIVE')

  const handleView = (value: TEditorFrameView): void => {
    if (value === view) return
    setView(value)
  }
  return (
    <div className='editorStyles-view editorFrameView animate-blurred-fade-in'>
      <section className='editorStyles-stickyTop editorFrameView-bottom'>
        <button className={`editorFrameView-action ${acl(view === 'PERSPECTIVE')}`} onClick={() => handleView('PERSPECTIVE')}>
          <Spline />
          Perspectivas
        </button>
        <button className={`editorFrameView-action ${acl(view === 'STACKS')}`} onClick={() => handleView('STACKS')}>
          <Layers />
          Stacks
        </button>
      </section>

      {view === 'STACKS' && <StacksImages />}
      {view === 'PERSPECTIVE' && <PerspectivesImages />}
      <DownloadTransformImage />
    </div>
  )
}

export default EditorFrameView
