'use client'

import { useExtraMonacoStore } from '@/app/(pages)/(current)/store/extra-monaco.store'
import { acl } from '@/shared/acl'
import { copyToPng, downloadPDF, downloadToPng } from '@/shared/imageDownloader'
import { ClipboardCopyIcon, CloudDownloadIcon, FileCode2Icon, RotateCcwIcon } from 'lucide-react'
import { type JSX, memo, useState } from 'react'

export type StatusApp = 'idle' | 'loading' | 'error'

const DownloadTools = (): JSX.Element => {
  const [downloadStatus, setDownloadStatus] = useState<StatusApp>('idle')
  const fileName = useExtraMonacoStore(s => s.fileName)

  const handleDownload = async () => {
    setDownloadStatus('loading')
    const $monacoParent = document.querySelector('#monacoParent')
    if (!$monacoParent || !($monacoParent instanceof HTMLElement)) return

    try {
      await downloadToPng(fileName, $monacoParent, 2)
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
      await copyToPng($monacoParent, 2)
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
      <button className='tools-action btn-tooltip border-left' onClick={handleCopyToClip} disabled={downloadStatus === 'loading'}>
        <ClipboardCopyIcon />
        <p className='tooltip top'>Copiar imagen</p>
      </button>

      <button className='tools-action btn-tooltip' onClick={handleDownloadPDF} disabled={downloadStatus === 'loading'}>
        <FileCode2Icon />
        <p className='tooltip top'>Descargar en PDF</p>
      </button>

      <button className='tools-action btn-tooltip' onClick={handleDownload} disabled={downloadStatus === 'loading'}>
        <CloudDownloadIcon />
        <p className='tooltip top'>Descargar en PNG</p>
      </button>

      <button className='tools-action btn-tooltip border-left badge soon' disabled={downloadStatus === 'loading'}>
        <RotateCcwIcon />
        <p className='tooltip top'>Restaurar</p>
      </button>
    </div>
  )
}

export default memo(DownloadTools)
