import FullScreen from '@/shared/components/FullScreen'
import { Redo2Icon, Undo2Icon, UserIcon } from 'lucide-react'
import { useState } from 'react'

const EditorHistoryButtons = (): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [history, setHistory] = useState([])

  const handleUndo = (): void => {}
  const handleRedo = (): void => {}

  return (
    <div className='editorImageTools-section'>
      <FullScreen className='editorImageTools-action btn-tooltip'>
        <p className='tooltip top'>Maximizar</p>
      </FullScreen>

      <button className='editorImageTools-action btn-tooltip badge dev' onClick={handleUndo}>
        <Undo2Icon />
        <p className='tooltip top'>Deshacer</p>
      </button>
      <button
        className='editorImageTools-action btn-tooltip border-right badge dev'
        onClick={handleRedo}
      >
        <Redo2Icon />
        <p className='tooltip top'>Rehacer</p>
      </button>
      <button className='editorImageTools-action btn-tooltip border-right badge beta'>
        <UserIcon />
        <p className='tooltip top'>Iniciar sesión</p>
      </button>
    </div>
  )
}

export default EditorHistoryButtons
