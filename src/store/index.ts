import {
  CreateStore, applyMiddleware, StoreEnhancer, MiddlewareAPI, Dispatch, AnyAction, StoreEnhancerStoreCreator, Store
} from '../redux'
import rootReducer, { CombinedState } from './reducers'

let logger = function (api: MiddlewareAPI) {
  return function (next: Dispatch<AnyAction>) {
    return function (action: AnyAction) {
      console.log('变更前的老状态1', api.getState())
      next(action)
      console.log('变更后的新状态1', api.getState())
    }
  }
}

//redux-trunk
let trunk = function (api: MiddlewareAPI) {
  return function (next: Dispatch<AnyAction>) {
    return function (action: any) {
      console.log(3333)
      //异步的情况直接执行异步函数
      if (typeof action === 'function') {
        return action(api.dispatch, api.getState)
      }
      return next(action)

    }
  }
}
let storeEnhancer: StoreEnhancer = applyMiddleware<{}, CombinedState>(logger, trunk)
let storeEnhancerStoreCreator: StoreEnhancerStoreCreator = storeEnhancer(CreateStore)
let store: Store<CombinedState> = storeEnhancerStoreCreator<CombinedState>(rootReducer)
export default store