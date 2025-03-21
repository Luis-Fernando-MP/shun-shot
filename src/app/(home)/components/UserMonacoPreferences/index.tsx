'use client'

import Popup from '@/shared/components/Popup'
import { PopupPositions } from '@/shared/components/Popup/usePopup'
import SliceContainer from '@/shared/components/SliceContainer'
import IconButton from '@/shared/ui/IconButton'
import { Settings } from 'lucide-react'
import { type FC, MouseEvent, useState } from 'react'

import MonacoLanguages from '../MonacoLanguages'
import MonacoFonts from './MonacoFonts'
import SetterMonacoPreferences from './SetterMonacoPreferences'
import ThemeSelectorPreference from './ThemeSelectorPreference'
import './style.scss'

const UserMonacoPreferences: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [positions, setPositions] = useState<PopupPositions>()

  const handleOpenPopup = (e: MouseEvent) => {
    setIsOpen(!isOpen)
    setPositions({ x: e.clientX, y: e.clientY })
  }

  return (
    <>
      <IconButton label='Configurar monaco' transparent onClick={handleOpenPopup}>
        <Settings />
      </IconButton>

      <Popup
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        clickPosition={positions}
        title='Monaco config'
        className='monacoPreferences-popup'
      >
        <div className='monacoPreferences-section'>
          <div className='paragraph'>
            <h3 className='paragraph-highlight'># Temas:</h3>
          </div>
          <SliceContainer maxHeight={100} extendedMaxHeight={500} className='monacoPreferences-themes'>
            <ThemeSelectorPreference />
          </SliceContainer>
        </div>

        <div className='monacoPreferences-section'>
          <div className='paragraph'>
            <h3 className='paragraph-highlight'># Lenguajes de Programación:</h3>
          </div>

          <SliceContainer maxHeight={130} extendedMaxHeight={500} className='monacoPreferences-languages'>
            <MonacoLanguages />
          </SliceContainer>
        </div>

        <div className='monacoPreferences-section'>
          <div className='paragraph'>
            <h3 className='paragraph-highlight'># Tipografía:</h3>
          </div>

          <SliceContainer maxHeight={130} extendedMaxHeight={500} className='monacoPreferences-fonts'>
            <MonacoFonts />
          </SliceContainer>
        </div>
        <SetterMonacoPreferences />
      </Popup>
    </>
  )
}

export default UserMonacoPreferences
