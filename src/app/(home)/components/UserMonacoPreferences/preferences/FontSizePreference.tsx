import { newKey } from '@/shared/key'
import IconButton from '@/shared/ui/IconButton'
import LabeledInput from '@/shared/ui/LabeledInput'
import type { FC } from 'react'

interface Props {
  fontSize?: number
  setFontSize: (fontSize: number) => void
}

const FontSizePreference: FC<Props> = ({ fontSize, setFontSize }) => {
  return (
    <>
      <h5 className='paragraph-emphasis'>Tamaño de la fuente</h5>
      <div className='monacoPreferences-switch'>
        <LabeledInput
          value={fontSize}
          min={10}
          max={30}
          type='number'
          onDebounce={value => setFontSize(Number(value))}
          debounceTime={500}
        >
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
