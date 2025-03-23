import { FC, memo } from 'react'

import BackgroundCanvas from '../../components/BackgroundCanvas'
import PictureCanvas from '../PictureCanvas'
import './style.scss'

const ShotEditor: FC = () => {
  return (
    <div className='app-board editor' id='editor'>
      <BackgroundCanvas />
      <PictureCanvas />

      {/* <canvas className='editor-image' />
      <canvas className='editor-canvas'></canvas>
      <canvas className='editor-canvas'></canvas>
      <canvas className='editor-canvas'></canvas> */}
    </div>
  )
}

export default memo(ShotEditor)
