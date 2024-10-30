'use client'

import useCode from '@/app/hooks/useCode'
import useStyleCode from '@/app/hooks/useStyleCode'
import { downloadToSvg } from '@/shared/imageEditor'
import DomToImage from 'dom-to-image'
import { DownloadCloud, Images } from 'lucide-react'
import Link from 'next/link'
import { type HtmlHTMLAttributes, type JSX, type ReactNode } from 'react'
import toast from 'react-hot-toast'

import { borderStyles } from '../../data'
import RangeSlider from '../RangeSlider'
import './style.scss'

interface IStylesCode extends HtmlHTMLAttributes<HTMLElement> {
  children?: Readonly<ReactNode[]> | null
}

const StylesCode = ({ className, ...props }: IStylesCode): JSX.Element => {
  const { border, setBorder } = useStyleCode()
  const { title } = useCode()

  const copyImage = async () => {
    const element = document.querySelector('main.main')
    if (!element || !(element instanceof HTMLElement)) return

    const id = toast.loading('Preparando...')

    try {
      const svgText = await DomToImage.toSvg(element)
      const svgContent = svgText
        .replace(/^data:image\/svg\+xml;charset=utf-8,/, '')
        .replace(';;', ';')
      console.log('svg ', svgContent)

      const svgBlob = new Blob([svgContent], { type: 'image/svg+xml;charset=utf-8' })
      const url = URL.createObjectURL(svgBlob)
      console.log('url ', { url })

      const img = new Image()
      img.src = url
      console.log('img ', { img })

      img.onload = async () => {
        const canvas = document.createElement('canvas')
        canvas.width = element.offsetWidth
        canvas.height = element.offsetHeight

        const ctx = canvas.getContext('2d')
        if (ctx) {
          ctx.drawImage(img, 0, 0)

          console.log('ctx', ctx)

          // Convierte el canvas a PNG
          canvas.toBlob(async blob => {
            if (blob) {
              const item = new ClipboardItem({ 'image/png': blob })
              await navigator.clipboard.write([item])
              toast.success('Al portapapeles!!', { id })
            } else {
              toast.error('No se pudo convertir a PNG', { id })
            }
          }, 'image/png')
        }

        URL.revokeObjectURL(url) // Libera el URL del Blob
      }

      img.onerror = () => {
        toast.error('Error al cargar la imagen SVG', { id })
      }
    } catch (error) {
      console.error(error)
      toast.error('No se pudo copiar la imagen', { id })
    }

    // await copyToSvg(element)
  }

  const downloadImage = async () => {
    const element = document.querySelector('main.main')
    if (!element || !(element instanceof HTMLElement)) return
    downloadToSvg(element, title)
  }

  const handleBorderChange = (v: number) => {
    setBorder(v)
  }

  return (
    <section className={`${className} stylesCode`} {...props}>
      <Link href='/' className='stylesCode-logo'>
        <h1>CODE</h1>
        <h4 className='typing'>Shots</h4>
        <h5 className='stylesCode-me'>JULIS 愛</h5>
      </Link>

      <button onClick={copyImage} className='options-opt' title={'copiar'}>
        <Images />
      </button>
      <button onClick={downloadImage} className='options-opt' title={'descargar'}>
        <DownloadCloud />
      </button>

      <article className='stylesCode-section'>
        <h4 className='stylesCode-subtitle'>Border</h4>
        <RangeSlider label='Radius' onChange={v => setBorder(v)} range={border} />
        <section className='stylesCode-borders'>
          {Object.entries(borderStyles).map(([k, v]) => {
            return (
              <button key={k} className='stylesCode-border' onClick={() => handleBorderChange(v)}>
                <div className='stylesCode-border__cube'>
                  <span style={{ borderBottomLeftRadius: v }} />
                </div>
                <p>{k}</p>
              </button>
            )
          })}
        </section>
      </article>
    </section>
  )
}

export default StylesCode
