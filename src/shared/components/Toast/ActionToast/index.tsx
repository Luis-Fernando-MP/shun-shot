import { BirdIcon, CheckIcon, HandIcon, XIcon } from 'lucide-react'
import { FC } from 'react'
import hotToast, { LoaderIcon, Toast } from 'react-hot-toast'

import type { IToastProps } from '..'
import './style.scss'

const Icons = {
  success: CheckIcon,
  error: XIcon,
  warning: HandIcon,
  info: BirdIcon,
  pending: LoaderIcon
}

interface Props extends IToastProps {
  toastProps: Toast
  onAction?: () => void
  actionLabel?: string
  secondActionLabel?: string
  onSecondAction?: () => void
}

/**
 * @description Custom toast component with action button
 * @param toastProps - Toast props
 * @param title - Title
 * @param description - Description (optional)
 * @param icon - Icon (optional)
 * @param type - Type (success, error, warning, info, pending) default: info
 * @param onAction - Action to be executed when the action button is clicked
 * @param actionLabel - Action label (optional)
 * @param secondActionLabel - Second action label (optional)
 * @param onSecondAction - Action to be executed when the second action button is clicked
 */

const ActionToast: FC<Props> = ({
  toastProps,
  title,
  description,
  icon,
  type = 'info',
  onAction,
  actionLabel,
  secondActionLabel,
  onSecondAction
}) => {
  const Icon = Icons[type]

  const handleToastDismiss = () => {
    hotToast.dismiss(toastProps.id)
  }

  const handleAction = () => {
    handleToastDismiss()
    onAction?.()
  }

  const handleSecondAction = () => {
    handleToastDismiss()
    onSecondAction?.()
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

        {secondActionLabel && (
          <button className='actionToast-action underline' onClick={handleSecondAction}>
            {secondActionLabel}
          </button>
        )}
      </div>
    </section>
  )
}

export default ActionToast
