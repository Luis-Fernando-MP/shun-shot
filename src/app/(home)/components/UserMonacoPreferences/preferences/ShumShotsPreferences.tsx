import useShumOptionsStore from '@/app/(home)/store/shumOptions.store'
import { newKey } from '@/shared/key'
import IconButton from '@/shared/ui/IconButton'
import type { FC } from 'react'

const ShumShotsPreferences: FC = () => {
  const shots = useShumOptionsStore()

  const handleChangeShots = (style: boolean): void => {
    shots.setShowLanguageIcon(style)
  }

  return (
    <>
      <div className='paragraph'>
        <h3 className='paragraph-highlight'># Shum shot's:</h3>
      </div>

      <div className='monacoPreferences-section'>
        <h5 className='paragraph-emphasis'>Mostrar icono del lenguaje</h5>
        <div className='monacoPreferences-switch'>
          {[true, false].map(style => (
            <IconButton key={newKey()} onClick={() => shots.setShowLanguageIcon(style)} active={shots.showLanguageIcon === style}>
              {style ? 'On' : 'Off'}
            </IconButton>
          ))}
        </div>
      </div>

      <div className='monacoPreferences-section'>
        <h5 className='paragraph-emphasis'>Mostrar icono del lenguaje</h5>
        <div className='monacoPreferences-switch'>
          {[true, false].map(style => (
            <IconButton key={newKey()} onClick={() => shots.setShowLanguageIcon(style)} active={shots.showLanguageIcon === style}>
              {style ? 'On' : 'Off'}
            </IconButton>
          ))}
        </div>
      </div>
    </>
  )
}

export default ShumShotsPreferences
