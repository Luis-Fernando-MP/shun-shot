'use client'

import Unsplash from '@/shared/assets/Unsplash'
import { CircleEllipsisIcon, CircleXIcon } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast'
import { useDebounceValue } from 'usehooks-ts'

import UnsplashImages from './UnsplashImages'
import UnsplashSearch from './UnsplashSearch'
import './style.scss'
import { Photos } from './unsplash.type'

type TStatus = 'loading' | 'error' | 'idle'
const UnsplashComponent = () => {
  const [view, setView] = useState(false)
  const [images, setImages] = useState<Photos['results']>([])
  const [query, setQuery] = useDebounceValue('', 500)

  const status = useRef<TStatus>('idle')
  const page = useRef(1)
  const totalPage = useRef(5)

  const fetchPhotos = useCallback(async () => {
    if (!query || status.current === 'loading') return
    status.current = 'loading'
    const URL = `/api/photos?query=${encodeURIComponent(query)}&per_page=10&page=${page.current}`

    try {
      const response = await fetch(URL)
      const data = await response.json()
      if (!data.results || data.results.length === 0) return toast.error('Sin resultados.')
      totalPage.current = data.total_pages
      page.current++
      setImages(prev => [...data.results, ...prev])
    } catch (error) {
      console.log('Error fetching photos:', error)
      toast.error('Error al buscar imágenes.')
      status.current = 'error'
    } finally {
      status.current = 'idle'
    }
  }, [query])

  useEffect(() => {
    page.current = 1
    totalPage.current = 5
    if (query) fetchPhotos()
  }, [query, fetchPhotos])

  const loadMore = useCallback(async () => {
    if (page.current >= totalPage.current) return toast.error('No hay más imágenes para cargar.')
    await fetchPhotos()
  }, [fetchPhotos])

  const handleClean = useCallback(() => {
    setImages([])
    page.current = 1
    totalPage.current = 5
  }, [])

  return (
    <article className={`unsplashCM ${status.current}`}>
      <button className='unsplashCM-header pattern-12' onClick={() => setView(!view)}>
        <Unsplash />
        <h3>Unsplash</h3>
      </button>
      {view && (
        <section className='unsplashCM-contend'>
          <UnsplashSearch setQuery={setQuery} query={query} />
          <UnsplashImages images={images} setQuery={setQuery} />
          {images.length > 0 && (
            <div className='unsplashCM-actions'>
              <button onClick={handleClean} className='unsplashCM-action__clean'>
                <CircleXIcon /> Limpiar
              </button>
              {page.current <= totalPage.current && (
                <button onClick={loadMore} className='unsplashCM-action__more' disabled={status.current === 'loading'}>
                  <CircleEllipsisIcon /> {status.current === 'loading' ? 'Cargando...' : 'Más...'}
                </button>
              )}
            </div>
          )}
        </section>
      )}
    </article>
  )
}

export default UnsplashComponent
