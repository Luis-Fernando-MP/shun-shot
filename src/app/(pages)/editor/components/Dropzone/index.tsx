'use client'

import { acl } from '@/shared/acl'
import { ImagePlusIcon, WandIcon } from 'lucide-react'
import { ReactNode } from 'react'

import './style.scss'
import { useDropzone } from './useDropzone'

interface IDropzone {
  ImagePreview: (image: string) => Readonly<ReactNode>
}

const Dropzone = ({ ImagePreview }: IDropzone) => {
  const { getRootProps, getInputProps, src, isLoading, error, isDragActive } = useDropzone()

  const IconDragging = isDragActive ? WandIcon : ImagePlusIcon

  return (
    <div
      {...getRootProps()}
      className={`dropzone ${acl(isDragActive, 'dragging')} ${acl(isLoading, 'loading')} ${acl(error, 'error')}`}
    >
      <input {...getInputProps()} />
      {src && ImagePreview(src)}

      {!src && (
        <div className='dropzone-content'>
          <IconDragging className='dropzone-content__icon' />
          <h3>Suelta o elije una imagen</h3>
          <p>(PNG, JPEG, JPG Y WEBP)</p>
          {!isDragActive && <button className='dropzone-content__open'>Abrir archivos</button>}
        </div>
      )}
    </div>
  )
}

export default Dropzone
