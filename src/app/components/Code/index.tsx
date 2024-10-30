'use client'

import useCode from '@/app/hooks/useCode'
import useTheme, { getTheme } from '@/app/hooks/useTheme'
import React, { ChangeEvent } from 'react'

import CodeComponent from './CodeComponent'
import './style.scss'

const CodeEditor = (): JSX.Element => {
  const themeName = useTheme(s => s.themeName)
  const { title, setTitle } = useCode()
  const { colors } = getTheme(themeName)

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  return (
    <section className='code-container animate-blurred-fade-in' id='code-container'>
      <div
        id='code-component'
        className='code animate-blurred-fade-in'
        style={{ backgroundColor: colors.background, animationDelay: '1s' }}
      >
        <div className='code-header'>
          <div className='code-header__top'>
            <div className='circle'>
              <span className='red circle2'></span>
            </div>
            <div className='circle'>
              <span className='yellow circle2'></span>
            </div>
            <div className='circle'>
              <span className='green circle2'></span>
            </div>
          </div>
          <div className='title'>
            <input
              type='search'
              value={title}
              style={{ color: colors.foreground }}
              onChange={handleTitleChange}
            />
          </div>
        </div>
        <CodeComponent />
      </div>
    </section>
  )
}

export default CodeEditor
