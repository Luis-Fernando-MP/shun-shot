import ThemeController from '@/shared/components/ThemeController'
import IconButton from '@/shared/ui/IconButton'
import { MaximizeIcon, MinusIcon, PlusIcon } from 'lucide-react'
import { type FC } from 'react'

import './style.scss'

interface Props {
  className?: string
}

const HeaderBar: FC<Props> = ({ className }) => {
  return (
    <section className={`headerBar ${className}`}>
      <ThemeController />
      <div className='separator' />
      <IconButton transparent label='Maximizar la aplicación' position='bottom'>
        <MaximizeIcon />
      </IconButton>
      <h5>Zoom :</h5>
      <IconButton transparent label='Aumentar zoom' position='bottom'>
        <PlusIcon />
      </IconButton>
      <IconButton transparent label='Disminuir zoom' position='bottom'>
        <MinusIcon />
      </IconButton>
    </section>
  )
}

export default HeaderBar
