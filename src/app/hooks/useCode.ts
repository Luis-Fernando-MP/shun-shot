import { create } from 'zustand'

import { LanguagesType } from '../(current)/languages'

type IUseCode = {
  code: string
  title: string
  language: LanguagesType
  showNumbers: boolean
  setShowNumbers: (showNumbers: boolean) => void
  setLanguage: (language: LanguagesType) => void
  setTitle: (title: string) => void
  setCode: (code: string) => void
}

export const defaultCode = `<CodeMirror
        value={'code'}
        height='100%'
        theme={theme()}
        extensions={[languages[language]]}
        basicSetup={{
          lineNumbers: showLineNumbers,
          foldGutter: false,
          dropCursor: false,
          allowMultipleSelections: false,
          indentOnInput: false
        }}
        editable={true}
      />
`
const codeLocal = window.localStorage.getItem('code')?.trim()
const isEmpty = !codeLocal || codeLocal.length < 1
const useCode = create<IUseCode>(set => ({
  code: isEmpty ? defaultCode : codeLocal,
  title: 'my-code',
  language: 'react',
  showNumbers: true,
  setLanguage: language => set({ language }),
  setShowNumbers: showNumbers => set({ showNumbers }),
  setTitle: title => set({ title }),
  setCode: code => set({ code })
}))

export default useCode
