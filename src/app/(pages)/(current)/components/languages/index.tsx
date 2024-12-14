import { acl } from '@/shared/acl'
import { useMonaco } from '@monaco-editor/react'
import { type JSX } from 'react'

import { useMonacoStore } from '../../store/monaco-store'
import { monacoFonts } from './fonts'
import './style.scss'

const Languages = (): JSX.Element => {
  const monaco = useMonaco()
  const { fontFamily, setFontFamily } = useMonacoStore()

  return (
    <section className='languages'>
      <h4>Tipos de fuente</h4>
      <div className='languages-fonts'>
        {Object.entries(monacoFonts).map((font, i, arr) => {
          const [key, name] = font
          const currentFont = { fontFamily: name.var }
          return (
            <button
              key={key}
              className={`languages-font ${acl(fontFamily === name.var)} animate-blurred-fade-in`}
              onClick={() => {
                setFontFamily(name.var)
              }}
              style={{
                animationDelay: `${i / arr.length}s`
              }}
            >
              <span style={currentFont}>- Code Scape -</span>
              <h3 style={currentFont}>{key}</h3>
              <p style={currentFont}>{`=> {} ()`}</p>
            </button>
          )
        })}
      </div>
    </section>
  )
}

export default Languages
