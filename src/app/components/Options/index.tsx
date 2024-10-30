'use client'

import useCode from '@/app/hooks/useCode'
import useCodeImage from '@/app/hooks/useCodeImage'
import {
  copyToPng,
  downloadToPng,
  downloadToSvg,
  loadDefaultImageEditor,
  saveImage
} from '@/shared/imageEditor'
import { CodepenIcon, DownloadCloud, ExpandIcon, Images, ShipWheel, ShrinkIcon } from 'lucide-react'
import { type HtmlHTMLAttributes, type JSX, type ReactNode, useState } from 'react'

import './style.scss'

interface IOptions extends HtmlHTMLAttributes<HTMLElement> {
  children?: Readonly<ReactNode[]> | null
}

const Options = ({ className, ...props }: IOptions): JSX.Element => {
  const setImage64 = useCodeImage(s => s.setImage64)
  const { title } = useCode()
  const [isFullscreen, setIsFullscreen] = useState(false)

  const downloadImage = async () => {
    const element = document.querySelector('#code-container')
    if (!element || !(element instanceof HTMLElement)) return
    downloadToPng(element, title)
  }

  const downloadSvg = async () => {
    const element = document.querySelector('#code-container')
    if (!element || !(element instanceof HTMLElement)) return
    downloadToSvg(element, title)
  }

  const copyImage = async () => {
    const element = document.querySelector('#code-container')
    if (!element || !(element instanceof HTMLElement)) return
    copyToPng(element)
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      return document.documentElement.requestFullscreen()
    }
    document.exitFullscreen()
    setIsFullscreen(!isFullscreen)
  }

  const goEdit = async () => {
    const element = document.querySelector('#code-component')
    if (!element || !(element instanceof HTMLElement)) return
    const image64 = await loadDefaultImageEditor(element)
    if (!image64) return
    const isUpload = await saveImage(image64)
    console.log('isUpload', isUpload)

    setImage64(image64)
    // const isEdit = path.includes('/editor')
    // push(isEdit ? '/' : '/editor')
  }

  const actions = [
    { icon: ShipWheel, action: goEdit, tooltip: 'Editar' },
    { icon: DownloadCloud, action: downloadImage, tooltip: 'Descargar imagen' },
    { icon: CodepenIcon, action: () => downloadSvg(), tooltip: 'Descargar svg código' },
    { icon: Images, action: () => copyImage(), tooltip: 'Copiar código' },
    {
      icon: isFullscreen ? ShrinkIcon : ExpandIcon,
      action: toggleFullscreen,
      tooltip: 'Pantalla completa'
    }
  ]

  return (
    <section className={`${className} options`} {...props}>
      <div className='options-logo'>
        <h2>CODE</h2>
        <h4 className='typing'>Shots</h4>
      </div>
      <article className='options-container'>
        {actions.map(({ icon: Icon, action, tooltip }) => (
          <button key={tooltip} onClick={action} className='options-opt' title={tooltip}>
            <Icon />
          </button>
        ))}
      </article>
      <h2>
        愛<br />
        JULIS
      </h2>
    </section>
  )
}

export default Options
