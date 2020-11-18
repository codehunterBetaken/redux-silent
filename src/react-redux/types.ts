import {Store,AnyAction} from '../redux'

export interface ContextValue {
  store: Store<any,AnyAction>
}