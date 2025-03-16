import { type JSX, memo } from 'react'

import useBackgroundImage from '../../store/backgroundImage.store'
import useImage from '../../store/useImage'

const MagicColors = (): JSX.Element | null => {
  const colors = useImage(s => s.colors)
  const { setBackground } = useBackgroundImage()

  if (colors.length < 1) return null

  return (
    <div className='editorStyles-section'>
      <h3 className='editorStyles-title'>IA-colors</h3>
      <div className='magicColors'>
        {colors.map(color => {
          const [cl, intensity] = color
          return (
            <button
              className='magicColors-color'
              key={`magic-color-${cl}`}
              style={{ backgroundColor: cl }}
              onClick={() => setBackground(cl)}
              title={`${intensity}`}
            />
          )
        })}
      </div>
    </div>
  )
}

export default memo(MagicColors)
