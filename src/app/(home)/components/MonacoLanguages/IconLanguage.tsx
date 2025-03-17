import { acl } from '@/shared/acl'
import { MonacoLanguage } from '@/shared/monaco-languages'
import SimpleButtonLabel from '@/shared/ui/SimpleButtonLabel'
import { FC, memo } from 'react'

interface Props {
  language: MonacoLanguage
  onClick: (language: MonacoLanguage) => void
  selected: boolean
}

const IconLanguage: FC<Props> = ({ language, onClick, selected }) => {
  const { Icon, language: lang } = language

  return (
    <SimpleButtonLabel
      onClick={() => onClick(language)}
      label={lang}
      position='bottom'
      className={`monacoThemeCategory-languageAction ${acl(selected, 'selected')}`}
    >
      <Icon />
    </SimpleButtonLabel>
  )
}

export default memo(IconLanguage)
