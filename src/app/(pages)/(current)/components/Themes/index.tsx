import { acl } from '@/shared/acl'
import { themesData } from '@/shared/themes/loadStaticThemes'
import { useMonaco } from '@monaco-editor/react'
import { type JSX, useCallback, useEffect } from 'react'

import { useThemeMonacoStore } from '../../store/themes-monaco.store'
import ThemeComponent from './ThemeComponent'
import './style.scss'

const themesArr = Object.entries(themesData)
const Themes = (): JSX.Element => {
  const monaco = useMonaco()
  const theme = useThemeMonacoStore(s => s.theme)

  const loadThemes = useCallback(async () => {
    try {
      themesArr.forEach(([themeName, themeData]) => {
        monaco?.editor.defineTheme(themeName, themeData as any)
      })
    } catch (error) {
      console.error('Error defining themes:', error)
    }
  }, [monaco?.editor])

  useEffect(() => {
    loadThemes()
  }, [loadThemes])

  return (
    <section className='themes'>
      {themesArr.map((themeData, i, arr) => {
        const [key, json] = themeData
        const { colors, name } = json

        return (
          <ThemeComponent
            key={key}
            theme={themeData}
            className={`themes-item animate-blurred-fade-in ${acl(name === theme?.name)}`}
            style={{
              backgroundColor: colors['editor.background'],
              animationDelay: `${i / arr.length}s`
            }}
          />
        )
      })}
    </section>
  )
}

export default Themes
