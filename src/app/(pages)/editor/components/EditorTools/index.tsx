import type { JSX } from 'react'

interface IEditorTools {
  className: string
}
const EditorTools = ({ className }: IEditorTools): JSX.Element => {
  return <div className={`${className}`}>tools</div>
}

export default EditorTools
