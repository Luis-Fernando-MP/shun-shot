import CodeEditor from '@/app/components/Code'
import Options from '@/app/components/Options'
import Themes from '@/app/components/Themes'
import type { JSX } from 'react'

import './style.scss'

const Page = (): JSX.Element => {
  return (
    <>
      <Options className='code-left current' />
      <main className='main item'>
        <CodeEditor />
      </main>
      <Themes className='code-right' />
    </>
  )
}

export default Page
