'use client'

import FontFamily from '@/app/(pages)/(current)/components/FontFamily'
import Themes from '@/app/(pages)/(current)/components/Themes'
import Languages from '@/app/(pages)/(current)/components/languages'
import { acl } from '@/shared/acl'
import { ALargeSmallIcon, LanguagesIcon, SwatchBookIcon, UserIcon } from 'lucide-react'
import { type JSX, useState } from 'react'

type ShowView = 'languages' | 'fontFamily' | 'themes' | 'any'

const ToolsModal = (): JSX.Element => {
  const [view, setView] = useState<ShowView>('any')

  const handleSetView = (newView: ShowView) => {
    if (view == newView) return setView('any')
    setView(newView)
  }

  return (
    <>
      <section className={`tools-modal ${acl(view !== 'any')}`}>
        {view === 'themes' && <Themes />}
        {view === 'fontFamily' && <FontFamily />}
        {view === 'languages' && <Languages />}
      </section>
      <section className='tools-section'>
        <button className='tools-action btn-tooltip border-right badge beta'>
          <UserIcon />
          <p className='tooltip top'>Iniciar sesión</p>
        </button>

        <button className='tools-action btn-tooltip' onClick={() => handleSetView('languages')}>
          <LanguagesIcon />
          <p className='tooltip top'>Lenguajes</p>
        </button>
        <button className='tools-action btn-tooltip' onClick={() => handleSetView('fontFamily')}>
          <ALargeSmallIcon />
          <p className='tooltip top'>Fuente de letra</p>
        </button>
        <button className='tools-action btn-tooltip' onClick={() => handleSetView('themes')}>
          <SwatchBookIcon />
          <p className='tooltip top'>Temas</p>
        </button>
      </section>
    </>
  )
}

export default ToolsModal
