'use client'

import RangeSlider from '@/shared/components/RangeSlider'
import { EllipsisIcon } from 'lucide-react'
import { JSX, memo, useCallback, useState } from 'react'

import useBackgroundFilterImage from '../../store/backgroundFilterImage.store'

type TFilterBackground = {
  filter: number
  setFilter: (value: number) => void
}

const BackgroundBlurFilter = memo(({ filter, setFilter }: TFilterBackground) => (
  <RangeSlider label='Blur' onChange={v => setFilter(v)} range={filter} max={20} />
))
BackgroundBlurFilter.displayName = 'BackgroundBlurFilter'

const BackgroundBrightnessFilter = memo(({ filter, setFilter }: TFilterBackground) => (
  <RangeSlider label='Brillo' onChange={v => setFilter(v)} range={filter} max={100} />
))
BackgroundBrightnessFilter.displayName = 'BackgroundBrightnessFilter'

const BackgroundOpacityFilter = memo(({ filter, setFilter }: TFilterBackground) => (
  <RangeSlider label='Opacidad' onChange={v => setFilter(v)} range={filter} max={100} />
))
BackgroundOpacityFilter.displayName = 'BackgroundOpacityFilter'

const BackgroundHueRotationFilter = memo(({ filter, setFilter }: TFilterBackground) => (
  <RangeSlider label='Rotación Hue' onChange={v => setFilter(v)} range={filter} max={360} />
))
BackgroundHueRotationFilter.displayName = 'BackgroundHueRotationFilter'

const BackgroundSepiaFilter = memo(({ filter, setFilter }: TFilterBackground) => (
  <RangeSlider label='Sepia' onChange={v => setFilter(v)} range={filter} max={100} />
))
BackgroundSepiaFilter.displayName = 'BackgroundSepiaFilter'

const BackgroundGrayscaleFilter = memo(({ filter, setFilter }: TFilterBackground) => (
  <RangeSlider label='Escala de grises' onChange={v => setFilter(v)} range={filter} max={100} />
))
BackgroundGrayscaleFilter.displayName = 'BackgroundGrayscaleFilter'

const BackgroundFilterImages = (): JSX.Element => {
  const [showAll, setShowAll] = useState(false)
  const {
    blur,
    brightness,
    opacity,
    hueRotation,
    sepia,
    grayscale,
    setBlur,
    setBrightness,
    setOpacity,
    setHueRotation,
    setSepia,
    setGrayscale
  } = useBackgroundFilterImage()

  const toggleView = useCallback(() => {
    setShowAll(!showAll)
  }, [showAll])

  return (
    <div className='editorStyles-section'>
      <h3 className='editorStyles-title'>Filtros del fondo</h3>
      <BackgroundHueRotationFilter filter={hueRotation} setFilter={setHueRotation} />
      <BackgroundBrightnessFilter filter={brightness} setFilter={setBrightness} />
      {showAll && (
        <>
          <BackgroundBlurFilter filter={blur} setFilter={setBlur} />
          <BackgroundGrayscaleFilter filter={grayscale} setFilter={setGrayscale} />
          <BackgroundSepiaFilter filter={sepia} setFilter={setSepia} />
          <BackgroundOpacityFilter filter={opacity} setFilter={setOpacity} />
        </>
      )}
      <button onClick={toggleView} className='filterToggleView'>
        <EllipsisIcon />
      </button>
    </div>
  )
}

export default memo(BackgroundFilterImages)
