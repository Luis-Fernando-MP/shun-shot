'use client'

import Board from '@/shared/components/Board'
import { type FC } from 'react'

import './style.scss'

const Page: FC = () => {
  return (
    <main className='app-main home'>
      <Board isCenter={false} minScale>
        {() => (
          <div className='app-board home-board border'>
            <h2>scale</h2>
          </div>
        )}
      </Board>
    </main>
  )
}

export default Page
