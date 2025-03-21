import IconButton from '@/shared/ui/IconButton'
import { ImagePlusIcon } from 'lucide-react'
import type { FC } from 'react'

import './style.scss'

interface Props {
  background: string | null
  setBackground: (background: string) => void
}

const UploadImageController: FC<Props> = ({ background, setBackground }) => {
  return (
    <section className='uploadImageController'>
      <h3 className='paragraph-highlight'># Cargar Imagen:</h3>

      <IconButton>
        <ImagePlusIcon />
        <h4>Picar nueva imagen</h4>
      </IconButton>
    </section>
  )
}

export default UploadImageController
