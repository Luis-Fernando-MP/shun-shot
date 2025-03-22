import Dropzone, { DropzoneFile } from '@/shared/components/Dropzone'
import { WORKER_STATUS, useWorker } from '@koale/useworker'
import { Image as ImageComponent } from '@unpic/react'
import { type FC, use, useCallback, useEffect, useLayoutEffect, useState } from 'react'

import useImagesStore from '../../store/images/images.store'
import usePicturesStore from '../../store/images/pictures.store'
import './style.scss'
import uploadImage from './upload'

const MAX_WIDTH = 624
const MAX_HEIGHT = 416

const PictureCanvas: FC = () => {
  const { addPicture, getCurrentPicture } = usePicturesStore()
  const { width, height, scale, aspectRatio, setWidth, setHeight, setAspectRatio } = useImagesStore()

  const currentPicture = getCurrentPicture()

  const [upload] = useWorker(uploadImage)

  const runSort = useCallback(
    async (file: DropzoneFile) => {
      const result = await upload(file)
      console.log(result)
    },
    [upload]
  )

  const handleDropFile = useCallback(
    async (files: DropzoneFile[]) => {
      if (files.length > 1) return
      runSort(files[0])

      addPicture({ url: files[0].preview, selected: false })
    },
    [addPicture]
  )

  useEffect(() => {
    if (currentPicture) {
      const img = new Image()
      img.src = currentPicture.url
      img.onload = () => {
        const { naturalWidth, naturalHeight } = img
        const aspectRatio = naturalWidth / naturalHeight
        let newWidth = naturalWidth
        let newHeight = naturalHeight

        if (naturalWidth > MAX_WIDTH) {
          newWidth = MAX_WIDTH
          newHeight = newWidth / aspectRatio
        }

        if (newHeight > MAX_HEIGHT) {
          newHeight = MAX_HEIGHT
          newWidth = newHeight * aspectRatio
        }

        setWidth(Math.round(newWidth))
        setHeight(Math.round(newHeight))
        setAspectRatio(aspectRatio)
      }
    }
  }, [currentPicture, setWidth, setHeight, setAspectRatio])

  return (
    <section
      className='editor-image cvnPicture'
      style={{ transform: `translate(-50%, -50%) scale(${scale})`, width: `${width}px`, height: `${height}px`, aspectRatio }}
    >
      {/* {currentPicture && (
        <ImageComponent
          key={currentPicture.url}
          src={currentPicture.url}
          className='cvnPicture-image'
          alt='imagen cargada por el usuario'
          layout='constrained'
          width={width}
          height={height}
        />
      )} */}
      {/* {!currentPicture &&  */}
      <Dropzone onDrop={handleDropFile} maxFiles={1} />
      {/* } */}
    </section>
  )
}

export default PictureCanvas
