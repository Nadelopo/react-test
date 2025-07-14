import type { StoreApi, UseBoundStore } from 'zustand'
import { useShallow } from 'zustand/react/shallow'

type StateFromStore<T> = T extends UseBoundStore<StoreApi<infer U>> ? U : never

export const useStoreSelect = <
  Store extends UseBoundStore<StoreApi<any>>,
  State = StateFromStore<Store>,
  Keys extends keyof State = keyof State
>(
  store: Store,
  keys: Keys[]
): Pick<State, Keys> => {
  return store(useShallow((state: State) => {
    const result = {} as Pick<State, Keys>
    keys.forEach((key) => {
      result[key] = state[key]
    })
    return result
  }))
}
