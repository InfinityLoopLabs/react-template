import { useMemo } from 'react'
import {
  analyticsEngineActions,
  appSizeActions,
  authActions,
  formsActions,
  indexeddbActions,
  notifyActions,
  popupActions,
  rolesActions,
  routerActions,
  themeActions,
} from '@infinityloop.labs/frontend-modules'
import { useDispatch } from 'react-redux'
import { type ActionCreatorsMapObject, bindActionCreators } from 'redux'

import type { AppDispatchType } from '@application/store/store'

/**
 * Хук для создания и группировки действий из различных сервисов.
 *
 * @description
 * Этот хук использует useActions для создания объектов действий для различных сервисов.
 * Затем он возвращает объект, содержащий все эти действия, сгруппированные по сервисам,
 * что упрощает их использование в компонентах.
 *
 * Хук может быть расширен для включения дополнительных действий из сервисов и виджетов.
 * Использует useMemo для оптимизации производительности, что гарантирует,
 * что объекты действий не будут пересозданы при каждом рендере.
 *
 * @remarks
 * Если в будущем потребуется заменить Redux на другую библиотеку для управления состоянием
 * (например, Jotai или Zustand), достаточно будет изменить реализацию только в этом хуке.
 * После замены реализации на новую библиотеку, все компоненты, использующие useAppActions,
 * продолжат работать корректно, так как они будут использовать адаптированный хук с новой реализацией.
 *
 */
export const useAppActions = () => {
  const dispatch = useDispatch<AppDispatchType>()

  const createAction = <T extends ActionCreatorsMapObject>(actions: T) =>
    bindActionCreators(actions, dispatch)

  // Dispatch из react-redux обладает стабильной ссылкой, поэтому безопасно мемоизировать один раз.
  return useMemo(
    () => ({
      // Services Actions: Начало

      // Services Actions: Конец

      // Widgets Actions: Начало

      // Widgets Actions: Конец

      // Imported Services Actions: Начало
      analyticsEngine: createAction(analyticsEngineActions),
      appSize: createAction(appSizeActions),
      auth: createAction(authActions),
      forms: createAction(formsActions),
      indexeddb: createAction(indexeddbActions),
      notify: createAction(notifyActions),
      popup: createAction(popupActions),
      roles: createAction(rolesActions),
      router: createAction(routerActions),
      theme: createAction(themeActions),
      // Imported Services Actions: Конец
    }),
    [],
  )
}
