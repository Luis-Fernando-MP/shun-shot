'use client'

import { SearchIcon } from 'lucide-react'
import { JSX, memo } from 'react'
import type { DebouncedState } from 'usehooks-ts'

interface IUnsplashSearch {
  query: string | null
  setQuery: DebouncedState<(value: string) => void>
}

const UnsplashSearch = ({ query, setQuery }: IUnsplashSearch): JSX.Element => {
  return (
    <section className='unsplashCM-search'>
      <SearchIcon />
      <input
        type='text'
        placeholder='Buscar en unsplash'
        autoComplete='off'
        defaultValue={query ?? ''}
        onChange={event => setQuery(event.target.value)}
      />
    </section>
  )
}
export default memo(UnsplashSearch)
