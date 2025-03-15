'use client'

import Board from '@/shared/components/Board'
import type { FC } from 'react'

import './style.scss'

const Page: FC = () => {
  return (
    <main className='app'>
      <Board isCenter={false} minScale>
        {() => <div className='app-board'></div>}
      </Board>
    </main>
  )
}

export default Page
