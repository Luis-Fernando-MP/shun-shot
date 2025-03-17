import { MonacoLanguage as MonacoLanguageType } from '@/shared/monaco-languages'
import type { FC } from 'react'

import useMonacoBasicOptionsStore from '../../store/monacoBasicOptions.store'
import IconLanguage from './IconLanguage'

interface Props {
  language: [string, { [key: string]: { Icon: React.ElementType; language: string; short: string } }]
}

const MonacoLanguage: FC<Props> = ({ language }) => {
  const [section, languages] = language
  const { language: userLanguage, setLanguage } = useMonacoBasicOptionsStore()

  const handleClick = (language: MonacoLanguageType) => {
    if (userLanguage.language === language.language) return
    setLanguage(language)
  }

  return (
    <div className='monacoThemeCategory paragraph'>
      <h4 className='paragraph-normal'>{section}</h4>

      <div className='monacoThemeCategory-icons'>
        {Object.entries(languages).map(lang => {
          const [key, languageProps] = lang
          return (
            <IconLanguage
              key={key}
              language={languageProps}
              onClick={handleClick}
              selected={userLanguage.language === languageProps.language}
            />
          )
        })}
      </div>
    </div>
  )
}

export default MonacoLanguage
