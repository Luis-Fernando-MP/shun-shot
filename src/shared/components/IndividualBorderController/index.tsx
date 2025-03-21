import { IBorderRadiusStore } from '@/app/editor/store/background/backgroundRadius.store'
import IconButton from '@/shared/ui/IconButton'
import { MaximizeIcon, RotateCcwIcon, ScaleIcon } from 'lucide-react'
import { type FC } from 'react'

import RenderInputBorders from './RenderInputBorders'
import './style.scss'

interface Props extends Omit<IBorderRadiusStore, 'getStyleBorderRadius'> {}

const IndividualBorderController: FC<Props> = props => {
  const { activeIndividualBorder, setActiveIndividualBorder, setBorderRadius, borderRadius, ...borders } = props

  const { setBorderLBRadius, setBorderLTRadius, setBorderRTRadius, setBorderRBRadius } = borders

  const handleBalance = () => {
    const average = (borders.borderLTRadius + borders.borderRTRadius + borders.borderLBRadius + borders.borderRBRadius) / 4
    const refactorAverage = Math.round(average)
    setBorderLBRadius(refactorAverage)
    setBorderLTRadius(refactorAverage)
    setBorderRTRadius(refactorAverage)
    setBorderRBRadius(refactorAverage)
  }

  const handleEquals = () => {
    setBorderLBRadius(borderRadius)
    setBorderLTRadius(borderRadius)
    setBorderRTRadius(borderRadius)
    setBorderRBRadius(borderRadius)
  }

  return (
    <section className='individualBorderController'>
      <h5>Detallado</h5>
      <IconButton
        className='border'
        active={activeIndividualBorder}
        onClick={() => setActiveIndividualBorder(!activeIndividualBorder)}
      >
        <MaximizeIcon />
        <h5>Bordes individuales</h5>
      </IconButton>

      {activeIndividualBorder && (
        <>
          <div className='individualBorderController-borders'>
            <RenderInputBorders {...borders} />
          </div>

          <div className='individualBorderController-extraActions'>
            <IconButton className='individualBorderController-equals' onClick={handleBalance}>
              <ScaleIcon />
              <h5>Equilibrar</h5>
            </IconButton>
            <IconButton className='individualBorderController-equals' onClick={handleEquals}>
              <RotateCcwIcon />
              <h5>Restablecer</h5>
            </IconButton>
          </div>
        </>
      )}
    </section>
  )
}

export default IndividualBorderController
