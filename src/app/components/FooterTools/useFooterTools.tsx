import { useMonacoStore } from '@/app/(pages)/(current)/store/monaco-store'
import { copyToPng, downloadFullImage, downloadPDF, downloadToPng } from '@/shared/imageEditor'
import { toggleFullscreen } from '@/shared/utils/tools-app'
import { useState } from 'react'

type StatusApp = 'idle' | 'loading' | 'error'

const useFooterTools = () => {
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [downloadStatus, setDownloadStatus] = useState<StatusApp>('idle')
  const [clipStatus, setClipStatus] = useState<StatusApp>('idle')
  const [pdfStatus, setPDFStatus] = useState<StatusApp>('idle')
  const [windStatus, setWindStatus] = useState<StatusApp>('idle')

  const store = useMonacoStore()
  const { setFontSize, refIde, fileName } = store

  const handleScreen = (): void => {
    setIsFullScreen(!isFullScreen)
    toggleFullscreen()
  }

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

  const handleWindDownload = async () => {
    setWindStatus('loading')
    const $monacoParent = document.querySelector('#monacoParent')
    if (!$monacoParent || !($monacoParent instanceof HTMLElement)) return
    const monHeight = $monacoParent.offsetHeight
    const parentHeight = $monacoParent.parentElement?.offsetHeight

    try {
      await downloadFullImage(fileName, $monacoParent)
      if (parentHeight && monHeight >= parentHeight) refIde.layout({})
    } catch (error) {
      console.error(error)
    } finally {
      setWindStatus('idle')
    }
  }

  const handleDownload = async () => {
    setDownloadStatus('loading')
    const $monacoParent = document.querySelector('#monacoParent')
    if (!$monacoParent || !($monacoParent instanceof HTMLElement)) return

    try {
      await downloadToPng(fileName, $monacoParent)
    } catch (error) {
      console.error(error)
    } finally {
      setDownloadStatus('idle')
    }
  }

  const handleCopyToClip = async () => {
    setClipStatus('loading')
    const $monacoParent = document.querySelector('#monacoParent')
    if (!$monacoParent || !($monacoParent instanceof HTMLElement)) return
    try {
      await copyToPng($monacoParent)
    } catch (error) {
      console.error(error)
    } finally {
      setClipStatus('idle')
    }
  }

  const handleDownloadPDF = async () => {
    setPDFStatus('loading')
    try {
      const $monacoParent = document.querySelector('#monacoParent')
      if (!$monacoParent || !($monacoParent instanceof HTMLElement)) return
      await downloadPDF(fileName, $monacoParent)
    } catch (error) {
      console.error(error)
    } finally {
      setPDFStatus('idle')
    }
  }

  return {
    handleScreen,
    handleFontSize,
    handleFormatCode,
    handleUndo,
    handleRedo,
    handleWindDownload,
    handleDownload,
    handleCopyToClip,
    handleDownloadPDF,
    isFullScreen,
    downloadStatus,
    clipStatus,
    pdfStatus,
    windStatus,
    ...store
  }
}

export default useFooterTools
