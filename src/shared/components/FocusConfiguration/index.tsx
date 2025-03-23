import { SunIcon, TreePineIcon } from 'lucide-react'
import type { FC, ReactNode } from 'react'

import './style.scss'

interface Props {
  children?: Readonly<ReactNode[]> | null | Readonly<ReactNode>
}

const FocusConfiguration: FC<Props> = ({}) => {
  return (
    <section className='focusConfig border'>
      <button className='focusConfig-sun border'>
        <SunIcon />
      </button>
      <div className='focusConfig-objective'>
        <TreePineIcon />
      </div>
    </section>
  )
}

export default FocusConfiguration
