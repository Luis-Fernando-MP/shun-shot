'use client'

import IconButton from '@/shared/ui/IconButton'
import LabeledInput from '@/shared/ui/LabeledInput'
import ShumShots from '@/shared/ui/ShumShots'
import { copyImage } from '@lucide/lab'
import { AppWindow, CircleHelpIcon, CloudDownload, Icon, LayersIcon, LetterText, Settings } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { FC } from 'react'

import './style.scss'

interface Props {
  className?: string
}

const pages = [
  {
    path: '/',
    label: 'Editar código',
    icon: AppWindow
  },
  {
    path: '/editor',
    label: 'Editar imagen',
    icon: LayersIcon
  }
]

const MainBar: FC<Props> = ({ className = '' }) => {
  const pathname = usePathname()

  console.log(pathname)

  return (
    <article className={`mainBar border ${className}`}>
      <ShumShots type='xs' radius='circle' />

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

      <div className='separator' />

      <section className='mainBar-section'>
        {pages.map(page => (
          <Link key={page.path} href={page.path} aria-label={page.label}>
            <IconButton label={page.label} transparent active={pathname === page.path}>
              <page.icon />
            </IconButton>
          </Link>
        ))}
        <IconButton label="Acerca de Shum Shot's" transparent>
          <CircleHelpIcon />
        </IconButton>
      </section>
    </article>
  )
}

export default MainBar
