'use client'

import { historyField } from '@codemirror/commands'
import { markdown, markdownLanguage } from '@codemirror/lang-markdown'
import { languages } from '@codemirror/language-data'
import { color, colorTheme, colorView } from '@uiw/codemirror-extensions-color'
import { hyperLink } from '@uiw/codemirror-extensions-hyper-link'
import { langs } from '@uiw/codemirror-extensions-langs'
import { mentions } from '@uiw/codemirror-extensions-mentions'
import { andromeda, defaultSettingsOkaidia, okaidia } from '@uiw/codemirror-themes-all'
import CodeMirror, { useCodeMirror } from '@uiw/react-codemirror'
import { useEffect, useRef } from 'react'

const code = `const a = () => {
  return <h1 style={{color: "red"}}>
      hola
    </h1>
}`
// const md = `## Title

// \`\`\`jsx
// function Demo() {
//   return <div>demo</div>
// }
// \`\`\`

// \`\`\`bash
// # Not dependent on uiw.
// npm install @codemirror/lang-markdown --save
// npm install @codemirror/language-data --save
// \`\`\`

// [weisit ulr](https://uiwjs.github.io/react-codemirror/)

// \`\`\`go
// package main
// import "fmt"
// func main() {
//   fmt.Println("Hello, 世界")
// }
// \`\`\`
// `

const users = [{ label: '@juliDev' }, { label: '@luis-fernando-mp' }]

const stateFields = { history: historyField }
export default function App() {
  console.log(defaultSettingsOkaidia)

  const $editor = useRef<HTMLDivElement | null>(null)
  const serializedState = window.localStorage.getItem('myEditorState')
  const md = window.localStorage.getItem('myValue') || ''

  const { setContainer } = useCodeMirror({
    container: $editor.current,
    extensions: [langs.css(), mentions(users), color],
    basicSetup: {
      lineNumbers: true
    },
    theme: andromeda,
    value: code
  })
  useEffect(() => {
    const editor = $editor.current
    if (!editor) return
    setContainer(editor)
  }, [setContainer])
  return (
    <main>
      <section ref={$editor} />
      <CodeMirror
        theme={okaidia}
        value={md}
        extensions={[
          colorView(false),
          colorTheme,
          hyperLink,
          mentions(users),
          markdown({ base: markdownLanguage, codeLanguages: languages })
        ]}
        initialState={
          serializedState
            ? {
                json: JSON.parse(serializedState || ''),
                fields: stateFields
              }
            : undefined
        }
        onChange={(value, viewUpdate) => {
          localStorage.setItem('myValue', value)

          const state = viewUpdate.state.toJSON(stateFields)
          localStorage.setItem('myEditorState', JSON.stringify(state))
        }}
      />
      ;
    </main>
  )
}
