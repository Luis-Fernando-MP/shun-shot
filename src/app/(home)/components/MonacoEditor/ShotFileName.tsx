import type { ChangeEvent, FC } from 'react'
import { Input } from 'react-field-sizing-content'
import { useDebounceCallback } from 'usehooks-ts'

import useCodeShotStore from '../../store/codeShot.store'
import MonacoExtensionName from './MonacoExtensionName'

interface Props {
  foreground: string
}

const ShotFileName: FC<Props> = ({ foreground }) => {
  const { fileName, setFileName } = useCodeShotStore()

  const debouncedSetFileName = useDebounceCallback(setFileName, 500)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    debouncedSetFileName(e.target.value)
  }

  return (
    <div className='monacoEditor-field'>
      <Input fieldSizing='content' defaultValue={fileName} style={{ color: foreground }} onChange={handleChange} />
      <MonacoExtensionName foreground={foreground} />
    </div>
  )
}

export default ShotFileName
