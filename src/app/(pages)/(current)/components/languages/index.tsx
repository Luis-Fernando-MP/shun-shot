'use client'

import languageIcons from '@/shared/monaco-languages'
import { useMonaco } from '@monaco-editor/react'
import { type JSX, useState } from 'react'

import { useMonacoStore } from '../../store/config-monaco.store'
import LanguageSection from './LanguageSection'
import './style.scss'

const Languages = (): JSX.Element => {
  const monaco = useMonaco()

  const { refIde } = useMonacoStore()
  const [curLang, setCurLang] = useState('javascript')

  const changeLang = (lang: string) => {
    if (!monaco) return
    monaco.editor.setModelLanguage(refIde.getModel(), lang)
    setCurLang(lang)
  }

  return (
    <section className='languages'>
      <h4>Lenguajes de programación</h4>
      {Object.entries(languageIcons).map(lgc => {
        return (
          <LanguageSection
            key={lgc[0]}
            languageCategory={lgc}
            changeLang={changeLang}
            currentLanguage={curLang}
          />
        )
      })}
    </section>
  )
}

export default Languages
