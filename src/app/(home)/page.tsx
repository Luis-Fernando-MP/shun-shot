'use client'

import Board from '@/shared/components/Board'
import { type FC } from 'react'

import MonacoEditor from './components/MonacoEditor'
import './style.scss'

const Page: FC = () => {
  return (
    <main className='app-main home'>
      <Board isCenter={false} normalScale>
        {() => (
          <div className='app-board home-board border' id='monacoEditor-container'>
            <MonacoEditor />
          </div>
        )}
      </Board>
    </main>
  )
}

export default Page
