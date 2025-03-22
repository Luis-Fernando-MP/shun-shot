import Dropzone, { DropzoneFile } from '@/shared/components/Dropzone'
import { toaster } from '@/shared/components/Toast'
import { HOST_URL } from '@/shared/constants'
import { useWorker } from '@koale/useworker'
import React, { FC, MouseEvent, useCallback, useState } from 'react'

import useImagesStore from '../../store/images/images.store'
import usePicturesStore from '../../store/images/pictures.store'
import PictureViewer from './PictureViewer'
import './style.scss'
import uploadImage from './upload.worker'

const PictureCanvas: FC = () => {
  const { getCurrentPicture, setFirstPicture, pictures } = usePicturesStore()
  const { width, height, scale, aspectRatio } = useImagesStore()

  const [currentPicture, setCurrentPicture] = useState(getCurrentPicture())
  const [isLoading, setIsLoading] = useState(true)

  const [upload] = useWorker(uploadImage)

  const sendImage = useCallback(
    async (file: DropzoneFile) => {
      try {
        const result = await upload(file, `${HOST_URL}/api/upload`)
        if (result instanceof Error) throw result
        setFirstPicture({ url: result.image })
      } catch (error) {
        toaster({ title: 'Error al subir la imagen', type: 'error', id: 'upload-error' })
      }
    },
    [upload, setFirstPicture]
  )

  const handleLoadError = (): void => {
    toaster({ title: 'Carga una nueva imagen', type: 'error', id: 'load-error' })
    setCurrentPicture(null)
    setIsLoading(false)
  }

  const handleNewPicture = (e: MouseEvent) => {
    e.preventDefault()
    console.log('pictures----------------------', pictures)
    setCurrentPicture(null)
  }

  const handleDropFile = useCallback(
    (files: DropzoneFile[]) => {
      setIsLoading(true)
      setCurrentPicture({ url: files[0].preview })
      sendImage(files[0])
    },
    [sendImage]
  )

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
