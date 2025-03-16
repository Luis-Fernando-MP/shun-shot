'use client'

import { acl } from '@/shared/acl'
import Popup from '@/shared/components/Popup'
import IconButton from '@/shared/ui/IconButton'
import ThemeColorDisplay from '@/shared/ui/ThemeColorDisplay'
import { type JSX, MouseEvent, useState } from 'react'

import { PopupPositions } from '../Popup/usePopup'
import './style.scss'
import useAppTheme from './useAppTheme'

const ThemeController = (): JSX.Element => {
  const [openThemes, setOpenThemes] = useState(false)
  const [positions, setPositions] = useState<PopupPositions>()
  const { appTheme, THEMES, handleSetTheme } = useAppTheme()
  const togglePopup = () => {
    setOpenThemes(!openThemes)
  }

  const handleOpenPopup = (e: MouseEvent): void => {
    togglePopup()
    setPositions({ x: e.clientX, y: e.clientY })
  }

  return (
    <section className='theme'>
      <IconButton transparent label='Tema de la aplicación' position='bottom' onClick={handleOpenPopup}>
        <ThemeColorDisplay />
        <p>Tema :</p>
        <h4>{appTheme}</h4>
      </IconButton>
      <Popup isOpen={openThemes} onClose={togglePopup} title='Temas' className='theme-popup' clickPosition={positions}>
        {Object.entries(THEMES).map(current => {
          const [key, colors] = current
          return (
            <button
              key={key}
              onClick={() => handleSetTheme(key)}
              className={`theme-action ${acl(key === appTheme, 'selected')}`}
              style={{
                backgroundColor: `rgb(${colors['bg-primary']})`,
                borderColor: `rgb(${colors['bg-tertiary']})`
              }}
            >
              <div
                className='theme-action__circle'
                style={{
                  backgroundImage: `linear-gradient(45deg, rgb(${colors['tn-primary']}), rgb(${colors['tn-primary']}, 0.3), rgb(${colors['bg-primary']}) 80%)`
                }}
              />
              <div className='theme-action__blur' style={{ backgroundColor: `rgb(${colors['bg-secondary']})` }} />
              <h4
                style={{
                  backgroundColor: `rgb(${colors['bg-primary']}, .1)`,
                  color: `rgb(${colors['fnt-primary']})`
                }}
              >
                {key}
              </h4>
            </button>
          )
        })}
      </Popup>
    </section>
  )
}

export default ThemeController
