import { acl } from '@/shared/acl'
import { monacoFonts } from '@shared/fonts/monaco-fonts'
import { type JSX } from 'react'

import { useMonacoStore } from '../../store/config-monaco.store'
import './style.scss'

const FontFamily = (): JSX.Element => {
  const { fontFamily, setFontFamily } = useMonacoStore()

  return (
    <section className='fontMonaco'>
      <h4>Tipos de fuente</h4>
      <div className='fontMonaco-fonts'>
        {Object.entries(monacoFonts).map((font, i) => {
          const [key, name] = font
          const currentFont = { fontFamily: name.var }
          return (
            <button
              key={key}
              className={`fontMonaco-font ${acl(fontFamily === name.var)} animate-blurred-fade-in`}
              onClick={() => {
                setFontFamily(name.var)
              }}
              style={{
                animationDelay: `${i * 0.1}s`
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

export default FontFamily
