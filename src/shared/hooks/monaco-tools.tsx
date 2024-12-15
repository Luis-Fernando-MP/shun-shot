import { useMonacoStore } from '@/app/(pages)/(current)/store/config-monaco.store'

const useMonacoTools = () => {
  const { setFontSize, refIde, fontSize } = useMonacoStore()

  const handleFontSize = (size: number): void => {
    setFontSize(size)
  }

  const handleFormatCode = () => {
    if (!refIde) return
    refIde.getAction('editor.action.formatDocument').run()
  }

  const handleUndo = () => {
    if (!refIde) return
    const model = refIde.getModel()
    if (!model) return
    model.undo()
  }

  const handleRedo = () => {
    if (!refIde) return
    const model = refIde.getModel()
    if (!model) return
    model.redo()
  }

  return {
    handleFontSize,
    handleFormatCode,
    handleUndo,
    handleRedo,
    fontSize
  }
}

export default useMonacoTools
