import Editor from '@monaco-editor/react'
import { type FC } from 'react'

import useMonacoEditor from '../../hooks/useMonacoEditor'
import useMonacoStore from '../../store/monaco.store'
import useMonacoBasicOptionsStore from '../../store/monacoBasicOptions.store'
import LoaderEditor from './LoaderEditor'
import './style.scss'

const EditorComponent: FC = () => {
  const monacoConfig = useMonacoStore()
  const { typography, language } = useMonacoBasicOptionsStore()

  const { moveBoard, exampleCode, handleMount, handleBeforeMount, themeName } = useMonacoEditor({
    typography,
    fontSize: monacoConfig.fontSize ?? 14
  })

  return (
    <Editor
      loading={<LoaderEditor />}
      className={`editorComponent ${moveBoard ? 'zoom' : ''}`}
      height='100%'
      options={{
        ...monacoConfig,
        theme: themeName,
        fontFamily: typography,
        contextmenu: false
      }}
      language={language.language}
      defaultLanguage='typescript'
      defaultValue={exampleCode}
      theme={themeName}
      onMount={handleMount}
      beforeMount={handleBeforeMount}
    />
  )
}

export default EditorComponent
