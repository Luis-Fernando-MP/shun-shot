'use client'

import useCode, { defaultCode } from '@/app/hooks/useCode'
import useTheme, { getTheme } from '@/app/hooks/useTheme'
import { historyField } from '@codemirror/commands'
import ReactCodeMirror from '@uiw/react-codemirror'
import { type JSX } from 'react'

import { codeLanguages } from './languages'
import './style.scss'

const stateFields = { history: historyField }

const Page = (): JSX.Element => {
  const themeName = useTheme(s => s.themeName)
  const { theme, colors } = getTheme(themeName)
  const serializedState = window.localStorage.getItem('myEditorState')
  const { code, setCode, title, setTitle, language, showNumbers } = useCode()

  return (
    <div className='code' style={{ background: colors.background }}>
      <div className='code-header'>
        <div className='code-header__top'>
          <div className='circle'>
            <span className='red circle2'></span>
          </div>
          <div className='circle'>
            <span className='yellow circle2'></span>
          </div>
          <div className='circle'>
            <span className='green circle2'></span>
          </div>
        </div>
        <div className='title'>
          <input
            type='search'
            value={title}
            style={{ color: colors.foreground }}
            onChange={v => setTitle(v.target.value)}
          />
        </div>
      </div>
      <ReactCodeMirror
        placeholder={defaultCode}
        autoFocus
        spellCheck
        value={code ?? ''}
        theme={theme}
        extensions={[codeLanguages[language]]}
        basicSetup={{
          lineNumbers: showNumbers
        }}
        initialState={
          serializedState
            ? {
                json: JSON.parse(serializedState ?? ''),
                fields: stateFields
              }
            : undefined
        }
        onChange={(value, viewUpdate) => {
          localStorage.setItem('code', value)
          const state = viewUpdate.state.toJSON(stateFields)
          localStorage.setItem('myEditorState', JSON.stringify(state))
          setCode(value)
        }}
      />
    </div>
  )
}

export default Page
