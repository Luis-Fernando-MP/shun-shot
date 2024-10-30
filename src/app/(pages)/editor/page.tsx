import { type JSX } from 'react'

import CodeImage64 from './components/CodeImage64'
import Perspectives from './components/Perspectives'
import StylesCode from './components/StylesCode'
import './style.scss'

const Page = (): JSX.Element => {
  return (
    <>
      <StylesCode className='code-left editor' />
      <CodeImage64 />
      <Perspectives className='code-right editor' />
    </>
  )
}

export default Page
