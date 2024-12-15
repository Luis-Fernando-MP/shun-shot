'use client'

import type { JSX } from 'react'

import { useExtraMonacoStore } from '../../store/extra-monaco.store'
import { useThemeMonacoStore } from '../../store/themes-monaco.store'
import './style.scss'

const MonacoFileName = (): JSX.Element => {
  const { fileName, setFileName } = useExtraMonacoStore()
  const theme = useThemeMonacoStore(s => s.theme)

  return (
    <input
      type='text'
      value={fileName}
      onChange={e => setFileName(e.target.value)}
      style={{ color: theme?.colors['editor.foreground'] ?? '' }}
    />
  )
}

export default MonacoFileName
