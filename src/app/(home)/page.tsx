'use client'

import Board from '@/shared/components/Board'
import { toast } from '@/shared/components/Toast'
import { monacoFonts } from '@/shared/fonts/monaco-fonts'
import { THEMES } from '@/shared/themes'
import IconButton from '@/shared/ui/IconButton'
import LabelText from '@/shared/ui/LabelText'
import PaletteSphere from '@/shared/ui/PaletteSphere'
import ShumShots from '@/shared/ui/ShumShots'
import ThemeColorDisplay from '@/shared/ui/ThemeColorDisplay'
import { CloudAlert, SunIcon, SwatchBookIcon } from 'lucide-react'
import { type FC } from 'react'

import MainBar from './components/MainBar'
import './style.scss'
import TypographyDisplay from './ui/TypographyDisplay'

const Page: FC = () => {
  const handleClick = (): void => {
    toast.action({
      title: 'Revisa tus movimientos',
      type: 'pending',
      description: 'Acabamos de completar satisfactoriamente tu proceso de x cosa',
      position: 'bottom-right',
      actionLabel: 'Revisar movimientos',
      onAction: () => {
        console.log('action')
      }
    })

    toast.action({
      title: 'Algo a salido mal',
      type: 'error',
      description: 'No se pudo conectar con el servidor',
      onAction: () => {
        console.log('action')
      },
      actionLabel: 'Revisar movimientos'
    })

    toast.action({
      title: 'Descargado',
      type: 'success',
      description: 'El archivo se ha descargado correctamente',
      onAction: () => {
        console.log('action')
      },
      actionLabel: 'Revisar movimientos'
    })

    toast.action({
      title: 'Revisa tu correo',
      type: 'info',
      description: 'Revisa tu correo para verificar tu cuenta',
      onAction: () => {
        console.log('action')
      },
      actionLabel: 'Revisar movimientos'
    })

    toast.action({
      title: 'No se pudo conectar con el servidor',
      type: 'warning',
      description: 'No se pudo conectar con el servidor',
      onAction: () => {
        console.log('action')
      },
      actionLabel: 'Revisar movimientos'
    })
  }
  return (
    <main className='app'>
      <h3 className='customToast-title'>HOLA hola hola hol hola</h3>

      <MainBar className='app-mainBar' />
      {/* <Board isCenter={false} minScale>
        {(_off, scale) => ( */}
      <div className='app-board border'>
        <h2>scale</h2>
        <ShumShots />
        <IconButton label='Tema' transparent position='bottom' onClick={handleClick}>
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
          <LabelText>.png</LabelText>
        </IconButton>
        <IconButton label='Swatch label' position='bottom'>
          <SwatchBookIcon />
        </IconButton>
      </div>
      {/* )}
      </Board> */}
    </main>
  )
}

export default Page
