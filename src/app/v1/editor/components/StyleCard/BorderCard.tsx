import type { JSX } from 'react'

interface IBorderCard {
  style: [string, number]
  handleClick: (value: number) => void
}

const BorderCard = ({ style, handleClick }: IBorderCard): JSX.Element => {
  const [key, value] = style

  return (
    <button className='SStyleCard' onClick={() => handleClick(value)}>
      <div className='SStyleCard-cube border'>
        <span style={{ borderBottomLeftRadius: value }} />
      </div>
      <p>{key}</p>
    </button>
  )
}

export default BorderCard
