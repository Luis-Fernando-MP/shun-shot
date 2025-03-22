import { NextResponse } from 'next/server'

import cloudinary, { cloudPreset } from './cloud'

const IMAGE_EXPIRATION_TIME = 5 * 60 * 1000 // Destroys the image after 5 minutes

/**
 * Handles the POST request to upload an image.
 * @param req - The request object containing the image data.
 * @returns A JSON response with the uploaded image URL and colors or an error message.
 */
export async function POST(req: Request) {
  try {
    const data = await req.json()

    if (!data?.imageBase64) {
      return NextResponse.json({ message: 'No image provided' }, { status: 400 })
    }

    // Extract and validate the base64 string
    const matches = data.imageBase64.match(/^data:(.+);base64,(.+)$/)
    if (!matches) return NextResponse.json({ message: 'Invalid Base64 string' }, { status: 400 })

    // Upload the image to Cloudinary
    const [mimeType, base64Data] = [matches[1], matches[2]]
    const uploadResponse = await cloudinary.uploader.upload(`data:${mimeType};base64,${base64Data}`, {
      upload_preset: cloudPreset,
      folder: cloudPreset,
      colors: true,
      quality: 100,
      transformation: {
        fetch_format: 'auto',
        quality: 'auto:best'
      }
    })

    // Schedule the deletion of the image
    scheduleImageDeletion(uploadResponse.public_id)

    return NextResponse.json({
      image: uploadResponse.secure_url,
      colors: uploadResponse.colors,
      original_image: uploadResponse.secure_url.replace('/upload/', '/upload/q_100/'),
      predominant: uploadResponse.predominant
    })
  } catch (error: any) {
    console.error('Error uploading image:', error)

    return NextResponse.json({ message: error?.message || 'Internal server error' }, { status: 500 })
  }
}

/**
 * Schedules the deletion of an image after the expiration time.
 * @param publicId - The public ID of the image in Cloudinary.
 */
function scheduleImageDeletion(publicId: string) {
  setTimeout(async () => {
    try {
      await cloudinary.uploader.destroy(publicId)
      console.log(`Image ${publicId} deleted successfully`)
    } catch (err) {
      console.error(`Error deleting image ${publicId}:`, err)
    }
  }, IMAGE_EXPIRATION_TIME)
}
