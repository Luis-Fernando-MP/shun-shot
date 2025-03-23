import useShadowStore from '@/app/editor/store/shadow/shadow.store'
import useBoardStore from '@/shared/components/Board/board.store'
import FocusConfiguration from '@/shared/components/FocusConfiguration'
import IconButton from '@/shared/ui/IconButton'
import { ZoomInIcon } from 'lucide-react'
import { type FC, memo } from 'react'

const AdjustZoom: FC = memo(() => {
  const { setScale, moveToChild } = useBoardStore()
  const handleClick = () => {
    setScale(1)
    setTimeout(() => {
      moveToChild(0)
    }, 300)
  }
  return (
    <IconButton label='Zoom' onClick={handleClick}>
      <ZoomInIcon />
      <h5 className='shadowConfig-label'>AJustar zoom</h5>
    </IconButton>
  )
})

const ShadowPositionWrapper: FC = () => {
  const { type, setPosition, setBlur, setSpread, setOpacity } = useShadowStore()
  return (
    <section className='shadowConfig-section'>
      <h3 className='paragraph-highlight'># Foco:</h3>
      <p className='paragraph-normal'>Mantén un zoom del 100% para que el foco se ajuste bien a la imagen.</p>
      <AdjustZoom />
      <FocusConfiguration
        setPosition={setPosition}
        shadowType={type}
        setBlur={setBlur}
        setSpread={setSpread}
        setOpacity={setOpacity}
      />
    </section>
  )
}

export default ShadowPositionWrapper
