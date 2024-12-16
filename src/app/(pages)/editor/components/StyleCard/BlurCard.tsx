import type { JSX } from 'react'

interface IBlurCard {
  style: [string, any]
  handleClick: (spread: number) => void
}

const BlurCard = ({ style, handleClick }: IBlurCard): JSX.Element => {
  const [key, value] = style

  return (
    <button className='SStyleCard' onClick={() => handleClick(value.blur)}>
      <div className='SStyleCard-cube shape'>
        <span style={{ boxShadow: value.style }} />
      </div>
      <p>{key}</p>
    </button>
  )
}

export default BlurCard
