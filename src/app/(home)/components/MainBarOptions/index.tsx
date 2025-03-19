'use client'

import IconButton from '@/shared/ui/IconButton'
import { LetterText } from 'lucide-react'
import type { FC } from 'react'

import useReferenceMonacoStore from '../../store/referenceMonaco'
import UserMonacoPreferences from '../UserMonacoPreferences'
import ShotFileName from './ShotFileName'

const MainBarOptions: FC = () => {
  const { $editor } = useReferenceMonacoStore()

  const handleFormatCode = () => {
    if ($editor) {
      $editor.getAction('editor.action.formatDocument')?.run()
    }
  }

  return (
    <section className='mainBar-section'>
      <IconButton label='Formatear código' transparent onClick={handleFormatCode}>
        <LetterText />
      </IconButton>
      <ShotFileName />
      <UserMonacoPreferences />
    </section>
  )
}

export default MainBarOptions
