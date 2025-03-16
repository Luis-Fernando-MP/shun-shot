import IconButton from '@/shared/ui/IconButton'
import { MoreHorizontalIcon } from 'lucide-react'
import { type FC, type HTMLAttributes, type ReactNode, useState } from 'react'

import './style.scss'

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: Readonly<ReactNode[]> | null | Readonly<ReactNode>
  maxHeight?: number
  onExtend?: () => void
}

const SliceContainer: FC<Props> = ({ children, maxHeight, className, onExtend, ...props }) => {
  const [isExtended, setIsExtended] = useState(false)

  const handleClick = () => {
    setIsExtended(!isExtended)
    onExtend?.()
  }

  return (
    <article className='sliceContainer' {...props}>
      <IconButton onClick={handleClick}>
        {isExtended ? 'Contraer' : 'Extender'}
        <MoreHorizontalIcon />
      </IconButton>

      <section
        className={`sliceContainer-content ${className}`}
        style={{
          maxHeight: isExtended ? '100%' : (maxHeight ?? '250px')
        }}
      >
        {children}
      </section>
    </article>
  )
}

export default SliceContainer
