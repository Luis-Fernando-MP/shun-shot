// pages/api/uploadImage.ts
import { NextResponse } from 'next/server'

import cloudinary, { cloudPreset } from './cloud'

export async function POST(req: Request) {
  try {
    const data = await req.json()
    console.log(data)
    if (!data?.imageBase64) throw new Error('No image provided')
    const matches = data.imageBase64.match(/^data:(.+);base64,(.+)$/)
    if (!matches) {
      throw new Error('Invalid Base64 string')
    }
    const uploadResponse = await cloudinary.uploader.upload(`data:${matches[1]};base64,${matches[2]}`, {
      upload_preset: cloudPreset,
      folder: cloudPreset,
      colors: true
    })
    setTimeout(
      async () => {
        try {
          await cloudinary.uploader.destroy(uploadResponse.public_id)
        } catch (err) {
          console.error('Error deleting image:', err)
        }
      },
      1000 * 60 * 5 // cada 5 minutos se elimina la imagen
    )
    return NextResponse.json({ image: uploadResponse.secure_url, colors: uploadResponse.colors })
  } catch (error: any) {
    console.error('error', error?.message)
    return NextResponse.json({ message: error?.message ?? 'internal server error' }, { status: 500 })
  }
}
