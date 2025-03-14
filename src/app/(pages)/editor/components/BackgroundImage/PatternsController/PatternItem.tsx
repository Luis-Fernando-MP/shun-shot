import { acl } from '@/shared/acl'
import { type JSX, memo } from 'react'

interface IPatternItem {
  className: string
  isActive: boolean
  setPattern: (overlay: string) => void
}
const PatternItem = ({ className, setPattern, isActive }: IPatternItem): JSX.Element => {
  const handleClick = (): void => {
    if (isActive) return
    setPattern(className)
  }

  return <button className={`patternsImage-item ${acl(isActive)} animate-fade-in-up ${className}`} onClick={handleClick} />
}

export default memo(PatternItem)
