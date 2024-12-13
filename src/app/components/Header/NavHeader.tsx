'use client'

import { acl } from '@/shared/acl'
import { AppWindowIcon, LayersIcon, SettingsIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { JSX } from 'react'

const NavHeader = (): JSX.Element => {
  const path = usePathname()
  return (
    <nav className='header-nav'>
      <Link href='/' className={`${acl(path === '/')} btn-tooltip`}>
        <AppWindowIcon />
        <p className='tooltip bottom'>InIcio</p>
      </Link>
      <Link href='/editor' className={`${acl(path === '/editor')} btn-tooltip`}>
        <LayersIcon />
        <p className='tooltip bottom'>Editor</p>
      </Link>
      <button className='btn-tooltip'>
        <SettingsIcon />
        <p className='tooltip bottom'>Configuración</p>
      </button>
    </nav>
  )
}

export default NavHeader
