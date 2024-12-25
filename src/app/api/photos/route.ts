'use server'

import { NextResponse } from 'next/server'
import { createApi } from 'unsplash-js'

const unsplashAPI = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY ?? ''
})

export async function GET(req: Request) {
  const url = new URL(req.url)
  const query = url.searchParams.get('query') ?? ''
  const per_page = Number(url.searchParams.get('per_page') ?? '10')
  const page = Number(url.searchParams.get('page') ?? '1')

  if (!query) {
    return NextResponse.json({ error: 'No query provided' }, { status: 400 })
  }

  try {
    const request = await unsplashAPI.search.getPhotos({
      query,
      perPage: per_page,
      page,
      orientation: 'landscape'
    })

    if (request.status !== 200) {
      throw new Error('Failed to get photos')
    }

    return NextResponse.json(request.response)
  } catch (error) {
    console.error('Error fetching photos:', error)
    return NextResponse.json({ message: 'Error fetching photos', error }, { status: 500 })
  }
}
