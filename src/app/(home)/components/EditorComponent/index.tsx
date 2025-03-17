import Editor from '@monaco-editor/react'
import { type FC } from 'react'

import useMonacoEditor from '../../hooks/useMonacoEditor'
import useMonacoStore from '../../store/monaco.store'
import LoaderEditor from './LoaderEditor'
import './style.scss'

const EditorComponent: FC = () => {
  const { typography, language, ...rest } = useMonacoStore()

  const { moveBoard, exampleCode, handleMount, handleBeforeMount, themeName } = useMonacoEditor({ typography })

  return (
    <Editor
      loading={<LoaderEditor />}
      className={`editorComponent ${moveBoard ? 'zoom' : ''}`}
      height='100%'
      options={{
        theme: themeName,
        fontFamily: typography,
        ...rest
      }}
      language={language}
      defaultLanguage='typescript'
      defaultValue={exampleCode}
      theme={themeName}
      onMount={handleMount}
      beforeMount={handleBeforeMount}
    />
  )
}

export default EditorComponent
