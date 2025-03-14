import { acl } from '@/shared/acl'
import { FrameIcon, Move3DIcon, Paintbrush2Icon } from 'lucide-react'
import type { JSX } from 'react'

import useViewNavImage, { TViewNavImage } from '../../store/viewNavImage'

const EditorPageImageTools = (): JSX.Element => {
  const { view, setView } = useViewNavImage()

  const handleView = (value: TViewNavImage): void => {
    if (value === view) return
    setView(value)
  }

  return (
    <div className='editorImageTools-section center'>
      <button
        className={`editorImageTools-action btn-tooltip ${acl(view === 'TRANSFORM')}`}
        onClick={() => handleView('TRANSFORM')}
      >
        <Move3DIcon />
        <p className='tooltip top'>Mover y Moldear</p>
      </button>
      <button className={`editorImageTools-action btn-tooltip ${acl(view === 'BRUSH')}`} onClick={() => handleView('BRUSH')}>
        <Paintbrush2Icon />
        <p className='tooltip top'>Diseño de Fondo</p>
      </button>
      <button className={`editorImageTools-action btn-tooltip ${acl(view === 'FRAME')}`} onClick={() => handleView('FRAME')}>
        <FrameIcon />
        <p className='tooltip top'>Transformaciones y Capas</p>
      </button>
    </div>
  )
}

export default EditorPageImageTools
