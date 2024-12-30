import { useCallback, useState } from 'react'
import { useDropzone as useReactDropzone } from 'react-dropzone'
import toast from 'react-hot-toast'

import useVerifyImage from '../../hooks/useVerifyImage'
import useImage from '../../store/useImage'

const MAX_SIZE = 3.5 * 1024 * 1024 // 3.5MB

export const useDropzone = () => {
  const { src, setSrc, setColors } = useImage()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  useVerifyImage(src, () => {
    setSrc(null)
    setColors([])
  })

  const uploadImage = useCallback(
    async (image: string) => {
      setIsLoading(true)
      setError(false)
      try {
        const response = await fetch('/api/upload', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ imageBase64: image })
        })

        if (!response.ok) throw new Error('Error uploading image')
        const data = await response.json()
        if (!data.image) throw new Error('Error uploading image')
        setSrc(data.image)
        setColors(data.colors ?? [])
      } catch (err) {
        setError(true)
        console.error(err)
        clearError()
      } finally {
        setIsLoading(false)
      }
    },
    [setSrc]
  )

  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0]
      if (!file) return

      if (file.size > MAX_SIZE) {
        setError(true)
        toast.error('⚠️ ¡La imagen es demasiado grande! Máximo 3.5MB.')
        return clearError()
      }

      const reader = new FileReader()
      reader.onload = async () => {
        if (reader.result && typeof reader.result === 'string') {
          await uploadImage(reader.result)
        }
      }
      reader.readAsDataURL(file)
    },
    [uploadImage]
  )

  const clearError = () => {
    const timeout = setTimeout(() => {
      setError(false)
      clearTimeout(timeout)
    }, 1500)
  }

  const { getRootProps, getInputProps, isDragActive } = useReactDropzone({
    onDrop: handleDrop,
    accept: { 'image/*': [] }
  })

  return {
    getRootProps,
    getInputProps,
    src,
    isDragActive,
    isLoading,
    error
  }
}
