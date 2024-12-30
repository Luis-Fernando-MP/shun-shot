'use client'

import domToImageMore from 'dom-to-image-more'
import { jsPDF } from 'jspdf'
import toast from 'react-hot-toast'

const scaleMap = {
  high: 3,
  medium: 2,
  low: 1
}

export const getPngUrl = async (element: HTMLElement, scale: number = scaleMap.high) => {
  const id = toast.loading('Transformando...')
  try {
    const pngDataUrl = await domToImageMore.toPng(element, {
      bgcolor: 'black',
      quality: 1,
      width: element.offsetWidth * scale,
      height: element.offsetHeight * scale,
      style: {
        transform: `scale(${scale})`,
        transformOrigin: 'top left',
        borderRadius: 0
      }
    })
    toast.success('Transformación lista!!', { id })
    return pngDataUrl
  } catch (error: any) {
    console.error(error)
    toast.error('No se pudo transformar la imagen', { id })
  }
}

export const downloadToJpeg = async (
  fileName: string,
  element: HTMLElement,
  scale: number = scaleMap.high
) => {
  const id = toast.loading('Descargando...')

  try {
    const pngDataUrl = await domToImageMore.toJpeg(element, {
      bgcolor: 'black',
      quality: 1,
      width: element.offsetWidth * scale,
      height: element.offsetHeight * scale,
      style: {
        transform: `scale(${scale})`,
        transformOrigin: 'top left',
        borderRadius: 0
      }
    })

    const downloadLink = document.createElement('a')
    downloadLink.href = pngDataUrl
    downloadLink.download = `${fileName}.png`
    downloadLink.click()

    toast.success('Todo Listo!!', { id })
  } catch (error: any) {
    console.error(error)
    toast.error('No se pudo descargar la imagen', { id })
  }
}

export const downloadToPng = async (
  fileName: string,
  element: HTMLElement,
  scale: number = scaleMap.high
) => {
  const id = toast.loading('Descargando...')
  try {
    const pngDataUrl = await domToImageMore.toPng(element, {
      bgcolor: 'black',
      quality: 1,
      width: element.offsetWidth * scale,
      height: element.offsetHeight * scale,
      style: {
        transform: `scale(${scale})`,
        transformOrigin: 'top left',
        borderRadius: 0
      }
    })

    const downloadLink = document.createElement('a')
    downloadLink.href = pngDataUrl
    downloadLink.download = `${fileName}.png`
    downloadLink.click()

    toast.success('Todo Listo!!', { id })
  } catch (error: any) {
    console.error(error)
    toast.error('No se pudo descargar la imagen', { id })
  }
}

export const copyToPng = async (element: HTMLElement, scale: number = scaleMap.high) => {
  const id = toast.loading('Descargando...')
  try {
    const pngDataUrl = await domToImageMore.toPng(element, {
      bgcolor: 'black',
      quality: 1,
      width: element.offsetWidth * scale,
      height: element.offsetHeight * scale,
      style: {
        transform: `scale(${scale})`,
        transformOrigin: 'top left',
        borderRadius: 0
      }
    })

    const response = await fetch(pngDataUrl)
    const blob = await response.blob()

    if (!navigator.clipboard || !window.ClipboardItem) {
      toast.error('El navegador no soporta la API de portapapeles.', { id })
      return
    }

    const item = new ClipboardItem({ 'image/png': blob })
    await navigator.clipboard.write([item])
    toast.success('¡Copiado al portapapeles!', { id })
  } catch (error: any) {
    console.error(error)
    toast.error('No se pudo copiar la imagen', { id })
  }
}

export const downloadPDF = async (
  fileName: string,
  element: HTMLElement,
  scale: number = scaleMap.high
) => {
  const id = toast.loading('Preparando...')
  try {
    const pngDataUrl = await domToImageMore.toPng(element, {
      bgcolor: 'black',
      quality: 1,
      width: element.offsetWidth * scale,
      height: element.offsetHeight * scale,
      style: {
        transform: `scale(${scale})`,
        transformOrigin: 'top left',
        borderRadius: 0
      }
    })

    const pdfWidth = (element.offsetWidth * scale) / 2
    const pdfHeight = (element.offsetHeight * scale) / 2

    const pdf = new jsPDF({
      orientation: pdfWidth > pdfHeight ? 'landscape' : 'portrait',
      unit: 'px',
      format: [pdfWidth, pdfHeight]
    })

    pdf.addImage(pngDataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight)

    pdf.save(`${fileName}.pdf`)
    toast.success('¡PDF Listo!', { id })
  } catch (error) {
    console.error('Error al generar el PDF:', error)
    toast.error('No se pudo copiar la imagen', { id })
  }
}
