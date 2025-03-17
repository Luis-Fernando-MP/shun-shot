import IconButton from '@/shared/ui/IconButton'
import LabelText from '@/shared/ui/LabelText'
import { CloudDownload } from 'lucide-react'
import type { FC } from 'react'

import useCodeShotStore from '../../store/codeShot.store'

const ShotFileName: FC = () => {
  const { fileName } = useCodeShotStore()

  return (
    <IconButton label='Formatear código' transparent outline className='mainBar-fileName'>
      <CloudDownload />
      <p>{fileName}</p>
      <LabelText>.png</LabelText>
    </IconButton>
  )
}

export default ShotFileName
