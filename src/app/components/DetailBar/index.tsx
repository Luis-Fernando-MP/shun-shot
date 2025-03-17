'use client'

import { acl } from '@/shared/acl'
import IconButton from '@/shared/ui/IconButton'
import LabelText from '@/shared/ui/LabelText'
import ShumShots from '@/shared/ui/ShumShots'
import { ArrowBigDownDashIcon, ArrowBigUpDashIcon } from 'lucide-react'
import Link from 'next/link'
import { type FC } from 'react'
import { useLocalStorage } from 'usehooks-ts'

import './style.scss'

interface Props {
  className?: string
}

const DetailBar: FC<Props> = ({ className }) => {
  const [isOpen, setIsOpen] = useLocalStorage('detailBar', true)

  return (
    <article className={`detailBar border ${className} ${acl(!isOpen, 'minimize')}`}>
      <IconButton
        label={isOpen ? 'Contraer barra informativa' : 'Expandir barra informativa'}
        onClick={() => setIsOpen(prev => !prev)}
        className={`detailBar-arrow ${acl(!isOpen)}`}
        position='bottom'
      >
        {isOpen ? <ArrowBigUpDashIcon /> : <ArrowBigDownDashIcon />}
      </IconButton>

      <Link href='/' className='detailBar-logo'>
        <ShumShots size={isOpen ? 'md' : 'xs'} transparent />
        <h4>Shum Shots</h4>
      </Link>

      <section className='detailBar-history'>
        <p>Navega por el dashboard utilizando:</p>
        <div>
          <LabelText>Ctrl</LabelText> + <LabelText>Click</LabelText>
        </div>
      </section>

      <section className='detailBar-history'>
        <p>Ajusta la escala con:</p>
        <div>
          <LabelText>Ctrl</LabelText> + <LabelText>Scroll</LabelText> / <LabelText>Touchpad</LabelText>
        </div>
      </section>

      <section className='detailBar-history'>
        <p>Facilita tu movilidad en los modales con:</p>
        <div>
          <LabelText>Ctrl</LabelText> + <LabelText>click</LabelText>
        </div>
        <p>Y para cerrar un modal con:</p>
        <div>
          <LabelText>Ctrl</LabelText> + <LabelText>x</LabelText> ó <LabelText>Escape</LabelText>
        </div>
      </section>

      <section className='detailBar-history'>
        <p>Además, puedes avanzar y retroceder en el historial del editor usando:</p>
        <div>
          <LabelText>Ctrl</LabelText> + <LabelText>Z</LabelText> / <LabelText>Ctrl</LabelText> + <LabelText>Y</LabelText>
        </div>
      </section>
      <div className='detailBar-history'>
        <div className='paragraph'>
          <p className='paragraph-normal'>Finalmente, puedes editar tu</p>
          <h4 className='paragraph-highlight'>&nbsp;Shot&nbsp;</h4>
          <p className='paragraph-normal'>
            en la página
            <Link href='/image-edit' className='paragraph-link'>
              &nbsp;/image-edit
            </Link>
          </p>
        </div>
      </div>
    </article>
  )
}

export default DetailBar
