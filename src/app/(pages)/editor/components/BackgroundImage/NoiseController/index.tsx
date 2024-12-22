import RangeSlider from '@/shared/components/RangeSlider'
import useNoiseImage from '@editor-store/noiseImage.store'
import type { JSX } from 'react'

const NoiseController = (): JSX.Element => {
  const { blur, opacity, setOpacity, setBlur } = useNoiseImage()

  return (
    <div className='editorStyles-section'>
      <h3 className='editorStyles-title'>Noise</h3>
      <RangeSlider range={opacity} onChange={n => setOpacity(n)} label='Opacidad' max={100} />
      <RangeSlider range={blur} onChange={b => setBlur(b)} label='Blur' max={50} />
    </div>
  )
}

export default NoiseController
