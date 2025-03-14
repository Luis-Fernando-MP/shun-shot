'use client'

import languageIcons from '@/shared/monaco-languages'
import { useMonacoStore } from '@code-store/config-monaco.store'
import { useRefMonacoStore } from '@code-store/refMonaco.store'
import { useMonaco } from '@monaco-editor/react'
import { type JSX } from 'react'

import LanguageSection from './LanguageSection'
import './style.scss'

const Languages = (): JSX.Element => {
  const monaco = useMonaco()

  const { refIde } = useRefMonacoStore()
  const { language, setLanguage } = useMonacoStore()

  const changeLang = (lang: string) => {
    if (!monaco) return
    monaco.editor.setModelLanguage(refIde.getModel(), lang)
    setLanguage(lang)
  }

  return (
    <section className='languages'>
      <h4>Lenguajes de programación</h4>
      {Object.entries(languageIcons).map(lgc => {
        return <LanguageSection key={lgc[0]} languageCategory={lgc} changeLang={changeLang} currentLanguage={language} />
      })}
    </section>
  )
}

export default Languages
