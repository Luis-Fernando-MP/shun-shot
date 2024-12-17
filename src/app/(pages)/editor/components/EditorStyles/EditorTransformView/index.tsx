import DownloadTransformImage from '../../DownloadTransformImage'
import BorderComponent from './BorderComponent'
import PositionComponent from './PositionComponent'
import ShadowComponent from './ShadowComponent'
import './style.scss'

const EditorTransformView = (): JSX.Element => {
  return (
    <div className='editorStyles-view animate-blurred-fade-in'>
      <BorderComponent />
      <ShadowComponent />
      <PositionComponent />
      <DownloadTransformImage />
    </div>
  )
}

export default EditorTransformView
