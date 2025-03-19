import { newKey } from '@/shared/key'
import IconButton from '@/shared/ui/IconButton'
import LabeledInput from '@/shared/ui/LabeledInput'
import type { FC } from 'react'

interface Props {
  fontSize?: number
  setFontSize: (fontSize: number) => void
}

const FontSizePreference: FC<Props> = ({ fontSize, setFontSize }) => {
  if (!fontSize) return null
  return (
    <>
      <h5 className='paragraph-emphasis'>Tamaño de la fuente</h5>
      <div className='monacoPreferences-switch'>
        <LabeledInput value={fontSize} min={10} max={22} type='number' onChange={e => setFontSize(Number(e.target.value))}>
          px
        </LabeledInput>
      </div>
      <div className='monacoPreferences-switch'>
        {[10, 14, 16, 18, 20].map(style => {
          const normal = 14
          return (
            <IconButton key={newKey()} onClick={() => setFontSize(style)} active={fontSize === style}>
              {style === normal ? 'Normal' : style}
            </IconButton>
          )
        })}
      </div>
    </>
  )
}

export default FontSizePreference
