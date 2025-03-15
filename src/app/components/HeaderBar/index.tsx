import type { FC } from 'react'

interface Props {
  className?: string
}

const HeaderBar: FC<Props> = ({ className }) => {
  return <div className={className}>HeaderBar</div>
}

export default HeaderBar
