'use client'

import useBoardStore from '@/shared/components/Board/board.store'
import IconButton from '@/shared/ui/IconButton'
import { MinusIcon, PlusIcon } from 'lucide-react'
import type { FC } from 'react'

const ZoomController: FC = () => {
  const { setScale, scale } = useBoardStore()
  return (
    <>
      <h5>Zoom :</h5>
      <IconButton transparent label='Aumentar zoom' position='bottom' onClick={() => setScale(scale + 0.3)}>
        <PlusIcon />
      </IconButton>
      <IconButton transparent label='Disminuir zoom' position='bottom' onClick={() => setScale(scale - 0.3)}>
        <MinusIcon />
      </IconButton>
      <h5 className='headerBar-percentage'>{Number(scale * 100).toFixed(0)}%</h5>
    </>
  )
}

export default ZoomController
