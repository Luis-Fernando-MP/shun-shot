'use client'

import type { ReactNode } from 'react'
import hotToast, { Toast } from 'react-hot-toast'

import ActionToast from './ActionToast'
import CustomToast from './CustomToast'

export interface IToastProps {
  title: string
  description?: string
  icon?: ReactNode
  type?: 'success' | 'error' | 'warning' | 'info' | 'pending'
}

type ToastType = Omit<Toast, 'type' | 'message' | 'icon' | 'style' | 'className' | 'iconTheme' | 'height'>

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

const toastAction = (
  props: Partial<ToastType> &
    IToastProps & { onAction: () => void; actionLabel?: string; secondActionLabel?: string; onSecondAction?: () => void }
) => {
  const { title, description, icon, type, duration, onAction, actionLabel, secondActionLabel, onSecondAction, ...rest } = props
  return hotToast(
    t => {
      return (
        <ActionToast
          toastProps={t}
          title={title}
          description={description}
          icon={icon}
          type={type}
          onAction={onAction}
          actionLabel={actionLabel}
          secondActionLabel={secondActionLabel}
          onSecondAction={onSecondAction}
        />
      )
    },
    {
      ...rest,
      duration: type === 'pending' ? Number.POSITIVE_INFINITY : duration
    }
  )
}

/**
 * @description Custom basic toast component
 * @param props - Hot toast props
 * @param title - Title (required)
 * @param description - Description (optional)
 * @param icon - Icon (optional)
 * @param type - Type default: info - (success, error, warning, info, pending)
 */

export const toaster = (props: Partial<ToastType> & IToastProps) => {
  const { title, description, icon, type, duration, ...rest } = props
  return hotToast(
    t => {
      return <CustomToast toastProps={t} title={title} description={description} icon={icon} type={type} />
    },
    {
      ...rest,
      duration: type === 'pending' ? Number.POSITIVE_INFINITY : duration
    }
  )
}

toaster.question = toastAction
