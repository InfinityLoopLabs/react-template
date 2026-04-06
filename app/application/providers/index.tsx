import type { FC, PropsWithChildren } from 'react'
import { ReduxStoreProvider } from './ReduxStoreProvider'
import { ServiceInjectorProvider } from './ServiceInjectorProvider'

export const Providers: FC<PropsWithChildren> = ({ children }) => (
  <ReduxStoreProvider>
    {children}
    <ServiceInjectorProvider />
  </ReduxStoreProvider>
)
