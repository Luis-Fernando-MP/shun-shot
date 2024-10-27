'use client'

import useCode from '@/app/hooks/useCode'
import html2canvas from 'html2canvas'
import { DownloadCloud, ExpandIcon, Images, ListOrdered, ShipWheel, ShrinkIcon } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { type HtmlHTMLAttributes, type JSX, type ReactNode, useState } from 'react'
import toast from 'react-hot-toast'

import './style.scss'

interface IOptions extends HtmlHTMLAttributes<HTMLElement> {
  children?: Readonly<ReactNode[]> | null
}

const Options = ({ className, ...props }: IOptions): JSX.Element => {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const { title } = useCode()
  const path = usePathname()
  const { push } = useRouter()

  const downloadImage = async () => {
    const id = toast.loading('Descargando...')
    try {
      const element = document.querySelector('.code')
      if (!element || !(element instanceof HTMLElement)) return
      const canvas = await html2canvas(element, { backgroundColor: null })
      const link = document.createElement('a')
      link.download = `${title ?? 'my-code'}.png`
      link.href = canvas.toDataURL()
      link.click()
      toast.success('A los archivos', { id })
    } catch (error: any) {
      console.error(error)
      toast.success('No se pudo descargar la imagen', { id })
    }
  }

  const copyImage = async () => {
    const id = toast.loading('Copiando...')

    try {
      const element = document.querySelector('.code')
      if (!element || !(element instanceof HTMLElement)) return
      const canvas = await html2canvas(element, { backgroundColor: null })
      const dataUrl = canvas.toDataURL()
      const blob = await (await fetch(dataUrl)).blob()
      const item = new ClipboardItem({ 'image/png': blob })
      await navigator.clipboard.write([item])
      toast.success('Al portapapeles!!', { id })
    } catch (error: any) {
      console.error(error)
      toast.success('No se pudo copiar la imagen', { id })
    }
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      return document.documentElement.requestFullscreen()
    }
    document.exitFullscreen()
    setIsFullscreen(!isFullscreen)
  }

  const goEdit = () => {
    const isEdit = path.includes('/edit')
    push(isEdit ? '/' : '/edit')
  }

  const actions = [
    { icon: ShipWheel, action: goEdit, tooltip: 'Editar' },
    { icon: DownloadCloud, action: downloadImage, tooltip: 'Descargar imagen' },
    { icon: Images, action: () => copyImage(), tooltip: 'Copiar código' },
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
