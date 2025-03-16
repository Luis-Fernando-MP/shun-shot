import IconButton from '@/shared/ui/IconButton'
import LabeledInput from '@/shared/ui/LabeledInput'
import { copyImage } from '@lucide/lab'
import { CloudDownload, Icon, LetterText, Settings } from 'lucide-react'
import type { FC } from 'react'

const Index: FC = () => {
  return (
    <section className='mainBar-section'>
      <IconButton label='Formatear código' transparent>
        <LetterText />
      </IconButton>

      <IconButton label='Formatear código' transparent outline>
        <CloudDownload />
        <LabeledInput transparent defaultValue='Nombre de archivo' className='mainBar-fileName'>
          .png
        </LabeledInput>
      </IconButton>

      <IconButton label='Copiar imagen' transparent outline>
        <Icon iconNode={copyImage} />
      </IconButton>

      <IconButton label='Configurar monaco' transparent>
        <Settings />
      </IconButton>
    </section>
  )
}

export default Index
