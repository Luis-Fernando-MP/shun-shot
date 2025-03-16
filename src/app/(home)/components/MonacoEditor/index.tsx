import LabeledInput from '@/shared/ui/LabeledInput'
import dynamic from 'next/dynamic'
import type { FC } from 'react'

const EditorComponent = dynamic(() => import('../EditorComponent'), { ssr: false })

const MonacoEditor: FC = () => {
  return (
    <article className='monacoEditor'>
      <header className='monacoEditor-header'>
        <div className='monacoEditor-header-buttons'>
          <span className='monacoEditor-sphere red' />
          <span className='monacoEditor-sphere yellow' />
          <span className='monacoEditor-sphere green' />
        </div>

        <LabeledInput defaultValue='Untitled' transparent />
      </header>
      <section className='monacoEditor-body'>
        <EditorComponent />
      </section>
    </article>
  )
}

export default MonacoEditor
