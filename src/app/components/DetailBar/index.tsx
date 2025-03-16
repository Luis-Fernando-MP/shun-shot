import LabelText from '@/shared/ui/LabelText'
import ShumShots from '@/shared/ui/ShumShots'
import Link from 'next/link'
import type { FC } from 'react'

import './style.scss'

interface Props {
  className?: string
}

const DetailBar: FC<Props> = ({ className }) => {
  return (
    <article className={`detailBar border ${className}`}>
      <Link href='/'>
        <ShumShots size='md' />
      </Link>

      <h3>Shum Shots</h3>

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
        <p>Facilita tu movilidad con los modales con:</p>
        <div>
          <LabelText>Ctrl</LabelText> + <LabelText>click</LabelText>
        </div>
      </section>

      <section className='detailBar-history'>
        <p>Además, puedes avanzar y retroceder en el historial del editor usando:</p>
        <div>
          <LabelText>Ctrl</LabelText> + <LabelText>Z</LabelText> / <LabelText>Ctrl</LabelText> + <LabelText>Y</LabelText>
        </div>
      </section>
      <p>
        Finalmente, puedes editar tu <span>Shot</span> en la página <Link href='/image-edit'>/image-edit</Link>.
      </p>
    </article>
  )
}

export default DetailBar
