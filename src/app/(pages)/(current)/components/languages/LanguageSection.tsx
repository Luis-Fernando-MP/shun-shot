'use client'

import { acl } from '@/shared/acl'
import { type JSX } from 'react'

interface ILanguageSection {
  currentLanguage: string
  changeLang: (lang: string) => void
  languageCategory: [
    string,
    {
      [key: string]: any
    }
  ]
}

const LanguageSection = ({
  languageCategory,
  changeLang,
  currentLanguage
}: ILanguageSection): JSX.Element => {
  const [category, languages] = languageCategory

  return (
    <div key={category} className='languages-category'>
      <p>{category}</p>
      <div className='languages-options'>
        {Object.entries(languages).map(([name, { Icon, language, status }], i) => {
          const className = `languages-option btn-tooltip ${acl(currentLanguage === language)} badge ${status} animate-fade-in-up`
          return (
            <button
              key={name}
              className={className}
              onClick={() => changeLang(language)}
              style={{
                animationDelay: `${i * 0.1}s`
              }}
            >
              <Icon />
              <p className='tooltip top'>{name}</p>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default LanguageSection
