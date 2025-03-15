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
            <IconButton label='Tema' transparent>
              <div>tema</div>
              <h5>Tema :</h5>
              <h4>Purple dark</h4>
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
          </div>
        )}
      </Board>
    </main>
  )
}

export default Page
