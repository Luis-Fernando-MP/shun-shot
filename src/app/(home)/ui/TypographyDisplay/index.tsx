import { monacoFonts } from '@/shared/fonts/monaco-fonts'
import type { ButtonHTMLAttributes, FC } from 'react'

import './style.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  font: typeof monacoFonts.anonymous_Pro
  title: string
  selected?: boolean
}

/**
 * @description Display a typography with a font and a title
 * @param font - The font to display
 * @param title - The title to display
 * @param className - The class name to apply
 * @param selected - Whether the typography is selected
 * @param props - The props to apply to the button
 * @returns A typography display
 */

const TypographyDisplay: FC<Props> = ({ font, title, className = '', selected = false, ...props }) => {
  const { className: fontClassName } = font
  return (
    <button className={`typographyDisplay ${className} ${fontClassName} antialiased ${selected ? 'selected' : ''}`} {...props}>
      <p className={`typographyDisplay-extra ${fontClassName}`}>Shum shot's</p>
      <h3 className={`typographyDisplay-title ${fontClassName}`}>{title}</h3>
      <p className={`typographyDisplay-extra ${fontClassName}`}>{'=> {} [] () <-'}</p>
    </button>
  )
}

export default TypographyDisplay
