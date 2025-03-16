'use client'

import MainBarOptions from '@/app/(home)/components/MainBarOptions'
import IconButton from '@/shared/ui/IconButton'
import ShumShots from '@/shared/ui/ShumShots'
import { AppWindow, CircleHelpIcon, LayersIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { FC } from 'react'

import AboutShumShots from '../AboutShumShots'
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

const mainBarPages = {
  '/': MainBarOptions
}

const MainBar: FC<Props> = ({ className = '' }) => {
  const pathname = usePathname()

  const RenderForPage = mainBarPages[pathname as keyof typeof mainBarPages]

  return (
    <article className={`mainBar border ${className}`}>
      <ShumShots size='xs' radius='circle' />

      {RenderForPage && <RenderForPage />}

      <div className='separator' />

      <section className='mainBar-section'>
        {pages.map(page => (
          <Link key={page.path} href={page.path} aria-label={page.label}>
            <IconButton label={page.label} transparent active={pathname === page.path}>
              <page.icon />
            </IconButton>
          </Link>
        ))}
        <AboutShumShots />
      </section>
    </article>
  )
}

export default MainBar
