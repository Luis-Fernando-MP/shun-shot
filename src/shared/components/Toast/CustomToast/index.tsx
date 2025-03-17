import { BirdIcon, CheckIcon, HandIcon, XIcon } from 'lucide-react'
import { FC } from 'react'
import hotToast, { LoaderIcon, Toast } from 'react-hot-toast'

import type { IToastProps } from '..'
import './style.scss'

interface Props extends IToastProps {
  toastProps: Toast
}

const Icons = {
  success: CheckIcon,
  error: XIcon,
  warning: HandIcon,
  info: BirdIcon,
  pending: LoaderIcon
}

/**
 * @description Custom basic toast component
 * @param toastProps - Hot toast props
 * @param title - Title (required)
 * @param description - Description (optional)
 * @param icon - Icon (optional)
 * @param type - Type default: info - (success, error, warning, info, pending)
 */

const CustomToast: FC<Props> = ({ toastProps, title, description, icon, type = 'info' }) => {
  const Icon = Icons[type]

  const handleClick = () => {
    if (type === 'pending') return
    hotToast.dismiss(toastProps.id)
  }

  return (
    <button className={`customToast ${type}`} onClick={handleClick}>
      <div className='customToast-icon'>{icon || <Icon />}</div>
      <div className='customToast-content'>
        <h5 className='customToast-title'>{title}</h5>
        {description && <p className='customToast-description'>{description}</p>}
      </div>
    </button>
  )
}

export default CustomToast
