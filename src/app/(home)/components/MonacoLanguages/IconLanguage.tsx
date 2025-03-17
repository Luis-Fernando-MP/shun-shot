import { acl } from '@/shared/acl'
import SimpleButtonLabel from '@/shared/ui/SimpleButtonLabel'
import { FC, memo } from 'react'

interface Props {
  language: { Icon: React.ElementType; language: string; status: string }
  onClick: (language: string) => void
  selected: boolean
}

const IconLanguage: FC<Props> = ({ language, onClick, selected }) => {
  const { Icon, language: lang } = language

  return (
    <SimpleButtonLabel
      onClick={() => onClick(lang)}
      label={lang}
      position='bottom'
      className={`monacoThemeCategory-languageAction ${acl(selected, 'selected')}`}
    >
      <Icon />
    </SimpleButtonLabel>
  )
}

export default memo(IconLanguage)
