'use client'

import { useExtraMonacoStore } from '@/app/(pages)/(current)/store/extra-monaco.store'
import { acl } from '@/shared/acl'
import { copyToPng, downloadFullImage, downloadPDF, downloadToPng } from '@/shared/imageDownloader'
import { ClipboardCopyIcon, CloudDownloadIcon, FileCode2Icon, WindIcon } from 'lucide-react'
import { type JSX, memo, useState } from 'react'

export type StatusApp = 'idle' | 'loading' | 'error'

interface IDownloadTools {
  refElement: any
}

const DownloadTools = ({ refElement }: IDownloadTools): JSX.Element => {
  const [downloadStatus, setDownloadStatus] = useState<StatusApp>('idle')
  const fileName = useExtraMonacoStore(s => s.fileName)

  const handleWindDownload = async () => {
    setDownloadStatus('loading')
    const $monacoParent = document.querySelector('#monacoParent')
    if (!$monacoParent || !($monacoParent instanceof HTMLElement)) return
    const monHeight = $monacoParent.offsetHeight
    const parentHeight = $monacoParent.parentElement?.offsetHeight

    try {
      await downloadFullImage(fileName, $monacoParent)
      if (parentHeight && monHeight >= parentHeight) refElement.layout({})
    } catch (error) {
      console.error(error)
      setDownloadStatus('error')
    } finally {
      setDownloadStatus('idle')
    }
  }

  const handleDownload = async () => {
    setDownloadStatus('loading')
    const $monacoParent = document.querySelector('#monacoParent')
    if (!$monacoParent || !($monacoParent instanceof HTMLElement)) return

    try {
      await downloadToPng(fileName, $monacoParent)
    } catch (error) {
      setDownloadStatus('error')
      console.error(error)
    } finally {
      setDownloadStatus('idle')
    }
  }

  const handleCopyToClip = async () => {
    setDownloadStatus('loading')
    const $monacoParent = document.querySelector('#monacoParent')
    if (!$monacoParent || !($monacoParent instanceof HTMLElement)) return
    try {
      await copyToPng($monacoParent)
    } catch (error) {
      console.error(error)
      setDownloadStatus('error')
    } finally {
      setDownloadStatus('idle')
    }
  }

  const handleDownloadPDF = async () => {
    setDownloadStatus('loading')
    try {
      const $monacoParent = document.querySelector('#monacoParent')
      if (!$monacoParent || !($monacoParent instanceof HTMLElement)) return
      await downloadPDF(fileName, $monacoParent)
    } catch (error) {
      console.error(error)
      setDownloadStatus('error')
    } finally {
      setDownloadStatus('idle')
    }
  }

  return (
    <div className={`tools-section__downloader ${acl(downloadStatus === 'loading', 'loading')}`}>
      <button
        className='tools-action btn-tooltip border-left'
        onClick={handleCopyToClip}
        disabled={downloadStatus === 'loading'}
      >
        <ClipboardCopyIcon />
        <p className='tooltip top'>Copiar imagen</p>
      </button>

      <button
        className='tools-action btn-tooltip'
        onClick={handleDownloadPDF}
        disabled={downloadStatus === 'loading'}
      >
        <FileCode2Icon />
        <p className='tooltip top'>Descargar en PDF</p>
      </button>

      <button
        className='tools-action btn-tooltip'
        onClick={handleDownload}
        disabled={downloadStatus === 'loading'}
      >
        <CloudDownloadIcon />
        <p className='tooltip top'>Descargar en PNG</p>
      </button>

      <button
        className='tools-action btn-tooltip border-left badge soon'
        onClick={handleWindDownload}
        disabled={downloadStatus === 'loading'}
      >
        <WindIcon />
        <p className='tooltip top'>Descargar todo el código</p>
      </button>
    </div>
  )
}

export default memo(DownloadTools)
