'use client'

import {
  AArrowDownIcon,
  AArrowUpIcon,
  ClipboardCopyIcon,
  CloudDownloadIcon,
  FileCode2Icon,
  LetterText,
  Loader2Icon,
  Maximize,
  Minimize,
  Redo2Icon,
  Share2Icon,
  Undo2Icon,
  WindIcon
} from 'lucide-react'
import { type JSX } from 'react'

import ToolsModal from './ToolsModal'
import './style.scss'
import useFooterTools from './useFooterTools'

interface IFooterTools {
  className?: string
}

const Loader = () => (
  <Loader2Icon className='animate-spin-clockwise animate-iteration-count-infinite' />
)

const FooterTools = ({ className }: IFooterTools): JSX.Element => {
  const {
    handleCopyToClip,
    handleDownload,
    handleDownloadPDF,
    handleFontSize,
    handleFormatCode,
    handleRedo,
    handleScreen,
    handleUndo,
    handleWindDownload,
    isFullScreen,
    clipStatus,
    downloadStatus,
    fontSize,
    pdfStatus,
    windStatus
  } = useFooterTools()

  return (
    <footer className={`${className} tools`}>
      <ToolsModal />
      <section className='tools-section center'>
        <div>
          <button className='tools-action btn-tooltip' onClick={handleScreen}>
            {isFullScreen ? <Minimize /> : <Maximize />}
            <p className='tooltip top'>Maximizar</p>
          </button>
          <button className='tools-action btn-tooltip' onClick={handleUndo}>
            <Undo2Icon />
            <p className='tooltip top'>Deshacer</p>
          </button>
          <button className='tools-action btn-tooltip border-right' onClick={handleRedo}>
            <Redo2Icon />
            <p className='tooltip top'>Rehacer</p>
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
            className='tools-action btn-tooltip border-left badge'
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
