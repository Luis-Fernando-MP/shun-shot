import Dropzone from '@/shared/components/Dropzone'
import React, { type FC, useRef } from 'react'

import usePictureCanvas from '../../hooks/usePictureCanvas'
import ApplyImageStyles from './ApplyImageStyles'
import PictureViewer from './PictureViewer'
import './style.scss'

const PictureCanvas: FC = () => {
  const $containerRef = useRef<HTMLDivElement>(null)

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
      ref={$containerRef}
      className='editor-image cvnPicture'
      style={{ transform: `translate(-50%, -50%) scale(${scale})`, width: `${width}px`, height: `${height}px`, aspectRatio }}
    >
      <ApplyImageStyles $containerRef={$containerRef} />

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
