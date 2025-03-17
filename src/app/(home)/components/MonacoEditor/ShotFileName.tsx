import type { ChangeEvent, FC } from 'react'
import { Input } from 'react-field-sizing-content'
import { useDebounceCallback } from 'usehooks-ts'

import useCodeShotStore from '../../store/codeShot.store'

interface Props {
  theme: string
}

const ShotFileName: FC<Props> = ({ theme }) => {
  const { fileName, setFileName } = useCodeShotStore()

  const debouncedSetFileName = useDebounceCallback(setFileName, 500)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    debouncedSetFileName(e.target.value)
  }

  return (
    <div className='monacoEditor-field'>
      <Input fieldSizing='content' defaultValue={fileName} style={{ color: theme }} onChange={handleChange} />
      <p className='monacoEditor-extension'>.ts</p>
    </div>
  )
}

export default ShotFileName
