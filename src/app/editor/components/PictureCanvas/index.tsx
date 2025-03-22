import Dropzone from '@/shared/components/Dropzone'
import React, { type FC } from 'react'

import usePictureCanvas from '../../hooks/usePictureCanvas'
import PictureViewer from './PictureViewer'
import './style.scss'

const PictureCanvas: FC = () => {
  const {
    scale,
    width,
    height,
    aspectRatio,
    currentPicture,
    isLoading,
    setIsLoading,
    handleLoadError,
    handleNewPicture,
    handleDropFile
  } = usePictureCanvas()

  return (
    <section
      className='editor-image cvnPicture'
      style={{ transform: `translate(-50%, -50%) scale(${scale})`, width: `${width}px`, height: `${height}px`, aspectRatio }}
    >
      <PictureViewer
        imageUrl={currentPicture?.url}
        handleError={handleLoadError}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        handleImageClick={handleNewPicture}
      />

      {!currentPicture && <Dropzone onDrop={handleDropFile} maxFiles={1} />}
    </section>
  )
}

export default PictureCanvas
