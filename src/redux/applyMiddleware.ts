import compose from './compose'
import { Middleware, StoreEnhancer, StoreCreator, Reducer, Action, Store } from './'
import { Dispatch, MiddlewareAPI } from './types'
export function applyMiddleware<Ext, S = any>
      (...middleware: Middleware<any, S, any>[]): StoreEnhancer

export default function applyMiddleware<Ext, S = any>
(...middlewares: Middleware<any, S, any>[]): StoreEnhancer {
  return (createStore: StoreCreator)=> <S,A extends Action> (reducer: Reducer<S,A>): Store<S,A> => {
      let store = createStore(reducer)
      let dispatch: Dispatch
      const middlewareApi : MiddlewareAPI<Dispatch,S > = {
        getState: store.getState,
        dispatch: (action) => dispatch(action)
      }
      const chain = middlewares.map((middleware:any) => middleware(middlewareApi))
      dispatch = compose(...chain)(store.dispatch)

    return {...store, dispatch}
  }
}


