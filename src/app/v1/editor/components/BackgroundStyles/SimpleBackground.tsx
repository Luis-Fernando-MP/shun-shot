import { styleSetBackground } from '@editor-store/backgroundImage.store'
import Colorful from '@uiw/react-color-colorful'
import { ImageIcon } from 'lucide-react'
import { type JSX, useEffect, useRef, useState } from 'react'

import ImageUploader from './ImageUploader'

interface ISimpleBackground {
  background: string
  setBackground: (background: string) => void
}

const SimpleBackground = ({ background, setBackground }: ISimpleBackground): JSX.Element => {
  const pickerRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent): void => {
    if (pickerRef.current != null && !pickerRef.current.contains(event.target as Node)) {
      setHiddenPick(true)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleLoadImage = (bg: string): void => {
    const background = styleSetBackground(bg)
    setBackground(background)
  }

  const [hiddenPick, setHiddenPick] = useState(true)

  return (
    <section className='linearBg'>
      <h3 className='editorStyles-title'>Backgrounds</h3>

      <div className='linearBg-container'>
        <button className='linearBg-style linearBg-transparent' onClick={() => setBackground('rgba(0, 0, 0, 0.5)')}>
          <div />
          <span>Vació</span>
        </button>

        <button className='linearBg-style linearBg-color' onClick={() => setHiddenPick(!hiddenPick)}>
          <div />
          <span>Color</span>
        </button>

        <label htmlFor='imageUploader' className='linearBg-style linearBg-image'>
          <div className='linearBg-image__info'>
            <ImageIcon />
            <span>Imagen</span>
          </div>
          <ImageUploader className='linearBg-image__file' id='imageUploader' handleBackground={handleLoadImage} />
        </label>

        <Colorful
          ref={pickerRef}
          className='linearBg-picker'
          disableAlpha
          color={background}
          hidden={hiddenPick}
          onChange={color => setBackground(color.hex)}
        />
      </div>
    </section>
  )
}

export default SimpleBackground
