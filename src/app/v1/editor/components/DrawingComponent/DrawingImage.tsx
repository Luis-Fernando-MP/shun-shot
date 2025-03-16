import type { HtmlHTMLAttributes, JSX, ReactNode } from 'react'

import CustomDropzone from '../Dropzone'

interface IDrawingImage extends HtmlHTMLAttributes<HTMLImageElement> {
  children?: Readonly<ReactNode[]> | null | Readonly<ReactNode>
}

const DrawingImage = ({ ...props }: IDrawingImage): JSX.Element => {
  return (
    <div className='drawing-image__container'>
      <CustomDropzone ImagePreview={src => <img src={src} alt='canvas editor style' {...props} />} />
    </div>
  )
}

export default DrawingImage
