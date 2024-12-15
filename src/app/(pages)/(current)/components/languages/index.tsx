'use client'

import { acl } from '@/shared/acl'
import languageIcons from '@/shared/monaco-languages'
import { useMonaco } from '@monaco-editor/react'
import { type JSX, useState } from 'react'

import { useMonacoStore } from '../../store/monaco-store'
import './style.scss'

const Languages = (): JSX.Element => {
  const monaco = useMonaco()
  const { refIde } = useMonacoStore()
  const [selectedLanguage, setSelectedLanguage] = useState('javascript')

  const changeLang = (lang: string) => {
    if (!monaco) return
    monaco.editor.setModelLanguage(refIde.getModel(), lang)
    setSelectedLanguage(lang)
  }

  return (
    <section className='languages'>
      <h4>Lenguajes de programación</h4>
      {Object.entries(languageIcons).map(([category, languages]) => {
        return (
          <div key={category} className='languages-category'>
            <p>{category}</p>
            <div className='languages-options'>
              {Object.entries(languages).map(([name, { Icon, language }]) => (
                <button
                  key={name}
                  className={`languages-option btn-tooltip ${acl(selectedLanguage === language)}`}
                  onClick={() => changeLang(language)}
                >
                  <Icon />
                  <p className='tooltip top'>{name}</p>
                </button>
              ))}
            </div>
          </div>
        )
      })}{' '}
    </section>
  )
}

export default Languages
