import { acl } from '@/shared/acl'
import { default_image } from '@/shared/constants'
import type { JSX } from 'react'

interface IStackCard {
  stack: [string, (i: number) => string]
  amount: number
  isActive: boolean
  handleClick: (value: string) => void
}

const StackCard = ({ stack, handleClick, amount, isActive }: IStackCard): JSX.Element => {
  const [name, transform] = stack
  const stacks = new Array(amount).fill(0)

  const getStackStyles = (index: number) => {
    return transform(index + 1)
  }

  return (
    <button className={`stacksImages-action ${acl(isActive)}`} onClick={() => handleClick(name)}>
      <div className='stacksImages-stack'>
        <div className='stacksImages-stack__container'>
          <img src={default_image} alt='canvas editor style' />
        </div>

        {stacks.map((_, i) => {
          const key = `${i}-stacksImages-stack`
          return (
            <div
              key={key}
              className='stacksImages-stack__back'
              style={{
                zIndex: -1 * i,
                transform: getStackStyles(i * 0.2),
                filter: `brightness(${Math.max(0, 0.95 - i * 0.1)})`
              }}
            >
              n
            </div>
          )
        })}
      </div>
      <p className='stacksImages-stack__name'>{name}</p>
    </button>
  )
}

export default StackCard
