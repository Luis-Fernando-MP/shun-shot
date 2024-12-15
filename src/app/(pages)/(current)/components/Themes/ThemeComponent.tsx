import type { HtmlHTMLAttributes, JSX, ReactNode } from 'react'

import { useMonacoStore } from '../../store/config-monaco.store'
import { useThemeMonacoStore } from '../../store/themes-monaco.store'

interface IThemeComponent extends HtmlHTMLAttributes<HTMLElement> {
  theme: any
  children?: Readonly<ReactNode[]> | null | Readonly<ReactNode>
}

const bg = (bg: string | undefined) => ({ style: { backgroundColor: bg } })

const ThemeComponent = ({ className, theme, ...props }: IThemeComponent): JSX.Element => {
  const { refIde } = useMonacoStore()
  const setTheme = useThemeMonacoStore(s => s.setTheme)

  const [key, json] = theme
  const { colors } = json

  const handleSetTheme = (th: any): void => {
    if (!refIde) return
    const [key, json] = th
    setTheme({ ...json, name: key })
    refIde?._themeService.setTheme(key)
  }

  return (
    <button className={`${className}`} {...props} onClick={() => handleSetTheme(theme)} title={key}>
      <div className='themes-item__text' {...bg(colors['editor.lineHighlightBackground'])} />
      <div className='themes-item__flex'>
        <div className='themes-item__font' {...bg(colors['editor.foreground'])} />
        <div className='themes-item__font' {...bg(colors['editor.foreground'])} />
      </div>
      <div className='themes-item__flex'>
        <div className='themes-item__bgs' {...bg(colors['editor.selectionBackground'])} />
        <div className='themes-item__bgs' {...bg(colors['editor.selectionBackground'])} />
        <div className='themes-item__bgs' {...bg(colors['editor.lineHighlightBackground'])} />
        <div className='themes-item__bgs' {...bg(colors['editorWhitespace.foreground'])} />
      </div>
    </button>
  )
}

export default ThemeComponent
