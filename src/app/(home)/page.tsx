'use client'

import Board from '@/shared/components/Board'
import { monacoFonts } from '@/shared/fonts/monaco-fonts'
import { THEMES } from '@/shared/themes'
import IconButton from '@/shared/ui/IconButton'
import Label from '@/shared/ui/Label'
import PaletteSphere from '@/shared/ui/PaletteSphere'
import ShumShots from '@/shared/ui/ShumShots'
import ThemeColorDisplay from '@/shared/ui/ThemeColorDisplay'
import { CloudAlert, SunIcon, SwatchBookIcon } from 'lucide-react'
import { type FC } from 'react'

import MainBar from './components/MainBar'
import './style.scss'
import TypographyDisplay from './ui/TypographyDisplay'

const Page: FC = () => {
  return (
    <main className='app'>
      <MainBar className='app-mainBar' />
      <Board isCenter={false} minScale>
        {() => (
          <div className='app-board border'>
            <ShumShots />
            <IconButton label='Tema' transparent>
              <ThemeColorDisplay />
              <div>tema</div>
              <h5>Tema :</h5>
              <h4>Purple dark</h4>
            </IconButton>

            <TypographyDisplay font={monacoFonts.firaCode} title='Fira Code' />

            <TypographyDisplay font={monacoFonts.dm_Mono} title='DM Mono' selected />

            <PaletteSphere title='Circuit' theme={THEMES['Circuit']} />
            <PaletteSphere title='Circuit' theme={THEMES['Pastel Horizon']} selected />

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
