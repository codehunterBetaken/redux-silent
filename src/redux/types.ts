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
