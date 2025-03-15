'use client'

import Board from '@/shared/components/Board'
import IconButton from '@/shared/ui/IconButton'
import Label from '@/shared/ui/Label'
import { CloudAlert, SunIcon, SwatchBookIcon } from 'lucide-react'
import { type FC } from 'react'

import MainBar from './components/MainBar'
import './style.scss'

const Page: FC = () => {
  return (
    <main className='app'>
      <MainBar className='app-mainBar' />
      <Board isCenter={false} minScale>
        {() => (
          <div className='app-board'>
            <IconButton label='Swatch label' className='active'>
              <SwatchBookIcon />
            </IconButton>

            <IconButton transparent>
              <SwatchBookIcon />
              <p>Zoom</p>
            </IconButton>

            <IconButton label='Swatch label' outline>
              <SunIcon />
            </IconButton>
            <IconButton label='Swatch label' transparent outline>
              <CloudAlert />
              <h5>Shum shot's</h5>
              <Label>.png</Label>
            </IconButton>
            <IconButton label='Swatch label' position='bottom'>
              <SwatchBookIcon />
            </IconButton>
            <h1>SHUM SHOT'S developer h1</h1>
            <h2>SHUM SHOT'S developer h2</h2>
            <h3>SHUM SHOT'S developer h3</h3>
            <h4>SHUM SHOT'S developer h4</h4>
            <h5>SHUM SHOT'S developer h5</h5>
            <p>SHUM SHOT'S developer p</p>
            <span>SHUM SHOT'S developer span</span>
            <button>SHUM SHOT'S developer button</button>
            <a href='#'>SHUM SHOT'S developer a</a>
            <input type='text' defaultValue='Sum shot developer input' />
            <textarea defaultValue='Sum shot developer textarea' />
            <select defaultValue='1'>
              <option value='1'>SHUM SHOT'S developer option 1</option>
              <option value='2'>SHUM SHOT'S developer option 2</option>
              <option value='3'>SHUM SHOT'S developer option 3</option>
            </select>
            <label>SHUM SHOT'S developer label</label>
          </div>
        )}
      </Board>
    </main>
  )
}

export default Page
