import type { FC } from 'react'

import './style.scss'

interface Props {
  className?: string
}

const ThemeColorDisplay: FC<Props> = ({ className = '' }) => {
  return <div className={`themeColorDisplay ${className}`} />
}

export default ThemeColorDisplay
