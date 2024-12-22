import { acl } from '@/shared/acl'
import { patterns } from '@/shared/imageStyle'
import { CircleSlash2Icon, EllipsisIcon } from 'lucide-react'
import { type JSX, useState } from 'react'

import PatternItem from './PatternItem'

interface IPatternsItems {
  patternClass: string
  setPattern: (patternClass: string) => void
}

const INITIAL_PATTERNS = patterns.slice(0, 4)
const PatternsItems = ({ patternClass, setPattern }: IPatternsItems): JSX.Element => {
  const [patternsList, setPatternsList] = useState(INITIAL_PATTERNS)

  const handleToggleAll = (): void => {
    if (patternsList.length <= 4) return setPatternsList(patterns)
    return setPatternsList(INITIAL_PATTERNS)
  }

  const handleResetPatter = (): void => {
    setPattern('')
  }

  return (
    <section className='patternsImage-items'>
      <button
        className={`patternsImage-action ${acl(patternClass === '')}`}
        onClick={handleResetPatter}
      >
        <CircleSlash2Icon />
      </button>

      {patternsList.map(className => (
        <PatternItem
          key={className}
          isActive={patternClass === className}
          className={className}
          setPattern={setPattern}
        />
      ))}

      <button className='patternsImage-action' onClick={handleToggleAll}>
        <EllipsisIcon />
      </button>
    </section>
  )
}

export default PatternsItems
