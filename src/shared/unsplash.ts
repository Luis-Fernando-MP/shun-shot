'use server'

import { createApi } from 'unsplash-js'

const unsplashAPi = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY ?? ''
})

export async function unsplashPhotos(query: string) {
  try {
    // const request = await unsplashAPi.search.getPhotos({ query })
    // if (request.status !== 200) throw new Error('Fail to get photos')
    // request.response
    return { data: 1 }
  } catch (error) {
    return { a: 1 }
  }
}
