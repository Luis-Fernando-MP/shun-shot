'use client'

import { useMonacoStore } from '@/app/(pages)/(current)/store/monaco-store'
import { copyToPng, downloadFullImage, downloadPDF, downloadToPng } from '@/shared/imageEditor'
import { toggleFullscreen } from '@/shared/utils/tools-app'
import {
  AArrowDownIcon,
  AArrowUpIcon,
  ClipboardCopyIcon,
  CloudDownloadIcon,
  FileCode2Icon,
  LanguagesIcon,
  LetterText,
  Loader2Icon,
  Maximize,
  Minimize,
  Redo2Icon,
  Share2Icon,
  SwatchBookIcon,
  Undo2Icon,
  UserIcon,
  WindIcon
} from 'lucide-react'
import { type JSX, useState } from 'react'

import './style.scss'

interface IFooterTools {
  className?: string
}

type StatusApp = 'idle' | 'loading' | 'error'

const Loader = () => (
  <Loader2Icon className='animate-spin-clockwise animate-iteration-count-infinite' />
)

const FooterTools = ({ className }: IFooterTools): JSX.Element => {
  const [isFullScreen, setIsFullScreen] = useState(false)
  const { setFontSize, fontSize, refIde } = useMonacoStore()
  const [downloadStatus, setDownloadStatus] = useState<StatusApp>('idle')
  const [clipStatus, setClipStatus] = useState<StatusApp>('idle')
  const [pdfStatus, setPDFStatus] = useState<StatusApp>('idle')
  const [windStatus, setWindStatus] = useState<StatusApp>('idle')

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
      await downloadFullImage($monacoParent)
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
      await downloadToPng($monacoParent)
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
      await downloadPDF($monacoParent)
    } catch (error) {
      console.error(error)
    } finally {
      setPDFStatus('idle')
    }
  }

  return (
    <footer className={`${className} tools`}>
      <section className='tools-section'>
        <button className='tools-action btn-tooltip border-right' onClick={handleScreen}>
          {isFullScreen ? <Minimize /> : <Maximize />}
          <p className='tooltip top'>Maximizar</p>
        </button>
        <button className='tools-action btn-tooltip' onClick={handleUndo}>
          <Undo2Icon />
          <p className='tooltip top'>Deshacer</p>
        </button>
        <button className='tools-action btn-tooltip' onClick={handleRedo}>
          <Redo2Icon />
          <p className='tooltip top'>Rehacer</p>
        </button>
        <button className='tools-action btn-tooltip'>
          <UserIcon />
          <p className='tooltip top'>Iniciar sesión</p>
        </button>
      </section>

      <section className='tools-section center'>
        <div>
          <button className='tools-action btn-tooltip'>
            <LanguagesIcon />
            <p className='tooltip top'>Lenguajes</p>
          </button>
          <button className='tools-action btn-tooltip border-right'>
            <SwatchBookIcon />
            <p className='tooltip top'>Temas</p>
          </button>
        </div>

        <div>
          <button className='tools-action btn-tooltip' onClick={handleFormatCode}>
            <LetterText />
            <p className='tooltip top'>Formatear</p>
          </button>
          <button className='tools-action btn-tooltip' onClick={() => handleFontSize(fontSize - 1)}>
            <AArrowDownIcon />
            <p className='tooltip top'>Disminuir fuente</p>
          </button>
          <input
            min={12}
            max={30}
            className='tools-font'
            type='number'
            value={fontSize}
            onChange={e => handleFontSize(Number(e.target.value))}
          />
          <button className='tools-action btn-tooltip' onClick={() => handleFontSize(fontSize + 1)}>
            <AArrowUpIcon />
            <p className='tooltip top'>Aumentar fuente</p>
          </button>
        </div>

        <div>
          <button
            className='tools-action btn-tooltip border-left'
            onClick={handleCopyToClip}
            disabled={clipStatus === 'loading'}
          >
            {clipStatus === 'loading' ? <Loader /> : <ClipboardCopyIcon />}

            <p className='tooltip top'>Copiar imagen</p>
          </button>

          <button
            className='tools-action btn-tooltip'
            onClick={handleDownloadPDF}
            disabled={pdfStatus === 'loading'}
          >
            {pdfStatus === 'loading' ? <Loader /> : <FileCode2Icon />}

            <p className='tooltip top'>Descargar en PDF</p>
          </button>

          <button
            className='tools-action btn-tooltip'
            onClick={handleDownload}
            disabled={downloadStatus === 'loading'}
          >
            {downloadStatus === 'loading' ? <Loader /> : <CloudDownloadIcon />}

            <p className='tooltip top'>Descargar en PNG</p>
          </button>

          <button
            className='tools-action btn-tooltip border-left'
            onClick={handleWindDownload}
            disabled={windStatus === 'loading'}
          >
            {windStatus === 'loading' ? <Loader /> : <WindIcon />}

            <p className='tooltip top'>Descargar todo el código</p>
          </button>
        </div>
      </section>

      <section className='tools-section'>
        <button className='tools-action tools-shared btn-tooltip'>
          <Share2Icon />
          Compartir
          <p className='tooltip top'>Compartir</p>
        </button>
      </section>
    </footer>
  )
}

export default FooterTools
