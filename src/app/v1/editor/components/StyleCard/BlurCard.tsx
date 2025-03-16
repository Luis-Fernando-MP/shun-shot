import { acl } from '@/shared/acl'
import type { JSX } from 'react'

interface IBlurCard {
  style: [string, any]
  handleClick: (spread: number, key: string) => void
  active: boolean
}

const BlurCard = ({ style, handleClick, active }: IBlurCard): JSX.Element => {
  const [key, value] = style

  return (
    <button className={`styleBlurCard ${acl(active)}`} onClick={() => handleClick(value.blur, key)}>
      <div className='styleBlurCard-cube'>
        <span style={{ boxShadow: value.style }} />
      </div>
      <p>{key}</p>
    </button>
  )
}

export default BlurCard
