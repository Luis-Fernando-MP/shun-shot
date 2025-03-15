import type { FC } from 'react'

interface Props {
  className?: string
}

const DetailBar: FC<Props> = ({ className }) => {
  return <div className={className}>DetailBar</div>
}

export default DetailBar
