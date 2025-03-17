import type { FC } from 'react'

import useMonacoBasicOptionsStore from '../../store/monacoBasicOptions.store'

interface Props {
  foreground: string
}

const MonacoExtensionName: FC<Props> = ({ foreground }) => {
  const { typography, language } = useMonacoBasicOptionsStore()

  return (
    <p className='monacoEditor-extension' style={{ color: foreground }}>
      .{language}
    </p>
  )
}

export default MonacoExtensionName
