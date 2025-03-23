import { ShadowType } from '@/app/editor/store/shadow/shadow.store'
import { acl } from '@/shared/acl'
import type { FC } from 'react'

import './style.scss'

interface Props {
  type: ShadowType
  setType: (type: ShadowType) => void
}

const defaultShadows = [
  {
    type: 'none',
    blur: 2,
    spread: 0,
    x: 0,
    y: 0,
    label: 'Limpio'
  },
  {
    type: 'simple',
    blur: 15,
    spread: 0,
    x: 0,
    y: 0,
    label: 'Simple'
  },
  {
    type: 'extended',
    blur: 20,
    spread: 0,
    x: 9,
    y: 9,
    label: 'Extendido'
  },
  {
    type: 'light',
    blur: 3,
    spread: 5,
    x: 0,
    y: 0,
    label: 'Brillo'
  }
]

const ShadowBlurSpreadConfiguration: FC<Props> = ({ type, setType }) => {
  return (
    <section className='shwBlurSpreadConfig'>
      {defaultShadows.map(shadow => {
        const { type: shdType, blur, spread, x, y, label } = shadow
        const isActive = type === shdType
        return (
          <button
            className={`shwBlurSpreadConfig-shadow ${acl(isActive, 'selected')}`}
            key={shadow.label}
            onClick={() => setType(shdType as ShadowType)}
          >
            <div className='shwBlurSpreadConfig-wrapper border'>
              <div
                className='shwBlurSpreadConfig-sphere'
                style={{
                  boxShadow: `${x}px ${y}px ${blur}px ${spread}px rgba(var(--fnt-primary), 0.3)`
                }}
              />
            </div>
            <h5 className='shwBlurSpreadConfig-label'>{label}</h5>
          </button>
        )
      })}
    </section>
  )
}

export default ShadowBlurSpreadConfiguration
