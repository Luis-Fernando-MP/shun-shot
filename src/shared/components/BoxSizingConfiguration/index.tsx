import { BoxSizing } from '@/app/editor/store/images/useImagesBorderStore'
import type { FC } from 'react'

interface Props {
  boxSizing: BoxSizing
  setBoxSizing: (boxSizing: BoxSizing) => void
}

const BoxSizingConfiguration: FC<Props> = ({ boxSizing, setBoxSizing }) => {
  return <div></div>
}

export default BoxSizingConfiguration
