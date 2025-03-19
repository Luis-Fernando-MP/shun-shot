import type { ChangeEvent, FC } from 'react'
import { Input } from 'react-field-sizing-content'
import { useDebounceCallback } from 'usehooks-ts'

import useCodeShotStore from '../../store/codeShot.store'
import useShumOptionsStore from '../../store/shumOptions.store'

interface Props {
  foreground: string
}

const ShotFileName: FC<Props> = ({ foreground }) => {
  const { fileName, setFileName } = useCodeShotStore()
  const { language, showLanguageIcon } = useShumOptionsStore()

  const debouncedSetFileName = useDebounceCallback(setFileName, 500)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    debouncedSetFileName(e.target.value)
  }

  return (
    <div className='monacoEditor-field'>
      {showLanguageIcon && <language.Icon />}
      <Input fieldSizing='content' defaultValue={fileName} style={{ color: foreground }} onChange={handleChange} />
      <p className='monacoEditor-extension' style={{ color: foreground }}>
        .{language.short}
      </p>
    </div>
  )
}

export default ShotFileName
