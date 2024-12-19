'use client'

import { stacksStyles } from '@/shared/imageStyle'
import { type JSX, useState } from 'react'

type StackVariant =
  | 'offset'
  | 'rotated'
  | 'layered'
  | 'fanned'
  | 'staggered'
  | 'spiral'
  | 'pyramid'
  | 'wave'

interface StackedCardProps {
  variant: StackVariant
  stackCount: number
}

const StackVariant = Object.keys(stacksStyles) as Array<keyof typeof stacksStyles>

const Page = (): JSX.Element => {
  const [stackCount, setStackCount] = useState(0)
  const [variant, setVariant] = useState<StackVariant>('offset')

  const handleIncreaseStack = () => {
    setStackCount(prev => Math.min(prev + 1, 6))
  }

  const handleDecreaseStack = () => {
    setStackCount(prev => Math.max(prev - 1, 0))
  }

  return (
    <div>
      <div className='mx-auto flex max-w-2xl flex-col gap-32 space-y-8'>
        <div className='m-28 flex flex-wrap justify-center gap-4'>
          <button
            className='bg-gray-700 px-3 py-2 text-gray-100'
            onClick={handleDecreaseStack}
            disabled={stackCount <= 0}
          >
            Decrease Stack
          </button>
          <button
            onClick={handleIncreaseStack}
            disabled={stackCount >= 6}
            className='bg-gray-700 px-3 py-2 text-gray-100'
          >
            Increase Stack
          </button>
          <select
            className='rounded-md border bg-gray-700 px-3 py-2 text-gray-100 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500'
            value={variant}
            onChange={e => setVariant(e.target.value)}
          >
            <option selected value=''>
              Escoge
            </option>
            {StackVariant.map(key => (
              <option key={key} value={key}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <StackedCard variant={variant} stackCount={stackCount} />
      </div>
    </div>
  )
}

function StackedCard({ variant, stackCount }: StackedCardProps) {
  const stacks = new Array(stackCount).fill(0)
  console.log('variant', variant, '-', stacks)

  const getStackStyles = (index: number, total: number) => {
    if (variant === '') return
    if (stacksStyles[variant]) {
      return stacksStyles[variant](index + 1)
    }
  }

  return (
    <div className='EStack'>
      <section className='EStack-card'>
        <h2 className='text-2xl font-bold text-white'>Card Title</h2>
        <p className='mt-2 text-gray-200'>This is the main content of the card.</p>
      </section>

      {stacks.map((_, i) => {
        const index = i + 1
        const key = `${i}-back-stack`
        // <div
        //   key={index}
        //   className={` ${getStackStyles(index, stackCount)} ${index === 0 ? 'bg-purple-600' : 'bg-gray-300'} backdrop-blur-sm`}
        //   style={{ zIndex: stackCount - index }}
        // ></div>

        return (
          <div
            key={key}
            className='EStack-card__back'
            style={{
              zIndex: -1 * index,
              transform: getStackStyles(i, stackCount)
            }}
          ></div>
        )
      })}
    </div>
  )
}

export default Page
