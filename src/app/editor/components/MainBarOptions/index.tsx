'use client'

import IconButton from '@/shared/ui/IconButton'
import { CloudSunIcon, Layers2Icon, Move3dIcon, SquareRoundCornerIcon } from 'lucide-react'
import type { FC } from 'react'

const MainBarOptions: FC = () => {
  return (
    <section className='mainBar-section'>
      <IconButton label='Posicionamiento' transparent>
        <Move3dIcon />
      </IconButton>
      <IconButton label='Sombras' transparent>
        <CloudSunIcon />
      </IconButton>
      <IconButton label='Redondeados' transparent>
        <SquareRoundCornerIcon />
      </IconButton>
      <IconButton label='Capas' transparent>
        <Layers2Icon />
      </IconButton>
    </section>
  )
}

export default MainBarOptions
