'use client'

import useCode from '@/app/hooks/useCode'
import { getTheme } from '@/app/hooks/useStyleCode'
import useTheme from '@/app/hooks/useTheme'
import { codeLanguages } from '@/shared/languages'
import { historyField } from '@codemirror/commands'
import ReactCodeMirror from '@uiw/react-codemirror'
import { type JSX, memo } from 'react'

const stateFields = { history: historyField }

const CodeComponent = (): JSX.Element => {
  const themeName = useTheme(s => s.themeName)
  const { theme } = getTheme(themeName)

  const { language, code, showNumbers, setCode } = useCode()
  const serializedState = window.localStorage.getItem('ju-shots-serialized')

  const handleCodeChange = (value: string, viewUpdate: any) => {
    localStorage.setItem('code', value)
    const state = viewUpdate.state.toJSON(stateFields)
    localStorage.setItem('myEditorState', JSON.stringify(state))
    setCode(value)
  }

  console.log('load')

  return (
    <ReactCodeMirror
      className='react-code-mirror'
      autoFocus
      value={code}
      theme={theme}
      extensions={[codeLanguages[language]]}
      basicSetup={{ lineNumbers: showNumbers }}
      initialState={
        serializedState
          ? {
              json: JSON.parse(serializedState ?? ''),
              fields: stateFields
            }
          : undefined
      }
      onChange={handleCodeChange}
    />
  )
}

export default memo(CodeComponent)
