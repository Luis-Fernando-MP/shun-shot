import { Spline } from 'lucide-react'

import BackgroundImage from '../../BackgroundImage'
import DownloadTransformImage from '../../DownloadTransformImage'
import './style.scss'

const EditorBrushView = (): JSX.Element => {
  return (
    <div className='editorStyles-view editorFrameView animate-blurred-fade-in'>
      {/* <section className='editorStyles-stickyTop'>
        <button className='badge idea'>
          <Spline />
          Aspect Ratio
        </button>
      </section> */}
      <BackgroundImage />
      <DownloadTransformImage />
    </div>
  )
}

export default EditorBrushView
