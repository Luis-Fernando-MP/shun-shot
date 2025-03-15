import IconButton from '@/shared/ui/IconButton'
import ShumShots from '@/shared/ui/ShumShots'
import { SwatchBookIcon } from 'lucide-react'
import type { FC } from 'react'

interface Props {
  className?: string
}

const MainBar: FC<Props> = ({ className = '' }) => {
  return (
    <div className={`mainBar ${className}`}>
      <ShumShots />
    </div>
  )
}

export default MainBar
