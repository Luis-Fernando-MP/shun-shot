'use client'

import Board from '@/shared/components/Board'
import { type FC } from 'react'

import ShotEditor from './ui/shotEditor'

const Page: FC = () => {
  return (
    <main className='app-main home'>
      <Board isCenter={false} normalScale>
        {() => <ShotEditor />}
      </Board>
    </main>
  )
}

export default Page
