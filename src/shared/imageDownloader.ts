'use client'

import DomToImage from 'dom-to-image'
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
import toast from 'react-hot-toast'

import { sleep } from './sleep'

const fullContainer = async (element: HTMLElement) => {
  element.style.minHeight = 'auto'
  element.style.maxWidth = '900px'
  await sleep(50)
  const clone = element.cloneNode(true) as HTMLElement
  const editor = clone.querySelector('.monaco') as HTMLElement
  editor.style.height = 'fit-content'
  document.body.appendChild(clone)

  editor.style.all = ''
  element.style.all = ''
  return clone
}

const scaleMap = {
  high: 4,
  medium: 2,
  low: 1
}

export const downloadFullImage = async (fileName: string, element: HTMLElement) => {
  const clone = await fullContainer(element)
  const id = toast.loading('Clonando todo el código...')
  const elementHeight = clone.offsetHeight
  const scale =
    elementHeight < 1000 ? scaleMap.low : elementHeight <= 1500 ? scaleMap.medium : scaleMap.high

  const style = {
    transform: `scale(${scale})`,
    transformOrigin: 'top left',
    width: `${clone.offsetWidth}px`,
    height: `${clone.offsetHeight}px`,
    borderRadius: '0',
    backgroundColor: 'transparent'
  }

  try {
    const pngDataUrl = await DomToImage.toPng(clone, {
      quality: 1,
      width: clone.offsetWidth * scale,
      height: clone.offsetHeight * scale,
      style: style
    })

    const downloadLink = document.createElement('a')
    downloadLink.href = pngDataUrl
    downloadLink.download = `${fileName}.png`
    downloadLink.click()

    toast.success('Todo Listo!!', { id })
  } catch (error: any) {
    console.error(error)
    toast.error('No se pudo descargar la imagen', { id })
  } finally {
    document.body.removeChild(clone)
  }
}

export const downloadToJpeg = async (
  fileName: string,
  element: HTMLElement,
  size: number = scaleMap.high
) => {
  const id = toast.loading('Descargando...')
  const scale = size
  const style = {
    transform: `scale(${scale})`,
    transformOrigin: 'top left',
    width: `${element.offsetWidth}px`,
    height: `${element.offsetHeight}px`,
    borderRadius: '0',
    backgroundColor: 'transparent'
  }
  try {
    const pngDataUrl = await DomToImage.toJpeg(element, {
      quality: 1,
      width: element.offsetWidth * scale,
      height: element.offsetHeight * scale,
      style: style
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
  size: number = scaleMap.high
) => {
  const id = toast.loading('Descargando...')
  const scale = size
  const style = {
    transform: `scale(${scale})`,
    transformOrigin: 'top left',
    width: `${element.offsetWidth}px`,
    height: `${element.offsetHeight}px`,
    borderRadius: '0',
    backgroundColor: 'transparent'
  }
  try {
    const pngDataUrl = await DomToImage.toPng(element, {
      quality: 1,
      width: element.offsetWidth * scale,
      height: element.offsetHeight * scale,
      style: style
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

export const copyToPng = async (element: HTMLElement, size: number = scaleMap.high) => {
  const id = toast.loading('Descargando...')
  const scale = size
  const style = {
    transform: `scale(${scale})`,
    transformOrigin: 'top left',
    width: `${element.offsetWidth}px`,
    height: `${element.offsetHeight}px`,
    borderRadius: '0',
    backgroundColor: 'transparent'
  }

  try {
    const pngDataUrl = await DomToImage.toPng(element, {
      quality: 1,
      width: element.offsetWidth * scale,
      height: element.offsetHeight * scale,
      style: style
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
  size: number = scaleMap.high
) => {
  const id = toast.loading('Preparando...')
  const scale = size
  const style = {
    transform: `scale(${scale})`,
    transformOrigin: 'top left',
    width: `${element.offsetWidth}px`,
    height: `${element.offsetHeight}px`,
    borderRadius: '0',
    backgroundColor: 'transparent'
  }

  try {
    const pngDataUrl = await DomToImage.toPng(element, {
      quality: 1,
      width: element.offsetWidth * scale,
      height: element.offsetHeight * scale,
      style
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
  } catch (error: any) {
    console.error('Error al generar el PDF:', error)
    toast.error('No se pudo copiar la imagen', { id })
  }
}
