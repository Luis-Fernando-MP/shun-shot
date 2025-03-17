'use client'

import Popup from '@/shared/components/Popup'
import { PopupPositions } from '@/shared/components/Popup/usePopup'
import SliceContainer from '@/shared/components/SliceContainer'
import { monacoThemes } from '@/shared/themes/monacoThemes'
import IconButton from '@/shared/ui/IconButton'
import PaletteSphere from '@/shared/ui/PaletteSphere'
import { Settings } from 'lucide-react'
import { type FC, MouseEvent, useState } from 'react'

import './style.scss'

const UserMonacoPreferences: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [positions, setPositions] = useState<PopupPositions>()

  const handleOpenPopup = (e: MouseEvent) => {
    setIsOpen(true)
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

          <SliceContainer maxHeight={300} className='monacoPreferences-themes'>
            {Object.values(monacoThemes).map(theme => {
              const { name, colors } = theme

              console.log('colors', {
                'tn-primary': colors['editor.background'],
                'tn-secondary': colors['editor.background'],
                'bg-primary': colors['editor.background']
              })

              return (
                <PaletteSphere
                  key={name}
                  title={name}
                  theme={{
                    'tn-primary': colors['editor.background'],
                    'tn-secondary': colors['editor.background'],
                    'bg-primary': colors['editor.background']
                  }}
                />
              )
            })}
          </SliceContainer>
        </div>
      </Popup>
    </>
  )
}

export default UserMonacoPreferences
