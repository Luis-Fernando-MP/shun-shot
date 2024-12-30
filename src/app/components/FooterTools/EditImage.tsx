import useImage from '@/app/(pages)/editor/store/useImage'
import { getPngUrl } from '@/shared/imageDownloader'
import { LayersIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { type JSX, useState } from 'react'

import { StatusApp } from './DownloadTools'

const EditImage = (): JSX.Element => {
  const { setSrc, setColors } = useImage()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [status, setStatus] = useState<StatusApp>('idle')
  const { push } = useRouter()

  const uploadImage = async (image: string) => {
    setStatus('loading')
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
      console.error(err)
      setStatus('error')
    } finally {
      setStatus('idle')
    }
  }

  const handleClick = async () => {
    const $monacoParent = document.querySelector('#monacoParent')
    if (!$monacoParent || !($monacoParent instanceof HTMLElement)) return
    try {
      const imageUrl = await getPngUrl($monacoParent)
      await uploadImage(imageUrl)
      push('/editor')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <button className='tools-action tools-especial btn-tooltip badge dev' onClick={handleClick}>
      <LayersIcon />
      <h5>Editar</h5>
      <p className='tooltip top'>Editar imagen</p>
    </button>
  )
}

export default EditImage
