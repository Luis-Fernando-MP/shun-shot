import useDownloadImage from '@/app/hooks/useDownloadImage'
import { acl } from '@/shared/acl'
import IconButton from '@/shared/ui/IconButton'
import LabelText from '@/shared/ui/LabelText'
import { CloudDownload } from 'lucide-react'
import { type FC } from 'react'

import useCodeShotStore from '../../store/codeShot.store'

const ShotFileName: FC = () => {
  const { fileName } = useCodeShotStore()

  const { downloadPngImage, isDownloading } = useDownloadImage()

  const handleDownload = async () => {
    const $monacoEditor = document.getElementById('monacoEditor')
    if (!($monacoEditor instanceof HTMLElement)) return

    downloadPngImage({ fileName, $element: $monacoEditor, scaleFactor: 5 })
  }

  return (
    <IconButton
      label='Formatear código'
      transparent
      outline
      className={`mainBar-fileName ${acl(isDownloading, 'loading')}`}
      onClick={handleDownload}
    >
      <CloudDownload />
      <p>{fileName}</p>
      <LabelText>.png</LabelText>
    </IconButton>
  )
}

export default ShotFileName
