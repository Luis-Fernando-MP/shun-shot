import type { FC } from 'react'

import DefaultBorders from '../DefaultBorders'
import SliderControl from '../SliderControl'

interface Props {
  borderValue: number
  changeBorder: (value: number) => void
}

const MAX_RADIUS = 320

const BorderConfiguration: FC<Props> = ({ borderValue, changeBorder }) => {
  return (
    <article>
      <DefaultBorders borderValue={borderValue} changeBorder={changeBorder} />
      <SliderControl label='Opacidad' onChangeRange={changeBorder} value={borderValue} min={0} max={MAX_RADIUS} step={10} />
    </article>
  )
}

export default BorderConfiguration
