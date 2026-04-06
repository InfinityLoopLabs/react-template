import type { FC, PropsWithChildren } from 'react'
import { store } from '@application/store/store'
import { Provider } from 'react-redux'

export const ReduxStoreProvider: FC<PropsWithChildren> = ({ children }) => (
  <Provider store={store}>{children}</Provider>
)
