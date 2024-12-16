import type { JSX } from 'react'

interface IStackCard {
  stack: [string, (i: number) => string]
  index: number
  handleClick: (value: string) => void
}

const StackCard = ({ stack, handleClick, index }: IStackCard): JSX.Element => {
  const [name, transform] = stack
  const transformStyle = transform(index)
  return (
    <button className='SStyleCard' onClick={() => handleClick(transformStyle)}>
      <div className='SStyleCard-cube border'>
        <span style={{ transform: transformStyle }} />
      </div>
      <p>{name}</p>
    </button>
  )
}

export default StackCard
