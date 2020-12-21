import {
    CreateStore, applyMiddleware, StoreEnhancer, MiddlewareAPI, Dispatch, AnyAction, StoreEnhancerStoreCreator, Store
  } from '../redux'
import {CombinedState} from './reducers'
let logger = function (api: MiddlewareAPI) {
    return function (next: Dispatch<AnyAction>) {
      return function (action: AnyAction) {
        console.log('变更前的老状态1', api.getState())
        next(action)
        console.log('变更后的新状态1', api.getState())
      }
    }
  }
  
  let storeEnhancer : StoreEnhancer = applyMiddleware<{},CombinedState>(logger)
  let storeEnhancerStoreCreator: StoreEnhancerStoreCreator = storeEnhancer(CreateStore)
  let store: Store<CombinedState> = storeEnhancerStoreCreator<CombinedState>(ReducerMapObject)
  export default store