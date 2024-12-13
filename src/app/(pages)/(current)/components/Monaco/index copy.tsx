'use client'

import Editor, { useMonaco } from '@monaco-editor/react'
import themesData from 'monaco-themes/themes/themelist.json'
import {
  Fira_Code,
  JetBrains_Mono,
  Roboto_Mono,
  Source_Code_Pro,
  Ubuntu_Mono
} from 'next/font/google'
import { useEffect, useRef, useState } from 'react'

import files from './files'

const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-fira-code', weight: '400' })
const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  weight: '400'
})
const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-source-code-pro',
  weight: '400'
})
const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  weight: '400'
})
const ubuntuMono = Ubuntu_Mono({
  subsets: ['latin'],
  variable: '--font-ubuntu-mono',
  weight: '400'
})

const fonts = [
  { name: 'Fira Code', style: firaCode.variable },
  { name: 'JetBrains Mono', style: jetBrainsMono.variable },
  { name: 'Source Code Pro', style: sourceCodePro.variable },
  { name: 'Roboto Mono', style: robotoMono.variable },
  { name: 'Ubuntu Mono', style: ubuntuMono.variable }
]
const Monaco = () => {
  const monaco = useMonaco()
  const [language, setLanguage] = useState(files.javascript.language)
  const [theme, setTheme] = useState('vs-dark')
  const [fontSize, setFontSize] = useState(16)
  const [fontFamily, setFontFamily] = useState(fonts[0].name)
  const [code, setCode] = useState(files.javascript.value)
  const [themePreviews, setThemePreviews] = useState([])

  const editorRef = useRef(null)

  const loadThemes = async () => {
    if (monaco) {
      const loadedThemes = []
      // Cargar los temas de forma asíncrona
      for (const themeName in themesData) {
        const theme = await import(`monaco-themes/themes/${themesData[themeName]}`)
        monaco?.editor.defineTheme(themeName, theme)

        const baseColor = theme.colors['editor.background'] || '#ffffff'
        loadedThemes.push({ name: themeName, color: baseColor })
      }
      setThemePreviews(loadedThemes)
    }
  }

  useEffect(() => {
    loadThemes()
  }, [monaco])

  const formatCode = () => {
    if (editorRef.current) {
      editorRef.current.getAction('editor.action.formatDocument').run()
    }
  }

  const handleThemeChange = themeName => {
    setTheme(themeName)
  }

  const handleFontChange = fontName => {
    const selectedFont = fonts.find(f => f.name === fontName)
    if (selectedFont) {
      setFontFamily(selectedFont.name)
    }
  }

  // Obtenemos dinámicamente los lenguajes disponibles en Monaco
  console.log(monaco?.languages.getLanguages())

  const languages = monaco?.languages.getLanguages() ?? []

  return (
    <div className='p-4'>
      <div className='mb-4 flex space-x-4'>
        <select
          value={language}
          onChange={e => setLanguage(e.target.value)}
          className='border px-2 py-1'
        >
          {languages.map(lang => (
            <option key={lang.id} value={lang.id}>
              {lang.id}
            </option>
          ))}
        </select>
        <div className='flex w-2/5 flex-wrap space-x-2'>
          {themePreviews.map(theme => (
            <div
              key={theme.name}
              onClick={() => handleThemeChange(theme.name)}
              style={{
                backgroundColor: theme.color,
                cursor: 'pointer',
                width: '25px',
                height: '25px',
                borderRadius: '5px',
                border: `1px solid ${theme.name === theme ? 'black' : 'transparent'}`
              }}
            ></div>
          ))}
        </div>
        <select
          value={fontSize}
          onChange={e => setFontSize(Number(e.target.value))}
          className='border px-2 py-1'
        >
          {[12, 14, 16, 18, 20, 24].map(size => (
            <option key={size} value={size}>
              {size}px
            </option>
          ))}
        </select>
        <select
          value={fontFamily}
          onChange={e => handleFontChange(e.target.value)}
          className='border px-2 py-1'
        >
          {fonts.map(font => (
            <option key={font.name} value={font.name}>
              {font.name}
            </option>
          ))}
        </select>
      </div>
      <Editor
        className='monaco-editor'
        height='70vh'
        theme={theme}
        defaultLanguage={language}
        value={code}
        onChange={value => setCode(value || '')}
        options={{
          fontSize,
          fontFamily,
          automaticLayout: true
        }}
        onMount={editor => {
          editorRef.current = editor
        }}
      />
    </div>
  )
}

export default Monaco
