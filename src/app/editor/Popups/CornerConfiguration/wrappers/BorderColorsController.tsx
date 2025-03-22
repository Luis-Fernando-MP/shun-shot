import UseImagesBorderStore from '@/app/editor/store/images/useImagesBorderStore'
import ColorsController from '@/shared/components/ColorsController'
import type { FC } from 'react'

const BorderColorsController: FC = () => {
  const { color, setColor, setType } = UseImagesBorderStore()

  const handleChangeColor = (bg: string) => {
    setColor(bg)
    setType('solid')
  }

  return (
    <section className='bgConfig-section'>
      <h3 className='paragraph-highlight'># Colores:</h3>
      <ColorsController background={color} setBackground={handleChangeColor} />
    </section>
  )
}

export default BorderColorsController
