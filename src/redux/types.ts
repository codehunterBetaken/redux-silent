import { type } from "os"

export interface Action<T = any> {
  type: T
}
//extra 额外
export interface AnyAction extends Action {
  [extraProps: string]: any
}
export type Dispatch<A = AnyAction> = <T extends A>(action: T) => T

export type Linstener = () => void

export type Unsubscribe = () => void

export type Subscribe = (linstener: Linstener) => Unsubscribe
export interface Store<S = any, A extends Action = AnyAction> {
  dispatch: Dispatch<A>
  getState(): S
  subscribe(listener: Linstener): Unsubscribe
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

//此处S为state 的集合，例如 {counter1:counter1,counter2:counter2} 
//[K in keyof S] :  Reducer<S[K],A>  为S里所有的元素对应reducer
//[K in keyof S]? :  Reducer<S[K],A>  为部分  此处是对TS语法的理解
export type ReducerMapObject<S = any,A extends Action = Action> = {
    [K in keyof S] :  Reducer<S[K],A>
}

