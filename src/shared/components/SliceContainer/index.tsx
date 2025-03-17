import IconButton from '@/shared/ui/IconButton'
import { MoreHorizontalIcon } from 'lucide-react'
import { type FC, type HTMLAttributes, type ReactNode, useState } from 'react'

import './style.scss'

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: Readonly<ReactNode[]> | null | Readonly<ReactNode>
  maxHeight?: number
  onExtend?: () => void
}

/**
 * @description Component that allows you to extend and contract a content container.
 * @param {ReactNode} children - The child elements that will be displayed inside the container.
 * @param {number} maxHeight - The maximum height of the container when it is contracted.
 * @param {() => void} onExtend - The function that will be executed when the extension button is clicked.
 * @param {HTMLAttributes<HTMLDivElement>} props - Additional properties of the component.
 */

const SliceContainer: FC<Props> = ({ children, maxHeight, className, onExtend, ...props }) => {
  const [isExtended, setIsExtended] = useState(false)

  const handleClick = () => {
    setIsExtended(!isExtended)
    onExtend?.()
  }

  return (
    <article className='sliceContainer' {...props}>
      <IconButton onClick={handleClick} className='sliceContainer-action'>
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
