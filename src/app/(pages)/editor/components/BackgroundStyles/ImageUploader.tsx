import React, { type JSX, useState } from 'react'

interface ISimpleBackgroundImage {
  className?: string
  id: string
  handleBackground: (background: string) => void
}

const ImageUploader = ({ handleBackground, className = '', id }: ISimpleBackgroundImage): JSX.Element => {
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const allowedFormats = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp']
    const file = event.target.files?.[0]

    if (!file || !allowedFormats.includes(file.type)) return
    const reader = new FileReader()
    reader.onload = e => {
      const result = e.target?.result
      if (typeof result !== 'string') return
      setImagePreview(result)
      handleBackground(result)
    }
    reader.readAsDataURL(file)
  }

  return (
    <section className={`${className} imageUploader`}>
      <input
        id={id}
        type='file'
        accept='image/png, image/jpeg, image/jpg, image/webp'
        style={{ display: 'none' }}
        onChange={handleImageUpload}
      />

      {imagePreview != null && <img src={imagePreview} alt='Vista previa' />}
    </section>
  )
}

export default ImageUploader
