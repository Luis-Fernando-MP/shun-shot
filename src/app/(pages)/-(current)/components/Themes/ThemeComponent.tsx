import { useRefMonacoStore } from '@code-store/refMonaco.store'
import { useThemeMonacoStore } from '@code-store/themes-monaco.store'
import { HtmlHTMLAttributes, JSX, ReactNode, memo } from 'react'

interface IThemeComponent extends HtmlHTMLAttributes<HTMLElement> {
  theme: any
  children?: Readonly<ReactNode[]> | null | Readonly<ReactNode>
}

const bg = (bg: string | undefined) => ({ style: { backgroundColor: bg } })

const ThemeComponent = ({ className, theme, ...props }: IThemeComponent): JSX.Element => {
  const { refIde } = useRefMonacoStore()
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

export default memo(ThemeComponent)
