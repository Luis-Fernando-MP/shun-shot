import { useExtraMonacoStore } from '@/app/(pages)/(current)/store/extra-monaco.store'
import { StatusApp } from '@/app/components/FooterTools/DownloadTools'
import { acl } from '@/shared/acl'
import { downloadPDF, downloadToJpeg, downloadToPng } from '@/shared/imageDownloader'
import { ClipboardCopyIcon, DownloadCloudIcon, EllipsisIcon } from 'lucide-react'
import { useState } from 'react'
import type { JSX } from 'react'

import './style.scss'

const qualities = { bajo: 1, normal: 2, grande: 3, xl: 4, xxl: 5, ultra: 6 }

const formatDownload = {
  PNG: downloadToPng,
  JPEG: downloadToJpeg,
  PDF: downloadPDF
}

const DownloadTransformImage = (): JSX.Element => {
  const [format, setFormat] = useState<'PNG' | 'PDF' | 'JPEG'>('PNG')
  const [quality, setQuality] = useState(qualities.normal)
  const [showComponent, setShowComponent] = useState(false)

  const [downloadStatus, setDownloadStatus] = useState<StatusApp>('idle')

  const fileName = useExtraMonacoStore(s => s.fileName)

  const handleDownload = async () => {
    setDownloadStatus('loading')
    const $monacoParent = document.querySelector('#editorMP-transformer')
    if (!$monacoParent || !($monacoParent instanceof HTMLElement)) return

    try {
      const downloader = (formatDownload as any)[format]
      if (!downloader) return
      await downloader(fileName, $monacoParent, quality)
    } catch (error) {
      setDownloadStatus('error')
      console.error(error)
    } finally {
      setDownloadStatus('idle')
    }
  }

  const handleCopy = (): void => {}

  const handleShow = (): void => {
    setShowComponent(!showComponent)
  }

  return (
    <article
      className={`downloadTI editorStyles-stickyBottom ${acl(downloadStatus === 'loading', 'loading')}`}
    >
      <button className='downloadTI-extend' onClick={handleShow}>
        <EllipsisIcon />
      </button>
      {showComponent && (
        <>
          <h3 className='editorStyles-title'>Formato de Imagen</h3>
          <section className='downloadTI-section'>
            <button
              className={`downloadTI-item ${acl(format === 'PNG')}`}
              onClick={() => setFormat('PNG')}
            >
              PNG
            </button>
            <button
              className={`downloadTI-item ${acl(format === 'JPEG')}`}
              onClick={() => setFormat('JPEG')}
            >
              JPEG
            </button>
            <button
              className={`downloadTI-item ${acl(format === 'PDF')}`}
              onClick={() => setFormat('PDF')}
            >
              PDF
            </button>
          </section>

          <h3 className='editorStyles-title'>Calidad de Imagen</h3>
          <section className='downloadTI-section'>
            {Object.entries(qualities).map(obj => {
              const [name, q] = obj
              const key = `${name}-quality-index`
              return (
                <button
                  key={key}
                  onClick={() => setQuality(q)}
                  className={`downloadTI-item ${acl(quality === q)}`}
                >
                  <h2>
                    {q}
                    <b>x</b>
                  </h2>
                  <p>{name}</p>
                </button>
              )
            })}
          </section>

          <section className='downloadTI-output'>
            <p>Resolución:</p>
            <h4>
              {940 * quality}x{700 * quality}
            </h4>
          </section>
        </>
      )}

      <section className='downloadTI-action'>
        <button onClick={handleDownload} className='downloadTI-action__download'>
          <DownloadCloudIcon />
          <div>
            <h4>Descargar</h4>
            <p>{`${quality}x & ${format}`}</p>
          </div>
        </button>
        <button onClick={handleCopy} className='downloadTI-action__copy'>
          <ClipboardCopyIcon />
        </button>
      </section>
    </article>
  )
}

export default DownloadTransformImage
