import { useEffect } from 'react'

const useVerifyImage = (src: string | null, onInvalid: () => void) => {
  useEffect(() => {
    const verifyImage = async () => {
      if (!src) return
      try {
        const response = await fetch(src, { method: 'HEAD' })
        if (!response.ok) {
          onInvalid()
        }
      } catch {
        onInvalid()
      }
    }

    verifyImage()
  }, [src, onInvalid])
}

export default useVerifyImage
