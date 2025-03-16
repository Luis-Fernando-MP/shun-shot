import Editor from '@monaco-editor/react'
import React, { useEffect, useRef, useState } from 'react'

import files from './files'

function App() {
  const editorRef = useRef(null)
  const [fileName, setFileName] = useState('script.js')

  const file = files[fileName]

  useEffect(() => {
    editorRef.current?.focus()
  }, [file.name])

  return (
    <>
      <button disabled={fileName === 'script.js'} onClick={() => setFileName('script.js')}>
        script.js
      </button>
      <button disabled={fileName === 'style.css'} onClick={() => setFileName('style.css')}>
        style.css
      </button>
      <button disabled={fileName === 'index.html'} onClick={() => setFileName('index.html')}>
        index.html
      </button>
      <Editor
        height='80vh'
        theme='vs-dark'
        path={file.name}
        defaultLanguage={file.language}
        defaultValue={file.value}
        onMount={editor => (editorRef.current = editor)}
      />
    </>
  )
}

export default App
