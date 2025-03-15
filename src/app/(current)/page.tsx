'use client'

import Board from '@/shared/components/Board'
import { type FC } from 'react'

import './style.scss'

const Page: FC = () => {
  return (
    <main className='app'>
      <Board isCenter={false} minScale>
        {() => (
          <div className='app-board'>
            <h5>SHUM SHOT'S developer h5</h5>
          </div>
        )}
      </Board>
    </main>
  )
}

export default Page
