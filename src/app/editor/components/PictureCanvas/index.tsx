import Dropzone, { DropzonePreview } from '@/shared/components/Dropzone'
import { FolderIcon } from 'lucide-react'
import type { FC } from 'react'

import useImagesStore from '../../store/images/images.store'

const PictureCanvas: FC = () => {
  const { paths, setPaths } = useImagesStore()

  const handleDropFiles = (files: DropzonePreview[]) => {
    const previews = files.map(file => {
      console.log(file)
      return file.preview
    })
    setPaths(previews)
  }

  return (
    <section className='editor-image'>
      <h5>Imagen {paths.length}</h5>
      {paths.map(path => (
        <img key={path} src={path} alt='Imagen' width={50} height={50} />
      ))}
      <Dropzone paths={paths} setPaths={handleDropFiles} maxFiles={3} removeAfterUpload />
    </section>
  )
}

export default PictureCanvas
