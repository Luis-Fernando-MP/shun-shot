import { BorderConfigurationState, BorderType } from '@/app/editor/store/images/useImagesBorderStore'
import { acl } from '@/shared/acl'
import BorderStyle from '@/shared/ui/BorderStyle'
import EmptyBlock from '@/shared/ui/EmptyBlock'
import type { FC } from 'react'

import './style.scss'

interface Props {
  borderState: BorderConfigurationState
}

export const defaultBorders = [
  { id: 1, type: 'solid', color: 'rgba(255,255,255,.5)', label: 'Blanco transparente' },
  { id: 2, type: 'solid', color: 'rgba(0, 0, 0, 0.3)', label: 'Negro transparente' },
  {
    id: 3,
    type: 'gradient',
    label: 'Mora lineal',
    gradient: 'linear-gradient(to bottom right, rgb(176, 64, 246) 40%, rgba(242, 83, 83, 0.67)) border-box'
  },
  {
    id: 4,
    type: 'gradient',
    label: 'Océano azul',
    gradient: 'linear-gradient(to right, #1a2980, #26d0ce) border-box'
  },
  {
    id: 5,
    type: 'gradient',
    label: 'Amanecer cálido',
    gradient: 'linear-gradient(to bottom right, #ff9966, #ff5e62) border-box'
  },
  {
    id: 6,
    type: 'gradient',
    label: 'Esmeralda brillante',
    gradient: 'linear-gradient(to right, #43cea2, #185a9d) border-box'
  },
  {
    id: 7,
    type: 'solid',
    color: 'rgba(255, 215, 0, 0.6)',
    label: 'Dorado suave'
  },
  {
    id: 8,
    type: 'solid',
    color: 'rgba(75, 0, 130, 0.4)',
    label: 'Púrpura sutil'
  },
  {
    id: 9,
    type: 'gradient',
    label: 'Neón vibrante',
    gradient: 'linear-gradient(to bottom left, #00FFFF, #FF00FF) border-box'
  },
  {
    id: 10,
    type: 'gradient',
    label: 'Atardecer tropical',
    gradient: 'linear-gradient(to right, #FF416C, #FF4B2B) border-box'
  }
]

const BorderConfiguration: FC<Props> = ({ borderState }) => {
  const { type, idBorderSelected, setColor, setType, setGradient, setIdBorderSelected } = borderState

  const handleSetBorderType = (border: Omit<(typeof defaultBorders)[0], 'label'>) => {
    const { color, type, gradient, id } = border
    if (color) setColor(color)
    if (gradient) setGradient(gradient)
    setType(type as BorderType)
    setIdBorderSelected(id)
  }

  return (
    <article className='borderConfiguration'>
      <EmptyBlock onClick={() => handleSetBorderType({ type: 'none', id: 0 })} selected={type === 'none'} />
      {defaultBorders.map(border => (
        <BorderStyle
          key={border.label}
          {...border}
          isActive={border.id === idBorderSelected}
          onClick={() => handleSetBorderType(border)}
        />
      ))}
    </article>
  )
}

export default BorderConfiguration
