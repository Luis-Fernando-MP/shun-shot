import type { FC } from 'react'

import useMonacoStore from '../../store/monaco.store'

interface Props {
  foreground: string
}

const MonacoExtensionName: FC<Props> = ({ foreground }) => {
  const { language } = useMonacoStore()

  return (
    <p className='monacoEditor-extension' style={{ color: foreground }}>
      .{language}
    </p>
  )
}

export default MonacoExtensionName
