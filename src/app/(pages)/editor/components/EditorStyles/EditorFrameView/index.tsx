import { Layers, Spline } from 'lucide-react'
import { useState } from 'react'

import StackComponent from './StackComponent'
import './style.scss'

type TEditorFrameView = 'TRANSFORM' | 'STACKS'
const EditorFrameView = (): JSX.Element => {
  const [view, setView] = useState<TEditorFrameView>('TRANSFORM')

  const handleView = (value: TEditorFrameView): void => {
    if (value === view) return
    setView(value)
  }
  return (
    <div className='editorStyles-view editorFrameView animate-blurred-fade-in'>
      <section className='editorStyles-stickyTop editorFrameView-bottom'>
        <button
          className={`editorFrameView-action ${view === 'TRANSFORM'}`}
          onClick={() => handleView('TRANSFORM')}
        >
          <Spline />
          Transform
        </button>
        <button
          className={`editorFrameView-action ${view === 'STACKS'}`}
          onClick={() => handleView('STACKS')}
        >
          <Layers />
          Stacks
        </button>
      </section>

      {view === 'STACKS' && <StackComponent />}
      {view === 'TRANSFORM' && <p>TRANSFORM</p>}
    </div>
  )
}

export default EditorFrameView
