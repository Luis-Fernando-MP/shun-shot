import { useMonaco } from '@monaco-editor/react'
import { type JSX, useCallback, useEffect } from 'react'

import { useMonacoStore } from '../../store/monaco-store'
import { useThemeMonacoStore } from '../../store/monaco-theme'
import { themesData } from './loadStaticThemes'
import './style.scss'

const bg = (bg: string | undefined) => ({ style: { backgroundColor: bg } })

const Themes = (): JSX.Element => {
  const monaco = useMonaco()
  const { refIde } = useMonacoStore()
  const { setTheme } = useThemeMonacoStore()

  const loadThemes = useCallback(async () => {
    try {
      Object.entries(themesData).forEach(([themeName, themeData]) => {
        console.log(themeName, themeData)

        monaco?.editor.defineTheme(themeName, themeData as any)
      })
    } catch (error) {
      console.error('Error defining themes:', error)
    }
  }, [monaco?.editor])

  useEffect(() => {
    if (!refIde) return
    loadThemes()
  }, [loadThemes, refIde])

  const handleSetTheme = (th: any): void => {
    if (!refIde) return
    const [key, json] = th
    setTheme(json)
    refIde?._themeService.setTheme(key)
  }

  return (
    <section className='themes'>
      {Object.entries(themesData).map((th: any, i: number) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const [key, json] = th
        const { base, colors } = json

        return (
          <button
            key={`${base}-${i}`}
            className={`themes-item`}
            {...bg(colors['editor.background'])}
            onClick={() => handleSetTheme(th)}
            title={key}
          >
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
      })}
    </section>
  )
}

export default Themes
