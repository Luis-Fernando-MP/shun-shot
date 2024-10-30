'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { type JSX, type ReactNode } from 'react'

interface IProviders {
  children?: Readonly<ReactNode[]> | null | Readonly<ReactNode>
}

const queryClient = new QueryClient()

const Providers = ({ children }: IProviders): JSX.Element => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export default Providers
