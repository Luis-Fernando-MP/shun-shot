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

const toastAction = (props: Partial<ToastType> & IToastProps & { onAction: () => void; actionLabel?: string }) => {
  const { title, description, icon, type, duration, onAction, actionLabel, ...rest } = props
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
        />
      )
    },
    {
      ...rest,
      duration: type === 'pending' ? Number.POSITIVE_INFINITY : duration
    }
  )
}

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

toaster.action = toastAction
