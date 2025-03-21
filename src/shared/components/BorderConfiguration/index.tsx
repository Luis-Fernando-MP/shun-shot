import { IBorderRadiusStore } from '@/app/editor/store/background/backgroundRadius.store'
import type { FC } from 'react'
import { StoreApi, UseBoundStore } from 'zustand'

import DefaultBorders from '../DefaultBorders'
import IndividualBorderController from '../IndividualBorderController'
import SliderControl from '../SliderControl'

interface Props {
  borderState: IBorderRadiusStore
}

const MAX_RADIUS = 320

const BorderConfiguration: FC<Props> = ({ borderState }) => {
  const { borderRadius, setBorderRadius } = borderState

  return (
    <article>
      <DefaultBorders borderValue={borderRadius} changeBorder={setBorderRadius} />
      <SliderControl
        label='Redondeado'
        onChangeRange={setBorderRadius}
        value={borderRadius}
        min={0}
        max={MAX_RADIUS}
        step={10}
        width={'280px'}
      />
      <IndividualBorderController {...borderState} />
    </article>
  )
}

export default BorderConfiguration
