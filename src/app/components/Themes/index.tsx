'use client'

import useTheme, { getTheme } from '@/app/hooks/useTheme'
import { acl } from '@/shared/acl'
import { type HtmlHTMLAttributes, type JSX, type ReactNode, useCallback } from 'react'
import toast from 'react-hot-toast'

import './style.scss'
import { IThemes, themes } from './themes'

interface IThemesComponent extends HtmlHTMLAttributes<HTMLElement> {
  children?: Readonly<ReactNode[]> | null
}

const Themes = ({ className, ...props }: IThemesComponent): JSX.Element => {
  const th = themes
  const st = (bg: string | undefined) => ({ style: { backgroundColor: bg } })
  const { themeName, setTheme } = useTheme()
  const { name } = getTheme(themeName)

  const changeTheme = useCallback(
    (selectTheme: string) => {
      if (selectTheme === name) return
      setTheme(selectTheme as IThemes)
      toast.success('Tema cambiado')
    },
    [setTheme, name]
  )

  return (
    <section className={`${className}`} {...props}>
      {Object.entries(th).map(([themeName, themeData]) => {
        const {
          background,
          foreground,
          caret,
          selection,
          selectionMatch,
          lineHighlight,
          gutterForeground
        } = themeData.colors

        return (
          <button
            key={themeName}
            className={`themes-item ${acl(themeName === name)}`}
            onClick={() => changeTheme(themeName)}
          >
            <div className='themes-background' {...st(background)}>
              <div className='themes-background__text' {...st(caret)} />
              <div className='themes-background__flex'>
                <div className='themes-background__font' {...st(foreground)} />
                <div className='themes-background__font' {...st(foreground)} />
              </div>
              <div className='themes-background__flex'>
                <div className='themes-background__bgs' {...st(selection)} />
                <div className='themes-background__bgs' {...st(selectionMatch)} />
                <div className='themes-background__bgs' {...st(lineHighlight)} />
                <div className='themes-background__bgs' {...st(gutterForeground)} />
              </div>
            </div>
            <div className='themes-info'>
              <p className='themes-title'>{themeName}</p>
              <div className='themes-background__caret' {...st(caret)} />
            </div>
          </button>
        )
      })}
    </section>
  )
}

export default Themes
