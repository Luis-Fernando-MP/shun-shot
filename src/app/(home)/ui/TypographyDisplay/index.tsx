import { monacoFonts } from '@/shared/fonts/monaco-fonts'
import type { ButtonHTMLAttributes, FC } from 'react'

import './style.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  font: typeof monacoFonts.anonymous_Pro
  title: string
  selected?: boolean
}

const TypographyDisplay: FC<Props> = ({ font, title, className = '', selected = false, ...props }) => {
  console.log(font)
  const { className: fontClassName } = font.font
  return (
    <button className={`typographyDisplay ${className} ${fontClassName} antialiased ${selected ? 'selected' : ''}`} {...props}>
      <p className={`typographyDisplay-extra ${fontClassName}`}>Shum shot's</p>
      <h3 className={`typographyDisplay-title ${fontClassName}`}>{title}</h3>
      <p className={`typographyDisplay-extra ${fontClassName}`}>{'=> {} [] () <-'}</p>
    </button>
  )
}

export default TypographyDisplay
