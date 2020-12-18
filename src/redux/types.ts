import { type } from "os"

export interface Action<T = any> {
  type: T
}
//extra 额外
export interface AnyAction extends Action {
  [extraProps: string]: any
}
export type Dispatch<A = AnyAction> = <T extends A>(action: T) => T

export type Listener = () => void

export type Unsubscribe = () => void

export interface Store<S = any, A extends Action = AnyAction> {
  dispatch: Dispatch<A>
  getState(): S
  subscribe(listener: Listener): Unsubscribe
}

export type Reducer<S = any, A extends Action = AnyAction> = (
  state: S | undefined,
  action: A
) => S

export interface MiddlewareAPI<D extends Dispatch = Dispatch, S = any> {
  dispatch: D
  getState(): S
}
export interface Middleware<
  DispatchExt = {},
  S = any,
  D extends Dispatch = Dispatch
> {
  (api: MiddlewareAPI<D, S>): (
    next: Dispatch<AnyAction>
  ) => (action: any) => any
}

export type StoreCreator = 
  <S, A extends Action<any>, Ext, StateExt>(
    reducer: Reducer<S, A>,
    preloadedState?: S
  ) => Store<S, A>

export type StoreEnhancer = (
  next: StoreEnhancerStoreCreator
) => StoreEnhancerStoreCreator

export type StoreEnhancerStoreCreator = <S = any, A extends Action = AnyAction>(
  reducer: Reducer<S, A>,
  preloadedState?: S
) => Store<S, A>

