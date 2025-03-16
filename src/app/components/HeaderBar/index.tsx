import IconButton from '@/shared/ui/IconButton'
import ThemeColorDisplay from '@/shared/ui/ThemeColorDisplay'
import { MaximizeIcon, MinusIcon, PlusIcon } from 'lucide-react'
import { type FC } from 'react'

import './style.scss'

interface Props {
  className?: string
}

const HeaderBar: FC<Props> = ({ className }) => {
  return (
    <section className={`headerBar ${className}`}>
      <IconButton transparent label='Tema de la aplicación' position='bottom'>
        <ThemeColorDisplay />
        <p>Tema :</p>
        <h4>Dark</h4>
      </IconButton>
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
