// pages/api/uploadImage.ts
import fs from 'fs'
import { NextResponse } from 'next/server'
import path from 'path'

export async function POST(req: Request) {
  try {
    const data = await req.json()

    if (!data?.imageBase64) throw new Error('No image provided')

    const matches = data.imageBase64.match(/^data:(.+);base64,(.+)$/)
    if (!matches) {
      throw new Error('Invalid Base64 string')
    }

    const ext = matches[1].split('/')[1]
    const base64Data = matches[2]

    const tempDir = path.join(process.cwd(), 'public', 'temp')
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir)
    }

    const filename = `image-${Date.now()}.${ext}`
    const filePath = path.join(tempDir, filename)

    fs.writeFile(filePath, base64Data, 'base64', err => {
      if (err) {
        console.error(err)
        throw new Error('Error saving the image')
      }
    })
    return NextResponse.json({ image: filename })
  } catch (error) {
    console.log(error)
    return new Response('Internal Error', { status: 500 })
  }
}
