'use client'

import { acl } from '@/shared/acl'

interface IPreviewImageProps {
  imagePreview: string
  isLoading: boolean
  closePreview: () => void
}

const PreviewImage = ({ imagePreview, isLoading, closePreview }: IPreviewImageProps) => {
  return (
    <aside className='preview-image'>
      <div className='preview-actions'>
        <button type='button' onClick={closePreview} className='preview-cancel'>
          ❌ Cancelar
        </button>
      </div>
      <div className={`preview-content ${acl(isLoading, 'loading')}`}>
        {isLoading ? <p>loading</p> : <img src={imagePreview} alt='Vista previa' loading='lazy' />}
      </div>
    </aside>
  )
}

export default PreviewImage
