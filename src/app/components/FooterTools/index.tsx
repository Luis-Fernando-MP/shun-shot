import {
  AArrowDownIcon,
  AArrowUpIcon,
  ClipboardCopyIcon,
  CloudDownloadIcon,
  FileCode2Icon,
  LanguagesIcon,
  LetterText,
  Maximize,
  Redo2Icon,
  Share2Icon,
  SwatchBookIcon,
  Undo2Icon,
  UserIcon
} from 'lucide-react'
import type { JSX } from 'react'

import './style.scss'

interface IFooterTools {
  className?: string
}
const FooterTools = ({ className }: IFooterTools): JSX.Element => {
  return (
    <footer className={`${className} tools`}>
      <section className='tools-section'>
        <button className='tools-action btn-tooltip border-right'>
          <Maximize />
          <p className='tooltip top'>Maximizar</p>
        </button>
        <button className='tools-action btn-tooltip'>
          <Undo2Icon />
          <p className='tooltip top'>Deshacer</p>
        </button>
        <button className='tools-action btn-tooltip'>
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
          <button className='tools-action btn-tooltip'>
            <LetterText />
            <p className='tooltip top'>Formatear</p>
          </button>
          <button className='tools-action btn-tooltip'>
            <AArrowUpIcon />
            <p className='tooltip top'>Aumentar fuente</p>
          </button>
          <button className='tools-action btn-tooltip'>
            <AArrowDownIcon />
            <p className='tooltip top'>Disminuir fuente</p>
          </button>
        </div>

        <div>
          <button className='tools-action btn-tooltip border-left'>
            <ClipboardCopyIcon />
            <p className='tooltip top'>Copiar</p>
          </button>
          <button className='tools-action btn-tooltip'>
            <FileCode2Icon />
            <p className='tooltip top'>Descargar en PDF</p>
          </button>
          <button className='tools-action btn-tooltip'>
            <CloudDownloadIcon />
            <p className='tooltip top'>Descargar en PNG</p>
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
