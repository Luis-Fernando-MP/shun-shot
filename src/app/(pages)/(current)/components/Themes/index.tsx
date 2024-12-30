import { acl } from '@/shared/acl'
import { themesData } from '@/shared/themes/loadStaticThemes'
import { useThemeMonacoStore } from '@code-store/themes-monaco.store'
import { type JSX } from 'react'

import ThemeComponent from './ThemeComponent'
import './style.scss'

const themesArr = Object.entries(themesData)
const Themes = (): JSX.Element => {
  const theme = useThemeMonacoStore(s => s.theme)

  return (
    <section className='themes'>
      {themesArr.map((themeData, i, arr) => {
        const [key, json] = themeData
        const { colors, name } = json

        return (
          <ThemeComponent
            key={key}
            theme={themeData}
            className={`themes-item animate-fade-in-up ${acl(name === theme?.name)}`}
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
