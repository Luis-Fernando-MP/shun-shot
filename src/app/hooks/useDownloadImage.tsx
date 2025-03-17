import { toaster } from '@/shared/components/Toast'
import domToImageMore from 'dom-to-image-more'
import { useCallback, useState } from 'react'
import toast from 'react-hot-toast'

interface HandleDownloadProps {
  fileName: string
  $element: HTMLElement
  scaleFactor: number
}

interface HandleQuestionDownloadProps {
  containerId: string
  childId: string
  onResponse: (response: HTMLElement) => void
  isCopy?: boolean
}

const useDownloadImage = () => {
  const [isDownloading, setIsDownloading] = useState(false)

  /**
   * @description Download html element as png image
   * @param fileName - The name of the file
   * @param $element - The html element to download
   * @param scaleFactor - The scale factor
   */

  const downloadPngImage = useCallback(
    async ({ fileName, $element, scaleFactor }: HandleDownloadProps) => {
      if (isDownloading) return
      const toastId = toaster({ title: 'Procesando imagen...', type: 'pending' })
      setIsDownloading(true)

      try {
        const dataUrl = await domToImageMore.toPng($element, {
          quality: 1,
          width: $element.offsetWidth * scaleFactor,
          height: $element.offsetHeight * scaleFactor,
          style: {
            transform: `scale(${scaleFactor})`,
            transformOrigin: 'top left',
            borderRadius: 0
          }
        })

        const link = document.createElement('a')
        link.download = `${fileName}.png`
        link.href = dataUrl
        link.click()
        toaster({ title: 'Completado', type: 'success', id: toastId })
      } catch (error) {
        console.log(error)
        toaster({ title: 'La descarga ha fallado', type: 'error', description: 'Por favor, inténtalo de nuevo', id: toastId })
      } finally {
        setTimeout(() => {
          toast.dismiss(toastId)
        }, 3000)
        setIsDownloading(false)
      }
    },
    [setIsDownloading]
  )

  const copyToClipboard = useCallback(
    async ({ $element, scaleFactor }: Omit<HandleDownloadProps, 'fileName'>) => {
      if (isDownloading) return
      const toastId = toaster({ title: 'Procesando imagen...', type: 'pending' })
      setIsDownloading(true)

      try {
        const dataUrl = await domToImageMore.toPng($element, {
          quality: 1,
          width: $element.offsetWidth * scaleFactor,
          height: $element.offsetHeight * scaleFactor,
          style: {
            transform: `scale(${scaleFactor})`,
            transformOrigin: 'top left',
            borderRadius: 0
          }
        })

        const response = await fetch(dataUrl)
        const blob = await response.blob()

        if (!navigator.clipboard || !window.ClipboardItem) {
          toaster({ title: 'El navegador no soporta la API de portapapeles.', type: 'error', id: toastId })
          return
        }

        const item = new ClipboardItem({ 'image/png': blob })
        await navigator.clipboard.write([item])
        toaster({ title: 'Completado', type: 'success', id: toastId })
      } catch (error) {
        console.log(error)
        toaster({ title: 'No se pudo copiar la imagen', type: 'error', id: toastId })
      } finally {
        setTimeout(() => {
          toast.dismiss(toastId)
        }, 3000)
        setIsDownloading(false)
      }
    },
    [setIsDownloading]
  )

  const questionDownload = ({ containerId, childId, onResponse, isCopy = false }: HandleQuestionDownloadProps) => {
    const $monacoEditorContainer = document.getElementById(containerId) as HTMLElement
    const $monacoEditor = document.getElementById(childId) as HTMLElement
    if (!$monacoEditor || !$monacoEditorContainer || !$monacoEditorContainer?.contains($monacoEditor)) {
      toaster({
        title: 'No se puede proceder',
        description: 'No se encontró el editor de código',
        type: 'error'
      })
      return
    }

    const paragraph = isCopy ? 'copiar' : 'descargar'

    toaster.question({
      title: isCopy ? 'Que estilo quieres usar' : 'Que tipo de descarga quieres',
      description: `¿Cómo quieres ${paragraph} la imagen?`,
      type: 'warning',
      position: 'bottom-center',
      actionLabel: `${paragraph} con fondo`,
      id: 'download-with-background',
      onAction: () => {
        onResponse($monacoEditorContainer)
      },
      secondActionLabel: `${paragraph} sin fondo`,
      onSecondAction: () => {
        onResponse($monacoEditor)
      }
    })
  }

  return {
    isDownloading,
    downloadPngImage,
    copyToClipboard,
    questionDownload
  }
}

export default useDownloadImage
