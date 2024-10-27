'use client'

import useCode from '@/app/hooks/useCode'
import useTheme, { getTheme } from '@/app/hooks/useTheme'
import html2canvas from 'html2canvas'
import {
  ChartNoAxesGantt,
  DownloadCloud,
  ExpandIcon,
  Images,
  ListOrdered,
  ShrinkIcon
} from 'lucide-react'
import { type HtmlHTMLAttributes, type JSX, type ReactNode, useState } from 'react'
import toast from 'react-hot-toast'

import './style.scss'

interface IOptions extends HtmlHTMLAttributes<HTMLElement> {
  children?: Readonly<ReactNode[]> | null
}

const Options = ({ className, ...props }: IOptions): JSX.Element => {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const themeName = useTheme(s => s.themeName)
  const { colors } = getTheme(themeName)
  const { title, showNumbers, setShowNumbers } = useCode()

  const copyCode = format => {
    const html = document.querySelector('.cm-content')
    const codeWithSyntaxHighlighting = html?.innerHTML
    let formattedCode = ''
    if (format === 'word') {
      formattedCode = `<pre style="font-family: 'Consolas', monospace; font-size: 12px; line-height: 1.5; background-color: ${colors.background}; color: ${colors.foreground};">${codeWithSyntaxHighlighting}</pre>`
    } else if (format === 'table') {
      formattedCode = `<table style="border-collapse: collapse; width: 100%;"><tr><td style="border: 1px solid #ddd; padding: 8px; font-family: 'Consolas', monospace; font-size: 12px; line-height: 1.5; background-color: ${colors.background}; color: ${
        colors.foreground
      };">${codeWithSyntaxHighlighting}</td></tr></table>`
    }

    const blob = new Blob([formattedCode], { type: 'text/html' })
    const clipboardItem = new ClipboardItem({ 'text/html': blob })
    navigator.clipboard.write([clipboardItem])
    toast.success(`Code copied in ${format} format`)
  }

  const formatCode = () => {
    toast.success('Código formateado')
  }

  const downloadImage = async () => {
    try {
      const element = document.querySelector('.code')
      if (!element || !(element instanceof HTMLElement)) return
      const canvas = await html2canvas(element, { backgroundColor: null })
      const link = document.createElement('a')
      link.download = `${title ?? 'my-code'}.png`
      link.href = canvas.toDataURL()
      link.click()
      toast.success('Imagen descargada')
    } catch (error: any) {
      console.error(error)
      toast.success('No se pudo descargar la imagen')
    }
  }

  const copyImage = async () => {
    try {
      const element = document.querySelector('.code')
      if (!element || !(element instanceof HTMLElement)) return
      const canvas = await html2canvas(element, { backgroundColor: null })
      const dataUrl = canvas.toDataURL()
      const blob = await (await fetch(dataUrl)).blob()
      const item = new ClipboardItem({ 'image/png': blob })
      await navigator.clipboard.write([item])
      toast.success('Imagen copiada al portapapeles')
    } catch (error: any) {
      console.error(error)
      toast.success('No se pudo copiar la imagen')
    }
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      return document.documentElement.requestFullscreen()
    }
    document.exitFullscreen()
    setIsFullscreen(!isFullscreen)
  }

  const actions = [
    { icon: ChartNoAxesGantt, action: formatCode, tooltip: 'Formatear código' },
    { icon: DownloadCloud, action: downloadImage, tooltip: 'Descargar imagen' },
    { icon: Images, action: () => copyImage(), tooltip: 'Copiar código' },
    {
      icon: ListOrdered,
      action: () => setShowNumbers(!showNumbers),
      tooltip: 'Ver números'
    },
    {
      icon: isFullscreen ? ShrinkIcon : ExpandIcon,
      action: toggleFullscreen,
      tooltip: 'Pantalla completa'
    }
  ]

  return (
    <div className={`${className}`} {...props}>
      <div className='options-logo'>
        <h3>JU 愛</h3>
        <h2>CODE</h2>
      </div>
      {actions.map(({ icon: Icon, action, tooltip }) => (
        <button key={tooltip} onClick={action} className='options-opt' title={tooltip}>
          <Icon />
        </button>
      ))}
    </div>
  )
}

export default Options
