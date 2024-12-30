'use client'

import FullScreen from '@/shared/components/FullScreen'
import useMonacoTools from '@/shared/hooks/monaco-tools'
import { Redo2Icon, Share2Icon, Undo2Icon } from 'lucide-react'
import { type JSX, memo } from 'react'

import DownloadTools from './DownloadTools'
import EditImage from './EditImage'
import MonacoFontTools from './MonacoFontTools'
import ToolsModal from './ToolsModal'
import './style.scss'

interface IFooterTools {
  className?: string
}

const FooterTools = ({ className }: IFooterTools): JSX.Element => {
  const { handleRedo, handleUndo } = useMonacoTools()

  return (
    <footer className={`${className} tools`}>
      <ToolsModal />
      <section className='tools-section center'>
        <div>
          <FullScreen className='tools-action btn-tooltip'>
            <p className='tooltip top'>Maximizar</p>
          </FullScreen>

          <button className='tools-action btn-tooltip' onClick={handleUndo}>
            <Undo2Icon />
            <p className='tooltip top'>Deshacer</p>
          </button>
          <button className='tools-action btn-tooltip border-right' onClick={handleRedo}>
            <Redo2Icon />
            <p className='tooltip top'>Rehacer</p>
          </button>
        </div>

        <MonacoFontTools />
        <DownloadMonacoTools />
      </section>

      <section className='tools-section'>
        <button className='tools-action btn-tooltip'>
          <Share2Icon />
          <p className='tooltip top'>Compartir</p>
        </button>

        <EditImage />
      </section>
    </footer>
  )
}

const DownloadMonacoTools = memo(DownloadMonacoToolsCOmponent)
function DownloadMonacoToolsCOmponent(): JSX.Element {
  return <DownloadTools />
}

export default FooterTools
