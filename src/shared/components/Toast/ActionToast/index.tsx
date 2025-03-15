import { BirdIcon, CheckIcon, HandIcon, XIcon } from 'lucide-react'
import { FC } from 'react'
import hotToast, { LoaderIcon, Toast } from 'react-hot-toast'

import type { IToastProps } from '..'
import './style.scss'

interface Props extends IToastProps {
  toastProps: Toast
  onAction: () => void
  actionLabel?: string
}

const Icons = {
  success: CheckIcon,
  error: XIcon,
  warning: HandIcon,
  info: BirdIcon,
  pending: LoaderIcon
}

const ActionToast: FC<Props> = ({ toastProps, title, description, icon, type = 'info', onAction, actionLabel }) => {
  const Icon = Icons[type]

  const handleToastDismiss = () => {
    hotToast.dismiss(toastProps.id)
  }

  const handleAction = () => {
    handleToastDismiss()
    onAction()
  }

  return (
    <section className={`actionToast ${type}`}>
      <div className='actionToast-icon'>{icon || <Icon />}</div>
      <h2 className='actionToast-title'>{title}</h2>
      {description && <p className='customToast-description'>{description}</p>}
      <div className='actionToast-actions'>
        <button className='actionToast-action' onClick={handleToastDismiss}>
          Cerrar
        </button>

        {actionLabel && (
          <button className='actionToast-action active' onClick={handleAction}>
            {actionLabel}
          </button>
        )}
      </div>
    </section>
  )
}

export default ActionToast
