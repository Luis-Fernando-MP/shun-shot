import type { FC } from 'react'

import useMonacoStore from '../../store/monaco.store'
import IconLanguage from './IconLanguage'

interface Props {
  language: [string, { [key: string]: { Icon: React.ElementType; language: string; status: string } }]
}

const MonacoLanguage: FC<Props> = ({ language }) => {
  const [section, languages] = language
  const { language: userLanguage, setLanguage } = useMonacoStore()

  const handleClick = (language: string) => {
    if (userLanguage === language) return
    setLanguage(language)
  }

  return (
    <div className='monacoPreferences-language paragraph'>
      <h4 className='paragraph-normal'>{section}</h4>

      <div className='monacoPreferences-icons'>
        {Object.entries(languages).map(([key, language]) => {
          return (
            <IconLanguage key={key} language={language} onClick={handleClick} selected={userLanguage === language.language} />
          )
        })}
      </div>
    </div>
  )
}

export default MonacoLanguage
