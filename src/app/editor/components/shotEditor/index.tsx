import type { FC } from 'react'

import BackgroundCanvas from '../../components/BackgroundCanvas'
import './style.scss'

const ShotEditor: FC = () => {
  return (
    <div className='app-board editor'>
      <BackgroundCanvas />

      {/* <canvas className='editor-image' />
      <canvas className='editor-canvas'></canvas>
      <canvas className='editor-canvas'></canvas>
      <canvas className='editor-canvas'></canvas> */}
    </div>
  )
}

export default ShotEditor
