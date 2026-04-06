import { type FC } from 'react'
import {
  analyticsEngine,
  appSize,
  notify,
  indexeddb,
  popup,
  router,
  theme,
} from '@infinityloop.labs/frontend-modules'
import { ServiceInjector } from '@infinityloop.labs/utils'
import {
  indexedDBInstance,
  indexedDbTableNames,
  indexedDbVersion,
} from '@application/api/indexeddb'

const indexedDbInstances = [
  {
    instance: indexedDBInstance,
    tableNames: indexedDbTableNames,
    version: indexedDbVersion,
  },
]

export const ServiceInjectorProvider: FC = () => (
  <ServiceInjector
    services={[
      analyticsEngine.service,
      appSize.service,
      notify.service,
      indexeddb.service(indexedDbInstances),
      popup.service,
      router.service,
      theme.service,
    ]}
  />
)
