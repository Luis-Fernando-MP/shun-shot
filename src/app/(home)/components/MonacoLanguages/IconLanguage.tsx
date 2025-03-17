import { acl } from '@/shared/acl'
import IconButton from '@/shared/ui/IconButton'
import { FC, memo } from 'react'

interface Props {
  language: { Icon: React.ElementType; language: string; status: string }
  onClick: (language: string) => void
  selected: boolean
}

const IconLanguage: FC<Props> = ({ language, onClick, selected }) => {
  const { Icon, language: lang } = language

  return (
    <IconButton
      label={lang}
      transparent
      onClick={() => onClick(lang)}
      className={`monacoPreferences-language__action ${acl(selected, 'selected')}`}
    >
      <Icon />
    </IconButton>
  )
}

export default memo(IconLanguage)
